const errorHandler = (err, req, res, next) => {
  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((e) => e.message);
    return res.status(429).json({ message: "Validation failed", errors });
  }

  res
    .status(500)
    .json({ message: "Internal server error", error: err.message });
};

export default errorHandler;