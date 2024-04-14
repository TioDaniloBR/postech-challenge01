import { Book } from "../../entity/Book";
import { IBookRepository } from "../../repositories/BookRepository";

interface UpdateBookInput {
  id: string;
  title: string;
  author: string;
  isbn: string;
  published_at: number;
  publisher_id: string;
}

interface UpdateBookOutput {
  id: string;
}

export class UpdateBook {
  constructor(private readonly book_repository: IBookRepository) {}

  async execute(input: UpdateBookInput): Promise<UpdateBookOutput> {
    const book = Book.create(
      input.title,
      input.author,
      input.isbn,
      input.published_at,
      input.publisher_id,
      input.id
    );
    await this.book_repository.update(book);
    return { id: book.id };
  }
}
