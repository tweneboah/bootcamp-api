const errorHandler = (err, req, res, next) => {
  //log to console to dev

  console.log(err.stack);

  res.status(500).json({
    success: false,
    error: err.message,
  });
};

export { errorHandler };
