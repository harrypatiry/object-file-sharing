import axios from 'axios';
axios.defaults.withCredentials = true;

export default async function onPost({data}) {
    axios.post('http://localhost:8000/api/post/create', {data: data})
    //https://javascript.plainenglish.io/object-literals-using-object-property-shorthand-6360825c60ef
}