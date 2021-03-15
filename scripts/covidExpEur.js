Highcharts.chart('container_covid_exp_eur', {
  chart: {
    zoomType: 'xy'
  },
  title: {
    text: 'Valor exportaciones Vs. Número de casos de COViD-19'
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
      format: '{value} €',
      style: {
        color: Highcharts.getOptions().colors[1]
      }
    },
    title: {
      text: 'Valor de las exportaciones (€)',
      style: {
        color: Highcharts.getOptions().colors[1]
      }
    }
  }, { // Secondary yAxis
    title: {
      text: 'Número de casos',
      style: {
        color: '#f7a08d'
      }
    },
    labels: {
      format: '{value} casos',
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
    color: '#FFC300',
    data: [189726442, 183737506, 205134160, 205314442, 233935366, 195253786, 174770772,210448414, 248934724, 272301162, 209944700, ],
    tooltip: {
      valueSuffix: '€'
    }
  },
  {
    name: '2019',
    type: 'spline',
    color:'#DAF7A6',
    data: [215210280, 224789202, 243439754, 244546498, 207324994, 173633904, 185478134,207827776, 247026988, 277034822, 239695124],
    tooltip: {
      valueSuffix: '€'
    }
  },
  {
    name: '2020',
    type: 'spline',
    color:'#8AFFF8',
    data: [214324912, 211924892, 250123690, 244835924, 216106456, 173678684, 225466018,265972622, 284843676, 285040420, 221643682],
    tooltip: {
      valueSuffix: '€'
    }
  }]
});
