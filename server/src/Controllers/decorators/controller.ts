import 'reflect-metadata'
import { Methods, MetaDataKeys } from './Enums'
import { AppRouter } from '../../AppRouter';

export function controller(pathPrefix: string) {
    return function (target: Function) {
        const router = AppRouter.getInstance();
        for (let key in target.prototype) { // loop thru all prop in class
            const method: Methods = Reflect.getMetadata(MetaDataKeys.Method, target.prototype, key);
            const path = Reflect.getMetadata(MetaDataKeys.Path, target.prototype, key);
            const routeHandler = target.prototype[key];
            if (path) {
                router[method](`${pathPrefix}${path}`, routeHandler);
            }
        }
    }
}