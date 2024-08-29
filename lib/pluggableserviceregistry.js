function PluggableServiceRegistry() {
  this._sources = [];
}

PluggableServiceRegistry.prototype.use = function(source) {
  this._sources.push(source);
}

PluggableServiceRegistry.prototype.get = function(name, proto) {
  var i, len, rv;
  for (i = 0, len = this._sources.length; i < len; ++i) {
    rv = this._sources[i].get(name, proto);
    if (rv) { return rv; }
  }
};

module.exports = PluggableServiceRegistry;
