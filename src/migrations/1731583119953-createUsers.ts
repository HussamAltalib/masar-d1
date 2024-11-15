import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsers1731583119953 implements MigrationInterface {
    name = 'CreateUsers1731583119953'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "Username" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "Password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "Password"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "Username"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "name" character varying NOT NULL`);
    }

}
