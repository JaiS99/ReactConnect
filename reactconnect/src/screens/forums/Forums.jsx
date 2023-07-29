import React from 'react'
import { ApolloProvider } from '@apollo/client'
import client from '../../apollo';
import QuestionList from '../../components/questionlist/QuestionList'
import './forums.css';

const Forums = () => {
  return (
    <div>
      <ApolloProvider client={client}>
      <div className="App">
        <QuestionList className="questionsList"/>
      </div>
    </ApolloProvider>

    </div>
  )
}

export default Forums
