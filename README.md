# Handling custom middleware

i. By default all errors are return in the form of html but we want in html

1. Create an error middleware function

```js
const errorHandler = (err, req, res, next) => {
  //log to console to dev

  console.log(err.stack);

  res.status(500).json({
    success: false,
    error: err.message,
  });
};

export { errorHandler };
```

2. Inside your route thus catch block call next and pass in the error or any place you are expecting error

```js
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
    // res.status(400).json({ success: false });
    next(error);
  }
};
```

3. Pass the error to app.use() below all your routes

```js
//error middleware
app.use(errorHandler);
```
