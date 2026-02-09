const canvas = document.getElementById("growthChart");
const ctx = canvas.getContext("2d");

let chart = null;

function calculateGrowth(monthly, rate, years) {
  const monthlyRate = rate / 100 / 12;
  const months = years * 12;

  let total = 0;
  let data = [];
  let labels = [];

  for (let m = 1; m <= months; m++) {
    total = total * (1 + monthlyRate) + monthly;

    if (m % 12 === 0) {
      data.push(Math.round(total));
      labels.push(`Year ${m / 12}`);
    }
  }

  return {
    labels,
    data,
    finalAmount: Math.round(total)
  };
}

function renderChart() {
  const monthly = Number(document.getElementById("monthly").value);
  const rate = Number(document.getElementById("rate").value);
  const years = Number(document.getElementById("years").value);

  if (!monthly || !rate || !years) return;
  if (years < 1 || years > 40) return;

  const result = calculateGrowth(monthly, rate, years);

  // ✅ Update final amount
  document.getElementById("finalAmount").innerText =
    "₹" + result.finalAmount.toLocaleString("en-IN");

  document.getElementById("yearLabel").innerText = years;

  // ✅ Destroy old chart safely
  if (chart !== null) {
    chart.destroy();
    chart = null;
  }

  // ✅ Create chart
  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: result.labels,
      datasets: [{
        data: result.data,
        borderColor: "#1e88e5",
        backgroundColor: "rgba(30,136,229,0.15)",
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Years"
          }
        },
        y: {
          title: {
            display: true,
            text: "Amount (₹)"
          },
          ticks: {
            callback: value => "₹" + value.toLocaleString("en-IN")
          }
        }
      }
    }
  });
}

// 🔁 Live updates
["monthly", "rate", "years"].forEach(id => {
  document.getElementById(id).addEventListener("input", renderChart);
});
