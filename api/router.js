const Router = require('koa-router');
const router = new Router();
const kb1 = require('./1kb.json');

router.all('/api/getDataBySize', async (ctx, next) => {
  ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  ctx.set('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  ctx.set('Access-Control-Allow-Origin', ctx.headers.origin);
  let size = 1;
  let data = '';
  if (ctx.query.size) {
    size = parseInt(ctx.query.size);
  }
  for (let i = 0 ; i < size; i++) {
    data += kb1.data;
  }
  ctx.body = {
    data
  }
});

router.all('/', async (ctx, next) => {
  ctx.body = '我就是新闻栏目';
})


module.exports = router;