import express from "express"
import {config} from "dotenv"

config()

const serverPort = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    return res.status(200).send({ message:"hello word!"})
})
app.get("/2tds2", (req, res) => {
    return res.status(500).send({ message:"hello word!"})
})

app.listen(serverPort, () => {
    console.log(`🙅‍♂️🙇‍♀️👌🤰 Server starded on http://localhost:${serverPort}`)
})