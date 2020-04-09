import api from '../api';
//request to dostavista.ru calculate delivery cost
export const calculateDelivery = order => async dispatch =>{
    const res = await api.post('/calculate-order', {
            matter: order.matter, //type of item
            vehicle_type_id: 6, //what vehicle 6 - by foot
            total_weight_kg: order.weight, //weight
            insurance_amount: order.insurance, //insurance
            is_contact_person_notification_enabled: true, 
            backpayment_details: order.payment, //payment back
            points: [{
                address: order.warehouse
            },{ // order delivery details
                address: order.postAddress,
                contact_person: {
                    phone: order.mobile,
                    name: order.firstName,
                    taking_amount: order.total, //how much cash to collect from reciver
                    buyout_amount: order.buyout, //how much cash should courier have
                    note: order.comment,
                    is_order_payment_here: order.payment // where courier will get paid
                }
            }]
    });
    console.log(res.data);
}