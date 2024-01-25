import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, gql} from '@apollo/client';
import MakeRoutes from './components/Routers';





function App() {
  return (
    
      <MakeRoutes/>
    
  );
}

export default App;

