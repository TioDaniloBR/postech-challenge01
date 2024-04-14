import { IBookRepository } from "../../repositories/BookRepository";
interface IFindBooksByIdOutput {
  id: string;
  title: string;
  author: string;
  isbn: string;
  published_at: number;
  publisher_id: string;
}

interface IFindBookByIdInput {
  id: string;
}

export class FindBooksById {
  constructor(private readonly book_repository: IBookRepository) {}

  async execute(
    input: IFindBookByIdInput
  ): Promise<IFindBooksByIdOutput | undefined> {
    const books = await this.book_repository.findById(input.id);
    if (!books) return undefined;
    return books;
  }
}
