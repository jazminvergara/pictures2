import axios from 'axios'

const searchImage = async(term) =>{
    const url = ''
              = 'htpps:/api.unplash.com/search/photos/?client_id'
    const response = await axios.get(url,{
        params: {
            query:'cars'
        }
    })
    console.log(response)
}
export default searchImage