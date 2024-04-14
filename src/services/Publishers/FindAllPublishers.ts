import { IPublisherRepository } from "../../repositories/PublisherRepository";

interface FindAllPublishOutput {
  id: string;
  name: string;
}

export class FindAllPublisher {
  constructor(private readonly publisher_repository: IPublisherRepository) {}

  async execute(): Promise<FindAllPublishOutput[]> {
    const publishers = await this.publisher_repository.findAll();
    if (!publishers) return [];
    return publishers;
  }
}
