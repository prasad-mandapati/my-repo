import React from "react";
import "./graph.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import faker from "faker";
import "./graph.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    plugins:{
      legend:{
        display:false,
      }
    }
}

const labels = [
  "January",
  "February",
  "March"
];
const values = labels.map(() => faker.datatype.number({ min: 100, max: 1000 }));
const soredvalues = values.map((item) => item);
soredvalues.sort((a, b) => a - b).reverse();

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: values,
      backgroundColor: values.map((item) =>
        item === soredvalues[0]
          ? "rgba(62, 0, 145, 0.87)"
          : "rgba(62, 0, 145, 0.24)"
      ),
      borderRadius: "5",
    },
  ],
};

const textcenter = {
  id:"textCenter",
  beforeDatasetsDraw(chart,args,pluginOptions){
    const {ctx, data} = chart;
    ctx.save();
    ctx.font = 'bolder 15px sans-serif';
    ctx.fillStyle = 'black';
    ctx.textAlign='center';
    ctx.textBaseline = 'middle';
    ctx.fillText("60% customers",chart.getDatasetMeta(0).data[0].x,chart.getDatasetMeta(0).data[0].y);
  }
}

const Donutgraph = () => {
  return (
    <div className="--p">
      <Doughnut
      options={options}
      data={data}
      plugins={[textcenter]}
    />
    </div>
    
  );
};

export default Donutgraph;
