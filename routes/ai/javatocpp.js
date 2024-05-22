const express = require('express');
const openai = require('../middlewares/openai');

let app = express.Router()

app.post('/javatocpp', async (req, res, next) => {
  try {
    let { content, language } = req.body;

    let promptStart = `Take the following Java Code and convert it to the ${language} code. \n`  
    let inputRaw = `Code : \n\n ${content}`;
    let prompt = promptStart + inputRaw;

    const gptResponse = await openai.complete({
      engine: 'gpt-3.5-turbo-instruct',
      prompt,
      maxTokens: 10000,
      temperature: 0.5,
      topP: 1,
      frequencyPenalty: 0,
      presencePenalty: 0,
      bestOf: 1,
      user: req.user._id,
      stream: false,
      stop: ['# Code', '# Explanation', ""],
    });

    // Assuming the response is in gptResponse.data.choices[0].text
    const explanation = gptResponse.data.choices[0].text.trim();

    // Create the response object in code format
    const response = {
      code: content,
      explanation: explanation.split('\n').map(line => line.trim()).filter(line => line)
    };

    req.locals.input = prompt;
    req.locals.inputRaw = content;
    req.locals.outputs = response;

    next();
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = app;
