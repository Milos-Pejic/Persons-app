import axios from 'axios'

const BASE_URL ="http://localhost:3005/persons"

 export const loadUsers = ()=>axios.get(`${BASE_URL}`)

 export const deletePerson =  id => axios.delete(`${BASE_URL}/${id}`)

 export const addPerson = (person) => axios.post(`${BASE_URL}`, person);

 export const loadPerson = id =>  axios.get(`${BASE_URL}/${id}`)

 export const updatePerson = (id, person) => axios.put(`${BASE_URL}/${id}`, person);

