let rlqOptions = {
  chart: {
    type: "area",
    height: 144,
    minHeight: 144,
    sparkline: {
      enabled: true,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ["#F18C5C"],
  plotOptions: {
    bar: {
      distributed: true,
      horizontal: false,
      columnWidth: 76.5,
      borderRadius: 6,
      borderRadiusApplication: "end",
    },
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  grid: {
    show: true,
    borderColor: "#EFF2F5",
  },
  xaxis: {
    labels: {
      show: false,
    },
  },
  fill: {
    type: "solid",
    colors: ["#f5b190", "#F18C5C"],
    opacity: 1,
  },
  stroke: {
    curve: "smooth",
    width: 0,
  },
  yaxis: {
    tickAmount: 10,
    labels: {
      show: false,
    },
  },
  series: [
    {
      data: [4, 3, 2, 1],
    },
    {
      data: [1, 2, 3, 4],
    },
  ],
};

let rlqChart = new ApexCharts(document.querySelector("#rlq-chart"), rlqOptions);

rlqChart.render();
