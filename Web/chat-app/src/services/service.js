import axios from 'axios';
import global_config from '../config';

import { extend } from '../utilities/extend';

export function get(url, config) {
    config = extendConfig(config);

    return axios.get(`${global_config.services.BACKEND_URL}${url}`, config);
}

export function post(url, data, config) {
    config = extendConfig(config);

    return axios.post(`${global_config.services.BACKEND_URL}${url}`, data, config);
}

export function put(url, data, config) {
    config = extendConfig(config);

    return axios.put(`${global_config.services.BACKEND_URL}${url}`, data, config);
}

function extendConfig(config) {
    const defaults = {
        headers: {
            "asdf": "asdaf"
        }
    }

    let toReturn = extend(config, defaults);
    return toReturn;
}