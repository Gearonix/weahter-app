import * as axios from "axios";


const API_KEY = '5bc5c0aff481a6ae86f9dd99afde13ae';


const api ={
    findCityApi(value){
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}`)
    },
    forecast4Days(value){
        return axios.get(`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${value}&appid=${API_KEY}`)
    }
}
export default api