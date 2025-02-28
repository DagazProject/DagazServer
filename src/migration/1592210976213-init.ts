import {MigrationInterface, QueryRunner} from "typeorm";

// typeorm migration:create -n init
// npm install -g ts-node
// ts-node ./node_modules/typeorm/cli.js migration:run
// ts-node ./node_modules/typeorm/cli.js migration:revert
export class init1592210976213 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`insert into realms(id, name) values(1, 'Dagaz')`);

        await queryRunner.query(`insert into contact_types(id, name) values(1, 'EMail')`);

        await queryRunner.query(`insert into token_types(id, name) values(1, 'Access')`);
        await queryRunner.query(`insert into token_types(id, name) values(2, 'Refresh')`);

        await queryRunner.query(`insert into game_results(id, name) values(1, 'Won')`);
        await queryRunner.query(`insert into game_results(id, name) values(2, 'Lose')`);
        await queryRunner.query(`insert into game_results(id, name) values(3, 'Draw')`);

        await queryRunner.query(`insert into game_statuses(id, name) values(1, 'Inited')`);
        await queryRunner.query(`insert into game_statuses(id, name) values(2, 'Started')`);
        await queryRunner.query(`insert into game_statuses(id, name) values(3, 'Finished')`);

        await queryRunner.query(`insert into users(is_admin, name, login, pass, created, last_actived) values(1, 'root', 'root', 'root', now(), now())`);

        await queryRunner.query(`insert into account_type(id, name) values(1, 'Telegram')`);

        await queryRunner.query(`create view export_session as
SELECT a.turn_num, b.player_num, a.move_str, a.session_id
FROM   game_moves a
INNER  JOIN user_games b ON b.id = a.uid`);

        await queryRunner.query(`create view tourn_sess_vw as
select a.id as id, a.status_id as status, a.game_id as game_id, d.id as variant_id,
       coalesce(d.name, b.name) || ' (' || a.id || ')' as game, coalesce(d.filename, b.filename) as filename, 
       a.created as created, c.name as creator, b.players_total as players_total, a.last_setup as last_setup,
       string_agg(case
          when e.is_ai = 1 then 'AI'
          else f.name
       end || ' (' || e.player_num || ')', ' / ' order by e.player_num) as player_name,
       coalesce(a.last_turn, 0) as last_turn, coalesce(a.selector_value, 0) as selector_value, x.id as ai, a.is_protected, i.tournament_id
from   game_sessions a
inner  join games b on (b.id = a.game_id)
inner  join users c on (c.id = a.user_id)
left   join game_variants d on (d.id = a.variant_id)
inner  join user_games e on (e.session_id = a.id)
inner  join users f on (f.id = e.user_id)
left   join user_games x on (x.session_id = a.id and x.is_ai = 1)
inner  join tournament_games i on (i.session_id = a.id)
group  by a.id, a.status_id, a.game_id, d.id, d.name, b.name, d.filename, b.filename, a.created, c.name, b.players_total, a.last_setup, a.last_turn, a.selector_value, x.id, a.is_protected, i.tournament_id`);

        await queryRunner.query(`create view curr_sess_var_vw as
select a.id, a.last_setup, a.status_id as status, a.game_id, a.variant_id, a.last_turn, b.user_id, a.changed
from   game_sessions a
inner  join user_games b on (b.session_id = a.id and b.player_num = a.next_player)
where  a.status_id = 2 and a.closed is null and not a.last_setup is null`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`drop view curr_sess_var_vw`);
        await queryRunner.query(`drop view tourn_sess_vw`);
        await queryRunner.query(`drop view export_session`);
        await queryRunner.query(`delete from account_type`);
        await queryRunner.query(`delete from users`);
        await queryRunner.query(`delete from game_statuses`);
        await queryRunner.query(`delete from game_results`);
        await queryRunner.query(`delete from token_types`);
        await queryRunner.query(`delete from contact_types`);
        await queryRunner.query(`delete from realms`);
    }
}
