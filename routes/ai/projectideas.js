const express = require("express");
const openai = require("../middlewares/openai");

let app = express.Router();

app.post("/projectideas", async (req, res, next) => {
  try {
    let { title, field, desc, keywords } = req.body;

    if (desc) {
      if (desc.length > 600) {
        desc = desc.substring(desc.length - 600);
      }
    }

    let promptStart = `Give me an idea for a Computer Science Project based on metadata provided: \n"""\n`;

    let inputRaw =
      `Title: ${title}\n` +
      `${field ? `Field: ${field}\n` : ``}` +
      `${desc ? `Description: ${desc}\n` : ``}` +
      `${keywords ? `Keywords: ${keywords}\n` : ``}`;
    let prompt = promptStart + inputRaw;

    const gptResponse = await openai.complete({
      engine: "gpt-3.5-turbo-instruct",
      prompt,
      maxTokens: 300,
      temperature: 0.8,
      frequencyPenalty: 0.2,
      presencePenalty: 0,
      bestOf: 1,
      topP: 1,
      n: 1,
      user: req.user._id,
      stream: false,
      stop: [`"""`, "Title:", "Audience:", "Introduction:"],
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
    console.log(err);
  }
});

module.exports = app;
