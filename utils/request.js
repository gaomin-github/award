import axios from "axios";
let request = axios.create({
  timeout: 1000 * 30,
  headers: {},
});
export default request;
