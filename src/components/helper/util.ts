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
  after: string | undefined,
  type: string,
}

export const OverQuery = ({queryString, after, type}: QueryType) => `
  search(first: 10, query: "${queryString}", type: ${type}, after: ${after}){
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
`