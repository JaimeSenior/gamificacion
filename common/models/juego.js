'use strict';

module.exports = function(Juego) {


Juego.prototype.getNombre = function(callback) {
  // TODO
var juego=this;
  callback(null, juego.nombre);
};
};
