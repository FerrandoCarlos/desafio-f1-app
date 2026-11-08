import { Router } from 'express';
import { getEstadisticas } from '../controllers/f1Controller.js';

const router = Router();

router.get('/estadisticas', getEstadisticas);

export default router;
