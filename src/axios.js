import axios from "axios";
const instance = axios.create({
    baseURL: "https://newsdata.io/api/1"
});
export default instance;