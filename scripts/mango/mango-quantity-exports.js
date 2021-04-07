Highcharts.chart('mango-cuantity-exports-container', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Evolución de la cantidad de exportaciones de mango en España.'
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
      text: 'Cantidad del producto en peso (100 kg).'
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
    color: '#ffa031', 
    data: [54753,50776,58084,58809,58174,47416,52792,52303,141241,236490,179597]

  }, {
    name: '2019',
    color: '#e66b00', 
    data: [55062,60129,56190,52856,57311,40542,40847,46723,111820,195324,116273]

  }, {
    name: '2020',
    color: '#9e7540', 
    data: [63321,59386,65672,55441,67104,49085,50597,55262,143540,214859,129307]
  }]
});
