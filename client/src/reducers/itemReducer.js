import hoodieOne from '../images/hoodie_1.jpeg';
import hoodieTwo from '../images/hoodie_2.jpeg';
import pantsOne from '../images/pants_1.jpeg';

const initState= {
    items: [
        {id: 1, title: "Black hoodie", desc: "Top hoodie for everyone", price: 3200, src: hoodieOne},
        {id: 2, title: "White hoodie", desc: "Top hoodie for everyone", price: 3200, src: hoodieTwo},
        {id: 3, title: "Black pants", desc: "Top pants for everyone", price: 2400, src: pantsOne},
        {id: 4, title: "White pants", desc: "Top pants for everyone", price: 2400, src: pantsOne},
    ]
}

const itemReducer = (state = initState) => {
            return state;
}

export default itemReducer;