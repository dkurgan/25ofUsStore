import axios from 'axios';

export default axios.create({
    baseURL: 'https://robotapitest.dostavista.ru/api/business/1.1',
    headers: {
        "X-DV-Auth-Token": "hello:)"
    }
})