Highcharts.chart('container-ajo-quantity', {
  chart: {
    type: 'area',
    style: {
            fontFamily: 'Quicksand'
        }
  },
  title: {
    text: 'Volumen de ajos comercializados en MercaMadrid y MercaBarna.'
  },
  subtitle: {
    text: 'Source: MercaMadrid y MercaBarna.'
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
      text: 'Volumen. Valor en KG.'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} Volumen. Valor en KG</b></td></tr>',
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
    name: '2020',
    color: '#8B8978',
    data: [33463.913043478264, 17417.151515151516, 31014.655172413793, 24921.30769230769, 37385.22222222222, 17546.516129032258, 15492.964285714286, 25682.923076923078, 19370.8, 22908.842105263157, 26770.947368421053]
  }, {
    name: '2019',
    color: '#BAB489',
    data: [16521.260869565216, 18236.515151515152, 23074.275862068964, 24773.153846153848, 31305.11111111111, 12250.548387096775, 12661.5, 12600.923076923076, 11995.75, 19632.157894736843, 22852.473684210527]

  }, {
    name: '2018',
    color: '#D7D4BB',
    data: [16476.304347826088, 12444.181818181818, 10866.896551724138, 18056.615384615383, 20512.722222222223, 13730.967741935483, 13313.75, 16014.538461538461, 7507.95, 14502.368421052632, 10109.578947368422]
  }]
});
