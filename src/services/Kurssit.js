import axios from 'axios'

const baseUrl = 'https://localhost:7276/api/kurssit'

const getAll = async () => {
    const req = axios.get(baseUrl)
    return req.then(res => res.data)
}

const create = newObj => {
    console.log(newObj)
    return axios.post(baseUrl, newObj)
}

const remove = id => axios.delete(`${baseUrl}/${id}`)

export default {getAll, create, remove}