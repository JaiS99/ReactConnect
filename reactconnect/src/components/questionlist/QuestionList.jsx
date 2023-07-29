import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import './questionlist.css';

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

const ADD_ANSWER = gql`
  mutation AddAnswer($issueId: ID!, $answerText: String!) {
    addAnswer(answer: { issueId: $issueId, answerText: $answerText }) {
      id
      text
      author {
        login
      }
      createdAt
    }
  }
`;

const QuestionList = () => {
  const { loading, error, data } = useQuery(GET_REPO_ISSUES, {
    variables: {
      owner: '0Armaan025', // Replace with the owner of the GitHub repository
      repoName: 'tiktok_clone', // Replace with the name of the GitHub repository
    },
  });

  const [expandedTileId, setExpandedTileId] = useState(null);
  const [submittingAnswer, setSubmittingAnswer] = useState(false);

  const [addAnswerMutation] = useMutation(ADD_ANSWER);

  const toggleTileExpansion = (issueId) => {
    setExpandedTileId((prevId) => (prevId === issueId ? null : issueId));
  };

  const submitAnswer = async (issueId, answerText) => {
    try {
      setSubmittingAnswer(true);
      await addAnswerMutation({
        variables: {
          issueId: issueId,
          answerText: answerText,
        },
      });
      // Optionally, you can refetch the query to get the updated data after the mutation.
      // This will ensure that the new answer is immediately visible on the UI.
      // Refetching the query will make a new network request to the server.
      // Example:
      // await refetch();
    } catch (error) {
      console.error('Error submitting answer:', error.message);
    } finally {
      setSubmittingAnswer(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const issues = data?.repository?.issues?.edges || [];

  return (
    <div className='questionTile'>
      <br />
      <h2>Questions/Discussions</h2>
      <br />
      {issues.map((issue) => (
        <div key={issue.node.id} className={`github-card ${expandedTileId === issue.node.id ? 'expanded' : ''}`}>
          <h3 onClick={() => toggleTileExpansion(issue.node.id)}>{issue.node.title}</h3>
          {expandedTileId === issue.node.id && (
            <div>
              <br />
              <p className='specialP'>{issue.node.bodyText}</p>
              <p className='specialP'>Author: {issue.node.author?.login}</p>
              <p className='specialP'>Created At: {issue.node.createdAt}</p>
              <a href={issue.node.url} style={{ marginLeft: '30px', marginTop: '20px' }} target='_blank' rel='noopener noreferrer'>
                View on GitHub
              </a>
              <hr />
              <div className='answer-section'>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const answerText = e.target.elements[`answer-${issue.node.id}`].value;
                    submitAnswer(issue.node.id, answerText);
                  }}
                >
                  <label htmlFor={`answer-${issue.node.id}`}>Your Answer:</label>
                  <textarea id={`answer-${issue.node.id}`} rows={4} placeholder='Write your answer here...' />
                  <button type='submit' className='btn-submit' disabled={submittingAnswer}>
                    {submittingAnswer ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionList;