Highcharts.chart('container-ajo-producers', {

    chart: {
        type: 'bar'
    },

    title: {
        text: 'Principales productores de ajo'
    },

    subtitle: {
        text: 'Source: <a href="https://www.atlasbig.com/es-es/paises-por-produccion-de-ajo#:~:text=China%20es%20el%20mayor%20productor,170.042%20ocupa%20el%20puesto%2010.">www.atlasbig.com</a>'
    },

    xAxis: {
        categories: ['China', 'India', 'Bangladesh', 'Egipto', 
        'Corea del sur', 'Rusia', 'Myanmar', 'Ucrania', 'Uzbekistán', 
        'España', 'Estados Unidos', 'Argentina'],
        title: {
            text: null
        }
    },

    yAxis: {
        min: 0,
        title: {
            text: 'Producción (toneladas)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },

    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Año 2019',
        data: [21263237, 1400000, 381851, 280216, 275549, 262211, 212909, 187960, 174170, 170042, 167370, 149006]
    }]
});