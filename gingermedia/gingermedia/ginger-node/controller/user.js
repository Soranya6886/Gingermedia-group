const users = require("../schema/user");

exports.register = function (req, res) {
  var newUser = new users(req.body);
  newUser
    .save()
    .then((user) => {
      if (user) {
        return res.json(user);
      }
    })
    .catch((err) => {
      return res.status(400).send({ message: err });
    });
};
exports.sign_in = function (req, res) {
  users
    .findOne({ userId: req.body.userId })
    .then((user) => {
      if (!user || user.password !== req.body.password) {
        return res.status(401).send({
          message: "Authentication failed. Invalid userId or password",
        });
      }
      return res.json({
        userId: user.userId,
        message: "login successfull!",
      });
    })
    .catch((err) => {
      return res.status(400).send({ message: err });
    });
};
exports.getUserDetails = function (req, res) {
  users
    .findOne({ userId: req.params.userId })
    .then((user) => {
      return res.send(user);
    })
    .catch((err) => {
      return res.status(400).send({ message: err });
    });
};
exports.editUserDetails = function (req, res) {
  users
    .findOneAndUpdate({ userId: req.params.userId }, req.body)
    .then((user) => {
      return res.send(user);
    })
    .catch((err) => {
      return res.status(400).send({ message: err });
    });
};
