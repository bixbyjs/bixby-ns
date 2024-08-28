var ServiceRegistry = require('./serviceregistry');
var util = require('util');

function YAMLServiceRegistry() {
}

util.inherits(YAMLServiceRegistry, ServiceRegistry);


module.exports = YAMLServiceRegistry;
