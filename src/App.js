import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, gql} from '@apollo/client';
import {onError} from '@apollo/client/link/error'
import GetUsers from './components/GetUsers';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/api/"
})


function App() {
  return (
    <ApolloProvider client={client}>
      {" "}
      <GetUsers/>
    </ApolloProvider>
  );
}

export default App;
