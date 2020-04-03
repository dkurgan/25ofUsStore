import hoodieOne from '../images/pants_1.jpeg';
import tshirt from '../images/hoodie_2.jpeg';
import bluzka from '../images/pants_1.jpeg';
import hoodie from '../images/hoodie_1.jpeg'

const initState= {
    items: [
        {id: 1, title: "Black hoodie", desc: "Top hoodie for everyone", price: 3200, src: hoodieOne},
        {id: 2, title: "White hoodie", desc: "Top hoodie for everyone", price: 3200, src: tshirt},
        {id: 3, title: "Black pants", desc: "Top pants for everyone", price: 2400, src: bluzka},
        {id: 4, title: "White pants", desc: "Top pants for everyone", price: 2400, src: hoodie},
    ]
}

const itemReducer = (state = initState) => {
            return state;
}

export default itemReducer;