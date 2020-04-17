import { DELIVERY_COST,SEND_ORDER } from "../actions/types";

const initState = 200

const Delivery = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case DELIVERY_COST:
            return payload.payment_amount;
        case SEND_ORDER:
            return payload
        default:
            return state;
    }
}

export default Delivery