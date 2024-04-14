import { pool } from "../config/db/db";
import { Book } from "../entity/Book";
import { IBookRepository } from "./BookRepository";

export class BookRepositoryDatabase implements IBookRepository {
  async findById(id: string): Promise<Book | undefined> {
    const book_data = await pool.query("SELECT * FROM books WHERE id = $1", [
      id,
    ]);
    if (!book_data.rows.length) return undefined;
    return new Book(
      book_data.rows[0].id,
      book_data.rows[0].title,
      book_data.rows[0].author,
      book_data.rows[0].isbn,
      book_data.rows[0].published_at,
      book_data.rows[0].publisher_id
    );
  }

  async findAll(): Promise<Book[]> {
    const query = `SELECT * FROM "public"."books"`;
    const books_data = await pool.query(query);
    return books_data.rows.map((book_data) => {
      return new Book(
        book_data.id,
        book_data.title,
        book_data.author,
        book_data.isbn,
        book_data.published_at,
        book_data.publisher_id
      );
    });
  }

  async save(book: Book): Promise<void> {
    let query = `INSERT INTO "public"."books" ("id", "title", "author", "isbn", "published_at", "publisher_id") VALUES ($1, $2, $3, $4, $5, $6)`;
    await pool.query(query, [
      book.id,
      book.title,
      book.author,
      book.isbn,
      book.published_at.toString(),
      book.publisher_id,
    ]);
  }

  async update(book: Book): Promise<void> {
    let query = `UPDATE "public"."books" SET title = $1, author = $2, isbn = $3, published_at = $4, publisher_id = $5 WHERE id = $6`;
    await pool.query(query, [
      book.title,
      book.author,
      book.isbn,
      book.published_at.toString(),
      book.publisher_id,
      book.id,
    ]);
  }

  async delete(id: string): Promise<void> {
    let query = `DELETE FROM "public"."books" WHERE id = $1`;
    await pool.query(query, [id]);
  }
}
