const Koa = require('koa')
const static = require('koa-static')
const path = require('path')
const app = new Koa()

app.use(static(path.resolve(__dirname, 'build')))

app.listen(7000, () => {
  console.log('app starting at port 7000')
})
