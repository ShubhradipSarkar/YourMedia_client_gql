import { ApolloClient, InMemoryCache} from '@apollo/client';

const getAuthToken = () => {
  return localStorage.getItem('token');
}

const createApolloClient = () => {
  const token = getAuthToken();
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/api",
    headers:{
      authorization: token ? `Bearer ${token}`:'',
    }
    
  });

  return client;
}

export default createApolloClient;