import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Participant from './models/Participant.js';

dotenv.config();

const participantesIniciales = [
  { participante: 'G SOTO', puntos: 274 },
  { participante: 'F SUAREZ', puntos: 260 },
  { participante: 'J GREGORET', puntos: 247 },
  { participante: 'P HERRERO', puntos: 241 },
  { participante: 'C FERRANDO', puntos: 237 },
];

const seedDB = async () => {
  try {
    await connectDB();

    // Limpiamos la colección existente y cargamos la data fresca
    await Participant.deleteMany({});
    await Participant.insertMany(participantesIniciales);

    console.log('¡Datos de prueba insertados con éxito en MongoDB Atlas! 🏎️');
    process.exit();
  } catch (error) {
    console.error('Error al poblar la base de datos:', error);
    process.exit(1);
  }
};

seedDB();
