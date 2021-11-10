//const store = require('../../../store/mysql')
const store = require('../../../store/remote-mysql')
const ctrl = require('./userController');

module.exports = ctrl(store);