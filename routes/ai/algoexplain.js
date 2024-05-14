const express = require("express");
const openai = require("../middlewares/openai");

let app = express.Router();

app.post("/algoexplain", async (req, res, next) => {
  try {
    let { content } = req.body;

    let promptStart = `Please explain the theory behind the following algorithm term: \n`;

    let inputRaw = `${content}`; // here is where people enter stuff

    let promptEnd = `\n Considerations and Filters:
    \n 1. Ensure the explanation is precise and directly related to the given topic.
    \n 2. Avoid repeating sentences or using unnecessary words.
    \n 3. Use unique words only when necessary for clarity and accuracy of the algorithm.`
    
    let prompt = promptStart + inputRaw + promptEnd;

    const gptResponse = await openai.complete({
      engine: "gpt-3.5-turbo-instruct",
      prompt,
      maxTokens: 150,
      temperature: 0.2,
      topP: 1,
      frequencyPenalty: 1,
      presencePenalty: 0,
      bestOf: 1,
      n: 1,
      user: req.user._id,
      stream: false,
      stop: ["###", "<|endoftext|>"],
    });

    let output = `${gptResponse.data.choices[0].text}`;

    // remove the first character from output
    output = output.substring(1, output.length);

    // If the output string ends with one or more hashtags, remove all of them
    if (output.endsWith('"')) {
      output = output.substring(0, output.length - 1);
    }

    // If the output string ends with one or more hashtags, remove all of them
    if (output.endsWith('"')) {
      output = output.substring(0, output.length - 1);
    }

    // remove a single new line at the end of output if there is one
    if (output.endsWith("\n")) {
      output = output.substring(0, output.length - 1);
    }

    req.locals.input = prompt;
    req.locals.inputRaw = inputRaw;
    req.locals.output = output;

    next();
  } catch (err) {
    console.log(err.response);
    console.log(err.data);
    console.log(err.message);
  }
});

module.exports = app;
