/* eslint-disable import/extensions */
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRouter from './routers/user/userRoutes.js';
import bandRouter from './routers/band/bandRoutes.js';
import albumRouter from './routers/album/albumRoutes.js';
import songRouter from './routers/song/songRoutes.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use('/api/v1/spotify', userRouter);
app.use('/api/v1/spotify', bandRouter);
app.use('/api/v1/spotify', albumRouter);
app.use('/api/v1/spotify', songRouter);

mongoose
  .set({ strictQuery: false })
  .connect(process.env.LOCAL_DB)
  .then(console.log('Connected to DB.'));

const port = process.env.PORT;
app.listen(port, (req, res) => {
  console.log(`App running on port ${port}.`);
});
