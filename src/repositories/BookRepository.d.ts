import { Book } from "../entity/Book";

interface IBookRepository {
  findById(id: string): Promise<Book | undefined>;
  findAll(): Promise<Book[]>;
  save(book: Book): Promise<void>;
  update(book: Book): Promise<void>;
  delete(id: string): Promise<void>;
}
