import { REMOVE_ALERT, ADD_ALERT } from './types';
import { v4 } from 'uuid';

export const setAlert = (msg, color) => dispatch => {
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