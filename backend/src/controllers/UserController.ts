import { Request, Response } from 'express'
import User from '../models/User'

class UserController {
  async store(req: Request, res: Response) {
    const { name, email, password } = req.body

    const userAlreadyExists = await User.findOne({ email })

    if(userAlreadyExists) {
      return res.status(400).send('User already exists')
    }

    const user = await User.create({
      name,
      email,
      password
    })

    const { _id } = user

    return res.json({ _id })
  }

  async get(req: Request, res: Response) {
    // @ts-ignore
    const user = await User.findById(req.userId)

    return res.json({
      name: user.name,
      email: user.email
    })
  }

  async delete(req: Request, res: Response) {
    // @ts-ignore
    const user = await User.findById(req.userId)

    if(!user) {
      return res.status(404).send('User not found')
    }

    await user.delete()

    return res.send('Account deleted')
  } 
}

export default new UserController()