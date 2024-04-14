import { IBookRepository } from "../../repositories/BookRepository";
interface IFindAllBooksOutput {
  id: string;
  title: string;
  author: string;
  isbn: string;
  published_at: number;
  publisher_id: string;
}

export class FindAllBooks {
  constructor(private readonly book_repository: IBookRepository) {}

  async execute(): Promise<IFindAllBooksOutput[]> {
    const books = await this.book_repository.findAll();
    if (!books) return [];
    return books;
  }
}
