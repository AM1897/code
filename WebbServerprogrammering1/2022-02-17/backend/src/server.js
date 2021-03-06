import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

// Config stuff
const port = process.env.SERVER_PORT
const cors_options ={
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}

//Initiate ExpressAPP
const app = express()

//Middleware
app.use(cors(cors_options))

//Database
const userDatabase = [
    {
        name: 'Aram',
        age: 30,
        gender: 'Male'
    },

    {
        name: 'Bengtina',
        age: 19,
        gender: 'Female'
    },

    {
        name: 'Carin',
        age: 29,
        gender: 'Female'
    },

    {
        name: 'Emil',
        age: 32,
        gender: 'Male'
    },
]

//API Functions
const userNames = () => {
  let names = []
    userDatabase.forEach(user => {
        names.push({
            name: user.name
        })
    })
    return names
}

const getUserByNames = (name) => {
    let object = `Could not find "${name}" in database`
    userDatabase.forEach(user => {
        if (name === user.name) {
            object = user
            return
        }
    })
    return object
}

//Endpoint + Business Logic
app.get('/', (req, res) => {
    res.send('API is Alive')
})

// CRUD
// CREATE
// READ
app.get('/users', (req, res) => {
    res.status(200).send(userDatabase)
} )

// Hitta Aram
app.get('/user/:name', (req, res) => {
    const  name = req.params.name
    const responseFromDb = getUserByNames(name)
    res.status(200).send(responseFromDb)
} )

// UPDATE
//DELETE

// Start Server
app.listen(port, () => {
    console.log(`Server running on address:port http://localhost:${port}`)
})

