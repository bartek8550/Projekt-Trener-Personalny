//Zmienne
const dotenv = require('dotenv').config();
const path = require('path');
//Użycie express
const express = require('express');
const app = express();
const connectDB = require('./config/connectDB');
//Ustawienie portu z pliku env
const port = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors());
app.use(express.json()); // Do obsługi danych w formacie JSON
app.use(express.urlencoded({ extended: true })); // Do obsługi danych formularza
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');

//Uruchoemienie serwera, połączenie z bazą mongo i nasłuchiwanie na porcie
const startServ = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is running on PORT ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServ();
//obsługa zdjęć z folderu
//app.use('/images', express.static(path.join(__dirname, 'frontend/IMG')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));
//trasowanie na produkty
app.use('/api/v1', productRoutes);

app.use('/api/v1', userRoutes);

app.use('/api/v1', cartRoutes);
app.use('/api/v1', orderRoutes);

app.get('/', (req, res) => {
  res.send('Express app is running');
});
