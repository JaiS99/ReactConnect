import { gql } from '@apollo/client';

export const GET_ALL_GITHUB_ISSUES = gql`
  query GetAllGitHubIssues($query: String!, $limit: Int!) {
    search(query: $query, type: ISSUE, first: $limit) {
      edges {
        node {
          ... on Issue {
            id
            title
            bodyText
            createdAt
            author {
              login
            }
            url
          }
        }
      }
    }
  }
`;

export const SUBMIT_ANSWER = gql`
  mutation SubmitAnswer($issueId: String!, $answer: String!) {
    submitAnswer(issueId: $issueId, answer: $answer) {
      id
      # Include any additional fields you want to retrieve after submitting the answer
    }
  }
`;
