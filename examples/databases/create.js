const { Client, Database } = require("../../index.js");

let Automater = new Client(
	"API_KEY",
	"API_SECRET"
);

Database.setType("1");
Database.setName("my test database");

//Async function is required because await
async function request() {
	let response = await Automater.databaseCreate(Database);

	console.log(response);
}

request();
