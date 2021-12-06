import axios from 'axios';

function setAuthHeader (token) {
    if (token) {
        // add jwt to request headers
        axios.defaults.headers.common['Authorization'] = token;
        console.log(axios.defaults.headers.common);
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default setAuthHeader;