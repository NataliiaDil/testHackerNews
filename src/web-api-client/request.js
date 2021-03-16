import axios from 'axios'

const request = (config) => axios.request(config).then((resp) => resp.data)

export default request
