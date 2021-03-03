const { userData } = require("../data");

const userCheck = (req) => {
  for (let user of userData) {
    if (req.userId === user.userId && req.password === user.password) {
      return true;
    }
  }
  return false;
};

module.exports = userCheck;
