abstract class BaseError extends Error {
  constructor(message: string) {
    super(message);

    this.name = this.constructor.name;
  }
}

export class BodyError extends BaseError { };
