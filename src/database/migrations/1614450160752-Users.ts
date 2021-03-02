import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Users1614450160752 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns:[
          {
            name: "id",
            type: "uuid",
            isPrimary: true            
          },
          {
            name:"name",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()"
          }

        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
