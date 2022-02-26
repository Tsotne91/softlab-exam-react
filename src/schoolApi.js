import axios from "axios";

const schoolApi = axios.create({
    baseURL: '/api/school',
    timeout: 5 * 1000
})

export default schoolApi;