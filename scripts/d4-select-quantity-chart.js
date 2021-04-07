$(function () {
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'd4-select-quantity-container',
            type: 'column',
        },

        title: {
            text: 'Evolución de la cantidad de importaciones.'
        },

        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']
        },

        yAxis: {
            title: {
              text: 'Cantidad de producto en peso (100 KG).'
            }
        },

        series: [{
            name: '2018',
            color: '#FFA5A5',
            data: [3295449,3198635,3591667,3659002,3824754,3009800,2938138,3111301,3624832,3977684,3397518]             
        
          }, {
            name: '2019',
            color: '#D39C98',
            data: [3568358,3639892,3911088,3688443,2857245,2270325,2330569,3094761,3720202,4383667,3525695]          
        
          }, {
            name: '2020',
            color: '#BC5957',
            data: [3338759,3279526,3921758,3678496,2467229,2016878,3157815,3844944,3803184,4024177,3394670]             
        }]
    });

    $(".d4-select-chart-option").change(function() {
        var value = this.getAttribute("value");
        while (chart.series.length > 0) {
            chart.series[0].remove(true);
        }
        if (value == 'importaciones-chart') {
            chart.yAxis[0].setTitle({ text: "Cantidad de producto en peso (100 KG)." });
            chart.setTitle({text: "Evolución de la cantidad de importaciones."});
            chart.addSeries({
                name: '2018',
                type: 'column',
                color: '#FFA5A5',  
                data: [3295449,3198635,3591667,3659002,3824754,3009800,2938138,3111301,3624832,3977684,3397518]            
            });
            chart.addSeries({
                name: '2019',
               type: 'column',
               color: '#D39C98',  
               data: [3568358,3639892,3911088,3688443,2857245,2270325,2330569,3094761,3720202,4383667,3525695]           
            });                      
            chart.addSeries({
                name: '2020',
               type: 'column',
                color: '#BC5957',  
                data: [3338759,3279526,3921758,3678496,2467229,2016878,3157815,3844944,3803184,4024177,3394670]            
            });    
            
        } else if (value == 'exportaciones-chart') {
            chart.yAxis[0].setTitle({ text: "Cantidad de producto en peso (100 KG)." });
            chart.setTitle({text: "Evolución de la cantidad de exportaciones."});
            chart.addSeries({
                name: '2018',
                type: 'column',
                color: '#FFA5A5',  
                data: [18442704,15885473,16102876,14884110,16230572,15599005,14570120,12691929,9517391,10462188,15574249]             
            });
            chart.addSeries({
                name: '2019',
               type: 'column',
               color: '#D39C98',  
               data: [19100104,17025219,17435189,15986044,17286217,18478312,16567160,12214679,9853493,11595996,16168689]           
            });                      
            chart.addSeries({
                name: '2020',
               type: 'column',
                color: '#BC5957',  
                data: [19192297,17096899,18419185,16240903,15749511,16530088,14561528,11733027,9052289,11732311,16939784]           
            }); 
        } 
    });
});
