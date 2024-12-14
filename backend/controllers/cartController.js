const Users = require('./../models/userModel');

exports.addToCart = async (req, res) => {
  try {
    if (!req.body.userID || !req.body.itemId) {
      return res.json({ success: false, message: 'Brak wymaganych danych' });
    }

    let userData = await Users.findOne({ _id: req.body.userID });

    if (!userData) {
      return res.json({ success: false, message: 'Użytkownik nie znaleziony' });
    }

    let cartData = (await userData.cartData) || {};

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      res.json({ success: false, message: 'Przedmiot już jest w koszyku' });
    }

    await Users.findByIdAndUpdate(req.body.userID, { cartData });

    res.json({ success: true, message: 'Dodano do koszyka' });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: 'Błąd' });
  }
};

exports.removeItems = async (req, res) => {
  try {
    if (!req.body.userID || !req.body.itemId) {
      return res.json({ success: false, message: 'Brak wymaganych danych' });
    }

    let userData = await Users.findOne({ _id: req.body.userID });

    if (!userData) {
      return res.json({ success: false, message: 'Użytkownik nie znaleziony' });
    }

    let cartData = (await userData.cartData) || {};

    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }

    await Users.findByIdAndUpdate(req.body.userID, { cartData });

    res.json({ success: true, message: 'Usunięto z koszyka' });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: 'Błąd' });
  }
};

exports.getCart = async (req, res) => {
  try {
    if (!req.body.userID) {
      return res.json({ success: false, message: 'Brak wymaganych danych' });
    }

    let userData = await Users.findOne({ _id: req.body.userID });

    if (!userData) {
      return res.json({ success: false, message: 'Użytkownik nie znaleziony' });
    }

    let cartData = (await userData.cartData) || {};
    res.json({ success: true, cartData });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: 'Błąd' });
  }
};
