import express from "express";
import dotenv, { config } from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import Connect from "./database/connect.js";
dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

import Router from "./routes/route.js";
import Connection from "./database/connect.js";
app.use("/", Router);

app.listen(port, () => {
  console.log(`Listening to the port ${port} ✈️`);
});

const URL =process.env.MONGODB_URL || `mongodb+srv://nauman:MernSitE@cluster0.jvrwfax.mongodb.net/?retryWrites=true&w=majority`;
// const URL = process.env.MONGODB_URL || `mongodb://0.0.0.0:27017/newTest`;
// const collection = process.env.DB_COLLECTION;
Connect(URL);
