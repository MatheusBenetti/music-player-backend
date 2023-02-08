import mongoose from 'mongoose';

const bandSchema = new mongoose.Schema({
  bandName: {
    type: String,
    required: [true, 'Please enter your band name.']
  },
  genre: {
    type: String
  }
});

// eslint-disable-next-line import/prefer-default-export
const Band = mongoose.model('User', bandSchema);

export default Band;
