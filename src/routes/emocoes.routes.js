import { Router } from "express"

const emocoesRoutes = Router()

let emocoes = [
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
// rota para buscar todas as emoções 
emocoesRoutes.get("/", (req, res) => {
    return res.status(200).send(emocoes)
});
// Rota para criar uma nova Emoção
emocoesRoutes.post("/", (req, res) => {
    const { nome, cor } = req.body
    const newemocao = {
        id: emocoes.length + 1,
        nome: nome,
        cor: cor
    }
    emocoes.push(newemocao)
    return res.status(201).send(emocoes)
});
// Rota para buscar uma emoção pelo id
emocoesRoutes.get("/:id", (req, res) => {
    const { id } = req.params;

    console.log(id);
    const emocao = emocoes.find((emotion) => emotion .id == id)

    if(!emocao) {
        return res.status(404).send({
            message : "emoção não encontrada!",
        })
    }

    return res.status(200).send({
        message: "Emoção encontrada", emocao,
    })
});

emocoesRoutes.put("/:id", (req,res)  => {
    const { id } = req.params;

    const emocao = emocoes.find((emotion) => emotion .id == id);

    if(!emocao) {
        return res.status(404).send({
            message : "emoção não encontrada!",
        })
    }

    const { nome,cor } = req.body;
    emocao.noem = nome;
    emocao.cor = cor;

    return res.status(200).send({
        message: "emoção atualizada",
        emocao,
    })
})
    emocoesRoutes.delete("/:id", (req,res) => {
        const { id } = req.params;

        const emocao = emocoes.find((emotion) => emotion .id == id);
    
        if(!emocao) {
            return res.status(404).send({
                message : "emoção não encontrada!",
            })
        }
        emocoes = emocoes.filter((emotion) => emotion.id != id )

        return res.status(200).send({
            message: "emoção deletada!",
            emocao,
        });
})




export default emocoesRoutes



