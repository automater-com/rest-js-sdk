const { Client, Payment } = require("../../index.js");

let Automater = new Client(
	"API_KEY",
	"API_SECRET"
);

const CartId = 1644037;

Payment.setPaymentId("randomPaymentIDFromSoftware");
Payment.setAmount(10);
Payment.setCurrency("usd");
Payment.setDescription("my description"); //not required
Payment.setCustom("my custom"); //not required

//Async function is required because await
(async () => {
	let response = await Automater.transactionPayment(CartId, Payment);

	console.log(response);
})();
