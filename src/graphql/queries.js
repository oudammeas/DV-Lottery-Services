/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDvLotteryApp = /* GraphQL */ `
  query GetDvLotteryApp($id: ID!) {
    getDVLotteryApp(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listDvLotteryApps = /* GraphQL */ `
  query ListDvLotteryApps(
    $filter: ModelDVLotteryAppFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDVLotteryApps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
