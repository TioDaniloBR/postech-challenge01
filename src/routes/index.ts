import express, { Router } from "express";
import { router as teste } from "../controllers/healthcheck";

import { PublisherRepositoryDatabase } from "../repositories/PublisherRepositoryDatabase";
// import { createPublishersRouter } from "../controllers/Publishers";
import { createPublishersRouter } from "./PublishersRouter";
import { createBooksRouter } from "./BooksRouter";
import { BookRepositoryDatabase } from "../repositories/BookRepositoryDatabase";

export const router: Router = express.Router();

const publisherRepository = new PublisherRepositoryDatabase();
const bookRepository = new BookRepositoryDatabase();
router.use("/healthcheck", teste);
router.use(createBooksRouter(bookRepository));
router.use(createPublishersRouter(publisherRepository));
router;
