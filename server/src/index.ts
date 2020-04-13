import express, { NextFunction,Request, Response } from 'express'
import { AppRouter } from './AppRouter';
import './Controllers/DeliveryController';

const app = express();

//Fight with CORS Policy
app.use((req:Request, res:Response, next:NextFunction) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(AppRouter.getInstance());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`That shit is flying on ${PORT}`);
});
