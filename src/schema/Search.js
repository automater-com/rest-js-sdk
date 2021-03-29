const validator = require("validator");

class Search {
	setLimit(limit = 1) {
		if (limit < 1 || limit > 100)
			throw new Error(`Limit: '${limit}' is not correct (min: 1, max: 100).`);

		this.limit = limit;
	}

	setPage(page = 1) {
		if (validator.isInt(new String(page)) === false)
			throw new Error(`Page: ${page} is not a valid page! Must be a integer.`);

		this.page = page;
	}

	setSort(sort = "desc") {
		if (validator.isIn(sort, ["desc", "asc"]) === false)
			throw new Error(
				`String '${desc}' is not a valid! Available values: asc - ascending, desc - descending`
			);

		this.sort = sort;
	}

	setType(type = "all") {
		if (validator.isIn(sort, ["all", "1", "2", "3"]) === false)
			throw new Error(
				`String '${type}' is not a valid! Available values: (default: all, 1 - Allegro, 2 - products, 3 - eBay)`
			);

		this.type = type;
	}

	setStatus(status = "all") {
		if (validator.isIn(sort, ["all", "1", "2"]) === false)
			throw new Error(
				`String '${type}' is not a valid! Available values: (default: all, 1 - active, 2 - inactive).`
			);

		this.status = status;
	}

	setCartId(cart) {
		this.cartId = cart;
	}

	getSchema() {
		let schema = {};

		if (this.limit) schema.limit = this.limit;
		if (this.page) schema.page = this.page;
		if (this.sort) schema.sort = this.sort;
		if (this.type) schema.type = this.type;
		if (this.status) schema.status = this.status;
		if (this.cartId) schema.cart_id = this.cartId;

		return schema;
	}
}

module.exports = new Search();
