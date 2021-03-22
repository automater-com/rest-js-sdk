const validator = require("validator");

class Product {
	setId(id = "") {
		if (validator.isNumeric(new String(id)) === false)
			throw new Error(`ID: ${id} is not a valid id! Must be a integer.`);

		this.id = id;
	}

	setQuantity(quantity = "") {
		if (validator.isNumeric(new String(quantity)) === false)
			throw new Error(`Quantity: ${id} is not a valid! Must be a integer.`);

		this.quantity = quantity;
	}

	setPrice(price = "") {
		if (validator.isCurrency(new String(price)) === false)
			throw new Error(`Price: ${id} is not a valid! Must be a price.`);

		this.price = price;
	}

	setCurrency(currency = "") {
		this.currency = currency.toUpperCase();
	}

	getSchema() {
		let schema = {};

		//required, check validation;
		this.setId(this.id);
		this.setQuantity(this.quantity);
		this.setPrice(this.price);

		schema.id = this.id;
		schema.quantity = this.quantity;
		schema.price = this.price;

		if (this.currency) schema.currency = this.currency;

		return schema;
	}
}

module.exports = Product;
