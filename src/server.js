import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import f1Routes from './routes/f1Routes.js';

// Variables de entorno
dotenv.config();

// Inicializar express
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Conectar a MongoDB Atlas
connectDB();

// Rutas de la API
app.use('/api/f1', f1Routes);

// Ruta de prueba Raíz
app.get('/', (req, res) => {
  res.send('API Desafío F1 en funcionamiento 🏎️');
});

// Levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
