import mongoose from 'mongoose';

const bandSchema = new mongoose.Schema({
  bandName: {
    type: String,
    required: [true, 'Please enter your band name.'],
    unique: true
  },
  genre: {
    type: String
  },
  members: [
    {
      type: String,
      required: [true, 'Please enter the name of the members.']
    }
  ]
});

// eslint-disable-next-line import/prefer-default-export
const Band = mongoose.model('Band', bandSchema);

export default Band;
