module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate(null, function(err) {
    if (err) throw err;

    app.models.Juego.create([{
     "nombre":"Baloncesto",
     "descripcion":"Pelota",
     "imagen":"imagen",
     "grupal":false,
    
    }, {
     
   
     "nombre":"Futbol",
     "descripcion":"Pelota",
     "imagen":"imagen",
     "grupal":false,
    
    }, {
    
     "nombre":"Tenis",
     "descripcion":"Pelota",
     "imagen":"imagen",
     "grupal":false,
    
    }, {
    }], function(err, Juegos) {
      if (err) throw err;

      console.log('Models created: \n', Juegos);
    });
  });
};