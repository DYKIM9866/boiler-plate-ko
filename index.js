const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kdy950930:1q2w3e4r!@cluster0.lik3n.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected..'))
.catch(err => console.log('MongoDB error: ',e))


app.get('/',(req,res) => res.send('Hello World~~헬로우'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
