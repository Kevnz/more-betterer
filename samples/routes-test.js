require('approvals').mocha();

const assert = require('assert');
const listEndpoints = require('express-list-endpoints');
const app = require('./app.js')
describe('The routes', () => {
  it('should have the same routes', () => {
    const routes = listEndpoints(app);

    this.verifyAsJSON(routes, {
      reporters: ['copycommand']
    });
    assert.ok(true);
  });
});