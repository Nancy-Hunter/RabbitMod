const express = require('express')
const app = express()
require('dotenv').config()
const MongoClient = require('mongodb').MongoClient
const PORT = 8000



let db,
    dbConnectionStr = process.env.DB_STRING,
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

app.put ('/putEntry', (req, res) => {
    db.collection('ModPage').updateOne(
        {
            petName: req.body.petName,
            petAge: req.body.petAge, 
            description: req.body.description,
            picture: req.body.picture,
        }
    )
    .then(result => {
        console.log('updated ???')
        response.json('it updated')
    })
    .catch(error => console.error(error))

})

app.delete('/deleteEntry', (req, res)=> {
    db.collection('ModPage').deleteOne({petName: req.body.petNameString})
    .then(result => {
        console.log('entry deleted')
        res.json('rabbit deleted')
    })
    .catch(error => console.error(error))
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}`)
})