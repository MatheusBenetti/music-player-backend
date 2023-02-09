/* eslint-disable import/extensions */
import User from '../../models/userModel.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: 'Success.',
      result: users.length,
      data: {
        users
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail.',
      data: err
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({
      status: 'Success.',
      data: {
        user
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail.',
      data: err
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      status: 'Success.',
      data: user
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail.',
      data: err
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!user) {
      throw new Error('User not found.');
    }

    res.status(200).json({
      status: 'Success.',
      data: user
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail.',
      data: err
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      throw new Error('User not found.');
    }

    res.status(200).json({
      status: 'Success.',
      data: user
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail.',
      data: err
    });
  }
};
