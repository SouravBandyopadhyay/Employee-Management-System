import mongoose from 'mongoose';
const MONGO_URI =
  'mongodb+srv://souravb1998:<password>@employeedb.bnlijbp.mongodb.net/?retryWrites=true&w=majority';
const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URI);

    if (connection.readyState == 1) {
      console.log('Database Connected');
    }
  } catch (errors) {
    return Promise.reject(errors);
  }
};

export default connectMongo;
