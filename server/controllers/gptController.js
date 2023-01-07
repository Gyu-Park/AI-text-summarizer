const axios = require("axios");

const summarizeText = async (req, res) => {

    const { text } = req.body;

    try {
        const response = await axios.request({
            url: X_RAPIDAPI_URL,
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': X_RAPIDAPI_KEY,
                'X-RapidAPI-Host': X_RAPIDAPI_HOST
            },
            data: `{"text": ${text},"num_sentences":3}`
        });

        res.status(200).json({
            success: true,
            data: response.data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'The image could not be generated'
        });
    }
};

module.exports = { summarizeText };