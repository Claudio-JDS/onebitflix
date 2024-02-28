// import { Sequelize } from 'sequelize'
import express from 'express'
import {database} from './database/index'

const app = express()

//Caso não tenha a porta env.Port vai usar a porta 3000
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  database.authenticate().then(() => {
    console.log("Conexão com Banco-Dados foi bem sucedida")
  })

  console.log(`Servidor iniciado com sucesso na porta ${PORT}`)
})
