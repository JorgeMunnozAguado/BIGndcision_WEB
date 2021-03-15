Highcharts.chart('container-lemon-exports-qv', {
  chart: {
    zoomType: 'xy'
  },
  title: {
    text: 'Evoluciones de las exportaciones de limones'
  },
  subtitle: {
    text: 'Source: Eurostat.'
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
      text: 'Valor (€)',
      style: {
        color: Highcharts.getOptions().colors[1]
      }
    }
  }, { // Secondary yAxis
    title: {
      text: 'Cantidad en Kg (100 Kg).',
      style: {
        color: Highcharts.getOptions().colors[0]
      }
    },
    labels: {
      format: '{value} Kg',
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

  series: [

    {
      name: '2018 (Cant.)',
      type: 'column',
      data: [2238,8558,22500,6729,19084,93464,114462,147200,75795,63225,9220],
      yAxis: 1,
      tooltip: {
        valueSuffix: ' Kg'
      }
    }, {
      name: '2019 (Cant.)',
      type: 'column',
      data: [4902,3394,2043,4543,2606,25131,102115,168934,102218,42544,5707],
      yAxis: 1,
      tooltip: {
        valueSuffix: ' Kg'
      }

    }, {
      name: '2020 (Cant.)',
      type: 'column',
      data: [7204,6090,5499,9121,27209,71577,243134,232518,102452,97303,60670],
      yAxis: 1,
      tooltip: {
        valueSuffix: ' Kg'
      }
    },

    {
      name: '2018 (Val.)',
      type: 'spline',
      data: [236256,580422,1879910,392412,1882824,11409262,13971506,19498526,10995012,8477278,779918],
      tooltip: {
        valueSuffix: ' €'
      }
    }, {
      name: '2019 (Val.)',
      type: 'spline',
      data: [439088,262368,127568,385832,256022,3071474,10270240,17553388,10559096,4330444,618870],
      tooltip: {
        valueSuffix: ' €'
      }
  
    }, {
      name: '2020 (Val.)',
      type: 'spline',
      data: [482330,413280,299464,490950,2488054,7761502,26600538,28389420,10861950,9982396,7077462],
      tooltip: {
        valueSuffix: ' €'
      }
    }
  
    ]
});