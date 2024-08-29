var PluggableServiceRegistry = require('../lib/pluggableserviceregistry');

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
