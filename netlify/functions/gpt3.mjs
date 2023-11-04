// serverlessFunction.js

const axios = require('axios');

exports.handler = async (event) => {
  try {
    const userQuery = event.queryStringParameters.query; // Retrieve user's query from the client
    const gptApiKey = process.env.GPT3_API_KEY; // Retrieve your GPT-3 API key from environment variables

    // Make a request to the GPT-3 API
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        query: userQuery,
        // Other GPT-3 parameters
      },
      {
        headers: {
          Authorization: `Bearer ${gptApiKey}`,
        },
      }
    );

    // Process the GPT-3 response and return it to the client
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
