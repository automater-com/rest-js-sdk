const validator = require("validator");

class Transaction {
	constructor() {}

	setEmail(email = "") {
		if (validator.isEmail(email) === false)
			throw new Error(`Email: ${email}. This is not a valid email address!`);

		this.email = email;
	}

	setPhone(phone = "") {
		if (validator.isMobilePhone(phone) === false)
			throw new Error(`Phone: ${phone}. This is not a valid phone number!`);

		this.phone = phone;
	}

	setLanguage(lang = "") {
		if (validator.isIn(lang, ["pl", "en"]) === false)
			throw new Error(`Code: ${lang}. This is not a valid language code!`);

		this.language = lang;
	}

	setConnectorId(id = "") {
		if (validator.isEmpty(id) === true)
			throw new Error(`Connector ID cannot be empty.`);

		this.setConnectorId = id;
	}

	setSendStatusEmail(bool = "") {
		if (validator.isEmpty(bool) === true)
			throw new Error(`Send Status Email cannot be empty.`);

		if (validator.isIn(bool, ["y", "n"]) === false)
			throw new Error(
				`String '${bool}' is not a valid! Available values: y - true, n - false.`
			);

		this.sendStatusEmail = bool;
	}

	setCustom(custom = "") {
		if (validator.isEmpty(custom) === true)
			throw new Error(`Custom cannot be empty.`);

		if (custom.length > 255)
			throw new Error(
				`String: '${custom}' is is too long. The maximum number of characters is 255.`
			);

		this.custom = custom;
	}

	setProducts(products) {
		if (Array.isArray(products) === false)
			throw new Error(`This is not an array.`);

		this.products = products;
	}

	getSchema() {
		let schema = {};

		//required, check validation;
		this.setEmail(this.email);
		this.setProducts(this.products);

		schema.email = this.email;

		if (this.custom) schema.custom = this.custom;
		if (this.phone) schema.phone = this.phone;
		if (this.connectorId) schema.connector_id = this.connectorId;

		schema.language = this.language || "en";
		schema.send_status_email = this.sendStatusEmail || "y";

		schema.products = this.products;

		return schema;
	}
}

module.exports = new Transaction();
