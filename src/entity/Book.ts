export class Book {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly author: string,
    readonly isbn: string,
    readonly published_at: number,
    readonly publisher_id: string
  ) {}

  static create(
    title: string,
    author: string,
    isbn: string,
    published_at: number,
    publisher_id: string,
    inputId?: string
  ) {
    const id = inputId ? inputId : crypto.randomUUID();
    return new Book(id, title, author, isbn, published_at, publisher_id);
  }
}
