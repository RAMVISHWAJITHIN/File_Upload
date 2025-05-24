// index.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connectDB } = require('./config/db');
const { errorHandler } = require('./middleware/error');
const videoRoutes = require('./routes/videoRoute');


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", videoRoutes);


app.use(errorHandler); // ✅ Must be after routes

const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`🚀 Server started at http://localhost:${port}`);
  });
};

startServer();

