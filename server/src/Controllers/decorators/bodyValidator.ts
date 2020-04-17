import 'reflect-metadata'
import { MetaDataKeys } from './Enums'
import { Request, Response, NextFunction, RequestHandler } from 'express';

export function bodyValidate(...keys: string[]) { 
    return (target: any, key: string, desc: PropertyDescriptor) => {
        Reflect.defineMetadata(MetaDataKeys.Validate, keys,  target, key)
    }
}

export function bodyValidator(keys: string): RequestHandler{
    return function (req: Request, res: Response, next: NextFunction) {
        if (!req.body) {
            res.status(422).send('Invalid request');
            return;
        }
        for (let key of keys) { //iterate over the values of obj/arr
            console.log(req.body);
            if (!req.body[key]) {
                res.status(422).send(`Missing property ${key}`);
                return;
            }
        }
        next();
    };
}