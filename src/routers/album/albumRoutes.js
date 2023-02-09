/* eslint-disable import/extensions */
import express from 'express';
import {
  createAlbum,
  deleteAlbum,
  getAlbumById,
  getAllAlbums,
  updateAlbum
} from '../../controllers/album/albumController.js';

const albumRouter = express.Router();

albumRouter.route('/album').get(getAllAlbums).post(createAlbum);

albumRouter
  .route('/album/:id')
  .get(getAlbumById)
  .patch(updateAlbum)
  .delete(deleteAlbum);

export default albumRouter;
