
var legado = require('./dist/legado.bundle.js').default;

test("class creation", function() {
  var Claz = legado({
    x: function() {
      return "y";
    },
  });
  var x = new Claz();
  expect(x.x()).toBe("y");

  Claz = legado({
    constructor: function() {
      this.y = "y";
    },
    x: function() {
      return this.y;
    },
  });
  x = new Claz();
  expect(x.x()).toBe("y");
});


test("inheritance", function() {
  var Base = legado({
    constructor: function() {
      this.y = "y";
    },
    x: function() {
      return this.y;
    },
  });
  var Sub = legado(Base, {
    constructor: function() {
      Base.prototype.constructor.apply(this);
    },
    x: function() {
      return Base.prototype.x.apply(this) + "z";
    },
  });
  var x = new Sub();
  expect(x.x()).toBe("yz");
});
