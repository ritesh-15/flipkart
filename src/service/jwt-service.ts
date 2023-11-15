import { ObjectId } from "mongoose"
import jwt from "jsonwebtoken"
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "../keys/env-secrets"
import { CookieOptions, Request, Response } from "express"
import Token from "../models/token-model"

class JwtService {
  private userId: ObjectId | string

  constructor(userId: ObjectId | string) {
    this.userId = userId
  }

  generateTokens() {
    const accessToken = jwt.sign({ _id: this.userId }, ACCESS_TOKEN_SECRET, {
      expiresIn: "25m",
    })

    const refreshToken = jwt.sign({ _id: this.userId }, REFRESH_TOKEN_SECRET, {
      expiresIn: "7d",
    })

    return { accessToken, refreshToken }
  }

  static async setTokens(userId: ObjectId | string, res: Response) {
    const { accessToken, refreshToken } = new JwtService(
      userId
    ).generateTokens()

    const options: CookieOptions = {
      httpOnly: true,
      maxAge: Date.now() + 1000 * 60 * 60 * 24 * 7,
    }

    res.cookie("access-token", accessToken, options)

    res.cookie("refresh-token", refreshToken, options)

    await Token.create({ userId, token: refreshToken })

    return { accessToken, refreshToken }
  }
}

export default JwtService
