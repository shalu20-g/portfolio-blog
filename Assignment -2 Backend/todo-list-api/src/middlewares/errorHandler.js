const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({
      success: false,
      message: 'Invalid JSON in request body',
    });
  }

  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map((error) => error.message);

    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors,
    });
  }

  if (err.name === 'CastError') {
    return res.status(400).json({
      success: false,
      message: 'Invalid task ID',
    });
  }

  const status = err.status || err.statusCode || 500;
  const safeStatus = status >= 400 && status < 600 ? status : 500;

  return res.status(safeStatus).json({
    success: false,
    message: safeStatus === 500 ? 'Internal server error' : err.message,
  });
};

module.exports = errorHandler;
