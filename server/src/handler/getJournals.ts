import { APIGatewayProxyEvent, APIGatewayProxyHandler } from "aws-lambda";
import { getJournals } from "../data/journal";

export const main: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
) => {
  const { pageSize, userId, lastKey }: any = event.queryStringParameters || {};
  const journals = await getJournals(userId, pageSize, lastKey);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      data: journals,
    }),
  };

  return response;
};
