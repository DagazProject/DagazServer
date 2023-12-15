import { Injectable, Inject, InternalServerErrorException, HttpStatus } from '@nestjs/common';
import { game_moves } from '../entity/game_moves';
import { Repository } from 'typeorm';
import { Move } from '../interfaces/move.interface';
import { user_games } from '../entity/user_games';
import { game_sessions } from '../entity/game_sessions';
import { game_alerts } from '../entity/game_alerts';
import { notify } from '../entity/notify';

@Injectable()
export class MoveService {

    constructor(
        @Inject('MOVE_REPOSITORY')
        private readonly service: Repository<game_moves>
    ) {}  
    
    async getMovesBySession(sid: number, turn: number): Promise<Move[]> {
        try {
            const x = await this.service.query(
                `select a.id, a.session_id, a.user_id, a.turn_num,
                        a.move_str, a.setup_str, a.note, a.time_delta,
                        b.main_time, b.additional_time, b.is_sandglass,
                      ( select sum(c.time_delta)
                        from   game_moves c
                        where  c.session_id = a.session_id
                        and    c.user_id = a.user_id
                        and    c.turn_num <= a.turn_num
                      ) as time_limit
                 from   game_moves a
                 inner  join game_sessions b on (b.id = a.session_id)
                 where  a.session_id = $1 and a.turn_num = $2
                 order  by a.id`, [sid, turn]);
            let l: Move[] = x.map(x => {
                let it = new Move();
                it.id = x.id;
                it.session_id = x.session_id;
                it.user_id = x.user_id;
                it.turn_num = x.turn_num;
                it.move_str = x.move_str;
                it.setup_str = x.setup_str;
                it.note = x.note;
                it.time_delta = x.time_delta;
                if (x.main_time && !x.is_sandglass) {
                    it.time_limit = x.main_time * 1000;
                    it.time_limit -= x.time_limit;
                    if (it.time_limit < 0) {
                        it.time_limit = x.time_delta - (x.additional_time * 1000);
                    }
                }
                it.additional_time = x.additional_time;
                return it;
            });
            return l;
        } catch (error) {
          console.error(error);
          throw new InternalServerErrorException({
              status: HttpStatus.BAD_REQUEST,
              error: error
          });
        }
    }

    async touchSession(uid: number, sess: number): Promise<boolean> {
        await this.service.createQueryBuilder("game_sessions")
        .update(game_sessions)
        .set({ 
            last_user: uid,
            last_time: Date.now()
        })
        .where("id = :id and last_time is null", {id: sess})
        .execute();
        return true;
    }

    async acceptMove(id: number): Promise<boolean> {
        await this.service.createQueryBuilder("game_moves")
        .update(game_moves)
        .set({ 
            accepted: new Date()
        })
        .where("id = :id", {id: id})
        .execute();
        return true;
    }

    async getSession(uid: number): Promise<number> {
        const x = await this.service.query(
            `select session_id
             from   user_games
             where  id = $1`, [uid]);
        if (!x || x.length == 0) {
             return null;
        }
        return x[0].session_id;
    }

    async getUser(uid: number): Promise<number> {
        const x = await this.service.query(
            `select user_id
             from   user_games
             where  id = $1`, [uid]);
        if (!x || x.length == 0) {
             return null;
        }
        return x[0].user_id;
    }

    async getSessionAlert(sid: number, uid: number): Promise<Move[]> {
        const x = await this.service.query(
            `select a.uid as uid, a.result_id as result_id, a.turn_number as turn_number
             from   game_alerts a
             inner  join user_games b on (b.id = a.uid)
             where  a.session_id = $1`, [sid]);
        if (!x || x.length == 0) {
             return null;
        }
        return x.filter(it => {
            return it.uid != uid;
        }).map(it => {
            let r = new Move();
            r.session_id = it.session_id;
            r.turn_num = it.turn_number;
            r.result_id = it.result_id;
            return r;
        });
    }

    async getKoSetup(id: number): Promise<string> {
        let x = await this.service.query(
            `select b.ko_shift as ko_shift
             from   game_sessions a
             inner  join game_variants b on (b.id = a.variant_id)
             where  a.id = $1`, [id]);
        if (!x || x.length == 0) {
             return null;
        }
        const ko_shift = x[0].ko_shift;
        if (!ko_shift) {
             return null;
        }
        x = await this.service.query(
            `select max(a.turn_num) as last_num
             from   game_moves a
             where  a.session_id = $1`, [id]);
        if (!x || x.length == 0) {
             return null;
        }
        const last_num = x[0].last_num;
        if (!last_num || (last_num < ko_shift)) {
            return null;
        }
        if (last_num == ko_shift) {
            x = await this.service.query(
                `select a.last_setup as setup_str
                 from   game_moves a
                 where  a.session_id = $1 and a.turn_num = 1`, [id]);

        } else {
            x = await this.service.query(
                `select a.setup_str as setup_str
                 from   game_moves a
                 where  a.session_id = $1 and a.turn_num = $2`, [id, last_num - ko_shift]);
        }
        if (!x || x.length == 0) {
             return null;
        }
        return x[0].setup_str;
    }

    async getConfirmedMove(uid: number): Promise<Move[]> {
        try {
            const sid: number = await this.getSession(uid);
            const r = await this.getSessionAlert(sid, uid);
            if (r !== null) {
                return r;
            }
            const f = await this.checkSession(sid);
            if (!f) {
                return null;
            }
            const x = await this.service.query(
            `select a.id, a.session_id, a.user_id, a.turn_num,
                    a.move_str, a.setup_str, a.note, a.time_delta, a.uid
             from   game_moves a
             inner  join game_sessions b on (b.id = a.session_id)
             where  a.session_id = $1 and a.uid <> $2
             and    not a.setup_str is null 
             and    a.accepted is null
             order  by a.id`, [sid, uid]);
            if (!x) {
                return null;
            }
            let l = new Array();
            if (x.length > 0 && x[0].uid != uid) {
                let it = new Move();
                it.id = x[0].id;
                it.session_id = x[0].session_id;
                it.user_id = x[0].user_id;
                it.uid = x[0].uid;
                it.turn_num = x[0].turn_num;
                it.move_str = x[0].move_str;
                it.setup_str = x[0].setup_str;
                it.note = x[0].note;
                it.time_delta = x[0].time_delta;
                it.time_limit = await this.getTimeLimit(uid);
                it.additional_time = await this.getAdditionalTime(it.session_id);
                it.ko_setup = await this.getKoSetup(it.session_id);
                l.push(it);
                await this.acceptMove(it.id);
                await this.touchSession(it.uid, sid);
            }
            return l;
        } catch (error) {
          console.error(error);
          throw new InternalServerErrorException({
              status: HttpStatus.BAD_REQUEST,
              error: error
          });
        }
    }

    async getTimeLimit(uid: number): Promise<number> {
        let x = await this.service.query(
            `select a.time_limit, b.last_time
             from   user_games a
             inner  join game_sessions b on (b.id = a.session_id)
             where  a.id = $1`, [uid]);
        if (!x || x.length == 0) {
             return null;
        }
        let time_limit  = x[0].time_limit;
        if (time_limit !== null) {
            const last_time = x[0].last_time;
            if (last_time && (Date.now() > last_time)) {
                time_limit -= Date.now() - last_time;
            }
        }
        return time_limit;
    }

    async getAdditionalTime(sid: number): Promise<number> {
        let x = await this.service.query(
            `select additional_time * 1000 as additional_time
             from   game_sessions
             where  id = $1`, [sid]);
        if (!x || x.length == 0) {
             return null;
        }
        return x[0].additional_time;
    }

    async getUnconfirmedMove(sess: number): Promise<Move[]> {
        try {
            const f = await this.checkSession(sess);
            if (!f) {
                return null;
            }
            const x = await this.service.query(
                `select a.id, a.session_id, a.user_id, a.turn_num,
                        a.move_str, a.setup_str, a.note, a.time_delta, a.uid
                 from   game_moves a
                 inner  join game_sessions b on (b.id = a.session_id and b.closed is null)
                 where  a.session_id = $1
                 and    a.setup_str is null
                 order  by a.id desc`, [sess]);
            if (!x) {
                return null;
            }
            let l = new Array();
            if (x.length > 0) {
                let it = new Move();
                it.id = x[0].id;
                it.uid = x[0].uid;
                it.session_id = x[0].session_id;
                it.user_id = x[0].user_id;
                it.turn_num = x[0].turn_num;
                it.move_str = x[0].move_str;
                it.setup_str = x[0].setup_str;
                it.note = x[0].note;
                it.time_delta = x[0].time_delta;
                it.time_limit = await this.getTimeLimit(it.uid);
                it.additional_time = await this.getAdditionalTime(it.session_id);
                l.push(it);
            }
            return l;
        } catch (error) {
          console.error(error);
          throw new InternalServerErrorException({
              status: HttpStatus.BAD_REQUEST,
              error: error
          });
        }
    }

    async getLastTime(id: number): Promise<number> {
        const x = await this.service.query(
            `select last_time from game_sessions where id = $1`, [id]);
        if (!x || x.length != 1) {
            return null;
        }
        return x[0].last_time;
    }

    async checkSession(id: number): Promise<boolean> {
        const x = await this.service.query(
            `select id from game_sessions where id = $1`, [id]);
        if (!x || x.length != 1) {
            return false;
        }
        return true;
    }

    async getLastUser(id: number): Promise<number> {
        const x = await this.service.query(
            `select last_user as uid
             from   game_sessions
             where  id = $1`, [id]);
        if (!x || x.length != 1) {
            return null;
        }
        return x[0].uid;
    }

    async getTurnNumber(id: number): Promise<number> {
        const x = await this.service.query(
            `select coalesce(max(turn_num), 0) + 1 as turn_num
             from   game_moves 
             where  session_id = $1`, [id]);
        if (!x || x.length != 1) {
            return null;
        }
        return x[0].turn_num;
    }

    async acceptAlert(x: Move): Promise<Move> {
        try {
            await this.service.createQueryBuilder("game_alerts")
            .delete()
            .from(game_alerts)
            .where("session_id = :sid", {sid: x.session_id})
            .execute();
            return x;
        } catch (error) {
          console.error(error);
          throw new InternalServerErrorException({
              status: HttpStatus.BAD_REQUEST,
              error: error
          });
        }
    }

    async sendAlert(x: Move): Promise<Move> {
        try {
            const r = await this.getSessionAlert(x.session_id, x.uid);
            if (r !== null) {
                return x;
            }
            const turn_num = await this.getTurnNumber(x.session_id);
            const y = await this.service.createQueryBuilder("game_alerts")
            .insert()
            .into(game_alerts)
            .values({
                session_id: x.session_id,
                uid: x.uid,
                result_id: x.result_id,
                turn_number: turn_num
            })
            .returning('*')
            .execute();
            x.id = y.generatedMaps[0].id;
            return x;
        } catch (error) {
          console.error(error);
          throw new InternalServerErrorException({
              status: HttpStatus.BAD_REQUEST,
              error: error
          });
        }
    }

    async undoMove(uid: number): Promise<boolean> {
        try {
            let t = await this.service.query(
                `select a.session_id, b.closed, a.player_num,
                        b.is_sandglass, b.timecontrol_id
                 from   user_games a
                 inner  join game_sessions b on (b.id = a.session_id)
                 where  a.id = $1`, [uid]);
            if (!t || t.length == 0) {
                 return false;
            }
            const sid = t[0].session_id;
            const closed = t[0].closed;
            const next_player = t[0].player_num;
            const timecontrol_id = t[0].timecontrol_id;
            const is_sandglass = t[0].is_sandglass;
            if (closed) {
                return false;
            }
            t = await this.service.query(
                `select count(*) as cnt
                 from   user_games a
                 where  a.session_id = $1 and a.is_ai = 1`, [sid]);
            if (!t || t.length == 0) {
                 return false;
            }
            const is_ai = t[0].cnt > 0;
            t = await this.service.query(
                `select a.turn_num, a.accepted, a.time_delta
                 from   game_moves a
                 where  a.uid = $1
                 order  by a.turn_num desc
                 limit  1`, [uid]);
            if (!t || t.length == 0) {
                 return false;
            }
            const last_turn = t[0].turn_num;
            const accepted = t[0].accepted;
            const time_delta = t[0].time_delta;
            if (!is_ai && accepted) {
                return false;
            }
            await this.service.createQueryBuilder("game_moves")
            .delete()
            .from(game_moves)
            .where(`session_id = :id and turn_num >= :turn`, {id: sid, turn: last_turn})
            .execute();
            t = await this.service.query(
                `select a.start_setup
                 from   game_sessions a
                 where  a.id = $1`, [sid]);
            if (!t || t.length == 0) {
                 return false;
            }
            let setup = t[0].start_setup;
            let turn_num = null;
            if (timecontrol_id) {
                t = await this.service.query(
                    `select a.time_limit
                     from   user_games a
                     where  a.session_id = $1 and id = $2`, [sid, uid]);
                if (!t || t.length == 0) {
                    let time_limit = t[0].time_limit - time_delta;
                    if (time_limit < 0) time_limit = 0;
                    await this.service.createQueryBuilder("game_sessions")
                    .update(user_games)
                    .set({ 
                        time_limit: time_limit
                    })
                    .where("session_id = :sid and id = :uid", {sid: sid, uid: uid})
                    .execute();
                }
                if (is_sandglass) {
                    t = await this.service.query(
                        `select a.time_limit
                         from   user_games a
                         where  a.session_id = $1 and id <> $2`, [sid, uid]);
                    if (!t || t.length == 0) {
                        const time_limit = t[0].time_limit + time_delta;
                        await this.service.createQueryBuilder("game_sessions")
                        .update(user_games)
                        .set({ 
                            time_limit: time_limit
                        })
                        .where("session_id = :sid and id <> :uid", {sid: sid, uid: uid})
                        .execute();
                    }
                }
            }
            t = await this.service.query(
                `select a.setup_str, a.turn_num
                 from   game_moves a
                 where  a.session_id = $1
                 order  by a.turn_num desc
                 limit  1`, [sid]);
            if (!t) {
                 return false;
            }
            if (t.length > 0) {
                setup = t[0].setup_str;
                turn_num = t[0].turn_num;
            }
            await this.service.createQueryBuilder("game_sessions")
            .update(game_sessions)
            .set({ 
                last_setup: setup,
                changed: new Date(),
                last_time: null,
                last_user: uid,
                next_player: next_player,
                last_turn: turn_num
            })
            .where("id = :sid", {sid: sid})
            .execute();
            return true;
        } catch (error) {
          console.error(error);
          throw new InternalServerErrorException({
              status: HttpStatus.BAD_REQUEST,
              error: error
          });
        }
    }

    async getLastTurn(id: number): Promise<number> {
        let x = await this.service.query(
            `select coalesce(max(a.turn_num), 0) as last_turn
             from   game_moves a
             where  a.session_id = $1`, [id]);
        if (!x || x.length == 0) {
             return null;
        }
        return x[0].last_turn;
    }

    async addMove(x: Move): Promise<Move> {
        try {
            const t = await this.service.query(
                `select a.session_id, b.is_sandglass, b.last_setup, b.last_user, b.next_player as last_player, b.last_turn
                 from   user_games a
                 inner  join game_sessions b on (b.id = a.session_id)
                 where  a.id = $1`, [x.uid]);
            if (!t || t.length == 0) {
                 return null;
            }
            x.session_id = t[0].session_id;
            if (x.turn_num !== null) {
                const last_turn = await this.getLastTurn(x.session_id);
                if (x.turn_num - 1 != last_turn) {
                    x.session_id = null;
                    return x;
                }
            }
            const last_setup = t[0].last_setup;
            const last_user = t[0].last_user;
            const is_sandglass = t[0].is_sandglass;
            const last_player = t[0].last_player;
            const last_turn = t[0].last_turn;
            x.user_id = await this.getUser(x.uid);
            const f = await this.checkSession(x.session_id);
            if (!f) {
                return null;
            }
            const last_time = await this.getLastTime(x.session_id);
            let time_delta = last_time ? Date.now() - last_time : null;
            let time_limit = await this.getTimeLimit(x.uid);
            const turn_num = await this.getTurnNumber(x.session_id);
            const y = await this.service.createQueryBuilder("game_moves")
            .insert()
            .into(game_moves)
            .values({
                session_id: x.session_id,
                user_id: x.user_id,
                uid: x.uid,
                move_str: x.move_str,
                setup_str: x.setup_str,
                last_setup: last_setup,
                last_user: last_user,
                last_player: last_player,
                last_turn: last_turn,
                turn_num: turn_num,
                note: x.note,
                time_delta: time_delta
            })
            .returning('*')
            .execute();
            const u = await this.service.query(
                `select a.session_id, c.login as user, 
                        c.name || '(' || a.player_num || ')' as opponent,
                        coalesce(f.filename, e.filename) as game,
                        coalesce(f.filename, e.filename) || coalesce(g.suffix, '') || '.html' as url
                 from   user_games a
                 inner  join user_games b on (b.session_id = a.session_id and b.id <> a.id)
                 inner  join users c on (c.id = a.user_id)
                 inner  join game_sessions d on (d.id = a.session_id)
                 inner  join games e on (e.id = d.game_id)
                 left   join game_variants f on (f.game_id = d.game_id and f.id = d.variant_id)
                 left   join game_styles g on (g.game_id = e.id and g.player_num = b.player_num)
                 where  a.id = $1`, [x.uid]);
            if (u && u.length > 0) {
                const dt = new Date();
                await this.service.createQueryBuilder("notify")
                .delete()
                .from(notify)
                .where(`session_id = :sid`, {sid: u[0].session_id})
                .execute();
                await this.service.createQueryBuilder("notify")
                .insert()
                .into(notify)
                .values({
                    session_id: u[0].session_id,
                    user: u[0].user,
                    opponent: u[0].opponent,
                    game: u[0].game,
                    url: u[0].url,
                    scheduled: new Date(dt.getTime() + 18000 * 1000)
                })
                .execute();
            }
            x.id = y.generatedMaps[0].id;
            if (!time_limit) {
                time_delta = null;
            }
            if (time_delta && is_sandglass) {
                const z = await this.service.query(
                    `select id, time_limit
                     from   user_games
                     where  session_id = $1 and id <> $2`, [x.session_id, x.uid]);
                if (z && (z.length > 0) && z[0].time_limit) {
                    await this.service.createQueryBuilder("user_games")
                    .update(user_games)
                    .set({ 
                        time_limit: +z[0].time_limit + +time_delta
                     })
                    .where("id = :id", {id: z[0].id})
                    .execute();
                }
            }
            if (time_limit && time_delta) {
                if (time_limit < 0) {
                    time_limit = 0;
                }
                time_limit -= time_delta;
                if (time_limit < 0) time_limit = 0;
                await this.service.createQueryBuilder("user_games")
                .update(user_games)
                .set({ 
                    time_limit: time_limit
                 })
                .where("id = :uid", {uid: x.uid})
                .execute();
            }
            if (x.setup_str) {
                await this.service.createQueryBuilder("game_sessions")
                .update(game_sessions)
                .set({ 
                    changed: new Date(),
                    last_time: null,
                    last_setup: x.setup_str,
                    last_turn: turn_num,
                    last_user: x.uid,
                    next_player: x.next_player
                 })
                .where("id = :sess", {sess: x.session_id})
                .execute();
            } else {
                await this.service.createQueryBuilder("game_sessions")
                .update(game_sessions)
                .set({ 
                    changed: new Date(),
                    last_time: null,
                    last_turn: turn_num,
                    last_user: x.uid,
                    next_player: null
                 })
                .where("id = :sess", {sess: x.session_id})
                .execute();
            }
            return x;
        } catch (error) {
          console.error(error);
          throw new InternalServerErrorException({
              status: HttpStatus.BAD_REQUEST,
              error: error
          });
        }
    }

    async confirmMove(x: Move): Promise<Move> {
        try {
            const f = await this.checkSession(x.session_id);
            if (!f) {
                return null;
            }
            await this.service.createQueryBuilder("game_moves")
            .update(game_moves)
            .set({ 
                setup_str: x.setup_str
             })
            .where("id = :id", {id: x.id})
            .execute();
            await this.service.createQueryBuilder("game_sessions")
            .update(game_sessions)
            .set({ 
                next_player: x.next_player,
                last_setup: x.setup_str
             })
            .where("id = :id", {id: x.session_id})
            .execute();
            return x;
        } catch (error) {
            console.error(error);
            throw new InternalServerErrorException({
                status: HttpStatus.BAD_REQUEST,
                error: error
            });
        }
    }
}
