const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');

const config = require('./config/key');
const {User} = require("./models/User");

//분석해서 가져오는 것
//application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({extended: true}));
//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI)
.then(() => console.log('MongoDB Connected..'))
.catch(err => console.log('MongoDB error: ',e))


app.get('/',(req,res) => res.send('Hello World~~양'))

app.post('/register',(req,res) => {

    //회원가입 시 필요한 정보들을 client에서 가져오면
    //데이터 베이스에 입력
    const user = new User(req.body);

    user.save((err,userInfo) => {
        if(err) return res.json({succcess: false,err});
        return res.status(200).json({
            success: true
        });
    }); //mongoDB메서드

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
