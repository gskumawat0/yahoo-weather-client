import axios from 'axios';
export function apiCall(method, url, data) {
	return new Promise((resolve, reject) => {
		return axios({
			method,
			url,
			data
		})
			.then(res => {
				if (!res.data.success) {
					return reject(new Error(res.data.message));
				}
				return resolve(res.data);
			})
			.catch(err => {
				if (err.response) {
					return reject(new Error(err.response.data));
				}
				if (err.request) {
					return reject(new Error('something went wrong. please try again later.'));
				}
				return reject(err);
			});
	});
}
