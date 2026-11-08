import Participant from '../models/Participant.js';

export const getEstadisticas = async (req, res) => {
  try {
    const estadisticas = await Participant.find().sort({ puntos: -1 });
    res.status(200).json(estadisticas);
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener las estadísticas del campeonato',
      error: error.message,
    });
  }
};
