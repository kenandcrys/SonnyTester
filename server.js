require('dotenv').config();

const server = require('./api/route.js');

const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
server.timeout = 60 * 10 * 1000;