const express = require('express')
const app = express()
const PORT = 8000



const ChiangMaiRestaurants = {
    'king of noodles' : {
        address: "",
        favoriteDish: 'Crispy Pork, noodles, and wonton dumplings',
        hours: '2PM-10PM',
        price: '60 baht',
    }, 
    'Good Smells' : {
        address: "",
        favoriteDish: 'Pad Kee Mow',
        hours: '7AM -2PM',
        price: '50-60 baht',
    },'Good Smells 2' : {
        address: "",
        favoriteDish: 'Crispy Pork and morning glory over rice with an egg',
        hours: '10AM -5PM',
        price: '50-60 baht',
    },'Je Hoa' : {
        address: "",
        favoriteDish: 'chicken or shrimp dumplings with a bowl of noodles and sliced pork AND mantou desser',
        hours: '11AM -7PM',
        price: '90-120 baht',
    },
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/API', (req, res) => {
    res.json(ChiangMaiRestaurants)
})
app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}`)
})