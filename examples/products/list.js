const { Client, Search } = require("../../index.js");

let Automater = new Client(
	"API_KEY",
	"API_SECRET"
);

Search.setLimit(1);
Search.setPage(1);
//Search.setType("all");
//Search.setStatus("all")

(async () => {
	let response = await Automater.productsList(Search);

	console.log(response);
})();

//{ params: { answer: 42 } }
