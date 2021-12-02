const charts = document.querySelectorAll(".chart");

charts.forEach(function (chart) {
  var ctx = chart.getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Directors", "Managers", "Board Member", "Engineers", "Doctors", "Financial Analyst"],
      datasets: [
        {
          label: "# of people",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(83, 238, 162, 0.8)",
            "rgba(83, 238, 162, 0.8)",
            "rgba(83, 238, 162, 0.8)",
            "rgba(83, 238, 162, 0.8)",
            "rgba(83, 238, 162, 0.8)",
            "rgba(83, 238, 162, 0.8)",
          ],
          borderColor: [
            "rgba(83, 238, 162, 0.8)",
            "rgba(83, 238, 162, 0.8)",
            "rgba(83, 238, 162, 0.8)",
            "rgba(83, 238, 162, 0.8)",
            "rgba(83, 238, 162, 0.8)",
            "rgba(83, 238, 162, 0.8)"
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

$(document).ready(function () {
  $(".data-table").each(function (_, table) {
    $(table).DataTable();
  });
});
