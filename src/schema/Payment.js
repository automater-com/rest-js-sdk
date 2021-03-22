const validator = require("validator");

class Payment {
	setPaymentId(id = "") {
		if (validator.isEmpty(id) === true)
			throw new Error(`Payment ID cannot be empty.`);

		this.paymentId = id;
	}

	setAmount(amount = "") {
		if (validator.isNumeric(new String(amount)) === false)
			throw new Error(`Amount: ${id} is not a valid!`);

		this.amount = amount;
	}

	setCurrency(currency = "") {
		this.currency = currency.toUpperCase();
	}

	setDescription(description = "") {
		if (validator.isEmpty(description) === true)
			throw new Error(`Description cannot be empty.`);

		if (description.length > 100)
			throw new Error(
				`String: '${custom}' is is too long. The maximum number of characters is 100.`
			);

		this.description = description;
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

	getSchema() {
		let schema = {};

		//required, check validation;
		this.setPaymentId(this.paymentId);
		this.setAmount(this.amount);
		this.setCurrency(this.currency);

		schema.payment_id = this.paymentId;
		schema.amount = this.amount;
		schema.currency = this.currency;

		if (this.description) schema.description = this.description;
		if (this.custom) schema.custom = this.custom;

		return schema;
	}
}

module.exports = new Payment();
