// import the required dependencies
const fetch = require('node-fetch')


exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({  error: "Sorry, I was not able to elaborate your question due to a connection error, please try asking the question again or ask a more precise question." }),
    };
  }

  const requestBody = JSON.parse(event.body);
  const userQuestion = requestBody.question;

  try {
  // Create a thread
    var thread = await fetch("https://api.openai.com/v1/threads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "OpenAI-Beta": 'assistants=v1',
      }
    });

    if (!thread.ok) {
      const errorMessage = await thread.text();
      console.error(`Error from GPT-3 API: ${errorMessage}`);
      return {
        statusCode: thread.status,
        body: JSON.stringify({ error: "Sorry, I was not able to elaborate your question due to a connection error, please try asking the question again or ask a more precise question." }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Sorry, I was not able to elaborate your question due to a connection error, please try asking the question again or ask a more precise question." }),
    };
  }

  var thread =  await thread.json();
  const threadId = thread.id;

  const message = {
    role: 'user',
    content: userQuestion,
  };

  try {
    // Pass in the user question into the existing thread
    await fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'OpenAI-Beta': 'assistants=v1',
      },
      body: JSON.stringify(message),
    })
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Sorry, I was not able to elaborate your question due to a connection error, please try asking the question again or ask a more precise question." }),
    };
  }

  const assistantInst = {
    assistant_id: 'asst_ITu4cEdOGACu1qlRpS6t0SVh',

  };

  try {
    // Use runs to wait for the assistant response and then retrieve it
    var run = await fetch(`https://api.openai.com/v1/threads/${threadId}/runs`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
        'OpenAI-Beta': 'assistants=v2',
      },
      body: JSON.stringify(assistantInst),
    })

    if (!run.ok) {
      const errorMessage = await run.text();
      console.error(`Error from GPT-3 API: ${errorMessage}`);
      return {
        statusCode: run.status,
        body: JSON.stringify({ error: "Sorry, I was not able to elaborate your question due to a connection error, please try asking the question again or ask a more precise question."}),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Sorry, I was not able to elaborate your question due to a connection error, please try asking the question again or ask a more precise question."}),
    };
  }

  var run =  await run.json();
  const runId = run.id;

  try {
    var status = await fetch(`https://api.openai.com/v1/threads/${threadId}/runs/${runId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'OpenAI-Beta': 'assistants=v1',
      },
    });
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({error: "Sorry, I was not able to elaborate your question due to a connection error, please try asking the question again or ask a more precise question." }),
    };
  }

  var status =  await status.json();

  // Polling mechanism to see if runStatus is completed
  // This should be made more robust.
  while (status.status !== "completed") {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      status = await fetch(`https://api.openai.com/v1/threads/${threadId}/runs/${runId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'OpenAI-Beta': 'assistants=v1',
        },
      })
      var status =  await status.json();
  }

  try {
  // Get the last assistant message from the messages array
    var messages = await fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'OpenAI-Beta': 'assistants=v1',
      },
    })
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({error: "Sorry, I was not able to elaborate your question due to a connection error, please try asking the question again or ask a more precise question." }),
    };
  }

  var messages = await messages.json();

  // Find the last message for the current run
  const lastMessageForRun = messages.data
  .filter(
      (message) => message.run_id === runId && message.role === "assistant"
  )
  .pop();

  // If an assistant message is found, console.log() it
  if (lastMessageForRun) {
      let botReply = `${lastMessageForRun.content[0].text.value}`;

      let index = botReply.indexOf('【');
      if (index !== -1) {
          botReply = botReply.substring(0, index) + '.';
      }

      return {
          statusCode: 200,
          body: JSON.stringify(botReply),
      };
  } else {

      return {
          statusCode: 404,
          body: JSON.stringify("Sorry, I was not able to elaborate your question due to a connection error, please try asking the question again or ask a more precise question." ),
      };
  }
}