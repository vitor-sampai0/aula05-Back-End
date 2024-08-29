import { Router } from "express"

const emocoesRoutes = Router()

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

app.get("/emocoes", (req, res) => {
    return res.status(200).send(emocoes)
});

app.post("/emocoes", (req, res) => {
    const {nome, cor} = req.body
    const newemocao = {
        id: emocoes.length + 1,
        nome: nome,
        cor: cor
    }
    emocoes.push(newemocao)
    return res.status(200).send(emocoes)
});