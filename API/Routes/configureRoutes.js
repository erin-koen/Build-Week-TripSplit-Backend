
//below is from Authentication sprint challenge

// const axios = require("axios");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const { authenticate } = require("../auth/authenticate");
// const Users = require("../database/dbHelper.js");

// module.exports = server => {
//   server.post("/api/register", register);
//   server.post("/api/login", login);
//   server.get("/api/jokes", authenticate, getJokes);
// };

// function register(req, res) {
//   const user = req.body;
//   //encrypt password
//   user.password = bcrypt.hashSync(user.password, 4);
//   //might need a .first here
//   Users.addUser(user)
//     .then(user => {
//       res.status(201).json(user);
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// }

// function login(req, res) {
//   const { username, password } = req.body;
//   Users.findUserByFilter({ username })
//     .first()
//     .then(user => {
//       //proceed if the user exists and the hash of the password provided matches the password stored in db
//       if (user && bcrypt.compareSync(password, user.password)) {
//         //generate and attach token
//         const token = generateToken(user);

//         res.status(200).json({ message: `Welcome, ${username}.`, token });
//       } else {
//         res.status(401).json({ message: `Bad credentials, please try again.` });
//       }
//     })
//     .catch(err => {
//       res.status(500).json({
//         message: `The server encountered one of many possible errors. I'm sorry I can't be more specific.`
//       });
//     });
// }

// function getJokes(req, res) {
//   const requestOptions = {
//     headers: { accept: "application/json" }
//   };
//   const apiRoot = `https://api.nomics.com/v1;`
//   const apiKey = "7602d7144b964c3832a2d3f4a60fed04";
//   const endpoint = `${apiRoot}currencies?key${apiKey}/`
//   axios
//     .get(endpoint)
//     .then(response => {
//       res.status(200).json(response.data.results);
//     })
//     .catch(err => {
//       res.status(500).json({ message: "Error Fetching Jokes", error: err });
//     });
// }

// const generateToken = user => {
//   const payload = {
//     subject: user.id,
//     username: user.username
//   };

//   const secret = "Replace this with a dotENV";

//   const options = {
//     expiresIn: "1d"
//   };
//   return jwt.sign(payload, secret, options);
// };
