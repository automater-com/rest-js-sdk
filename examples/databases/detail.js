const { Client } = require("../../index.js");

let Automater = new Client(
	"API_KEY",
	"API_SECRET"
);

(async () => {
	let response = await Automater.databaseDetail(215020);

	console.log(response);
})();

//{ params: { answer: 42 } }
