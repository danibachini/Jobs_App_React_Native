
const port = 3000
const express = require('express');
require('dotenv').config();
const axios = require('axios');
const app = express();
const cors = require('cors');
app.use(cors());

app.listen(3000, () => console.log(`Server is running on ${port}` ))

const rapidApiKey = process.env.EXPO_PUBLIC_RAPID_API_KEY;

app.get('/:endpoint', async(req, res) => {

    const endpoint = req.params.endpoint;
    const num_pages = req.query.num_pages;
    const query = req.query.query;

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
        },
        params: {
            query: `${query}`,
            num_pages: `${num_pages}`
        },
   };
   
    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        console.error(error);
    });
})
