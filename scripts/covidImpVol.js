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
        color: '#f7a08d'
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
    color: '#e4d3ff',
    data: [18442704, 15885473, 16102876, 14884110, 16230572, 15599005, 14570120, 12691929, 9517391, 10462188, 15574249],
    tooltip: {
      valueSuffix: 'Kg'
    }
  },
  {
    name: '2019',
    type: 'spline',
    color:'#FBEBB0 ',
    data: [19100104, 17025219, 17435189, 15986044, 17286217, 18478312, 16567160, 12214679,9853493, 11595996, 16168689],
    tooltip: {
      valueSuffix: 'Kg'
    }
  },
  {
    name: '2020',
    type: 'spline',
    color: '#B0D3FB',
    data: [19192297, 17096899, 18419185, 16240903, 15749511, 16530088, 14561528, 11733027, 9052289, 11732311, 16939784],
    tooltip: {
      valueSuffix: 'Kg'
    }
  }]
});
