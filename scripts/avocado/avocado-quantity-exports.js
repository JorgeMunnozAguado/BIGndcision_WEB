Highcharts.chart('avocado-cuantity-exports-container', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Evolución de la cantidad de exportaciones de aguacate en España.'
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
      text: 'Cantidad del producto en peso (100 KG).'
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
    color: '#838651',
    data: [183321,195607,223938,225336,176510,104938,92058,100139,88697,95333,117676]

  }, {
    name: '2019',
    color: '#635528',
    data: [195622,185776,257182,236746,188522,149234,126869,120572,109799,138430,145427]

  }, {
    name: '2020',
    color: '#282A15',
    data: [174182,249328,285096,281355,188781,149169,137046,134204,143299,168515,168092]
  }]
});
