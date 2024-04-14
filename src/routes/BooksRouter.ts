import { Router } from "express";
import { BooksController } from "../controllers/Books/BooksController";
import { IBookRepository } from "../repositories/BookRepository";
import { CreateBook } from "../services/Books/CreateBook";
import { FindAllBooks } from "../services/Books/FindAllBooks";
import { FindBooksById } from "../services/Books/FindBooksById";
import { UpdateBook } from "../services/Books/UpdateBook";
import { DeleteBook } from "../services/Books/DeleteBook";

export function createBooksRouter(booksRepository: IBookRepository) {
  const router = Router();
  const controller = new BooksController(
    new CreateBook(booksRepository),
    new FindAllBooks(booksRepository),
    new FindBooksById(booksRepository),
    new UpdateBook(booksRepository),
    new DeleteBook(booksRepository)
  );

  router
    .get("/book", (req, res, _next) => controller.findAll(req, res))
    .get("/book/:id", (req, res, _next) => controller.findOne(req, res))
    .post("/book", (req, res, _next) => controller.create(req, res))
    .put("/book", (req, res, _next) => controller.updateById(req, res))
    .delete("/book", (req, res, _next) => controller.deleteById(req, res));

  return router;
}
