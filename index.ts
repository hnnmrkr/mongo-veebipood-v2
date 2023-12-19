import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import articleController from "./controllers/articleController";
import commentController from "./controllers/commentController";
import authorController from "./controllers/authorController";

mongoose.connect("mongodb+srv://root:qwerty1@mongo-veebipood.uymunbx.mongodb.net/test");
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app: Express = express();

app.use(express.json()); // Body parsing middleware

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', articleController);
app.use('/', commentController);
app.use('/', authorController);

app.listen(3000, () => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});