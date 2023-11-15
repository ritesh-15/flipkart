import express, { Application, NextFunction, Request, Response } from "express"
import cors from "cors"
import authRouter from "./routes/auth-routes"
import CreateHttpError from "./utils/error-handler"
import { errorMiddleware } from "./middlewares/error-middleware"
import { connection } from "./db/connection"
import { Server } from "http"
import { HOST } from "./keys/env-secrets"

const app: Application = express()
const server = new Server(app)

const PORT = process.env.PORT || 9000

// db connection
connection()

// middlewares
app.use(express.json({ limit: "100mb" }))

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  })
)

// routes
const BASE_URL = "api/v1"

app.get("/health", (req: Request, res: Response, next: NextFunction) => {
  res.json({ ok: true, message: "health check successful!" })
})

app.use(`${BASE_URL}/auth`, authRouter)

// error handler

app.use((req: Request, res: Response, next: NextFunction) => {
  next(CreateHttpError.notFound("Not route match!"))
})

app.use(errorMiddleware)

server.listen(+PORT, HOST, undefined, () =>
  console.log(`Server started on port ${HOST}:${PORT}`)
)
