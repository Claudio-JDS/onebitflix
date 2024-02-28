import express from 'express'

const app = express()

//Caso não tenha a porta env.Port vai usar a porta 3000
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor iniciado com sucesso na porta ${PORT}`)
})
