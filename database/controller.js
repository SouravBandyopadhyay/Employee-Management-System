// Controller

import Users from '../model/userSchema';

export async function getUsers(req, res) {
  try {
    const users = await Users.find({});
    if (!users) return res.status(404).json({ error: 'Data not Found' });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: 'Error while fetching the data' });
  }
}