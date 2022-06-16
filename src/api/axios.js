import axios from "axios";

export default axios.create({
    // baseURL: "https://cors-anywhere.herokuapp.com/http://projectpondo.com:8080/api"
    baseURL: "http://projectpondo.com:8080/api"
});