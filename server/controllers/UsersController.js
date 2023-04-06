const User = require("../models/User");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const {
  getToken,
  COOKIE_OPTIONS,
  getRefreshToken,
} = require("../utils/authenticate");

module.exports = class UsersController {
  // async authenticate(req, res, next) {
  //   if (req.isAuthenticated()) {
  //     console.log(req.user);
  //     return next();
  //   } else {
  //     return res.status(401).json({
  //       success: false,
  //       msg: "Unauthorized access. Please, check if you are logged in.",
  //     });
  //   }
  // }

  // async register(req, res) {
  //   User.register({ username: req.body.username }, req.body.password, function (err, user) {
  //     if (err) {
  //       console.log(err);
  //       return res.status(500).json({
  //         success: "false",
  //         status: "Registration failed",
  //         msg: "Failed to register user. Please, try again later.",
  //       });
  //     } else {
  //       passport.authenticate("local")(req, res, () => {
  //         return res.status(200).json({
  //           success: true,
  //           status: "User Registered.",
  //           user: user,
  //           msg: "User is registered successfully.",
  //         });
  //       });
  //     }
  //   });
  // }
  async register(req, res, next) {
    User.register(
      new User({ username: req.body.username }),
      req.body.password,
      (err, user) => {
        if (err) {
          res.statusCode = 500;
          res.send(err);
        } else {
          user.email = req.body.email || "";
          const token = getToken({ __id: user._id });
          const refreshToken = getRefreshToken({ __id: user._id });
          user.refreshToken.push({ refreshToken });
          user
            .save()
            .then((result) => {
              res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
              res.send({ success: true, token });
            })
            .catch((error) => {
              res.statusCode = 500;
              res.send(error);
            });
        }
      }
    );
  }

  async login(req, res, next) {
    const token = getToken({ _id: req.user._id });
    const refreshToken = getRefreshToken({ _id: req.user._id });
    User.findById(req.user._id).then(
      (user) => {
        user.refreshToken.push({ refreshToken });
        user
          .save()
          .then((response) => {
            res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
            res.send({ success: true, token });
          })
          .catch((error) => {
            res.statusCode = 500;
            res.send(error);
          });
      },
      (err) => next(err)
    );
  }

  async refreshToken(req, res, next) {
    const { signedCookies } = req;
    const { refreshToken } = signedCookies;

    if (refreshToken) {
      try {
        const payload = jwt.verify(
          refreshToken,
          process.env.REFRESH_TOKEN_SECRET
        );
        const userId = payload._id;
        User.findOne({ _id: userId }).then(
          (user) => {
            if (user) {
              const tokenIndex = user.refreshToken.findIndex(
                (item) => item.refreshToken === refreshToken
              );
              if (tokenIndex === -1) {
                res.statusCode = 401;
                res.send("Unauthorized");
              } else {
                const token = getToken({ _id: userId });
                const newRefreshToken = getRefreshToken({ _id: userId });
                user.refreshToken[tokenIndex] = {
                  refreshToken: newRefreshToken,
                };
                user
                  .save()
                  .then((result) => {
                    res.cookie("refreshToken", newRefreshToken, COOKIE_OPTIONS);
                    res.send({ success: true, token });
                  })
                  .catch((err) => {
                    res.statusCode = 500;
                    res.send(err);
                  });
              }
            }
          },
          (err) => next(err)
        );
      } catch (err) {
        res.statusCode = 401;
        res.send("Unauthorized");
      }
    } else {
      res.statusCode = 401;
      res.send("Unauthorized");
    }
  }
  // async login(req, res) {
  //   const user = new User({
  //     username: req.body.username,
  //     password: req.body.password,
  //   });
  //   req.login(user, function (err) {
  //     if (err) {
  //       return res.status(403).json({
  //         success: false,
  //         status: "Authentication failed",
  //         msg: "Incorrect username or password.",
  //       });
  //     } else {
  //       passport.authenticate("local")(req, res, () => {
  //         return res.status(200).json({
  //           success: true,
  //           status: "Authentication successful",
  //           msg: "Login successful",
  //           user: user,
  //         });
  //       });
  //     }
  //   });
  // }

  async logout(req, res, next) {
    const { signedCookies } = req;
    const { refreshToken } = signedCookies;

    User.findOne({ _id: req.user._id }).then(
      (user) => {
        user.refreshToken = user.refreshToken.filter(
          (item) => item.refreshToken !== refreshToken
        );
        user
          .save()
          .then((result) => {
            res.clearCookie("refreshToken", COOKIE_OPTIONS);
            res.send({ success: true });
          })
          .catch((err) => {
            res.statusCode = 500;
            res.send(err);
          });
      },
      (err) => next(err)
    );
  }

  async updateUserInfo(req, res) {}

  async updateEmail(req, res) {}
};
