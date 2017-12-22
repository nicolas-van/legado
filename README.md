
legado
======

A very simple and minimalist inheritance system.

Examples:

    import legado from "legado";

    var Base = legado({
      constructor: function() {
        this.a = "a";
      },
      x: function() {
        return this.a;
      }
    });

    var Sub = legado(Base, {
      constructor: function() {
        Base.prototype.constructor.apply(this);
        this.b = "b";
      },
      y: function() {
        return this.x() + this.b;
      },
    });

To install:

    npm install legado

Or download it on https://unpkg.com/legado/
