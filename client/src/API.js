import axios from 'axios';

export default {
	
	sendEmail: function(info){
		console.log("email info: ",  info);
		return axios.post('/contact', info);
	}
}