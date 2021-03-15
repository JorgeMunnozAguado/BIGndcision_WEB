Highcharts.chart('container-col-china-from-china', {
    chart: {
      type: 'area'
    },
    title: {
      text: 'Volumen de col china procedente de China.'
    },
    subtitle: {
      text: 'Source: MercaMadrid y MercaBarna.'
    },
    xAxis: {
      categories: [
        'Ene',
        'Feb',
        'Mar'
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

    series: [  {
      name: '2018',
      color: '#8DC13B',
      data: [19273, 42645, 58401]
    }, {
        name: '2019',
        color: '#D7F08A',
        data: [17253, 60501, 45503]
    }, {
        name: '2020',
        color: '#E1FF5B ',
        data: [13630, 21994, 26]
    }]
  });
