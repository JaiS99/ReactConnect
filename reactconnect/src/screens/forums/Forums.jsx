import React from 'react'
import { ApolloProvider } from '@apollo/client'
import client from '../../apollo';
import QuestionList from '../../components/questionlist/NewQuestionList'
import './forums.css';
import NavBar from '../../components/navbar/Navbar';

const Forums = () => {
  return (
    <div>
      <NavBar/>
      <ApolloProvider client={client}>
      <div className="App">
        <QuestionList className="questionsList"/>
      </div>
    </ApolloProvider>

    </div>
  )
}

export default Forums
