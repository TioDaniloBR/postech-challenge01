import { Request, Response } from "express";
import { CreatePublisher } from "../../services/Publishers/CreatePublisher";
import { FindAllPublisher } from "../../services/Publishers/FindAllPublishers";
import { FindPublisherById } from "../../services/Publishers/FindPublisherById";
import { UpdatePublisher } from "../../services/Publishers/UpdatePublisher";
import { DeletePublisher } from "../../services/Publishers/DeletePublisher";

export class PublishersController {
  constructor(
    private readonly createPublisher: CreatePublisher,
    private readonly findAllPublishers: FindAllPublisher,
    private readonly findPublisherById: FindPublisherById,
    private readonly updatePublisher: UpdatePublisher,
    private readonly deletePublisher: DeletePublisher
  ) {}

  async create(request: Request, response: Response): Promise<void> {
    const output = await this.createPublisher.execute({
      name: request.body.name,
    });
    response.status(200).send(output);
  }

  async findAll(_request: Request, response: Response) {
    const output = await this.findAllPublishers.execute();
    response.status(200).send(output);
  }

  async findById(request: Request, response: Response) {
    const output = await this.findPublisherById.execute({
      id: request.params.id,
    });
    response.status(200).send(output);
  }

  async updateById(request: Request, response: Response) {
    const output = await this.updatePublisher.execute({
      id: request.body.id,
      name: request.body.name,
    });
    response.status(200).send(output);
  }

  async deleteById(request: Request, response: Response) {
    const output = await this.deletePublisher.execute({ id: request.body.id });
    response.status(200).send(output);
  }
}
