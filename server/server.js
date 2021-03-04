const express = require("express");
const cors = require("cors");
const userCheck = require("./modules/userCheck");

const data = require("./data");
const app = express();
const port = 5000;

const jwt = require("jsonwebtoken");
const secretObj = require("./modules/jwt");
const { response } = require("express");

app.use(express.json());
app.use(
  cors({
    origin: true,
    methods: "POST,GET,OPTION",
    credentials: true,
  })
);

/* 차트 데이터 API */
app.get("/chart", (req, res) => {
  res.send(data.chartData);
});

/* JWT 토큰 API -- 등록된 유저인지 체크 후 토큰을 발급합니다. */
app.post("/getToken", (req, res) => {
  const user = userCheck(req.body);
  if (user) {
    const token = jwt.sign(
      {
        id: user.id,
      },
      secretObj.secret,
      {
        expiresIn: "5m",
      }
    );
    console.log(user);
    res.cookie("user", token).json({ token });
  } else {
    res.status(400).send("error");
  }
});

/* 로그인 API -- 토큰이 유효한지 체크하고 유저정보를 전달합니다 */
app.get("/login", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    res.status(400).json({ msg: "no token" });
  } else {
    const tokenData = jwt.verify(token, secretObj.secret);

    const user = data.userData.filter((el) => el.id === tokenData.id)[0];
    res.json({ user });
  }
});

/* 로그아웃 API */
app.post("/logout", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    res.status(400).json({ msg: "fail to logout" });
  } else {
    res.json({ msg: "logout completed" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
