import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

let client: null | DynamoDBClient = null;

export const getClient = (): DynamoDBClient => {
  if (client) return client;
  client = new DynamoDBClient({});
  return client;
};
