// Module dependencies.
var PluggableServiceRegistry = require('../lib/pluggableserviceregistry');


// https://www.iana.org/assignments/service-names-port-numbers
// /etc/services
exports = module.exports = function(app) {
  var registry = new PluggableServiceRegistry();
  registry.use(app);
  
  return registry;
}

exports['@implements'] = 'module:bixby-ns.ServiceRegistry';
exports['@singleton'] = true;
exports['@require'] = [
  './services/app',
];
