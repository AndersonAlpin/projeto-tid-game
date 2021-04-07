import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createRanking1617646577024 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: "ranking",
			columns:[
				{
					name: "id",
					type: "integer",
					unsigned: true,
					isPrimary: true,
					isGenerated: true,
					generationStrategy: "increment"
				},
				{
					name: "daily_score",
					type: "integer",
				},
				{
					name: "total_score",
					type: "integer",
				},
				{
					name: "player_id",
					type: "integer",
				},
			],
			foreignKeys: [
				{
					name: "RankingPlayer",
					columnNames: ["player_id"],
					referencedTableName: "players",
					referencedColumnNames: ["id"],
					onUpdate: "CASCADE",
					onDelete: "CASCADE"
				}
			]
		}))
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('ranking');
	}

}
