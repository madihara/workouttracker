import uuid from 'uuid'
const Mutation = {
  createUser(parent, args, { db }, info) {
    const emailTaken = db.users.some((user) => user.email === args.data.email)

    if (emailTaken) {
      throw new Error('Email Taken')
    }


    const user = {
      id: uuid(),
      ...args.data
    }

    db.users.push(user)

    return user
  },
  deleteUser(parent, args, { db }, info) {
    const userIndex = db.users.findIndex((user) => user.id === args.id)

    if (!userIndex === -1) {
      throw new Error('User not found')
    }

    const deletedUsers = db.users.splice(userIndex, 1)

    return deletedUsers[0]

  },
  createExercise(parent, args, { db }, info) {


    const exercise = {
      id: uuid(),
      ...args.data
    }

    db.exercises.push(exercise)

    return exercise
  }
}


export default Mutation