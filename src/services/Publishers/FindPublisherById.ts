import { IPublisherRepository } from "../../repositories/PublisherRepository";

interface FindPublisherByIdOutput {
  id: string;
  name: string;
}

interface FindPublisherByIdInput {
  id: string;
}

export class FindPublisherById {
  constructor(private readonly publisher_repository: IPublisherRepository) {}

  async execute(
    input: FindPublisherByIdInput
  ): Promise<FindPublisherByIdOutput | undefined> {
    const publishers = await this.publisher_repository.findById(input.id);
    if (!publishers) return undefined;
    return publishers;
  }
}
