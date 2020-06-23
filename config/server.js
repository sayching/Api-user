import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv"

dotenv.config();
const server = express();

server.use(bodyParser.json());

import setRoutes from "./routes";
setRoutes(server);

export default server;