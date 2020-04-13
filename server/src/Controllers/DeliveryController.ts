import * as request from "request-promise-native";
import { Request, Response } from 'express'
import { get, post } from './decorators/routes';
import { controller } from './decorators/controller';

const option = {
    url: "https://robotapitest.dostavista.ru/api/business/1.1/calculate-order",
    headers: {
        "X-DV-Auth-Token": "hi"
    }
}

@controller('/api')
class DeliveryController{
    @post('/delivery-calculate')
    async calculateDeliveryCost(req: Request, res: Response) {
        const result = await request.post(option);
        if (result) {
            res.send(result);
        }
        res.send("ЛОХ");
    }
    @get('/')
    bigButton(req: Request, res: Response) {
        res.send(`
        <form method=POST>
        <button>Submit</button>
        </form>
        `)
    }
}