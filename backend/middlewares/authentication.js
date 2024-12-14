const jwt = require('jsonwebtoken');

exports.auth = async (req, res, next) => {
  const { token } = req.headers;
  if (!token)
    return res.json({ succes: false, message: 'Nie zalogowany użytkownik' });
  try {
    const token_d = jwt.verify(token, process.env.JWT_S);
    req.body.userID = token_d.id;
    next();
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
