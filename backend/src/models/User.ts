import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  passwordHash: String,
})

UserSchema.pre('save', async function() {
  // @ts-ignore
  if(this.password) this.passwordHash = await bcrypt.hash(this.password, 8)

  // @ts-ignore
  this.password = undefined
})

// @ts-ignore
export default new model('User', UserSchema)