import axios from 'axios'

const url = 'http://localhost:9000/stock';

export const getUsers = async (id) => {
    id = id || '';
    console.log(getUsers);
    return await axios.get(`${url}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.patch(`${url}/${id}`, user)
}

export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}