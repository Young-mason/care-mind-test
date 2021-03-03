const express = require("express");
const cors = require("cors");
const userCheck = require("./modules/userCheck");

const data = require("./data");
const app = express();
const port = 5000;

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

/* 로그인 API */
app.post("/signin", (req, res) => {
  // 등록된 유저인지 체크합니다
  if (userCheck(req.body)) {
    res.status(200).send("OK");
  } else {
    res.status(400).send("error");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
