import 'reflect-metadata';
import { Methods, MetaDataKeys } from './Enums';

export function routesBuilder(method: string) {
    return function (path: string) {
        return function (target: any, key: string, desc: PropertyDescriptor) {
            Reflect.defineMetadata(MetaDataKeys.Method, method, target, key);
            Reflect.defineMetadata(MetaDataKeys.Path, path, target, key);
        }
    }
}

export const get = routesBuilder(Methods.Get);
export const post = routesBuilder(Methods.Post);