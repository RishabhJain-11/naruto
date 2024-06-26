const express = require("express");
const openai = require("../middlewares/openai");

let app = express.Router();

app.post("/codeformatter", async (req, res, next) => {
  try {
    let { content } = req.body;

    let promptStart = `Format the following code according to best practices:\n\n`;
    let inputRaw = `\n # Code\n ${content}`;
    let promptEnd = `Considerations and Filters:
      \n 1. Ensure the code is clean and readable.
      \n 2. Follow standard coding conventions.
      \n 3. Include consistent indentation and spacing.`;
    let prompt = promptStart + inputRaw + promptEnd;

    const gptResponse = await openai.complete({
      engine: "gpt-3.5-turbo-instruct",
      prompt,
      maxTokens: 10,
      temperature: 0.5,
      topP: 1,
      frequencyPenalty: 0,
      presencePenalty: 0,
      bestOf: 1,
      user: req.user._id,
      stream: false,
      stop: ["# Code", "# Explanation", "<|endoftext|>"],
    });

    // let output = `${gptResponse.data.choices[0].text}`

    let outputs = [];

    if (gptResponse.data.choices[0].text) {
      // Split break lines
      outputs = `1.${gptResponse.data.choices[0].text}`.split("\n");

      // remove entries with spaces or empty
      outputs = outputs.filter(function (output) {
        return !(output === "" || output === " " || output === "\n");
      });

      // remove numbers and spaces
      for (let i = 0; i < outputs.length; i++) {
        outputs[i] = outputs[i].substring(3);
        outputs[i] = outputs[i].replace(/^\s+|\s+$/g, "");
      }
      // remove duplicates
      outputs = outputs.filter((item, pos, self) => self.indexOf(item) === pos);
    }

    req.locals.input = prompt;
    req.locals.inputRaw = inputRaw;
    req.locals.outputs = outputs;

    next();
  } catch (err) {
    console.log(err);
  }
});

module.exports = app;
