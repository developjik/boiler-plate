// 백엔드의 시작점
const express = require('express') // express module 가져오기
const app = express() // 새로운 express 앱 생성
const port = 3000 

const bodyParser = require('body-parser') // body-parser 가져오기 
const { User } = require("./models/User") // User Model 가져오기

const config = require('./config/key')
 
app.use(bodyParser.urlencoded({extended: true})) 
app.use(bodyParser.json()) 

const mongoose = require('mongoose') // mongoose 가져오기
mongoose.connect(config.mongoURI, 
{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
.then(() => console.log('Mongo DB Connected'))
.catch((err) => console.log(err)) // mongoose를 통해 mongo DB connect 및 연결 확인 및 error 처리


//root directory Hello World! print
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/register', (req, res) => {
  //회원가입 할 때 필요한 정보들을 client에서 가져오면 데이터베이스에 넣기
  const user = new User(req.body)
  user.save((err, userInfo) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({success: true})
  })

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})