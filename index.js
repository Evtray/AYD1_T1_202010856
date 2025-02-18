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
      nombre: "Tu Nombre",
      carnet: "20230000"
    });
  });

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
