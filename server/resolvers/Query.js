const Query = {
  users(parent, args, { db }, info) {
    return db.users
  },
  exercises(parent, args, { db }, info) {
    return db.exercises
  }
}

export default Query