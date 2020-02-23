import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-my-burger-80c9a.firebaseio.com/'
})

export default instance;