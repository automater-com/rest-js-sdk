const { Client, Note } = require("../../index.js");

let Automater = new Client(
	"API_KEY",
	"API_SECRET"
);

const TXId = 14773586;

Note.setNote("random super note");

//Async function is required because await
(async () => {
	let response = await Automater.transactionNote(TXId, Note);

	console.log(response);
})();
