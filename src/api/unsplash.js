import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID 392021b6e96babdae81e6d39a81bd9319cb86d28af80af66f57d1b0ef3a0415e'
    }
});