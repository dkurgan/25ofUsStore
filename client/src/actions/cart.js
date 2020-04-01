import { v4 } from 'uuid';
import { ADD_ITEM, REMOVE_ITEM } from './types'

export const addToCart = (id, size) => {
    let uid = v4();
    return {
        type: ADD_ITEM,
        payload: {
            id,
            size,
            uid
        }
    }
}

export const removeFromCart = uid => {
    return {
        type: REMOVE_ITEM,
        payload: {
            uid
        }
    }
}