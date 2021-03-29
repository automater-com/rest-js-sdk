const { Client } = require("../../index.js");

let Automater = new Client(
	"API_KEY",
	"API_SECRET"
);

const DatabaseId = 225056;

//Async function is required because await
async function request() {
	let response = await Automater.codesUpload(
		DatabaseId,
		"./examples/codes/automater.png"
	);

	console.log(response);
}

request();
