export class Publisher {
  constructor(readonly id: string, readonly name: string) {}

  static create(name: string, inputId?: string) {
    const id = inputId || crypto.randomUUID();

    return new Publisher(id, name);
  }
}
