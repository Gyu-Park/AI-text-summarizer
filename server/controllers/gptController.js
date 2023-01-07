const axios = require("axios");

const summarizeText = async (req, res) => {

    const text = req.body.data;

    const options = {
        method: 'POST',
        url: process.env.X_RAPIDAPI_URL,
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
            'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST
        },
        data: {
            text,
            'num_sentences': 3
        }
    };

    axios.request(options).then(function (response) {
        res.status(200).json({
            success: true,
            data: response.data.summary
        });
    }).catch(function (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: 'Error occurs'
        });
    });

};

module.exports = { summarizeText };