type Keys = {
  PK: { S: string };
  SK: { S: string };
};

export abstract class Item {
  abstract get pk(): string;
  abstract get sk(): string;

  public keys(): Keys {
    return {
      PK: { S: this.pk },
      SK: { S: this.sk },
    };
  }

  abstract toItem(): Record<string, unknown>;
}
