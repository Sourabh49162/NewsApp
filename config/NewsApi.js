import axios from 'axios';
import {base_url, country_code, api_key} from './RestAPIConfig';


const NewsApi = category => {
    axios.get(`${base_url}${country_code}&category=${category}`, {headers:{'X-API-KEY': api_key}}).then(
        response => {
            console.table(response.data.articles)
            return response.data.articles;
        }, error => {
            return 'No Data Found! Some Error!';
        }
    );
}


export default NewsApi;