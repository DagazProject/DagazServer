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
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
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
