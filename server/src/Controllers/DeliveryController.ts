import * as request from "request-promise-native";
import { Request, Response } from 'express'
import { get, post } from './decorators/routes';
import { controller } from './decorators/controller';
import { bodyValidate } from "./decorators/bodyValidator";

const url = "https://robotapitest.dostavista.ru/api/business/1.1/calculate-order";
const headers = { "X-DV-Auth-Token": process.env.DOSTAVISTA_API };

@controller('/api')
class DeliveryController{
    @post('/delivery-calculate')
    @bodyValidate('matter','total_weight_kg','points', 'insurance_amount')
    async calculateDeliveryCost(req: Request, res: Response) {
        const {
            matter,
            total_weight_kg,
            points,
            insurance_amount,
            is_contact_person_notification_enabled
        } = req.body
        console.log(req.body.points, "Ниже реквест");
       try {
        const result = await request.post(url, {
            headers,
            json: true,
            body: {
                matter,
                total_weight_kg,
                insurance_amount,
                is_contact_person_notification_enabled,
                points
            }
        });
           console.log(result);
           if (result) {
               res.send(result);
           }
       } catch (error) {
           console.log(error)
           res.status(400).json({ msg: error.message });
       }
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