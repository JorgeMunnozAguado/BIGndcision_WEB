Highcharts.chart('container-ajo-value', {
  chart: {
    type: 'column',
    style: {
            fontFamily: 'Quicksand'
        }
  },
  title: {
    text: 'Precios de ajos comercializados en MercaMadrid y MercaBarna.'
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
      text: 'Precios. Valor en euros/Kg.'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} Valor del producto en euros/Kg</b></td></tr>',
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
    color: '#D7D4BB',
    data: [1.3033887469130434, 1.2041998936363638, 1.3345492932068959, 1.2254277094615387, 1.301677489277778, 1.1632507680645159, 1.195952168821428, 1.1806035630769232, 1.1700000000000004, 1.2036568694736844, 1.2657894736842108]

  }, {
    name: '2019',
    color: '#BAB489',
    data: [1.109088864652174, 1.145454545454546, 1.2206896551724142, 1.1192307692307695, 1.3797220323333337, 1.4709677419354843, 1.470770624428572, 1.4711225177692304, 1.7001403508500004, 1.8908842428947363, 1.9147076024210528]

  }, {
    name: '2020',
    color: '#8B8978',
    data: [1.7281111186956517, 1.764189407121211, 2.0407457856551723, 2.2112307692307693, 2.2264029180000002, 2.077419354838709, 2.1858032728214285, 1.9091208791538463, 1.7104166666, 1.6736842105263157, 1.6761904761578945]

  }]
});
