
const express = require('express');
const openai = require('../middlewares/openai');

let app = express.Router()

app.post('/sqlexplainer', async (req, res, next) => {

	try {
			let { content, } = req.body

			let prompt = `### Interpret SQL blocks and explain what they do in simple. helpful terms\n\n` +
			`# Code\n`

			let inputRaw = `# Code\n` + 
			`${content}\n` +
			`# Explanation of what the code does\n1.`

			prompt += inputRaw

			const gptResponse = await openai.complete({
				engine: 'gpt-3.5-turbo-instruct',
				prompt,
				maxTokens: 500,
				temperature: 0.5,
				topP: 1,
				frequencyPenalty: 0,
				presencePenalty: 0,
				bestOf: 1,
				user: req.user._id,
				stream: false,
				stop: ['# Code','# Explanation', "<|endoftext|>" ],
			});

			// let output = `${gptResponse.data.choices[0].text}`

			let outputs = []

			if(gptResponse.data.choices[0].text){
				// Split break lines
				outputs = `1.${gptResponse.data.choices[0].text}`.split('\n')
		
				// remove entries with spaces or empty
				outputs = outputs.filter(function(output) {
					return (!(output === "" || output === " " || output === "\n"))
				})
		
				// remove numbers and spaces
				for (let i = 0; i < outputs.length; i++) {
					outputs[i] = outputs[i].substring(3)
					outputs[i] = outputs[i].replace(/^\s+|\s+$/g, '')
				}
				// remove duplicates
				outputs = outputs.filter((item, pos, self) => self.indexOf(item) === pos)
			}

			req.locals.input = prompt
			req.locals.inputRaw = inputRaw
			req.locals.outputs = outputs

			next();

		} catch(err){
			console.log(err)
		}
	
  })

module.exports = app