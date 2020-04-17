import { controller } from "./decorators/controller";
import { post } from "./decorators/routes";
import { Request, Response } from 'express';
import { bodyValidate } from "./decorators/bodyValidator";
import mailgun from "mailgun-js";
import parseOrder from "../helpers/parseOrder";
const DOMAIN =  process.env.MG_DOMAIN ||'';
const apiKey = process.env.MG_APIKEY || '';
const mg = mailgun({ apiKey, domain: DOMAIN });

@controller('/api')
class OrderController{
    @post('/ordersend')
    @bodyValidate('order', 'items', 'delivery')
    async sendMessage(req: Request, res: Response) {
        const niceData = parseOrder(req.body);
        try {
            const data = {
    	        from: '25-NewOrder <postmaster@sandbox97f0e9b8205e478481f7b9e2e5dae7d6.mailgun.org>',
                to: 'supp0rt25ofus@yandex.ru',
                subject: 'Whats up Йо',
                html: niceData
            };
            await mg.messages().send(data, (error: mailgun.Error,
                body: mailgun.messages.SendResponse) => {
                console.log(body);
            });
            res.status(200).json({ msg: "sassi" });
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
}