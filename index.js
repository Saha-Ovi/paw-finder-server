const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');


const app = express();
dotenv.config();
const PORT = process.env.PORT||5000;

// middleware
app.use(express.json());
app.use(cors());



