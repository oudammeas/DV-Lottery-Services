/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDvlsApp = /* GraphQL */ `
  query GetDvlsApp($PK: String!, $SK: String!) {
    getDVLSApp(PK: $PK, SK: $SK) {
      PK
      SK
    }
  }
`;
export const listDvlsApps = /* GraphQL */ `
  query ListDvlsApps(
    $filter: TableDVLSAppFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDVLSApps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        PK
        SK
      }
      nextToken
    }
  }
`;
