const express = require('express');
const helmet = require("helmet");
const cors = require('cors');

//bring in routers

//instantiate server
const server = express();

//apply global middleware
server.use(helmet());
server.use(cors());
server.use(express.json());

//either assign routes, or wrap server in configureRoutes

server.get('/', (req, res)=> {
    res.status(200).send("Build week server up and running")
})

module.exports = server;
