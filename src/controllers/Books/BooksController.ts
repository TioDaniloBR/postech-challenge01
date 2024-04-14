import { Request, Response } from "express";
import { CreateBook } from "../../services/Books/CreateBook";
import { FindAllBooks } from "../../services/Books/FindAllBooks";
import { FindBooksById } from "../../services/Books/FindBooksById";
import { UpdateBook } from "../../services/Books/UpdateBook";
import { DeleteBook } from "../../services/Books/DeleteBook";

export class BooksController {
  constructor(
    private readonly createBook: CreateBook,
    private readonly findAllBooks: FindAllBooks,
    private readonly findById: FindBooksById,
    private readonly updateBookById: UpdateBook,
    private readonly deleteBookById: DeleteBook
  ) {}

  async create(request: Request, response: Response): Promise<void> {
    const output = await this.createBook.execute({
      title: request.body.title,
      author: request.body.author,
      isbn: request.body.isbn,
      published_at: request.body.published_at,
      publisher_id: request.body.publisher_id,
    });
    response.status(200).send(output);
  }

  async findAll(_request: Request, response: Response): Promise<void> {
    const output = await this.findAllBooks.execute();
    response.status(200).send(output);
  }

  async findOne(request: Request, response: Response): Promise<void> {
    const output = await this.findById.execute({ id: request.params.id });
    response.status(200).send(output);
  }

  async updateById(request: Request, response: Response): Promise<void> {
    const output = await this.updateBookById.execute({
      id: request.body.id,
      title: request.body.title,
      author: request.body.author,
      isbn: request.body.isbn,
      published_at: request.body.published_at,
      publisher_id: request.body.publisher_id,
    });
    response.status(200).send(output);
  }

  async deleteById(request: Request, response: Response): Promise<void> {
    const output = await this.deleteBookById.execute({ id: request.body.id });
    response.status(200).send(output);
  }
}
