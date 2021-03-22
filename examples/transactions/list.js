const { Client, Search } = require("../../index.js");

let Automater = new Client(
	"API_KEY",
	"API_SECRET"
);

Search.setLimit(1);
Search.setPage(1);
Search.setSort("asc");
//Search.setCartId()

(async () => {
	let response = await Automater.transactionsList(Search);

	console.log(response);
})();

//{ params: { answer: 42 } }
