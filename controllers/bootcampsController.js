import { Bootcamp } from '../models/BootcampModel';

// @desc GET all bootcamps
//@ route GET api/v1/bootcamps
//@access public
const getBootcampsController = (req, res, next) => {
  res.send('OK');
};

// @desc GET singgle bootcamps
//@ route GET api/v1/bootcamps
//@access public
const getBootcampController = (req, res, next) => {
  res.js('OK');
};

// @desc POST Create bootcamps
//@ route GET api/v1/bootcamps
//@access Private

const createNewBootcampController = async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  res.stataus(201).json(bootcamp);
  res.send('OK');
};

// @desc PUT Create bootcamps
//@ route GET api/v1/bootcamps/:id
//@access Private

const updateBootcampController = (req, res, next) => {
  res.send('OK');
};

// @desc DELETE Delete bootcamps
//@ route GET api/v1/bootcamps/:id
//@access Private

const deleteBootcampController = (req, res, next) => {
  res.send('OK');
};

export {
  createNewBootcampController,
  getBootcampsController,
  getBootcampController,
  deleteBootcampController,
  updateBootcampController,
};
