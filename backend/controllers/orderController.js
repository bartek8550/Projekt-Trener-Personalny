const Order = require('./../models/orderModel');
const Users = require('./../models/userModel');
const Stripe = require('stripe');
const nodemailer = require('nodemailer');
const path = require('path');

const stripe = new Stripe(process.env.STRIPE_S);

exports.orderPlace = async (req, res) => {
  const frontUrl = 'https://trenerpersonalny.netlify.app'; //https://trenerpersonalny.netlify.app  http://localhost:5000
  try {
    const newOrder = new Order({
      userID: req.body.userID,
      products: req.body.products,
      count: req.body.count,
    });
    await newOrder.save();

    const productsLine = req.body.products.map((product) => ({
      price_data: {
        currency: 'pln',
        product_data: {
          name: product.title,
        },
        unit_amount: product.price * 100,
      },
      quantity: product.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: productsLine,
      mode: 'payment',
      success_url: `${frontUrl}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontUrl}/verify?success=false&orderId=${newOrder._id}`,
    });

    await Users.findByIdAndUpdate(req.body.userID, { cartData: {} });

    res.json({ success: true, session_url: session.url });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: 'Błąd podczas zamówienia' });
  }
};

const sendEmail = async (to, subject, text, attachments) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    tls: {
      rejectUnauthorized: false,
    },
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    attachments,
  };

  await transporter.sendMail(mailOptions);
};

exports.verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: 'Nie znaleziono zamówienia' });
    }

    const user = await Users.findById(order.userID);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: 'Nie znaleziono użytkownika' });
    }

    if (success === 'true') {
      await Order.findByIdAndUpdate(orderId, {
        payment: true,
        status: 'Opłacone',
      });

      const attachments = order.products.map((product) => {
        const pdfPath = path.join(__dirname, '../pdf', `${product._id}.pdf`);
        return {
          filename: `${product.title}.pdf`,
          path: pdfPath,
        };
      });

      const emailSubject = 'Twoje zakupione produkty';
      const emailText = `
        Dziękujemy za zakupy w naszym sklepie!
        
        Szczegóły zamówienia:
        - Numer zamówienia: ${orderId}
        - Łączna kwota: ${order.count} PLN
        - Liczba produktów: ${order.products.length}

        W załączniku znajdziesz pliki PDF związane z zakupionymi produktami.

        Dziękujemy za zakupy i zapraszamy ponownie!
      `;

      await sendEmail(user.email, emailSubject, emailText, attachments);

      res.json({ success: true, message: 'Zapłacone i e-mail wysłany' });
    } else {
      await Order.findByIdAndUpdate(orderId, { status: 'Anulowane' });
      res.json({ success: false, message: 'Nie zapłacone' });
    }
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: 'Błąd podczas weryfikacji zamówienia' });
  }
};
