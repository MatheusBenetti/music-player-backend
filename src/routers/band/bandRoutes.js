import express from 'express';
import {
  createBand,
  deleteBand,
  getAllBands,
  getBandById,
  updateBand
} from '../../controllers/band/bandController';

const bandRouter = express.Router();

bandRouter.route('/band').get(getAllBands).post(createBand);

bandRouter
  .route('/user/:id')
  .get(getBandById)
  .patch(updateBand)
  .delete(deleteBand);

export default bandRouter;
