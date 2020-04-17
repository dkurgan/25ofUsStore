import api from '../api'
import { setAlert } from './alert';
import { DELIVERY_COST, SEND_ORDER } from './types';

  // contact_person: {
                //     phone: order.mobile,
                //     name: order.firstName,
                //     // taking_amount: JSON.stringify(order.total), //how much cash to collect from reciver
                //     buyout_amount: order.buyout, //how much cash should courier have
                //     // note: order.comment,
                //     is_order_payment_here: order.payment // where courier will get paid
                // }

//request to dostavista.ru calculate delivery cost
export const calculateDelivery = order => async dispatch =>{
    try {
        const res = await api.post('/delivery-calculate', {
            matter: order.matter, //type of item
            vehicle_type_id: 6, //what vehicle 6 - by foot
            total_weight_kg: order.weight, //weight
            insurance_amount: order.insurance, //insurance
            is_contact_person_notification_enabled: true, 
            backpayment_details: order.payment, //payment back - on server
            points: [{
                address: order.warehouse
            },{ // order delivery details
                address: order.postAdress
            }]
        }, { headers: { 'Content-Type': 'application/json' } });
        console.log({ res });
        dispatch({
            type: DELIVERY_COST,
            payload: res.data.order
        })
    } catch (err) {
        dispatch(setAlert(err.msg, "red", 888));
    }
}

export const sendOrder = (order, items, newSize, delivery) => async dispatch => {
    try {
        const res = await api.post('/ordersend', {
            order,
            items,
            newSize,
            delivery
        }, { headers: { 'Content-Type': 'application/json' } })
        console.log(res.data, "RESULT")
        dispatch({
            type: SEND_ORDER,
            payload: res.data
        })
        dispatch(setAlert('Ваш заказ отправлен в обработку, менеджер скоро с вами свяжется',
            'green', 888, 6000));
    } catch (err) {
        dispatch(setAlert(err.msg, "red", 888));
    }
}