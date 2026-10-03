const assert = require('assert');
const app = require('./app');
const server = app.listen(0, async () => {
  const res = await fetch(`http://localhost:${server.address().port}/`);
  assert.strictEqual(res.status, 200);
  console.log('Test passed');
  server.close();
});