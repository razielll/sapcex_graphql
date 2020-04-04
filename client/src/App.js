import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Launches from './components/Launches';
import Launch from './components/Launch';

import './App.css';

const client = new ApolloClient({ uri: 'http://localhost:5000/graphql' });

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img
            src="https://i.pinimg.com/originals/e5/bd/23/e5bd23574cee3222e088a5de04c28eaf.jpg"
            style={{ width: 300, display: 'block', margin: '0 auto' }}
            alt="spacex"
          />
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
