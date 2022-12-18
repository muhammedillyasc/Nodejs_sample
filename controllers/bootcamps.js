// this is to write neet code only

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "get all",
  });
};

exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "get",
  });
};

exports.createBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "created",
  });
};

exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "deleted",
  });
};

exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "updated",
  });
};
