import axios from 'axios';

export default axios.create({
  baseURL: 'http://47f4d0c2.ngrok.io'
  // update every 8 hours
});
