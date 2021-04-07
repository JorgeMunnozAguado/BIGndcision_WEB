Highcharts.chart('container-avocado-price-per-kg', {
  chart: {
    type: 'spline'
  },
  title: {
    text: 'Evolución del precio/100 Kg del aguacate.'
  },
  subtitle: {
    text: 'Source: Eurostat.'
  },
  xAxis: {
    categories: [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov'
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Precio/100 Kg (€).'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} precio/100 Kg (€)</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: '2018',
    color: '#838651',
    data: [
      294.373814,
      299.809168,
      322.741982,
      347.144495,
      345.102816,
      302.191961,
      253.787482,
      255.396998,
      306.343845,
      280.384253,
      257.98914
      ]

  }, {
    name: '2019',
    color: '#786835',
    data: [
      274.905777,
      284.684965,
      286.30611,
      305.130038,
      285.131815,
      270.373655,
      329.832946,
      366.356915,
      375.745899,
      347.059712,
      323.676002
      ]

  }, {
    name: '2020',
    color: '#282A15', 
    data: [
      303.101124,
      321.1889,
      326.134832,
      337.679757,
      329.332899,
      268.78814,
      229.487048,
      247.796191,
      284.015073,
      309.227831,
      284.323121
      ]
  }]
});
