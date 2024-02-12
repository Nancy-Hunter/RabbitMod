const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 8000



let db,
    dbConnectionStr = 'mongodb+srv://hunterNancy:izZo6fUAiVl87EHP@cluster0.4wdblwn.mongodb.net/?retryWrites=true&w=majority',
    dbName = 'ModPage-pets'

MongoClient.connect(dbConnectionStr)
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded())
app.use(express.json())

app.get('/',(req, res)=>{
    db.collection('ModPage').find().toArray()
    .then(data => {
        res.render('index.ejs', { info: data })
    })
    .catch(error => console.error(error))
})

app.post('/modPage', (req, res) => {
    db.collection('ModPage').insertOne(
       {
        petName: req.body.petName,
        petAge: req.body.petAge, 
        description: req.body.description,
        picture: req.body.picture,
       })
    .then (result => {
        console.log('bunny added')
        res.redirect('/')
    })
    .catch(error=> console.error(error))
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}`)
})