import { GraphQLServer } from 'graphql-yoga'

const typeDefs = `
  type Query {
    user: User!
    exercise: Exercise!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    weight: Float
    height: Float
  }

  type Exercise {
    name: String!
    weight: Float
    duration: Float
    reps: Int
    sets: Int
  }
`

const resolvers = {
  Query: {
    user() {
      return {
        name: 'Madi',
        id: '12345',
        email: 'madison@gmail.com',
        age: 28,
        weight: 124.3,
        height: 67,
      }
    },
    exercise() {
      return {
        name: 'jogging',
        duration: 60
      }
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