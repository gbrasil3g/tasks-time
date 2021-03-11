import 'dotenv/config'

import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

export default (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  if(!authHeader) {
    return res.status(401).send('Token not provided')
  }

  const [, token] = authHeader.split(' ')

  try {
    // @ts-ignore
    const payload = jwt.verify(token, process.env.APP_SECRET)

    // @ts-ignore
    req.userId = payload.userId

    return next()
  } catch(err) {
    return res.status(401).send('Invalid token')
  }
}