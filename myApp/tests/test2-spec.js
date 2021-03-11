/*eslint no-console: 0, no-unused-vars: 0, no-shadow: 0, new-cap: 0, dot-notation:0, no-use-before-define:0 */
/*eslint-env node, es6 */
"use strict";
// use test spec file name as description to allow navigation from the test results view
describe(__filename, () => {

	this.base = __dirname + "/";
	this.test = require("../utils/tests");
	this.results = [{
		"VIEW_NAME": "fcc.balances.util::TODAY"
	}];

	this.results.forEach(async(test) => {
		it(`View Test: ${test.VIEW_NAME}`, async(done) => {
			try {
				let db = await this.test.getDBClass(await this.test.getClient());
				let sql = `SELECT * FROM "${test.VIEW_NAME}"`;
				let statement = await db.preparePromisified(sql);
				let results = await db.statementExecPromisified(statement, []);
				//expect(results.length).not.toBeGreaterThan(1, `View Name: ${test.VIEW_NAME}`);
				expect(results.valueOf()).toBe('2021-01-14');
				done();
			} catch (err) {
				done.fail(err);
			}
		});
	});
});