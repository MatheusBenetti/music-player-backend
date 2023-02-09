/* eslint-disable import/extensions */
import Song from '../../models/songModel.js';

export const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();

    res.status(200).json({
      status: 'Success.',
      result: songs.length,
      data: {
        songs
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail.',
      data: err
    });
  }
};

export const getSongById = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);

    res.status(200).json({
      status: 'Success.',
      data: {
        song
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail.',
      data: err
    });
  }
};

export const createSong = async (req, res) => {
  try {
    const song = await Song.create(req.body);

    res.status(201).json({
      status: 'Success.',
      data: song
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail.',
      data: err
    });
  }
};

export const updateSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!song) {
      throw new Error('song not found.');
    }

    res.status(200).json({
      status: 'Success.',
      data: song
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail.',
      data: err
    });
  }
};

export const deleteSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);

    if (!song) {
      throw new Error('song not found.');
    }

    res.status(200).json({
      status: 'Success.',
      data: song
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail.',
      data: err
    });
  }
};
