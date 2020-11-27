//@ desc logger req url to the console
const logger = (req, res, next) => {
  req.hello = 'How are you';
  console.log(
    `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
  );

  next();
};

export { logger };
