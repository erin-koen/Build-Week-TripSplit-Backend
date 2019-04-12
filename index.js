require('dotenv').config();

const server = require('./API/server.js');

const port = process.env.PORT || 8888;

server.listen(port, ()=>{
    console.log(`\n **** Server running on port ${port} ****`)
})