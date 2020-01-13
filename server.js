const qs = require('qs')

const express = require('express')
var bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
var appData = require('./data.json')//加载本地数据文件
var queryHiddenLog = appData.queryHiddenLog
var queryHiddenLog2 = appData.queryHiddenLog2
var queryHiddenLog3 = appData.queryHiddenLog3
var unitInfo = appData.unitInfo
var section = appData.section1  
var section2 = appData.section2
var section3 = appData.section3
var queryAlarmLog = appData.queryAlarmLog
var queryAlarmLog2 = appData.queryAlarmLog2
var queryAlarmLog3 = appData.queryAlarmLog3
var user = appData.user
var login = appData.login
var logout = appData.logout
var apiRoutes = express.Router()
var curPage = 0
var pageSize = 0

app.all('*', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.setHeader('Access-Control-Allow-Credentials','true')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization, Cookie');  
  res.setHeader('Access-Control-Expose-Headers', 'Authorization, Cookie') 
  
  // res.setHeader("Content-Type", "application/json;charset=utf-8"); 
  next();
})
app.use('/api', apiRoutes)
app.post('/api/queryHiddenLog', (req, res) => {
  console.log('queryHiddenLog req============')
  console.log(req)
  console.log('queryHiddenLog res============')
  console.log(res)
  console.log('queryHiddenLog req.body============')
  console.log(req.body)
  console.log('queryHiddenLog req.header============')
  console.log(req.headers)
  var obj = req.body
  curPage = obj.curPage
  pageSize = obj.pageSize
  console.log(curPage)
  // console.log(res.headers.Authorization)
  if(curPage === '1'){
    res.json({
      errno: 0,
      data: queryHiddenLog
    }) // 接口返回json数据，上面配置的数据appData就赋值给data请求后调用
  } else if(curPage === '2'){
    res.json({
      errno: 0,
      data: queryHiddenLog2
    }) 
  } else if(curPage === '3'){
    res.json({
      errno: 0,
      data: queryHiddenLog3
    }) 
  } 
})
app.post('/api/queryAlarmLog', (req, res) => {
  console.log('req.body============')
  console.log(req.body)
  var obj = req.body
  curPage = obj.curPage
  pageSize = obj.pageSize
  console.log(typeof curPage)
  console.log(curPage)
  console.log(curPage === '1')
  if(curPage === '1'){
    res.json({
      errno: 0,
      data: queryAlarmLog
    }) // 接口返回json数据，上面配置的数据appData就赋值给data请求后调用
  } else if(curPage === '2'){
    res.json({
      errno: 0,
      data: queryAlarmLog2
    }) 
  } else if(curPage === '3'){
    res.json({
      errno: 0,
      data: queryAlarmLog3
    }) 
  } 
}),
app.get('/api/appData', (req, res) => {
    res.json({
      errno: 0,
      data: appData
    }) // 接口返回json数据，上面配置的数据appData就赋值给data请求后调用
  }),
  app.post('/api/main', (req, res) => {
    res.json({
      errno: 0,
      data: unitInfo
    })
  }),
  app.get('/api/section1', (req, res) => {
    res.json({
      errno: 0,
      data: section
    })
  }),
  app.get('/api/section2', (req, res) => {
    res.json({
      errno: 0,
      data: section2
    })
  }),
  app.get('/api/section3', (req, res) => {
    res.json({
      // 这里是你的json内容
      errno: 0,
      data: section3
    })
  }),
  app.get('/api/login/do_login', (req, res) => {
    console.log('login req.query============')
    console.log(req.query)
    res.json({
      // 这里是你的json内容
      errno: 0,
      data: login
    })
  }),
  app.get('/api/logout/do_logout', (req, res) => {
    console.log('logout req.query============')
    console.log(req.query)
    res.json({
      // 这里是你的json内容
      errno: 0,
      data: logout
    })
  }),
  app.get('/api/user', (req, res) => {
    res.json({
      // 这里是你的json内容
      errno: 0,
      data: user
    })
  })
  app.listen(8083, ()=>{
    console.log('Server is running at http://localhost:8083')
})