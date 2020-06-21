import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { WebSocketLink } from 'apollo-link-ws';

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: new WebSocketLink({
    uri: 'wss://hasura-101-game.herokuapp.com/v1/graphql',
    options: {
      reconnect: true,
    },
  }),
});
