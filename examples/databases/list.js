const { Client, Search } = require("../../index.js");

let Automater = new Client(
	"API_KEY",
	"API_SECRET"
);

Search.setLimit(1);
Search.setPage(1);
//Search.setType("all");

(async () => {
	let response = await Automater.databasesList(Search);

	console.log(response);
})();

//{ params: { answer: 42 } }
