import axios from 'axios';

export default class CookBookService {
    static getCookList(){
        const url = "api/cook/get-list";
        return axios.get(url);
    }
}