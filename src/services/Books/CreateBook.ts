import { Book } from "../../entity/Book";
import { IBookRepository } from "../../repositories/BookRepository";

interface ICreateBookInput {
  title: string;
  author: string;
  isbn: string;
  published_at: number;
  publisher_id: string;
}

interface ICreateBookOutput {
  id: string;
}

export class CreateBook {
  constructor(private readonly book_repository: IBookRepository) {}

  async execute(input: ICreateBookInput): Promise<ICreateBookOutput> {
    const book = Book.create(
      input.title,
      input.author,
      input.isbn,
      input.published_at,
      input.publisher_id
    );
    await this.book_repository.save(book);
    return { id: book.id };
  }
}
