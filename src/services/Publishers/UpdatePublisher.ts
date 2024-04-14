import { Publisher } from "../../entity/Publisher";
import { IPublisherRepository } from "../../repositories/PublisherRepository";

interface UpdatePublisherInput {
  id: string;
  name: string;
}

interface UpdatePublishOutput {
  id: string;
}

export class UpdatePublisher {
  constructor(private readonly publisher_repository: IPublisherRepository) {}

  async execute(input: UpdatePublisherInput): Promise<UpdatePublishOutput> {
    const publisher = Publisher.create(input.name, input.id);
    await this.publisher_repository.update(publisher);
    return { id: publisher.id };
  }
}
