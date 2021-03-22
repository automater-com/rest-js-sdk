const { Client, Transaction, Product } = require("../../index.js");

let Automater = new Client("API_KEY", "API_SECRET");

//Transaction init
Transaction.setEmail("email@example.com"); //required
Transaction.setPhone("123456789"); //not required
Transaction.setLanguage("en"); //not require
Transaction.setCustom("awesome"); //not required
//Transaction.setSendStatusEmail(); //not required
//Transaction.setConnectorId(); //not required

//Product
let firstProduct = new Product();

firstProduct.setId(771200);
firstProduct.setQuantity(1);
firstProduct.setPrice(1);
firstProduct.setCurrency("usd");

//Second product
let secondProduct = new Product();

secondProduct.setId(796973);
secondProduct.setQuantity(1);
secondProduct.setPrice(1);
secondProduct.setCurrency("pln");

Transaction.setProducts([firstProduct.getSchema(), secondProduct.getSchema()]); //required

//Async function is required because await
async function request() {
	let response = await Automater.transactionCreate(Transaction);

	console.log(response);
}

request();
