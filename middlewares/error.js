const errorHandler = (err, req, res, next) => {
  //log to console to dev

  console.log(err.message);

  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || 'Server Error',
  });
};

export { errorHandler };
