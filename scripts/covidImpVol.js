Highcharts.chart('container_covid_imp_vol', {
  chart: {
    zoomType: 'xy'
  },
  title: {
    text: 'Volumen importaciones Vs. Número de casos de COViD-19'
  },
  subtitle: {
    text: 'Source: WorldClimate.com'
  },
  xAxis: [{
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    crosshair: true
  }],
  yAxis: [{ // Primary yAxis
    labels: {
      formatter: function() {
          if (this.value >= 1E6) {
            return (this.value / 1000000).toFixed(0) + 'M kg';
          }
          return this.value / 1000 + 'k kg';
      },
      style: {
        color: Highcharts.getOptions().colors[1]
      }
    },
    title: {
      text: 'Importaciones (Kg)',
      style: {
        color: Highcharts.getOptions().colors[1]
      }
    }
  }, { // Secondary yAxis
    title: {
      text: 'Número de casos',
      style: {
        color:'#f7a08d'
      }
    },
    labels: {
      formatter: function() {
          if (this.value >= 1E6) {
            return (this.value / 1000000).toFixed(0) + 'M casos';
          }
          return this.value / 1000 + 'k casos';
      },
      style: {
        color:'#f7a08d'
      }
    },
    opposite: true
  }],
  tooltip: {
    shared: true
  },
  legend: {
    layout: 'vertical',
    x: 120,
    verticalAlign: 'top',
    y: 100,
    floating: true,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || // theme
      'rgba(255,255,255,0.25)'
  },
  series: [{
    name: 'Covid',
    type: 'area',
    color:'#f7a08d',
    yAxis: 1,
    data: [47, 1750, 166805, 67857, 13435, 9509, 52340, 204960, 310813, 482348, 374748],
    tooltip: {
      valueSuffix: 'casos'
    }

  }, {
    name: '2018',
    type: 'spline',
    color: '#FFC300',
    data: [3295449, 3198635, 3591667, 3659002, 3824754, 3009800, 2938138, 3111301, 3624832, 3977684, 3397518],
    tooltip: {
      valueSuffix: 'Kg'
    }
  },
  {
    name: '2019',
    type: 'spline',
    color:'#DAF7A6',
    data: [3568358, 3639892, 3911088, 3688443, 2857245, 2270325, 2330569, 3094761, 3720202,4383667, 3525695],
    tooltip: {
      valueSuffix: 'Kg'
    }
  },
  {
    name: '2020',
    type: 'spline',
    color:'#8AFFF8',
    data: [3338759, 3279526, 3921758, 3678496, 2467229, 2016878, 3157815, 3844944, 3803184,4024177, 3394670],
    tooltip: {
      valueSuffix: 'Kg'
    }
  }]
});
