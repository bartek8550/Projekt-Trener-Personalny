const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Imie jest wymagane'],
    },
    surname: {
      type: String,
      required: [true, 'Nazwisko jest wymagane'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email jest wymagany'],
      lowercase: true,
      validate: [validator.isEmail, 'Wprowadź prawidłowy email'],
    },
    password: {
      type: String,
      required: [true, 'Hasło jest wymagane'],
      minlength: 8,
      select: false,
    },
    cartData: {
      type: Object,
      default: {},
    },
  },
  { minimize: false } //aby mógł powstać pusty koszyk
);

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.checkIsSame = async function (password1, password2) {
  return await bcrypt.compare(password1, password2);
};

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
