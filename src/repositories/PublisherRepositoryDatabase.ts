import { pool } from "../config/db/db";
import { Book } from "../entity/Book";
import { Publisher } from "../entity/Publisher";
import { IPublisherRepository } from "./PublisherRepository";

export class PublisherRepositoryDatabase implements IPublisherRepository {
  async findById(id: string): Promise<Publisher | undefined> {
    const publisher_data = await pool.query(
      "SELECT * FROM publishers WHERE id = $1",
      [id]
    );
    if (!publisher_data.rows.length) return undefined;
    return new Publisher(
      publisher_data.rows[0].id,
      publisher_data.rows[0].name
    );
  }

  async findAll(): Promise<Publisher[]> {
    const query = `SELECT * FROM "public"."publishers"`;
    const publishers_data = await pool.query(query);
    return publishers_data.rows.map((publisher_data) => {
      return new Publisher(publisher_data.id, publisher_data.name);
    });
  }

  async save(publisher: Publisher): Promise<void> {
    let query = `INSERT INTO "public"."publishers" ("id", "name") VALUES ($1, $2)`;
    await pool.query(query, [publisher.id, publisher.name]);
  }

  async update(publisher: Publisher): Promise<void> {
    let query = `UPDATE "public"."publishers" SET name = $1 WHERE id = $2`;
    await pool.query(query, [publisher.name, publisher.id]);
  }

  async delete(id: string): Promise<void> {
    let query = `DELETE FROM "public"."publishers" WHERE id = $1`;
    await pool.query(query, [id]);
  }
}
