const axios = require("axios");
const qs = require("qs");
const fs = require("fs");
const crypto = require("crypto");
const path = require("path");

class Client {
	constructor(apiKey, apiSecret) {
		this.apiKey = apiKey;
		this.apiSecret = apiSecret;

		this.axios = axios.create({
			baseURL: "https://automater.pl/rest/api",
			headers: {
				"X-Api-Key": this.apiKey
			}
		});
	}

	async $get(endpoint, json) {
		try {
			const { data } = await this.axios.get(endpoint, json);

			return data;
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	}

	async $post(endpoint, json) {
		let signature = hashing(stringify(json), this.apiSecret);

		this.axios.defaults.headers.common["X-Api-Signature"] = signature;

		try {
			const { data } = await this.axios.post(endpoint, stringify(json));

			return data;
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	}

	async transactionsList(search) {
		return this.$get(`/transactions.json`, { params: search.getSchema() });
	}

	async transactionCreate(transaction) {
		return this.$post("transactions.json", transaction.getSchema());
	}

	async transactionPayment(cartId, payment) {
		return await this.$post(
			`transactions/${cartId}/payment.json`,
			payment.getSchema()
		);
	}

	async transactionNote(transactionId, note) {
		return this.$post(
			`/transactions/${transactionId}/note.json`,
			note.getSchema()
		);
	}

	async productsList(search) {
		return this.$get(`/products.json`, { params: search.getSchema() });
	}

	async productDetail(productId) {
		return this.$get(`/products/${productId}.json`);
	}

	async databasesList(search) {
		return this.$get(`/databases.json`, { params: search.getSchema() });
	}

	async databaseCreate(database) {
		return this.$post("databases.json", database.getSchema());
	}

	async databaseDetail(databaseId) {
		return this.$get(`/databases/${databaseId}.json`);
	}

	async codesAdd(database, codes) {
		return this.$post(`codes/${database}.json`, { codes: codes });
	}

	async codesUpload(database, file) {
		let fileData = fs.readFileSync(file, { encoding: "base64" });
		let fileName = path.basename(file);

		return this.$post(`files/${database}.json`, {
			filename: fileName,
			data: fileData
		});
	}
}

let sorting = (a, b) => {
	if (a > b) return 1;
	if (b > a) return -1;

	return 0;
};

let stringify = json => {
	return qs.stringify(json, { sort: sorting, encode: false });
};

let hashing = (string, secret) => {
	let toHash = string + secret;

	return crypto
		.createHash("sha256")
		.update(toHash)
		.digest("hex");
};

module.exports = Client;
