import { GraphQLServer } from 'graphql-yoga'

const users = [{
  name: 'Madi',
  id: '1',
  email: 'madi@madi.com'
}, {
  name: 'Andres',
  id: '2',
  email: 'madi@madi.com'
}, {
  name: 'Jane',
  id: '3',
  email: 'madi@madi.com'
}
]

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
      return users
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