import { gql } from '@apollo/client';

export const GET_REPO_ISSUES = gql`
  query GetRepoIssues($owner: String!, $repoName: String!) {
    repository(owner: $owner, name: $repoName) {
      issues(first: 100, orderBy: { field: CREATED_AT, direction: DESC }) {
        edges {
          node {
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
