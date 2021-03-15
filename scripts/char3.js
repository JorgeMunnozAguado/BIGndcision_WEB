Highcharts.chart('container-week-price', {

    chart: {
        scrollablePlotArea: {
            minWidth: 700
        }
    },

    title: {
        text: 'Evolución de precios por semana'
    },

    subtitle: {
        text: 'Dataset2 - Precios Semanales Observatorio de Precios Junta de Andalucia'
    },

    xAxis: {
        tickInterval: 7 * 24 * 3600 * 1000, // one week
        tickWidth: 0,
        gridLineWidth: 1,
        labels: {
            align: 'left',
            x: 3,
            y: -3
        },
        categories: ['Enero-01', 'Enero-15', 'Enero-22', 'Enero-29', 'Febrero-05', 'Febrero-12', 'Febrero-19', 'Febrero-26', 'Marzo-05', 'Marzo-12', 'Marzo-19', 'Marzo-26', 'Abril-02', 'Abril-09', 'Abril-16', 'Abril-23', 'Abril-30', 'Mayo-07', 'Mayo-14', 'Mayo-21', 'Mayo-28', 'Junio-04', 'Junio-11', 'Junio-18', 'Junio-25', 'Julio-02', 'Julio-09', 'Julio-16', 'Julio-23', 'Julio-30', 'Agosto-06', 'Agosto-13', 'Agosto-20', 'Agosto-27', 'Septiembre-03', 'Septiembre-10', 'Septiembre-17', 'Septiembre-24', 'Octubre-01', 'Octubre-08', 'Octubre-15', 'Octubre-22', 'Octubre-29', 'Noviembre-05', 'Noviembre-12', 'Noviembre-19', 'Noviembre-26', 'Diciembre-03', 'Diciembre-10', 'Diciembre-17', 'Diciembre-24']
    },

    yAxis: [{ // left y axis
        title: {
            text: null
        },
        labels: {
            align: 'left',
            x: 3,
            y: 16,
            format: '{value:.,0f}'
        },
        showFirstLabel: false
    }, { // right y axis
        linkedTo: 0,
        gridLineWidth: 0,
        opposite: true,
        title: {
            text: null
        },
        labels: {
            align: 'right',
            x: -3,
            y: 16,
            format: '{value:.,0f}'
        },
        showFirstLabel: false
    }],

    legend: {
        align: 'left',
        verticalAlign: 'top',
        borderWidth: 0
    },

    tooltip: {
        shared: true,
        crosshairs: true
    },

    plotOptions: {
        series: {
            cursor: 'pointer',
            point: {
                events: {
                    click: function (e) {
                        hs.htmlExpand(null, {
                            pageOrigin: {
                                x: e.pageX || e.clientX,
                                y: e.pageY || e.clientY
                            },
                            headingText: this.series.name,
                            maincontentText: Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':<br/> ' +
                                this.y + ' sessions',
                            width: 200
                        });
                    }
                }
            },
            marker: {
                lineWidth: 1
            }
        }
    },

    series: [{
        name: '2018',
        color: '#ffb4b4',
        data: [157.21, 192.12, 184.77, 189.46, 193.48, 187.03, 178.92, 185.24, 182.04, 168.09, 162.91, 163.20, 142.87, 141.46, 153.95, 143.20, 149.00, 139.90, 122.00, 115.11, 105.39, 99.56, 92.46, 88.05, 75.45, 76.07, 73.56, 30.56, 30.71, 31.60, 31.10, 39.01, 47.59, 55.26, 147.98, 155.44, 143.87, 140.96, 149.05, 146.36, 149.76, 152.56, 161.06, 174.35, 182.48, 177.94, 177.99, 170.66, 182.42, 177.67, 165.03],
        lineWidth: 4,
        marker: {
            radius: 4
        }
    }, {
        name: '2019',
        color: '#d3f0b6',
        data: [207.91, 218.79, 211.02, 191.78, 188.68, 186.93, 181.27, 175.36, 182.97, 177.61, 160.76, 159.62, 161.72, 173.26, 155.00, 149.72, 149.35, 142.26, 134.21, 128.17, 127.64, 119.95, 111.64, 99.65, 103.59, 105.28, 92.27, 36.45, 38.52, 37.45, 37.11, 36.69, 44.56, 54.80, 157.66, 160.32, 161.54, 157.22, 154.55, 153.50, 156.58, 176.38, 180.24, 173.23, 168.17, 178.43, 181.48, 186.37, 181.80, 175.41, 161.64]
    }, {
        name: '2020',
        color: '#e4d3ff',
        data: [190.92, 205.20, 219.39, 214.69, 208.45, 200.46, 195.62, 182.88, 187.93, 190.86, 166.63, 156.61, 164.86, 168.57, 163.58, 156.06, 151.47, 147.47, 154.24, 146.75, 144.53, 115.21, 112.84, 108.85, 105.24, 106.67, 90.88, 35.21, 36.87, 37.02, 37.30, 39.16, 41.96, 55.00, 147.19, 162.13, 166.65, 170.23, 172.79, 179.38, 195.35, 192.87, 185.79, 166.84, 149.56, 144.63, 150.70]
    }]

});
