import { Bootcamp } from '../models/BootcampModel';

// @desc POST Create bootcamps
//@ route GET api/v1/bootcamps
//@access Private

const createNewBootcampController = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json(bootcamp);
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc GET all bootcamps
//@ route GET api/v1/bootcamps
//@access public
const getBootcampsController = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find({});
    res.status(200).json({
      success: true,
      data: bootcamps,
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc GET singgle bootcamps
//@ route GET api/v1/bootcamps
//@access public
const getBootcampController = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc PUT Create bootcamps
//@ route GET api/v1/bootcamps/:id
//@access Private

const updateBootcampController = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc DELETE Delete bootcamps
//@ route GET api/v1/bootcamps/:id
//@access Private

const deleteBootcampController = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findOneAndDelete(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

export {
  createNewBootcampController,
  getBootcampsController,
  getBootcampController,
  deleteBootcampController,
  updateBootcampController,
};
