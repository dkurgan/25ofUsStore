import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { AppRouter } from './AppRouter';
import './Controllers/DeliveryController';
import './Controllers/OrderController';
const app = express();

//Fight with CORS Policy
app.use((req:Request, res:Response, next:NextFunction) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use(bodyParser.json());
app.use(AppRouter.getInstance());

const PORT = process.env.PORT || 4000;

//Production
app.use(express.static(path.join(__dirname, 'client', 'build')));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + "./client/build/index.html"));
        });


app.listen(PORT, () => {
    console.log(`That shit is flying on ${PORT}`);
});
