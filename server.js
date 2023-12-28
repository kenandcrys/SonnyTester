require('dotenv').config();

const route = require('./api/route.js');

const port = process.env.PORT || 8000;
route.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
route.timeout = 60 * 10 * 1000;