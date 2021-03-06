import mongoose from 'mongoose';

const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/bootcamp-api', {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    console.log('DB Connected');
  } catch (error) {
    console.log('DB Error', error);
  }
};

export { dbConnect };
