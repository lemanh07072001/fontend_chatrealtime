import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',

  },
});

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('authToken');
    if(token){
      config.headers['Authorization'] = `Bearer ${token}`;  // Thêm token vào header request
    }

    return config;
  }, function (error) {
    // Làm gì đó với lỗi request
    return Promise.reject(error);
  });

instance.interceptors.response.use(
  (response) => {
    if (response.status === 200 && response.request.responseURL.includes('/login')) {

      localStorage.setItem('authToken', JSON.stringify(response.data.token.plainTextToken))
      return response;
    }
  },
  (error) => {
    console.log(error);

    return Promise.reject(error);
  }
);

export default instance;
// In your component: