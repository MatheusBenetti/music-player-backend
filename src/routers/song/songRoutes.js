/* eslint-disable import/extensions */
import express from 'express';
import {
  createSong,
  deleteSong,
  getAllSongs,
  getSongById,
  updateSong
} from '../../controllers/song/songController.js';

const songRouter = express.Router();

songRouter.route('/song').get(getAllSongs).post(createSong);

songRouter
  .route('/song/:id')
  .get(getSongById)
  .patch(updateSong)
  .delete(deleteSong);

export default songRouter;
