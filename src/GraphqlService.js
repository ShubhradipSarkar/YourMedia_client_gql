import { ApolloClient, InMemoryCache} from '@apollo/client';

const getAuthToken = () => {
  return localStorage.getItem('token');
}

const createApolloClient = () => {
  const token = getAuthToken();
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql-server-yourmedia.onrender.com/api",
    headers:{
      authorization: token ? `Bearer ${token}`:'',
    }
    
  });

  return client;
}

export default createApolloClient;