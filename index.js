// 백엔드의 시작점
const express = require('express') // express module 가져오기
const app = express() // 새로운 express 앱 생성
const port = 3000 

const mongoose = require('mongoose') // mongoose 가져오기
mongoose.connect('mongodb+srv://developjik:Mi12151506!@boiler-plate.so3qz.mongodb.net/<dbname>?retryWrites=true&w=majority', 
{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('Mongo DB Connected'))
  .catch((err) => console.log(err)) // mongoose를 통해 mongo DB connect 및 연결 확인 및 error 처리


//root directory Hello World! print
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})