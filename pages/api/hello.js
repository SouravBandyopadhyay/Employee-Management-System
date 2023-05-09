import connectMongo from '../../database/connect';

export default (req, res) => {
  connectMongo();
  res.status(200).json({ name: 'Hello, world!' });
};
