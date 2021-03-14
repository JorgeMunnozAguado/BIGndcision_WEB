Highcharts.chart('container_covid_exp_vol', {
  chart: {
    zoomType: 'xy'
  },
  title: {
    text: 'Volumen exportaciones y número de casos'
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
      format: '{value} Kg',
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
    align: 'left',
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
    data: [3295449, 3198635, 3591667, 3659002, 3824754, 3009800, 2938138, 3111301, 3624832, 3977684, 3397518],
    tooltip: {
      valueSuffix: 'Kg'
    }
  },
  {
    name: '2019',
    type: 'spline',
    data: [3568358, 3639892, 3911088, 3688443, 2857245, 2270325, 2330569, 3094761, 3720202,4383667, 3525695],
    tooltip: {
      valueSuffix: 'Kg'
    }
  },
  {
    name: '2020',
    type: 'spline',
    data: [3338759, 3279526, 3921758, 3678496, 2467229, 2016878, 3157815, 3844944, 3803184,4024177, 3394670],
    tooltip: {
      valueSuffix: 'Kg'
    }
  }]
});
