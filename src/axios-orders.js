import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-ff4ef.firebaseio.com/'
});

export default instance;