exports = module.exports = function(resolver, updater) {
  var api = {};
  
  api.resolve = function(name, rrtype, cb) {
    resolver.resolve(name, rrtype, cb);
  }
  
  api.add = function(name, rrtype, rrdata, cb) {
    updater.add(name, rrtype, rrdata, cb);
  }
  
  api.remove = function(name, rrtype, rrdata, cb) {
    updater.remove(name, rrtype, rrdata, cb);
  }
  
  return api;
};

exports['@implements'] = 'http://i.bixbyjs.org/ns';
exports['@singleton'] = true;
exports['@require'] = [
  'http://i.bixbyjs.org/ns/Resolver',
  'http://i.bixbyjs.org/ns/Updater'
];
