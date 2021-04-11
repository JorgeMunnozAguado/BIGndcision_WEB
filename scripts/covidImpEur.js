Highcharts.chart('container_covid_imp_eur', {
  chart: {
    zoomType: 'xy',
    style: {
            fontFamily: 'Quicksand'
        }
  },
  title: {
    text: 'Valor importaciones Vs. Número de casos de COViD-19'
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
            return (this.value / 1000000).toFixed(0) + 'M €';
          }
          return this.value / 1000 + 'k €';
      },
      style: {
        color: Highcharts.getOptions().colors[1]
      }
    },
    title: {
      text: 'Valor de las importaciones (€)',
      style: {
        color: Highcharts.getOptions().colors[1]
      }
    }
  }, { // Secondary yAxis
    title: {
      text: 'Número de casos',
      style: {
        color: '#bb5a5a'
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
        color: '#bb5a5a'
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
    color:'#fccbcb',
    yAxis: 1,
    data: [47, 1750, 166805, 67857, 13435, 9509, 52340, 204960, 310813, 482348, 374748],
    tooltip: {
      valueSuffix: 'casos'
    }

  }, {
    name: '2018',
    type: 'spline',
    color: '#3c9099',
    data: [189726442, 183737506, 205134160, 205314442, 233935366, 195253786, 174770772,210448414, 248934724, 272301162, 209944700, ],
    tooltip: {
      valueSuffix: '€'
    }
  },
  {
    name: '2019',
    type: 'spline',
    color:'#9f609c',
    data: [215210280, 224789202, 243439754, 244546498, 207324994, 173633904, 185478134,207827776, 247026988, 277034822, 239695124],
    tooltip: {
      valueSuffix: '€'
    }
  },
  {
    name: '2020',
    type: 'spline',
    color:'#c9753d',
    data: [214324912, 211924892, 250123690, 244835924, 216106456, 173678684, 225466018,265972622, 284843676, 285040420, 221643682],
    tooltip: {
      valueSuffix: '€'
    }
  }]
});
