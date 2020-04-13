import { controller } from "./decorators/controller";
import { post } from "./decorators/routes";
import { Request, Response } from 'express';

@controller('/api')
class OrderController{
    @post('/ordersend')
    async sendMessage(req: Request, res: Response) {
        res.status(200).json({ msg: "sassi" });
    }
}