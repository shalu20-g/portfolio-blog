const ALLOWED_FIELDS = ['title', 'description', 'completed'];

const isPlainObject = (value) =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const isNonEmptyString = (value) =>
  typeof value === 'string' && value.trim().length > 0;

const getUnknownFields = (body) =>
  Object.keys(body).filter((field) => !ALLOWED_FIELDS.includes(field));

const sendValidationError = (res, errors) =>
  res.status(400).json({
    success: false,
    message: 'Invalid task data',
    errors,
  });

const validateCreateTask = (req, res, next) => {
  const body = isPlainObject(req.body) ? req.body : {};
  const errors = [];

  if (!isPlainObject(req.body)) {
    errors.push('Request body must be a JSON object');
  }

  const unknownFields = getUnknownFields(body);
  if (unknownFields.length > 0) {
    errors.push(`Unknown field(s): ${unknownFields.join(', ')}`);
  }

  if (!isNonEmptyString(body.title)) {
    errors.push('title must be a non-empty string');
  }

  if (body.description !== undefined && typeof body.description !== 'string') {
    errors.push('description must be a string');
  }

  if (body.completed !== undefined && typeof body.completed !== 'boolean') {
    errors.push('completed must be a boolean');
  }

  if (errors.length > 0) {
    return sendValidationError(res, errors);
  }

  return next();
};

const validateUpdateTask = (req, res, next) => {
  const body = isPlainObject(req.body) ? req.body : {};
  const errors = [];

  if (!isPlainObject(req.body)) {
    errors.push('Request body must be a JSON object');
  }

  const unknownFields = getUnknownFields(body);
  if (unknownFields.length > 0) {
    errors.push(`Unknown field(s): ${unknownFields.join(', ')}`);
  }

  const providedFields = ALLOWED_FIELDS.filter((field) =>
    Object.prototype.hasOwnProperty.call(body, field)
  );

  if (providedFields.length === 0 && unknownFields.length === 0) {
    errors.push('Provide at least one field: title, description, or completed');
  }

  if (body.title !== undefined && !isNonEmptyString(body.title)) {
    errors.push('title must be a non-empty string');
  }

  if (body.description !== undefined && typeof body.description !== 'string') {
    errors.push('description must be a string');
  }

  if (body.completed !== undefined && typeof body.completed !== 'boolean') {
    errors.push('completed must be a boolean');
  }

  if (errors.length > 0) {
    return sendValidationError(res, errors);
  }

  return next();
};

const validateObjectId = (req, res, next) => {
  if (!/^[0-9a-fA-F]{24}$/.test(req.params.id || '')) {
    return res.status(400).json({
      success: false,
      message: 'Invalid task ID',
    });
  }

  return next();
};

module.exports = { validateCreateTask, validateUpdateTask, validateObjectId };
