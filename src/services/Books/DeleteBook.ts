import { IBookRepository } from "../../repositories/BookRepository";

interface DeleteBookInput {
  id: string;
}

interface DeleteBookOutput {
  id: string;
}

export class DeleteBook {
  constructor(private readonly book_repository: IBookRepository) {}

  async execute(input: DeleteBookInput): Promise<DeleteBookOutput> {
    await this.book_repository.delete(input.id);
    return { id: input.id };
  }
}
