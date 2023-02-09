import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
  songName: {
    type: String,
    required: [true, 'Please enter your band name.']
  },
  genre: {
    type: String
  },
  lyrics: String
});

// eslint-disable-next-line import/prefer-default-export
const Song = mongoose.model('Song', songSchema);

export default Song;
