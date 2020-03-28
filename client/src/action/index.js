import { v4 } from 'uuid';
import {
    ITEM_DELETE,
    ITEM_SELECTED,
    ADD_ALERT,
    REMOVE_ALERT
} from './types'

export const addToCart = (id, size) => async dispatch => {
    dispatch ({
        type: ITEM_SELECTED,
        payload: {
            id,
            size
        }
    })
}

export const removeItem = (index) =>{
    return {
        type: ITEM_DELETE,
        payload: {
            index
        }
    }
}

export const setAlert = (msg, color) => dispatch =>{
    const id = v4();
    dispatch({
        type: ADD_ALERT,
        payload: {
            msg,
            color,
            id
        }
    });
    setTimeout(() => dispatch({
        type: REMOVE_ALERT,
        payload: id
    }), 3000);
}