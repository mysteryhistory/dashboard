let kiChart;

function createKiChart() {
  let kiOptions = {
    series: [67],
    chart: {
      height: 144,
      minHeight: 144,
      width: "100%",
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
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
  };

  if (kiChart) {
    kiChart.destroy();
    document.querySelector("#ki-chart").innerHTML = "";
  }

  kiChart = new ApexCharts(document.querySelector("#ki-chart"), kiOptions);
  kiChart.render();
}

createKiChart();

let kiResizeTimeout;
window.addEventListener("resize", () => {
  let chartContainer = document.querySelector("#ki-chart");
  chartContainer.style.display = "none";

  let spinner = document.querySelector("#ki-spinner");
  spinner.style.display = "block";

  clearTimeout(kiResizeTimeout);
  kiResizeTimeout = setTimeout(() => {
    chartContainer.offsetHeight;
    chartContainer.style.display = "block";
    spinner.style.display = "none";
    createKiChart();
  }, 300);
});
