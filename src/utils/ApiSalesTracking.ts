import axios from "axios";

const ApiSalesTracking = axios.create({
    baseURL: "http://localhost:3000/api"
});

export default ApiSalesTracking;