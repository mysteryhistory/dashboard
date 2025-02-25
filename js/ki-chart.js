let kiOptions = {
  series: [67],
  chart: {
    height: 144,
    minHeight: 144,
    type: "radialBar",
  },
  colors: ["#5155C3"],
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: "16px",
          color: undefined,
        },
        value: {
          offsetY: 30,
          fontSize: "14px",
          color: "#616E85",
          formatter: function (val) {
            return val + "%";
          },
        },
      },
    },
  },
  stroke: {
    dashArray: 2,
  },
  labels: [""],
};

let kiChart = new ApexCharts(document.querySelector("#ki-chart"), kiOptions);

kiChart.render();
