import Band from '../../models/bandModel';

export const getAllBands = async (req, res) => {
  try {
    const bands = await Band.find();

    res.status(200).json({
      status: 'Success.',
      result: bands.length,
      data: {
        bands
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail.',
      data: err
    });
  }
};

export const getBandById = async (req, res) => {
  try {
    const band = await Band.findById(req.params.id);

    res.status(200).json({
      status: 'Success.',
      data: {
        band
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail.',
      data: err
    });
  }
};

export const createBand = async (req, res) => {
  try {
    const band = await Band.create(req.body);

    res.status(201).json({
      status: 'Success.',
      data: band
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail.',
      data: err
    });
  }
};

export const updateBand = async (req, res) => {
  try {
    const band = await Band.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!band) {
      throw new Error('User not found.');
    }

    res.status(200).json({
      status: 'Success.',
      data: band
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail.',
      data: err
    });
  }
};

export const deleteBand = async (req, res) => {
  try {
    const band = await Band.findByIdAndDelete(req.params.id);

    if (!band) {
      throw new Error('User not found.');
    }

    res.status(200).json({
      status: 'Success.',
      data: band
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail.',
      data: err
    });
  }
};
