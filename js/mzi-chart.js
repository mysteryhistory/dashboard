let mziChart;

function createMziChart() {
  let mziOptions = {
    series: [76, 67, 61, 90],
    chart: {
      height: 144,
      width: "100%",
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 2,
          size: "5%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
        barLabels: {
          enabled: true,
          useSeriesColors: true,
          offsetX: -8,
          fontSize: "12px",
          formatter: function (seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
          },
        },
      },
    },
    colors: ["#5155C3", "#597DBE", "#5F99BB", "#65B8B7"],
    labels: ["MZI 1", "MZI 2", "MZI 3", "MZI 4"],
  };

  if (mziChart) {
    mziChart.destroy();
    document.querySelector("#mzi-chart").innerHTML = "";
  }

  mziChart = new ApexCharts(document.querySelector("#mzi-chart"), mziOptions);
  mziChart.render();
}

createMziChart();

let mziLastWidth = window.innerWidth;
let mziResizeTimeout;

window.addEventListener("resize", () => {
  const newWidth = window.innerWidth;

  if (newWidth !== mziLastWidth) {
    mziLastWidth = newWidth;

    let chartContainer = document.querySelector("#mzi-chart");
    let spinner = document.querySelector("#mzi-spinner");

    if (!chartContainer || !spinner) return;

    chartContainer.style.display = "none";
    spinner.style.display = "block";

    clearTimeout(mziResizeTimeout);
    mziResizeTimeout = setTimeout(() => {
      chartContainer.offsetHeight;
      chartContainer.style.display = "block";
      spinner.style.display = "none";
      createMziChart();
    }, 300);
  }
});
