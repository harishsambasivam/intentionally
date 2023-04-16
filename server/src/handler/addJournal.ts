import { APIGatewayProxyEvent, APIGatewayProxyHandler } from "aws-lambda";
import { Journal, createJournal } from "../data/journal";

export const main: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
) => {
  const { text, capturedAt, userId } = JSON.parse(event.body || "{}");
  const journal = new Journal(capturedAt, text, userId);
  await createJournal(journal);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      ...journal,
    }),
  };

  return response;
};
