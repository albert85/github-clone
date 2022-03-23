export const UserQuery = ({ search, user }: { search: string, user: string}) => `
{  
search(first: 10, query: "${search}", type: ${user}){
    userCount
    repositoryCount
    pageInfo {
      endCursor
      startCursor
      hasNextPage
    }
    edges{
      node {
        ... on User {
          company
          name
        }
        ... on Repository {
          name
        }
      }
    }
  }
}
`

interface QueryType {
  queryString: string,
  after?: string | undefined | null,
  before?: string | undefined | null,
  type: string,
}

export const OverallQuery = ({queryString, after, type, before}: QueryType) => `
{
  search(first: 10, query: "${queryString}", type: ${type}, after: ${after}, before: ${before}){
    userCount
    repositoryCount
    pageInfo {
      endCursor
      startCursor
      hasNextPage
    }
    edges{
      node {
        ... on User {
          company
          name
          bio
        }
        ... on Repository {
          licenseInfo {
            id
            name
          }
          updatedAt
          languages(last: 1){
            edges {
              node{
                name
              }
            }
          }
          name,
          stargazers {
            totalCount
          }
        }
      }
    }
  }
}
`