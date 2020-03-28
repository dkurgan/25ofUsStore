import { combineReducers } from 'redux';
import alert from './alertReducer';
import cart from './cartReducer';

export default combineReducers({
    alert,
    cart
})
