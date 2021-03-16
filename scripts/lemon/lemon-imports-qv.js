Highcharts.chart('container-lemon-imports-qv', {
  chart: {
    zoomType: 'xy'
  },
  title: {
    text: 'Evolución de las importaciones de limones'
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
        color: '#F4A460'
      }
    },
    labels: {
      format: '{value} Kg',
      style: {
        color: '#F4A460'
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

  series: [

    {
      name: '2018 (Cant.)',
      type: 'column',
      color: '#F0D58C',
      data: [947560,825882,984676,930451,1028532,850282,550507,385207,341195,520428,749291],
      yAxis: 1,
      tooltip: {
        valueSuffix: ' Kg'
      }
    }, {
      name: '2019 (Cant.)',
      type: 'column',
      color: '#FFCC00',
      data: [905277,821203,993649,1076632,1110317,1213653,1031842,628728,430184,709363,898610],
      yAxis: 1,
      tooltip: {
        valueSuffix: ' Kg'
      }

    }, {
      name: '2020 (Cant.)',
      type: 'column',
      color: '#F4A460',
      data: [993261,948260,1396583,1409592,1107908,873028,725001,502767,613544,775072,853904],
      yAxis: 1,
      tooltip: {
        valueSuffix: ' Kg'
      }
    },

    {
      name: '2018 (Val.)',
      type: 'spline',
      color: '#A0D849 ',
      data: [103375620,88165844,102362732,97869892,139238504,131842852,87267096,65450130,60551200,76597122,94449840],
      tooltip: {
        valueSuffix: ' €'
      }
    }, {
      name: '2019 (Val.)',
      type: 'spline',
      color: '#669E0F',
      data: [93258060,80417174,91318792,97259686,112625598,126251894,107063440,67830112,54528200,90881878,107071058],
      tooltip: {
        valueSuffix: ' €'
      }

    }, {
      name: '2020 (Val.)',
      type: 'spline',
      color: ' #4E8001 ',
      data: [113800424,102262382,149368162,195976126,169843052,143245326,104125732,75742946,96499762,105231494,108767004],
      tooltip: {
        valueSuffix: ' €'
      }
    }

    ]
});
