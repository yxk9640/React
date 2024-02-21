const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const { generateResponse, history } = require("./controllers/index.js");

dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(bodyParser.json());

//establishing connection to API
app.get("/", (req, res) => {
	res.send("Hello World");
});

//build Gemini API
//app.post("/generate", generateResponse);
//app.get("/generate", (req, res) => {
//	res.send(history);
//});

app.route("/generate")
.post(generateResponse)
.get((req, res) => {
	res.send(history);
});



app.listen(port, ()=>{
	console.log(`Server is running on port ${port}`);
})