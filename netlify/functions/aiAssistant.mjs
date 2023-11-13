// import the required dependencies
const Configuration = require("openai");
const OpenAIApi = require("openai");

// Create a OpenAI connection
const secretKey = process.env.OPENAI_API_KEY;
const configuration = new Configuration({
  apiKey: secretKey,
});
const openai = new OpenAIApi(configuration);

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

    const assistant = await openai.beta.assistants.create({
      name: "Jarvis",
      instructions:
        "You are the personal assistant for the resume website of Marco Marini, a cool Machine Learning Engineer."+
        "Your task is to answer questions regarding Marco which can be made by potential employers using only the" +
        " information you will be provided. Of course you have to reply always showing that Marco would be a perfect" +
        " fit for whatever position they are looking for.",
      tools: [{ type: "code_interpreter" }],
      model: "gpt-4-1106-preview",
    });

    // Create a thread
    const thread = await openai.beta.threads.create();

    // Pass in the user question into the existing thread
    await openai.beta.threads.messages.create(thread.id, {
    role: "user",
    content: userQuestion,
    });

    // Use runs to wait for the assistant response and then retrieve it
    const run = await openai.beta.threads.runs.create(thread.id, {
    assistant_id: assistant.id,
    });

    let runStatus = await openai.beta.threads.runs.retrieve(
    thread.id,
    run.id
    );

    // Polling mechanism to see if runStatus is completed
    // This should be made more robust.
    while (runStatus.status !== "completed") {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    }

    // Get the last assistant message from the messages array
    const messages = await openai.beta.threads.messages.list(thread.id);

    // Find the last message for the current run
    const lastMessageForRun = messages.data
    .filter(
        (message) => message.run_id === run.id && message.role === "assistant"
    )
    .pop();

    // If an assistant message is found, console.log() it
    if (lastMessageForRun) {
        const botReply = `${lastMessageForRun.content[0].text.value} \n`;

        return {
            statusCode: 200,
            body: JSON.stringify(botReply),
        };
    } else {

        return {
            statusCode: 404,
            body: JSON.stringify("Jarvis' reply not found..."),
        };
    }
  } catch (error) {
    console.log("Creating assistant...");
    console.error(`Internal server error: ${error}`);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}