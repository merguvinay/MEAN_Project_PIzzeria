const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')

const mongoUrl = 'mongodb://localhost:27017/'
const dbName = 'PizzeriaDB'
let db

MongoClient.connect(mongoUrl)
    .then(client => {
        db = client.db(dbName)
        console.log("MongoDB connected")
    })
    .catch(err => {
        console.log('Failed to Connect MongoDB' + err.message)
    })

const app = express()
const port = 3000
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.end("Express Server is Active")
})

app.get('/pizzas', async (req, res) => {
    try {
        const pizzas = await db.collection('pizzas').find({}).toArray()
        res.status(200).json({
            message: "Pizzas Fetched Succesfully",
            pizzas
        })
    } catch (err) {
        res.status(500).json({
            message: "Failed to fetch Pizzas",
            error: err.message
        })
    }
})


app.get('/ingredients', async (req, res) => {
    try {
        const ingredients = await db.collection('ingredients').find({}).toArray()
        res.status(200).json({
            message: "Ingredients Fetched Succesfully",
            ingredients
        })
    } catch (err) {
        res.status(500).json({
            message: "Failed to fetch Ingredients",
        })
    }
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})