import { GraphQLServer } from 'graphql-yoga'

const typeDefs = `
  type Query {
    hello: String!
  }
`

const resolvers = {
  Query: {
    hello() {
      return 'Hello, User'
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => {
  console.log('Server is running on localhost:4000')
})