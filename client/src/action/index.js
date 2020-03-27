import { v4 } from 'uuid';

export const addToCart = (id, msg, color) => async dispatch => {
    dispatch ({
        type: "ITEM_SELECTED",
        id,
        payload: {
            alId: id,
            msg,
            color
        }
    })
    setTimeout(()=>dispatch({type: "REMOVE_ALERT",id}), 3000)
}

export const deleteFromCart = (id) =>{
    return {
        type: "ITEM_DELETE",
        id
    }
}