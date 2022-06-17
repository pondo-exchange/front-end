import axios from "axios";

export default axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/http://projectpondo.com:8080/api"  // To be used when needing to bypass CORS
    // baseURL: "http://projectpondo.com:8080/api"
});