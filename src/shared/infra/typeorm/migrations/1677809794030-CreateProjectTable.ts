import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProjectTable1677809794030 implements MigrationInterface {
  name = 'CreateProjectTable1677809794030';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "projects" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "PK_6271df0a7aed1d6c0691ce6ac50" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "project_managers" ("projectsId" uuid NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "PK_4a93c2f9111affc0b84bba11f0a" PRIMARY KEY ("projectsId", "userId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_541fa92ef69972a065e35bbe26" ON "project_managers" ("projectsId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_454135ad73f062c579ad67c5ef" ON "project_managers" ("userId") `,
    );
    await queryRunner.query(
      `CREATE TABLE "project_members" ("projectsId" uuid NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "PK_5b34f73448a2e5d060836f4a45b" PRIMARY KEY ("projectsId", "userId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_35f0e32e67bad49e2a828b9df6" ON "project_members" ("projectsId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_08d1346ff91abba68e5a637cfd" ON "project_members" ("userId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "project_managers" ADD CONSTRAINT "FK_541fa92ef69972a065e35bbe26a" FOREIGN KEY ("projectsId") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_managers" ADD CONSTRAINT "FK_454135ad73f062c579ad67c5ef6" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_members" ADD CONSTRAINT "FK_35f0e32e67bad49e2a828b9df6d" FOREIGN KEY ("projectsId") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_members" ADD CONSTRAINT "FK_08d1346ff91abba68e5a637cfdb" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "project_members" DROP CONSTRAINT "FK_08d1346ff91abba68e5a637cfdb"`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_members" DROP CONSTRAINT "FK_35f0e32e67bad49e2a828b9df6d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_managers" DROP CONSTRAINT "FK_454135ad73f062c579ad67c5ef6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "project_managers" DROP CONSTRAINT "FK_541fa92ef69972a065e35bbe26a"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_08d1346ff91abba68e5a637cfd"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_35f0e32e67bad49e2a828b9df6"`,
    );
    await queryRunner.query(`DROP TABLE "project_members"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_454135ad73f062c579ad67c5ef"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_541fa92ef69972a065e35bbe26"`,
    );
    await queryRunner.query(`DROP TABLE "project_managers"`);
    await queryRunner.query(`DROP TABLE "projects"`);
  }
}
