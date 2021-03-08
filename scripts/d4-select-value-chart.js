$(function () {
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'd4-select-value-container',
            type: 'line',
            title: 'please select a category'
        },

        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']
        }
    });

    $(".d4-select-chart-option").change(function() {
        var value = this.getAttribute("value");
        while (chart.series.length > 0) {
            chart.series[0].remove(true);
        }
        if (value == 'importaciones-chart') {
            chart.yAxis[0].setTitle({ text: "Valor en euros." });
            chart.setTitle({text: "Evolución del valor de las importaciones."});
            chart.addSeries({
                name: '2018',
                type: 'column',
                color: '#7FCDBB',  
                data: [2058091940, 1879425984, 1932298320,1794039092,2009472992,1737222700,1332353680,1135186664,985898894,1124261832,1637982770]             
            });
            chart.addSeries({
                name: '2019',
               type: 'column',
               color: '#41B6C4',  
               data: [2036688128,1983524456,2012008856,1873577504,1874652180,1815077902,1471706400,1079702746,914945294,1178331506,1685718152]           
            });                      
            chart.addSeries({
                name: '2020',
               type: 'column',
                color: '#1D91C0',  
                data: [2242650030,2140243452,2322583838,2314740352,2122090210,1904638252,1441992146,1154250180,1059988752,1417601398,1854479382]            
            });    
            
        } else if (value == 'exportaciones-chart') {
            chart.yAxis[0].setTitle({ text: "Valor en euros." });
            chart.setTitle({text: "Evolución del valor de las exportaciones."});
            chart.addSeries({
                name: '2018',
                type: 'column',
                color: '#7FCDBB',  
                data: [189726442,183737506,205134160,205314442,233935366,195253786,174770772,210448414,248934724,272301162,209944700]             
            });
            chart.addSeries({
                name: '2019',
               type: 'column',
               color: '#41B6C4',  
               data: [215210280,224789202,243439754,244546498,207324994,173633904,185478134,207827776,247026988,277034822,239695124]           
            });                      
            chart.addSeries({
                name: '2020',
               type: 'column',
                color: '#1D91C0',  
                data: [214324912,211924892,250123690,244835924,216106456,173678684,225466018,265972622,284843676,285040420,221643682]           
            }); 
        } 
    });
});
