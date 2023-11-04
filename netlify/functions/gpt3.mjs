exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const requestBody = JSON.parse(event.body);
    const userQuestion = requestBody.question;

    // Add a delay between requests (e.g., 1 second) to avoid rate limiting
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GPT3_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: userQuestion,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      console.error(`Error from GPT-3 API: ${errorMessage}`);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: error.message }),
      };
    }

    const responseBody = await response.json();
    const botReply = responseBody.choices[0].message.content;

    return {
      statusCode: 200,
      body: JSON.stringify(botReply),
    };
  } catch (error) {
    console.error(`Internal server error: ${error}`);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
