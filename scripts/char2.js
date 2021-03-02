Highcharts.chart('container-dataset-4', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Evolución de las importaciones (suma con todos los países).'
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
      text: 'Importaciones. Valor en euros.'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} valor de las importaciones en euros</b></td></tr>',
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
    data: [2058091940, 1879425984, 1932298320,1794039092,2009472992,1737222700,1332353680,1135186664,985898894,1124261832,1637982770]

  }, {
    name: '2019',
    data: [2036688128,1983524456,2012008856,1873577504,1874652180,1815077902,1471706400,1079702746,914945294,1178331506,1685718152]

  }, {
    name: '2020',
    data: [2242650030,2140243452,2322583838,2314740352,2122090210,1904638252,1441992146,1154250180,1059988752,1417601398,1854479382]

  }]
});
