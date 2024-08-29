var ServiceRegistry = require('./serviceregistry');
var yaml = require('yaml');
var util = require('util');

function YAMLServiceRegistry() {
  ServiceRegistry.call(this);
}

util.inherits(YAMLServiceRegistry, ServiceRegistry);

YAMLServiceRegistry.prototype.load = function(data) {
  var obj = yaml.parse(data)
    , entry, alias, i, len
  
  for (var name in obj) {
    var entry = obj[name];
    this.set(name, { port: entry.port, protocol: entry.protocol });
    
    if (entry.aliases) {
      for (i = 0, len = entry.aliases.length; i < len; ++i) {
        alias = entry.aliases[i];
        this.set(alias, { port: entry.port, protocol: entry.protocol });
      }
    }
  }
}

module.exports = YAMLServiceRegistry;
