import { APIGatewayProxyEvent, APIGatewayProxyHandler } from "aws-lambda";
import { getJournal } from "../data/journal";

export const main: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
) => {
  const { capturedAt, userId } = JSON.parse(event.body || "{}");
  const journal = await getJournal(userId, capturedAt);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      ...journal,
    }),
  };

  return response;
};
