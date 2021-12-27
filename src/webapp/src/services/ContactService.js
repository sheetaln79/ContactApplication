import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

const headers={
'Access-Control-Allow-Origin': '*',
'Access-Control-Allow-Credentials': true,
'Content-Type': 'application/json'
}
export const getContact=async() =>{
    try {
      const response = await axios.get(`${BASE_URL}/contacts`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
}

export const getContactById=async(id) =>{
    try {
      const response = await axios.get(`${BASE_URL}/contacts/${id}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

export const saveContact= async(data)=> {
    try {
      const response = await axios.post(`${BASE_URL}/contacts`,data);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

export const updateContact= async(data)=> {
    try {
      const response = await axios.put(`${BASE_URL}/contacts`,data);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

export const deleteContact=async(id) =>{
    try {
      const response = await axios.delete(`${BASE_URL}/contacts/${id}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

export const searchContact=async(val) =>{
    try {
        const response = await axios.get(`${BASE_URL}/contacts/0/${val}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}