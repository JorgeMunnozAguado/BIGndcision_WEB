Highcharts.chart('processedFruit-prices-container', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Evolución de los precios de las frutas de cuarta gama'
  },
  subtitle: {
    text: 'Source: MercaBarna - MercaMadrid.'
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
      text: 'Precios (€)'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} precio del producto en (€)</b></td></tr>',
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
    color: '#7eb55e ',
    data: [0.95, 0.95, 0.95, 0.94375, 0.9, 0.8275, 0.75, 0.7, 0.7, 0.7, 0.7]

  }, {
    name: '2019',
    color: '#FFC300',
    data: [0.7, 0.7, 0.7, 0.7, 0.655882353, 0.644444444, 0.7, 0.7, 0.7, 0.7, 0.7]

  }, {
    name: '2020',
    color: '#FF5733',
    data: [1.2, 1.2, 1.2, 1.2, 1.2, 0.970833333, 0.8984375, 0.8857142855, 0.95, 0.95, 0.95]
  }]
});
