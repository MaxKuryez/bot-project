import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
//import jquery from 'jquery';

function AccountStockChart() {

//  const data = [
//    { name: "Group A", value: 400 },
//    { name: "Group B", value: 300 },
//    { name: "Group C", value: 300 },
//    { name: "Group D", value: 200 }
//  ];
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch('/chart-data').then(
      res => res.json()
    ).then(
      data => {
        setData(data.currency);
        console.log(data.currency);
      }
    )
  }, []);

  return (
    <div className="stock-chart">
      <div class="tooltip">Hover over me
  <span class="tooltiptext">Tooltip text</span>
</div>
      <h1>Chart</h1>
      <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        startAngle={180}
        endAngle={0}
        outerRadius={80}
        fill="#8884d8"
        label
      >
      </Pie>
      <Tooltip />
    </PieChart>
    </div>
  );
}

export default AccountStockChart;