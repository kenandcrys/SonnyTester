const server = require('./Backend/api/server.js');

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`Magic happening on http://localhost:${PORT}`);
});