/* eslint-disable import/no-commonjs */
let express = require('express');    //引入express模块
let Mock = require('mockjs');
let mockApiList = require('./arrayMock.json')
//引入mock模块
let app = express();
/**
 * 配置test.action路由
 * @param  {[type]} req  [客户端发过来的请求所带数据]
 * @param  {[type]} res  [服务端的相应对象，可使用res.send返回数据，res.json返回json数据，res.down返回下载文件]
 */
app.all('/test.action', function (req, res) {
  res.send('hello world');
});

console.log(mockApiList.list)
mockApiList.list.map(item => {
  app.get(item.port, (req, res) => {
    if (item.type === 'Array') {
      res.json(Mock.mock({
        'code': 0,
        'msg': '成功',
        'data|9': item.data
      }))
    } else {
      res.json(Mock.mock({
        'code': 0,
        'msg': '成功',
        'data': item.data
      }))
    }
  })
})
app.get('/user/info', function (req, res) {
  res.json(Mock.mock({
    code: 0,
    'data|5': [
      {
        'key|+1': 1,
        'words|1': ['哈哈', '嘿嘿', 'biubiu'],
        'activity|1': ['吃饭', '睡觉', '打豆豆']
      }
    ],
    msg: '成功'
  }))
})

/*为app添加中间件处理跨域请求*/
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.listen('8899');