import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createPlayers1617645038339 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: "players",
			columns: [
				{
					name: "id",
					type: "integer",
					unsigned: true,
					isPrimary: true,
					isGenerated: true,
					generationStrategy: "increment"
				},
				{
					name: "nick",
					type: "varchar",
					isUnique: true,
				},
				{
					name: "email",
					type: "varchar",
					isUnique: true,
				},
				{
					name: "password",
					type: "varchar",
				},
			]
		}))
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('players');
	}

}
