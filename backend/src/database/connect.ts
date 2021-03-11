import mongoose from 'mongoose'

const connect = () => {
  return mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/tasks_time', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }).then(() => {
    console.log('[MONGO DB] Connected')
  })
}

export { connect }