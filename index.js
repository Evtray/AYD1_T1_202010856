// index.js
const express = require('express');
const app = express();
app.use(express.json());

// Array temporal para almacenar canciones
let canciones = [];

// Endpoint POST para agregar una canción
app.post('/canciones', (req, res) => {
  const { nombre, artista, album } = req.body;
  const nuevaCancion = {
    id: canciones.length + 1,
    nombre,
    artista,
    album
  };
  canciones.push(nuevaCancion);

  res.status(201).json({
    mensaje: "Canción creada exitosamente",
    cancion: nuevaCancion
  });
});

// ... Código previo (POST /canciones) ...

// Endpoint GET para ver información personal
app.get('/informacion', (req, res) => {
    res.json({
      nombre: "Edwin Sandoval",
      carnet: "202010856"
    });
  });

  // Endpoint POST para agregar una canción
app.post('/canciones', (req, res) => {
    const { nombre, artista, genero } = req.body; // CAMBIO: antes se recibía album
    const nuevaCancion = {
      id: canciones.length + 1,
      nombre,
      artista,
      genero  // CAMBIO: se guarda genero en lugar de album
    };
    canciones.push(nuevaCancion);
  
    res.status(201).json({
      mensaje: "Canción creada exitosamente",
      cancion: nuevaCancion
    });
  });

  
// Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
