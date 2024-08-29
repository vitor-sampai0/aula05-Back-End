
import { Router } from "express"

const emocoesRoutes = Router()

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

app.get("/personagens", (req, res) => {
    return res.status(200).send(personagens)
});