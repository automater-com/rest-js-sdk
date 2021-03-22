const validator = require("validator");

class Database {
	setType(type = "1") {
		if (validator.isIn(type, ["1", "2"]) === false)
			throw new Error(
				`Code: ${type}. This is not a valid base type (1: standard, 2: recursive)!`
			);

		this.type = type;
	}

	setName(name = "") {
		if (validator.isEmpty(name) === true)
			throw new Error(`Name cannot be empty.`);

		if (name.length > 100)
			throw new Error(
				`String: '${name}' is is too long. The maximum number of characters is 100.`
			);

		this.name = name;
	}

	getSchema() {
		let schema = {};

		this.setName(this.name);

		schema.type = this.type;
		schema.name = this.name;

		return schema;
	}
}

module.exports = new Database();
