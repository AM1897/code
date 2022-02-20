// const express = require('express');
import express from 'express'
import doteenv from 'dotenv'

doteenv.config()
//const port = 3001

const port = process.env.SERVER_PORT
const app = express()

app.get('/', (req, res) => {
    res.send('API Alive!')
})

app.listen(port, () => {
    console.log(`Server listning on port: http://localhost:${port}`)
})

