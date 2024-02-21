const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require('dotenv');

dotenv.config();

const configuration = new GoogleGenerativeAI(process.env.API_KEY);


const modelId = "gemini-pro";
const model = configuration.getGenerativeModel({ model : modelId });

const history = [];
/**
 * Generates a response based on the given prompt.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise} - A promise that resolves when the response is sent.
 */
const generateResponse = async (req, res) => {
  try{
	const { prompt } = req.body;
	const result = await model.generateContent(prompt);
	const response = await result.response;
	const text = response.text();
	console.log(text);

	history.push(text);
	console.log(history);
	console.log("updated history")
	res.send({ response: text });
  } catch (error) {
	console.error(error);
	res.status(500).json({ message: "Internal error"});
  }
};

module.exports = {history, generateResponse};


