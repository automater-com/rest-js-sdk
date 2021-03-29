const validator = require("validator");

class Note {
	setNote(note = "") {
		if (validator.isEmpty(note) === true)
			throw new Error(`Note cannot be empty.`);

		if (note.length > 255)
			throw new Error(
				`String: '${note}' is is too long. The maximum number of characters is 255.`
			);

		this.note = note;
	}

	getSchema() {
		let schema = {};

		//required, check validation;
		this.setNote(this.note);

		schema.note = this.note;

		return schema;
	}
}

module.exports = new Note();
