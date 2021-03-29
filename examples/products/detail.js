const { Client } = require("../../index.js");

let Automater = new Client(
	"API_KEY",
	"API_SECRET"
);

(async () => {
	let response = await Automater.productDetail(771200);

	console.log(response);
})();

//{ params: { answer: 42 } }
