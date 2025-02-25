let kpsOptions = {
  chart: {
    type: "bar",
    height: 200,
    minHeight: 200,
    toolbar: {
      show: false,
    },
  },
  colors: ["#5155C3", "#597DBE", "#5F99BB", "#65B8B7", "#6CDDB1"],
  fill: {
    opacity: 1,
  },
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
    borderColor: "#EFF2F5",
  },
  xaxis: {
    categories: ["KP 1", "KP 2", "KP 3", "KP 4", "KP 5"],
    labels: {
      style: {
        colors: ["#616E85"],
        fontSize: 12,
        fontFamily: "Inter, serif",
      },
    },
  },
  series: [
    {
      data: [85, 73, 25, 60, 25],
    },
  ],
};

let kpsChart = new ApexCharts(document.querySelector("#kps-chart"), kpsOptions);

kpsChart.render();
