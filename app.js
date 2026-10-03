const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello From jeenkins tutorial'));
module.exports = app;
if (require.main === module) app.listen(3000, () => console.log('Running on 3000'));