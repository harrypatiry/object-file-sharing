import axios from 'axios';
axios.defaults.withCredentials = true;

export default async function onPost(formData) {
    try {
        return await axios.post('http://localhost:8000/api/post/create', formData, { headers: {'Content-Type': 'multipart/form-data'}})
      } catch (error) {
        console.log(error.response)
      }
}