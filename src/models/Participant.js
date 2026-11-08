import mongoose from 'mongoose';

const participantSchema = new mongoose.Schema(
  {
    participante: { type: String, required: true, unique: true },
    puntos: { type: Number, default: 0 },
    exactasCarrera: { type: Number, default: 0 },
    top10Carrera: { type: Number, default: 0 },
    exactasSprint: { type: Number, default: 0 },
    top5Sprint: { type: Number, default: 0 },
    totalExactas: { type: Number, default: 0 },
    totalTop: { type: Number, default: 0 },
    fechas: { type: Number, default: 0 },
    mejorFecha: { type: Number, default: 0 },
    promedio: { type: Number, default: 0 },
    victorias: { type: Number, default: 0 },
    podios: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Paticipant', participantSchema);
