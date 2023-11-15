import { config } from "dotenv"
config()

export const ACCESS_TOKEN_SECRET = <string>process.env.ACCESS_TOKEN_SECRET

export const REFRESH_TOKEN_SECRET = <string>process.env.REFRESH_TOKEN_SECRET

export const MONGO_URL = <string>process.env.MONGO_URL

export const HOST = <string>process.env.HOST
