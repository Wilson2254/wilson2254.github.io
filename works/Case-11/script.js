let ctx = document.getElementById('myChart').getContext('2d');
ctx.canvas.width = 900;
ctx.canvas.height = 450;

let dataFirst = {
  label: "Заражено за день",
  data: [7942, 9671, 10662, 10546, 10142, 10533, 11161, 10775, 10799, 11104, 11607],
  lineTension: 0,
  borderColor: 'red',
  pointBorderWidth: 3,
  fill: false
};

let dataSecond = {
  label: "Вылечилось за день",
  data: [1601, 1793, 1626, 1456, 1770, 1462, 2476, 2805, 5308, 2390, 5495],
  lineTension: 0,
  borderColor: 'green',
  pointBorderWidth: 3,
  fill: false
};

let dataThird = {
  label: "Скончалось за день",
  data: [96, 57, 58, 76, 95, 86, 88, 98, 104, 88, 94],
  lineTension: 0,
  borderColor: 'black',
  pointBorderWidth: 3,
  fill: false
};

let speedData = {
  labels: ['1 мая', '2 мая', '3 мая', '4 мая', '5 мая', '6 мая', '7 мая', '8 мая', '9 мая', '10 мая', '11 мая'],
  datasets: [dataFirst, dataSecond, dataThird]
};

let chart = new Chart(ctx, {
    type: 'line',
    data: speedData,
    options: {
      responsive: false,
        scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Человек',
                fontSize: 24
              }
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'День',
                fontSize: 24
              }
            }]
          }
      }
});

let ctx2 = document.getElementById('myChart_2').getContext('2d');
ctx2.canvas.width = 900;
ctx2.canvas.height = 450;

var barChart = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ["2 апреля", "11 апреля", "19 апреля", "29 апреля", "4 мая", "12 мая"],
    datasets: [{
      label: 'Кукуха поехала %',
      data: [5, 17, 26, 41, 58, 72],
      backgroundColor: [
        '#00CC00',
        '#AEF100',
        '#FFEC00',
        '#FFB000',
        '#FF6F00',
        '#FF0700'
      ]
    }]
  },
  options: {
    responsive: false,
    responsive: false,
      scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Проценты',
              fontSize: 24
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'День',
              fontSize: 24
            }
          }]
        }
  }
});
