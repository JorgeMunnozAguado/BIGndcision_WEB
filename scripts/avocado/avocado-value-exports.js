Highcharts.chart('avocado-value-exports-container', {
  chart: {
    type: 'column',
    style: {
            fontFamily: 'Quicksand'
        }
  },
  title: {
    text: 'Evolución del valor de las exportaciones de aguacate en España.'
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
    labels: {
      formatter: function() {
          if (this.value >= 1E6) {
            return (this.value / 1000000).toFixed(0) + 'M €';
          }
          return this.value / 1000 + 'k €';
      },
    },
    title: {
      text: 'Valor en euros (€)'
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
    color: '#838651',
    data: [53964902,58644772,72274194,78224152,60914098,31711420,23363168,25575200,27171780,26729872,30359130]

  }, {
    name: '2019',
    color: '#786835',
    data: [53777618,52887634,73632778,72238316,53753620,40348942,41845576,44172386,41256524,48043476,47071230]

  }, {
    name: '2020',
    color: '#282A15', 
    data: [52794760,80081386,92979736,95007888,62171794,40094858,31450282,33255240,40699076,52109528,47792442]
  }]
});
