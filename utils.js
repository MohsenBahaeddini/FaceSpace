const sendResponse = (res, status, data, message = "No message included.") => {
  return res.status(status).json({ status, data, message });
};

const findUser = (users, userId) => {
  const user = users.find((user) => user.id === userId) || null;
  return user.deleted ? null : user;
};

const findUserIndex = (users, userId) => {
  const idx = users.findIndex((user) => user.id === userId);
  return idx !== -1 ? idx : null;
};
const findUserByName = (users, userName) => {
  const user = users.find((user) => user.name === userName) || null;
  return user;
};
module.exports = { findUser, findUserIndex, sendResponse, findUserByName };
