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