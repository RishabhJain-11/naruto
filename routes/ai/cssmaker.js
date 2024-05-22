const express = require("express");
const openai = require("../middlewares/openai");

let app = express.Router();

app.post("/cssmaker", async (req, res, next) => {
  try {
    let { content, desc } = req.body;

    let promptStart = `Give me necessary css classes to the code given below : \n`;

    // eslint-disable-next-line no-useless-concat
    let inputRaw = `# Code\n` + `${content} \n\n`;

    let promptEnd = `Description of where to add classes: \n\n ${desc}`;

    let prompt = promptStart + inputRaw + promptEnd;

    const gptResponse = await openai.complete({
      engine: "gpt-3.5-turbo-instruct",
      prompt,
      maxTokens: 10000,
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
