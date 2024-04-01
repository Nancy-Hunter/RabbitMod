const express = require('express')
const app = express()
const mongoose = require('mongoose')

// const path = require('path')
// const crypto = require('crypto')
// const multer = require('multer')
// const gridFsStorage = require('multer-gridfs-storage')
// const grid = require('gridfs-stream')
// const methodOverride = require('method-override')

const connectDB = require('./config/database')
const modRoutes = require('./routes/routerMod')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')

// app.use(methodOverride('_method')) //for images?

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', modRoutes)

// app.get('/',(req, res)=>{
//     db.collection('ModPage').find().toArray()
//     .then(data => {
//         res.render('index.ejs', { info: data })
//     })
//     .catch(error => console.error(error))
// })

// app.post('/modPage', (req, res) => {
//     db.collection('ModPage').insertOne(
//        {
//         petName: req.body.petName,
//         petAge: req.body.petAge, 
//         description: req.body.description,
//         picture: req.body.picture,
//        })
//     .then (result => {
//         console.log('bunny added')
//         res.redirect('/')
//     })
//     .catch(error=> console.error(error))
// })

// app.put ('/putEntry', (req, res) => {
//     db.collection('ModPage').updateOne(
//         {
//             petName: req.body.petNameString,
//         }, 
//         {
//             $set: {
//                 petName: 'edited',
//                 // petAge: req.body.petAge, 
//                 // description: req.body.description,
//                 // picture: req.body.picture,
//             },
//         }
//     )
//     .then(result => {
//         console.log('updated ???')
//         res.json('it updated')
//     })
//     .catch(error => console.error(error))

// })

// app.delete('/deleteEntry', (req, res)=> {
//     db.collection('ModPage').deleteOne({petName: req.body.petNameString})
//     .then(result => {
//         console.log('entry deleted')
//         res.json('rabbit deleted')
//     })
//     .catch(error => console.error(error))
// })


app.listen(process.env.PORT, () => {
    console.log(`The server is running`)
})