import { uuid } from "uuidv4";
import { Item } from "./base";
import { getClient } from "./client";
import {
  GetItemCommand,
  PutItemCommand,
  QueryCommand,
} from "@aws-sdk/client-dynamodb"; // ES Modules import

export class Journal extends Item {
  private userId: string;
  private capturedAt: string;
  private text: string;
  constructor(userId: string, capturedAt: string, text: string) {
    super();
    this.userId = userId;
    this.capturedAt = capturedAt;
    this.text = text;
  }

  static fromItem(item?: any): Journal {
    if (!item) throw new Error("No item!");
    return new Journal(item.userId.S, item.capturedAt.S, item.text.S);
  }

  get pk() {
    return `USER#${this.userId}`;
  }

  get sk() {
    return `CAPTURED_AT#${this.capturedAt}`;
  }

  toItem() {
    return {
      ...this.keys(),
      journalId: uuid(),
      capturedAt: this.capturedAt,
      text: this.text,
    };
  }
}

export const createJournal = async (journal: Journal): Promise<Journal> => {
  const client = getClient();
  try {
    const params: any = {
      TableName: process.env.TABLE_NAME,
      Item: journal.toItem(),
      ConditionExpression: "attribute_not_exists(SK)",
    };
    const putItemCommand = new PutItemCommand(params);
    await client.send(putItemCommand);
    return journal;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getJournal = async (
  userId: string,
  capturedAt: string
): Promise<Journal> => {
  const client = getClient();
  const journal = new Journal(userId, capturedAt, "");
  try {
    const params: any = {
      TableName: process.env.TABLE_NAME,
      Key: journal.keys(),
    };
    const getItemCommand = new GetItemCommand(params);
    await client.send(getItemCommand);
    return journal;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getJournals = async (
  userId: string,
  pageSize: number,
  lastKey: string | null = null
): Promise<any> => {
  const client = getClient();
  try {
    const params: any = {
      TableName: process.env.TABLE_NAME,
      KeyConditionExpression: "partitionKey = :pk",
      ExpressionAttributeValues: {
        ":pk": { S: userId },
      },
      Limit: pageSize,
      ExclusiveStartKey: lastKey,
    };
    const queryCommand = new QueryCommand(params);
    const data = await client.send(queryCommand);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
