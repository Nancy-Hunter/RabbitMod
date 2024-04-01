const express = require('express')
const router = express.Router()
const modController = require('../controllers/modController') 
// const { ensureAuth } = require('../middleware/auth')

router.get('/', /*ensureAuth,*/ modController.getPets)

router.post('/modPage', modController.createPet)

router.put('/putEntry', modController.updatePet)

router.delete('/deleteTodo', modController.deletePet)

module.exports = router