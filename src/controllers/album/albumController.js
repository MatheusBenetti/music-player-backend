/* eslint-disable import/extensions */
import Album from '../../models/albumModel.js';

export const getAllAlbums = async (req, res) => {
  try {
    const albums = await Album.find();

    res.status(200).json({
      status: 'Success.',
      result: albums.length,
      data: {
        albums
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail.',
      data: err
    });
  }
};

export const getAlbumById = async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);

    res.status(200).json({
      status: 'Success.',
      data: {
        album
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail.',
      data: err
    });
  }
};

export const createAlbum = async (req, res) => {
  try {
    const album = await Album.create(req.body);

    res.status(201).json({
      status: 'Success.',
      data: album
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail.',
      data: err
    });
  }
};

export const updateAlbum = async (req, res) => {
  try {
    const album = await Album.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!album) {
      throw new Error('Album not found.');
    }

    res.status(200).json({
      status: 'Success.',
      data: album
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail.',
      data: err
    });
  }
};

export const deleteAlbum = async (req, res) => {
  try {
    const album = await Album.findByIdAndDelete(req.params.id);

    if (!album) {
      throw new Error('Album not found.');
    }

    res.status(200).json({
      status: 'Success.',
      data: album
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail.',
      data: err
    });
  }
};
