import axios from 'axios/index';

const fetchEmployee = () => axios({
    method: 'GET',
    url: 'http://localhost:3000/api/customer'
});

module.exports = {
    fetchEmployee
};