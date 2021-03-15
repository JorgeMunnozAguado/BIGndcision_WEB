Highcharts.chart('frozenVegetables-prices-container', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Evolución de los precios de los volúmenes de congelados'
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
      text: 'Precios (Kg).'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} cantidad del producto en KG (100 KG)</b></td></tr>',
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
    color: '#bdeba2',
    data: [56354.11, 64415.5, 61450.4, 55902.875, 41721.875, 26250.92, 30682.66, 52711.375, 35916.625, 38151.66, 45163.44]

  }, {
    name: '2019',
    color: '#7eb55e',
    data: [91671.11, 55095.8, 61815.3, 67737.125, 62587.875, 60760.42, 39580.41, 45465.375, 75624.875, 62548.55, 59665.33]

  }, {
    name: '2020',
    color: '#51733d',
    data: [67749.11, 68229.1, 76656.2, 85575.625, 121685.125, 69638.42, 44927.08, 45051.75, 93284.375, 106304.66, 106477.55]
  }]
});
