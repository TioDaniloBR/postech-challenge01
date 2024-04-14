import { IPublisherRepository } from "../../repositories/PublisherRepository";

interface DeletePublisherInput {
  id: string;
}

interface DeletePublishOutput {
  id: string;
}

export class DeletePublisher {
  constructor(private readonly publisher_repository: IPublisherRepository) {}

  async execute(input: DeletePublisherInput): Promise<DeletePublishOutput> {
    await this.publisher_repository.delete(input.id);
    return { id: input.id };
  }
}
