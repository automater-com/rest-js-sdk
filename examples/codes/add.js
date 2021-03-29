const { Client } = require("../../index.js");

let Automater = new Client("API_KEY", "API_SECRET");

const DatabaseId = 225056;

let codes = ["code1", "code2", "code3"];

//Async function is required because await
async function request() {
	let response = await Automater.codesAdd(DatabaseId, codes);

	console.log(response);
}

request();
