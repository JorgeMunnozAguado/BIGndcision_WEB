Highcharts.chart('container_covid_imp_eur', {
  chart: {
    zoomType: 'xy'
  },
  title: {
    text: 'Precio importaciones Vs. Número de casos de COViD-19'
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
      text: 'Importaciones (€)',
      style: {
        color: Highcharts.getOptions().colors[1]
      }
    }
  }, { // Secondary yAxis
    title: {
      text: 'Número de casos',
      style: {
        color: Highcharts.getOptions().colors[0]
      }
    },
    labels: {
      format: '{value} casos',
      style: {
        color: Highcharts.getOptions().colors[0]
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
    yAxis: 1,
    data: [47, 1750, 166805, 67857, 13435, 9509, 52340, 204960, 310813, 482348, 374748],
    tooltip: {
      valueSuffix: 'casos'
    }

  }, {
    name: '2018',
    type: 'spline',
    data: [2058091940, 1879425984, 1932298320, 1794039092, 2009472992, 1737222700, 1332353680, 1135186664,  985898894, 1124261832, 1637982770],
    tooltip: {
      valueSuffix: '€'
    }
  },
  {
    name: '2019',
    type: 'spline',
    data: [2036688128, 1983524456, 2012008856, 1873577504, 1874652180, 1815077902, 1471706400, 1079702746, 914945294, 1178331506, 1685718152],
    tooltip: {
      valueSuffix: '€'
    }
  },
  {
    name: '2020',
    type: 'spline',
    data: [2242650030, 2140243452, 2322583838, 2314740352, 2122090210, 1904638252, 1441992146, 1154250180, 1059988752, 1417601398, 1854479382],
    tooltip: {
      valueSuffix: '€'
    }
  }]
});
