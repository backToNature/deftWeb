const Koa = require('koa');
const app = new Koa();
const router = require('./api/router.js');
const compress = require('koa-compress');
const logger = require('koa-logger');
app.use(logger());

app.use(compress({
  threshold: 4096,
  flush: require('zlib').Z_SYNC_FLUSH
}));


app.use(router.routes());
app.use(router.allowedMethods());

console.log('server start!');
app.listen(8081);