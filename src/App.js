import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, gql} from '@apollo/client';
import MakeRoutes from './components/Routers';
//import 'bootstrap/dist/css/bootstrap.min.css';  

import ProfileDesc from "./components/decorations/ProfileDesc";



function App() {
  return (
    
      <MakeRoutes/>
    
  );
}

export default App;

