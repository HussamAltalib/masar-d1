import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1731583177399 implements MigrationInterface {
    name = 'CreateUser1731583177399'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "age"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" ADD "age" integer NOT NULL`);
    }

}
