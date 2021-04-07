Highcharts.chart('mango-value-exports-container', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Evolución del valor de las exportaciones de mango en España.'
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
      text: 'Valor en euros.'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} valor de las exportaciones en euros</b></td></tr>',
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
    data: [11946648,9658354,12285380,12169512,11145586,10492992,10915482,9429776,26327656,40108700,31292676]

  }, {
    name: '2019',
    color: '#e66b00', 
    data: [12429188,14170300,14474020,14152518,12586484,9644234,9448538,9511116,20695134,35467674,21782626]

  }, {
    name: '2020',
    color: '#9e7540', 
    data: [13351626,12311944,14286440,12575290,15056812,9582488,9474540,11193830,29533024,44388668,26592732]
  }]
});
