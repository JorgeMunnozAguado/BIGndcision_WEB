Highcharts.chart('container', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Evolución del consumo.'
  },
  subtitle: {
    text: 'Source: Dataset 1, MAPA.'
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
      'Nov',
      'Dic'
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'volumen (miles de kg)'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} miles de kg</b></td></tr>',
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
    data: [5296537.17, 5057095.48, 5713161.88, 5925338.82, 6068421.65, 6039364.92, 5952775.17, 5463760.56, 5641983.55, 5469909.14, 4945194.87, 3658898.68]

  }, {
    name: '2019',
    data: [5315571.61, 5116237.23, 5763503.21, 5872827.16, 6122783.10, 6047971.94, 6043204.33, 5525113.06, 5593012.26, 5444500.38, 4996216.95, 3661318.40]

  }, {
    name: '2020',
    data: [5294157.92, 5208565.68, 5954134.42, 6389691.16, 6438144.37, 6198658.10, 4443472.72, 4058067.41, 4147480.46, 4036370.81, 3675636.06, 2440072.38]

  }]
});