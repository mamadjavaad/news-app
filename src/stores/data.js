import { reactive, toRefs } from "vue";
import axios from '@/utils/axios.js';
//state datas 
const state = reactive({
   apiKey:import.meta.env.VITE_APP_API_KEY, searchModel: null, newsData: null, category: null

})
//getting data from api
const getData = async () => {
    if (!state.searchModel) { //if the searchmodel is null so we would get the data witout filtering by text
        if (!state.category) {//if the category is null so we would get all categories data
            await axios.get(`news?apikey=${state.apiKey}&language=en&country=us&image=1&size=9`)
                .then(response => {
                    state.newsData = response.data.results;
                })
                .catch(error => {
                    console.log(error.message);
                });
        } else {//when category is not null so its selected and we filter by category
            await axios.get(`news?apikey=${state.apiKey}&language=en&image=1&size=9&category=${state.category}`)
                .then(response => {
                    state.newsData = response.data.results;
                })
                .catch(error => {
                    console.log(error.message);
                });
        }
    } else {//if search is equal to something so we filter by text
        state.newsData=null;
        if (!state.category) { //if category is null so we filter by text only
            await axios.get(`news?apikey=${state.apiKey}&language=en&country=us&image=1&size=9&q=${state.searchModel}` )
                .then(response => {
                    state.newsData = response.data.results;
                })
                .catch(error => {
                    console.log(error.message);
                });
        } else {//here when both category and searchmodel are not null so we filter by both
            await axios.get(`news?apikey=${state.apiKey}&language=en&image=1&size=9&category=${state.category}&q=${state.searchModel}` )
                .then(response => {
                    state.newsData = response.data.results;
                })
                .catch(error => {
                    console.log(error.message);
                });
        }
    }
}
export default function useState() {
    return {
        ...toRefs(state), getData
    }
}