import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";
import axios from "axios";

function GoogleChart() {
  const [chartData, setChartData] = useState([]);

  /* 페이지 로딩 시 서버로부터 Chart 데이터를 받아옵니다 */
  useEffect(() => {
    axios
      .get("http://localhost:5000/chart")
      .then((res) => setChartData(res.data));
  }, []);

  return (
    <>
      <div className="chart-container">
        <Chart
          width={"500px"}
          height={"300px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={chartData}
          options={{
            title: "My Daily Activities",
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    </>
  );
}

export default GoogleChart;
