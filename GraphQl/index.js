// 1. What is GraphQL and how does it differ from REST?
// GraphQL is a query language for APIs and a runtime for executing those queries by defining a type system for your data.
// Unlike REST, which uses multiple endpoints for different resources, GraphQL allows a single endpoint to query and manipulate data with flexibility, asking for exactly what is needed.

// 2. How do you define a GraphQL schema in JavaScript?
// In JavaScript, you define a GraphQL schema using the GraphQL schema definition language (SDL) or programmatically via the GraphQL package. Example:
// const { gql } = require('apollo-server');
// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

// 3. What are queries in GraphQL and how do they work?
// A query in GraphQL is a read operation used to fetch data. It’s similar to an HTTP GET request in REST, but you can specify exactly which fields you want to retrieve. Example:
// query {
//   user(id: 1) {
//     name
//     email
//   }
// }

// 4. What is a mutation in GraphQL and how is it different from a query?
// Mutations are used to modify data (create, update, or delete). Unlike queries, which are read-only, mutations typically return the modified data. Example:
// mutation {
//   createUser(name: "John") {
//     id
//     name
//   }
// }

// 5. How do you handle GraphQL variables in a JavaScript client?
// Variables are passed along with a query to avoid hard-coding values in the query itself. They are sent as a separate object in the request.
// Example:
// const query = `
//   query getUser($id: ID!) {
//     user(id: $id) {
//       name
//     }
//   }`;
// const variables = { id: 1 };
// client.query({ query, variables });

// 6. What is the role of resolvers in GraphQL?
// Resolvers are functions responsible for returning data for a particular field in the GraphQL schema. They fetch the data from a database or other sources.
// Example:
// const resolvers = {
//   Query: {
//     user: (_, { id }) => getUserById(id),
//   },
// };

// 7. How do you create custom resolvers in GraphQL using JavaScript?
// You can create custom resolvers by defining them inside an object and associating them with your GraphQL schema fields.
// Example:
// const resolvers = {
//   Query: {
//     customField: () => "This is custom data",
//   },
// };

// 8. How do you handle pagination in GraphQL?
// Pagination in GraphQL can be implemented using arguments like `limit` and `skip` (or `cursor-based` pagination with `before` and `after`). This ensures only a subset of data is returned.
// Example:
// query {
//   users(limit: 10, skip: 10) {
//     name
//   }
// }

// 9. What is a subscription in GraphQL, and how do you use it in JavaScript?
// Subscriptions allow clients to listen for real-time updates to data. Apollo Client supports subscriptions via WebSockets.
// Example:
// const { data } = useSubscription(MESSAGE_RECEIVED, {
//   variables: { id: '123' },
// });

// 10. How do you set up a GraphQL server using Apollo Server in JavaScript?
// Apollo Server can be set up by importing the necessary packages, defining your schema and resolvers, then creating the server instance.
// Example:
// const { ApolloServer, gql } = require('apollo-server');
// const typeDefs = gql`
//   type Query { hello: String }
// `;
// const resolvers = { Query: { hello: () => 'Hello World!' } };
// const server = new ApolloServer({ typeDefs, resolvers });
// server.listen().then(({ url }) => console.log(`Server ready at ${url}`));

// 11. How do you authenticate and authorize users in GraphQL APIs?
// You can authenticate users using middleware that checks for JWT tokens or other credentials in the request headers. Authorization can be handled by checking user roles in resolvers.
// Example:
// const context = ({ req }) => {
//   const token = req.headers.authorization || '';
//   return { user: verifyToken(token) };
// };

// 12. What are fragments in GraphQL, and how do they improve query efficiency?
// Fragments allow you to define reusable units of a query. They help avoid repeating fields and ensure consistency in queries.
// Example:
// fragment userFields on User {
//   id
//   name
// }
// query {
//   user(id: 1) { ...userFields }
//   otherUser(id: 2) { ...userFields }
// }

// 13. How do you use Apollo Client to send GraphQL queries in JavaScript?
// Apollo Client is used to send queries or mutations to a GraphQL server. You define the query and then use `client.query()` or `client.mutate()` to execute it.
// Example:
// import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
// const client = new ApolloClient({ uri: '/graphql', cache: new InMemoryCache() });
// client.query({
//   query: gql`query { users { name } }`,
// }).then(response => console.log(response));

// 14. How can you optimize performance and reduce over-fetching in GraphQL?
// Use query batching, fragments, or tools like Apollo Client’s caching to optimize performance. Also, use specific queries to only request necessary fields (avoiding over-fetching).
// Example:
// Use query and mutation batching to send multiple requests in one network round-trip.

// 15. What is the purpose of a GraphQL schema definition language (SDL)?
// SDL is a way to define the structure of your GraphQL schema using a simple, human-readable syntax. It provides type definitions for queries, mutations, and subscriptions.
// Example:
// const typeDefs = gql`
//   type Query { hello: String }
// `;

// 16. How do you handle errors and exceptions in a GraphQL server?
// Errors are thrown in resolvers, and GraphQL will handle them as part of the response. You can customize the error handling by using error formatters or custom error classes.
// Example:
// const resolvers = {
//   Query: {
//     user: (_, { id }) => {
//       if (!id) throw new Error("User ID is required");
//       return findUserById(id);
//     },
//   },
// };

// 17. How do you handle nested queries in GraphQL in JavaScript?
// Nested queries are handled automatically by GraphQL’s resolver functions. Each nested field is resolved by its corresponding resolver.
// Example:
// query {
//   user(id: 1) {
//     name
//     posts {
//       title
//     }
//   }
// }

// 18. How does batching and caching work in GraphQL with Apollo Client?
// Apollo Client supports query batching (sending multiple queries in one request) and caching (storing previous query results to avoid repeated requests).
// Example:
// const client = new ApolloClient({ cache: new InMemoryCache() });
// client.query({ query: GET_USER }).then(result => console.log(result));

// 19. What are the common best practices for structuring GraphQL APIs in JavaScript?
// Common best practices include modularizing schemas into separate files, using proper pagination, leveraging fragments for reusable fields, and securing sensitive data with authorization.
// Example:
// Create separate files for `queries`, `mutations`, and `resolvers` for better code organization.

// 20. How do you implement optimistic UI updates with GraphQL in JavaScript?
// Optimistic UI updates are used to predict a mutation result and immediately reflect changes in the UI while waiting for the server response.
// Example:
// client.mutate({
//   mutation: ADD_TODO,
//   variables: { text: 'New Todo' },
//   optimisticResponse: {
//     addTodo: { id: -1, text: 'New Todo', __typename: 'Todo' },
//   },
// });
