const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use('/assets',express.static(path.join(__dirname,'assets')))


// 配置解析token的中间件
const expressJWT = require('express-jwt')
const config = require('./config')

app.use(bodyParser.json({limit: '10mb'}))

app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api/,/^\/assets/] }))

const userRouter = require('./router/user')
const employeeRouter = require('./router/employee')
const userInfoRouter = require('./router/userinfo')
app.use('/api',userRouter)
app.use('/administrator',employeeRouter)
app.use('/my',userInfoRouter)




//错误级别中间件
app.use((err, req, res, next) => {
  //验证失败导致的错误
  // if (err instanceof joi.ValidationError) return res.send(err)
  //身份验证失败后的错误
  if (err.name === 'UnauthorizedError') {
      return res.send({ status: 1, message: '身份验证失败' })
  }
  //未知错误
  else {
      return res.send({ status: 1, message: err })
  }
})


app.listen(3007,()=>{
  console.log('api server running at http://127.0.0.1:3007')
})