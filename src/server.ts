import express from 'express'
import { database } from './database'
import { adminJs, adminJsRouter } from './adminjs'
import { router } from './routes'

const app = express()

app.use(express.static('public'))

app.use(adminJs.options.rootPath, adminJsRouter)

app.use(router)

//Caso não tenha a porta env.Port vai usar a porta 3000
const PORT = process.env.port || 3000

app.listen(PORT, async () => {
  await database.authenticate().then(() => {
    console.log('DB connection successfull.')
  })

  console.log(`Servidor iniciado com sucesso na porta ${PORT}.`)
})
