const express = require('express')
const port = process.env.PORT
const userRouter = require('./router/users')
require('./db/database')

const app = express()

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})