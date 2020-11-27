import express from 'express';
import dotenv from 'dotenv';
import { bootCampRoutes } from './routes/bootCampRoutes';
import { logger } from './middlewares/loggerMiddleware';
import { dbConnect } from './config/dbConnect';

//db
dbConnect();
//load env vars
//Because we put them in a special location we have to it like this

dotenv.config({ path: '/config/config.env' });
const app = express();

app.use(express.json());

// // dev logging middleware
// if (process.env.NODE_ENV === 'development') {
//   app.use('morgan');
// }

//using middleware
app.use(logger);

// mount routes
app.use('/api/v1/bootcamps', bootCampRoutes);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`)
);
