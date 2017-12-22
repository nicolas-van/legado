
export default function legado(arg1, arg2) {
  var protoProps = arg2 ? arg2 : arg1;
  var parent = arg2 ? arg1: null;
  var child;
  if (protoProps && protoProps.hasOwnProperty('constructor')) {
    child = protoProps.constructor;
  } else if (parent) {
    child = function() { return parent.apply(this, arguments); };
  } else {
    child = function() {};
  }
  if (parent) {
    for (var key in parent) {
      if (! parent.hasOwnProperty(key))
        continue;
      child[key] = parent[key];
    }
    child.prototype = Object.create(parent.prototype);
  }
  for (var key2 in protoProps) {
    var desc = Object.getOwnPropertyDescriptor(protoProps, key2);
    Object.defineProperty(child.prototype, key2, desc);
  }
  child.prototype.constructor = child;
  return child;
}
