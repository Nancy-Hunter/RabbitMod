const Pet = require('../models/petModel')

module.exports = {
    getPets: async (req,res)=>{
        console.log(req)
        try{
            const petItems = await Pet.find()
            res.render('index.ejs', {pets: petItems})
        }catch(err){
            console.log(err)
        }
    },
    createPet: async (req, res)=>{
        try{
            await Pet.create({
                petName: req.body.petName,
                petAge: req.body.petAge, 
                description: req.body.description,
            })
            console.log('Pet has been added!')
            res.redirect('/')
        }catch(err){
            console.log(err)
        }
    },
    updatePet: async (req, res)=>{
        try{
            await Pet.findOneAndUpdate(
                {
                    petName: req.body.petNameString,
                },
                {
                    petName: 'edited',
                })
            console.log('updated')
            res.json('finished update')
        }catch(err){
            console.log(err)
        }
    },
    deletePet: async (req, res)=>{
        console.log(req.body.petNameString)
        try{
            await Pet.findOneAndDelete({petName: req.body.petNameString})
            console.log('Entry Deleted')
            res.json('Finished Delete')
        }catch(err){
            console.log(err)
        }
    }
}   