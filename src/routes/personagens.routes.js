
import { Router } from "express"

const personagensRoutes = Router()

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
        vivo: false,
        studio: "naughtdog"
    },

]

personagensRoutes.get("/", (req, res) => {
    return res.status(200).send(personagens)
});

// Rota para criar um novo personagem
personagensRoutes.post("/", (req, res) => {
    const { nome, vivo, studio } = req.body
    const novoPersonagem = {
        id: personagens.length + 1,
        nome: nome,
        vivo: vivo,
        studio: studio
    }
    personagens.push(novoPersonagem)
    return res.status(200).send(personagens)
});

    personagensRoutes.delete("/:id", (req,res) => {
        const { id } = req.params;

        const personagem = personagens.find((person) => person .id == id);
    
        if(!personagem) {
            return res.status(404).send({
                message : "personagem não encontrado!",
            });
        }
        personagens = personagens.filter((person) => person.id != id )

        return res.status(200).send({
            message: "personagem deletado!",
            personagens,
        });
});

export default personagensRoutes;