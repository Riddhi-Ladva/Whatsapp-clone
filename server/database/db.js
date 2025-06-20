import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const Connection = async () => {
  const URL = process.env.MONGODB_URI;

  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Database connected successfully');
  } catch (error) {
    console.error('❌ Error while connecting to the database:', error.message);
  }
};

export default Connection;
