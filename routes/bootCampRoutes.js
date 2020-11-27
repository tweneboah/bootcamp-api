import express from 'express';
import {
  createNewBootcampController,
  deleteBootcampController,
  getBootcampController,
  getBootcampsController,
  updateBootcampController,
} from '../controllers/bootcampsController';

const bootCampRoutes = express.Router();

bootCampRoutes.post('/', createNewBootcampController);
bootCampRoutes.get('/', getBootcampController);
bootCampRoutes.get('/', getBootcampsController);
bootCampRoutes.delete('/:id', deleteBootcampController);

bootCampRoutes.put('/:id', updateBootcampController);

export { bootCampRoutes };
