const express = require('express');
const server = require('./server.js');

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`Magic happening on ${PORT}`);
});