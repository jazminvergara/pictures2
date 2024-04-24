import axios from 'axios'

const searchImage = async(term) =>{
    const url = 'htpp:/api.unplash.com/search/photos/?client_id=MwnjueZW7XqxK50jARkpNo7j6JlTFPErQc5guqJDh5A'
    const response = await axios.get(url,{
        params: {
            query: term
        }
    })
    console.log(term)
    console.log(response.data.results)

    return response.data.results
}
export default searchImage