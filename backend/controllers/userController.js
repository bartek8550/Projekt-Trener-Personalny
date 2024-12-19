const Users = require('./../models/userModel');
const jwt = require('jsonwebtoken');
const validator = require('validator');

const sign = (id) => {
  return jwt.sign({ id }, process.env.JWT_S, {
    expiresIn: process.env.JWT_EXP,
  });
};

exports.createUser = async (req, res) => {
  try {
    let check = await Users.findOne({ email: req.body.email }); //Szukanie istniejącego emailu, true jeśli znajdzie

    if (check) {
      return res.status(400).json({
        status: 'false',
        errors: 'Znaleziono użytkownika o podanym adresie email',
      });
    }

    const user = new Users({
      name: req.body.username,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
    });

    await user.save();

    const token = sign(user._id);

    res.status(201).json({
      success: true,
      token,
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message || 'Wystąpił błąd w userController',
    });
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Sprawdzenie, czy podano email i hasło
    if (!email || !password) {
      return res.status(400).json({
        status: 'fail',
        message: 'Brak email bądź hasła',
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        status: 'fail',
        message: 'Nieprawidłowy format adresu email',
      });
    }

    // Znalezienie użytkownika i jawne dołączenie pola password
    const user = await Users.findOne({ email }).select('+password');

    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'Nie znaleziono użytkownika o podanym adresie email',
      });
    }
    
    if (!(await user.checkIsSame(password, user.password))) {
      return res.status(401).json({
        status: 'fail',
        message: 'Nieprawidłowe hasło',
      });
    }

    // Wygenerowanie tokenu
    const token = sign(user._id);
    res.status(200).json({
      status: 'success',
      token,
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message || 'Wystąpił błąd w loginUser',
    });
  }
};
