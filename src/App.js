import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'
import CompanySelector from './components/CompanySelector'
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom'

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
})

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Route exact path="/" component={ Home }/>        
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
