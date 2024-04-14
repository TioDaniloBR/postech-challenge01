import { Router } from "express";
import { PublishersController } from "../controllers/Publishers/PublishersController";
import { FindAllPublisher } from "../services/Publishers/FindAllPublishers";
import { IPublisherRepository } from "../repositories/PublisherRepository";
import { CreatePublisher } from "../services/Publishers/CreatePublisher";
import { FindPublisherById } from "../services/Publishers/FindPublisherById";
import { UpdatePublisher } from "../services/Publishers/UpdatePublisher";
import { DeletePublisher } from "../services/Publishers/DeletePublisher";

export function createPublishersRouter(
  publisherRepository: IPublisherRepository
) {
  const router = Router();
  const controller = new PublishersController(
    new CreatePublisher(publisherRepository),
    new FindAllPublisher(publisherRepository),
    new FindPublisherById(publisherRepository),
    new UpdatePublisher(publisherRepository),
    new DeletePublisher(publisherRepository)
  );

  router
    .get("/publisher", (req, res, _next) => controller.findAll(req, res))
    .get("/publisher/:id", (req, res, _next) => controller.findById(req, res))
    .post("/publisher", (req, res, _next) => controller.create(req, res))
    .put("/publisher", (req, res, _next) => controller.updateById(req, res))
    .delete("/publisher", (req, res, _next) => controller.deleteById(req, res));

  return router;
}
