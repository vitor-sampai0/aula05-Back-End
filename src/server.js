import express from "express"
import {config} from "dotenv"

config()

const serverPort = process.env.PORT || 3000

const app = express()
app.use(express.json())

const emocoes = [
    {
        id: 1,
        nome: "Nojinho",
        cor: "verde"
    },
    {
        id: 2,
        nome: "Tristeza",
        cor: "Azul"
    },
    {
        id: 3,
        nome: "Felicidade",
        cor: "Amarelo"
    },

]

const personagens = [
    {
        id: 100,
        nome: "rick grmes",
        vivo: true,
        studio: "AMC"
    },
    {
        id: 102,
        nome: "ellie miller",
        vivo: true,
        studio: "naughtdog"
    },
    {
        id: 103,
        nome: "joel miller",
        vivo: true,
        studio: "naughtdog"
    },

]

app.get("/", (req, res) => {
    return res.status(200).send({ message:"hello word!"})
});

app.get("/2tds2", (req, res) => {
    return res.status(200).send({ message:"hello 2tds2!"})
});

app.get("/emocoes", (req, res) => {
    return res.status(200).send(emocoes)
});

app.get("/personagens", (req, res) => {
    return res.status(200).send(personagens)
});

app.listen(serverPort, () => {
    console.log(`🙅‍♂️🙇‍♀️👌🤰 Server starded on http://localhost:${serverPort}`)
})