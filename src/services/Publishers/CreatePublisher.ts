import { Publisher } from "../../entity/Publisher";
import { IPublisherRepository } from "../../repositories/PublisherRepository";

interface CreatePublisherInput {
  name: string;
}

interface CreatePublishOutput {
  id: string;
}

export class CreatePublisher {
  constructor(private readonly publisher_repository: IPublisherRepository) {}

  async execute(input: CreatePublisherInput): Promise<CreatePublishOutput> {
    const publisher = Publisher.create(input.name);
    await this.publisher_repository.save(publisher);
    return { id: publisher.id };
  }
}
