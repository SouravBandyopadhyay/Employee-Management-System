import connectMongo from '../../../database/connect';
import { getUsers, postUser } from '../../../database/controller';

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: 'Error in the connection' })
  );
  // types of request destructing from req
  const { method } = req;

  switch (method) {
    case 'GET':
      getUsers(req, res);
      // res.status(200).json({ method, name: 'GET REQUEST' });
      break;
    case 'POST':
      // res.status(200).json({ method, name: 'POST REQUEST' });
      postUser(req, res);
      break;
    case 'PUT':
      res.status(200).json({ method, name: 'PUT REQUEST' });
    case 'DELETE':
      res.status(200).json({ method, name: 'DELETE REQUEST' });
    default:
      res.setHeader(`Allow`, [`GET`, `POST`, `PUT`, `DELETE`]);
      res.status(405).end(`METHOD ${method} Not Allowed `);
  }
}
