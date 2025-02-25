let surveyOptions = {
  chart: {
    type: "bar",
    height: 185,
    minHeight: 185,
    toolbar: {
      show: false,
    },
  },
  colors: ["#F18C5C"],
  fill: {
    opacity: 1,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: 15.5,
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
    borderColor: "#EFF2F5",
  },
  xaxis: {
    categories: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
    labels: {
      style: {
        colors: ["#616E85"],
        fontSize: 12,
        fontFamily: "Inter, serif",
      },
    },
  },
  yaxis: {
    formatter: function (value) {
      return value.replace(/\.0+$/, "");
    },
  },
  series: [
    {
      data: [4.5, 2, 2.5, 4.5, 0.5, 4, 4, 2, 2.5, 4.5, 0.3, 4.5],
    },
  ],
};

let surveyChart = new ApexCharts(
  document.querySelector("#survey-topic-chart"),
  surveyOptions
);

surveyChart.render();
