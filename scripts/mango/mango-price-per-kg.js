Highcharts.chart('container-mango-price-per-kg', {
  chart: {
    type: 'spline'
  },
  title: {
    text: 'Evolución del precio/100 Kg del mango.'
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
    color: '#ffa031',
    data: [
      218.1916607,
      190.2149441,
      211.5105709,
      206.9328164,
      191.5905043,
      221.29644,
      206.7639415,
      180.2913026,
      186.4023619,
      169.5999831,
      174.2383002
      ]

  }, {
    name: '2019',
    color: '#e66b00',
    data: [
      225.7307762,
      235.6649869,
      257.5906745,
      267.7561299,
      219.6172463,
      237.8825416,
      231.3153475,
      203.5638979,
      174.1721427,
      181.5837992,
      187.3403628
      ]

  }, {
    name: '2020',
    color: '#9e7540', 
    data: [
      210.8562088,
      207.320648,
      217.5423316,
      226.8229289,
      224.3802456,
      195.2223286,
      187.2549756,
      202.5592631,
      205.747694,
      206.5944084,
      205.6557804
      ]
  }]
});
