// Module dependencies.
var path = require('path');
var fs = require('fs');
var YAMLServiceRegistry = require('../../lib/yamlserviceregistry');

/**
 * Create application-specific service registry.
 *
 * Returns a service registry that is configured with information about network
 * services that is loaded from application-specific configuration files, as
 * well as commonly used services loaded from configuraiton files supplied with
 * this package.
 *
 * 
 *
 * @returns {bixby-ns.ServiceRegistry}
 */
exports = module.exports = function() {
  var registry = new YAMLServiceRegistry();
  
  var fname = path.resolve(__dirname, '../../etc/services.yaml')
    , data;
  if (fs.existsSync(fname)) {
    data = fs.readFileSync(fname, 'utf8');
    registry.load(data);
  }
  
  return registry;
};
