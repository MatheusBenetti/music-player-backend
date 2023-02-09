import mongoose from 'mongoose';

const albumSchema = new mongoose.Schema({
  albumName: {
    type: String,
    required: [true, 'Please enter your album name.'],
    unique: true
  },
  genre: {
    type: String
  }
});

// eslint-disable-next-line import/prefer-default-export
const album = mongoose.model('Album', albumSchema);

export default album;
