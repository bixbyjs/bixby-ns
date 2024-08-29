var path = require('path');
var fs = require('fs');
var YAMLServiceRegistry = require('../../lib/yamlserviceregistry');

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
