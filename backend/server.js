//Zmienne
const dotenv = require('dotenv').config();
const path = require('path');
//Użycie express
const express = require('express');
const app = express();
const connectDB = require('./config/connectDB');
//Ustawienie portu z pliku env
const port = process.env.PORT || 3000;
const productRoutes = require('./routes/productRoutes');

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
app.use('/images', express.static(path.join(__dirname, 'frontend/IMG')));
//trasowanie na produkty
app.use('/api/v1', productRoutes);

app.get('/', (req, res) => {
  res.send('Express app is running');
});
