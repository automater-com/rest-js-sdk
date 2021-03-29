const Client = require("./src/Client.js");

const Transaction = require("./src/schema/Transaction.js");
const Product = require("./src/schema/Product.js");
const Payment = require("./src/schema/Payment.js");
const Database = require("./src/schema/Database.js");
const Note = require("./src/schema/Note.js");
const Search = require("./src/schema/Search.js");

module.exports = {
	Client: Client,
	Transaction: Transaction,
	Product: Product,
	Payment: Payment,
	Database: Database,
	Note: Note,
	Search: Search
};
