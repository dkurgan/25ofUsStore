import { v4 } from 'uuid';
import { ADD_ITEM, REMOVE_ITEM } from './types'

export const addToCart = (id, size) => dispatch => {
    let uid = v4();
    dispatch ({
        type: ADD_ITEM,
        payload: {
            id,
            size,
            uid
        }
    })
}

export const removeFromCart = uid => {
    return {
        type: REMOVE_ITEM,
        payload: {
            uid
        }
    }
}