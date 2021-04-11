Highcharts.chart('mango-vs-avocado-container', {

  chart: {
    style: {
            fontFamily: 'Quicksand'
        }
  },

  title: {
    text: 'Búsquedas de "recetas con aguacate" vs "recetas con mango"'
  },

  subtitle: {
    text: 'Fuente: Google Trends.'
  },

  xAxis: {
    categories: ['2018-05-06','2018-05-13','2018-05-20','2018-05-27','2018-06-03','2018-06-10','2018-06-17','2018-06-24','2018-07-01','2018-07-08','2018-07-15','2018-07-22','2018-07-29','2018-08-05','2018-08-12','2018-08-19','2018-08-26','2018-09-02','2018-09-09','2018-09-16','2018-09-23','2018-09-30','2018-10-07','2018-10-14','2018-10-21','2018-10-28','2018-11-04','2018-11-11','2018-11-18','2018-11-25','2018-12-02','2018-12-09','2018-12-16','2018-12-23','2018-12-30','2019-01-06','2019-01-13','2019-01-20','2019-01-27','2019-02-03','2019-02-10','2019-02-17','2019-02-24','2019-03-03','2019-03-10','2019-03-17','2019-03-24','2019-03-31','2019-04-07','2019-04-14','2019-04-21','2019-04-28','2019-05-05','2019-05-12','2019-05-19','2019-05-26','2019-06-02','2019-06-09','2019-06-16','2019-06-23','2019-06-30','2019-07-07','2019-07-14','2019-07-21','2019-07-28','2019-08-04','2019-08-11','2019-08-18','2019-08-25','2019-09-01','2019-09-08','2019-09-15','2019-09-22','2019-09-29','2019-10-06','2019-10-13','2019-10-20','2019-10-27','2019-11-03','2019-11-10','2019-11-17','2019-11-24','2019-12-01','2019-12-08','2019-12-15','2019-12-22','2019-12-29','2020-01-05','2020-01-12','2020-01-19','2020-01-26','2020-02-02','2020-02-09','2020-02-16','2020-02-23','2020-03-01','2020-03-08','2020-03-15','2020-03-22','2020-03-29','2020-04-05','2020-04-12','2020-04-19','2020-04-26','2020-05-03','2020-05-10','2020-05-17','2020-05-24','2020-05-31','2020-06-07','2020-06-14','2020-06-21','2020-06-28','2020-07-05','2020-07-12','2020-07-19','2020-07-26','2020-08-02','2020-08-09','2020-08-16','2020-08-23','2020-08-30','2020-09-06','2020-09-13','2020-09-20','2020-09-27','2020-10-04','2020-10-11','2020-10-18','2020-10-25','2020-11-01','2020-11-08','2020-11-15','2020-11-22','2020-11-29','2020-12-06','2020-12-13','2020-12-20','2020-12-27','2021-01-03','2021-01-10','2021-01-17','2021-01-24','2021-01-31','2021-02-07','2021-02-14','2021-02-21','2021-02-28','2021-03-07']
  },

  yAxis: {
    title: {
      text: 'Interés de la búsqueda [0,100].'
    }
  },

  legend: {
    align: 'center',
    verticalAlign: 'bottom'
  },

  plotOptions: {
    series: {
        label: {
            connectorAllowed: false
        }
    }
  },

  series: [{
    name: 'Recetas con aguacate',
    color: '#838651',
    data: [7,14,21,42,48,34,44,22,37,43,7,30,23,30,16,47,37,57,21,49,41,43,58,35,21,14,27,55,40,14,0,14,66,58,0,43,27,26,52,56,14,56,48,14,35,29,50,34,41,51,28,14,41,41,20,53,26,26,28,7,21,41,22,36,15,37,23,44,35,20,39,32,38,19,13,25,37,50,37,31,31,36,38,59,44,49,35,57,52,17,30,36,42,6,6,34,28,66,52,67,100,79,77,58,46,52,71,28,58,38,68,24,24,56,70,33,33,65,19,46,32,31,44,18,48,18,49,40,32,44,36,50,44,30,56,38,51,61,47,13,95,42,43,56,43,19,19,45,29,]
  }, {
    name: 'Recetas con mango',
    color: '#FF8303',
    data: [7,14,14,28,14,7,7,0,0,14,7,15,8,15,8,8,0,0,7,21,14,14,15,7,14,0,7,7,0,7,0,0,29,8,16,0,27,0,13,28,7,21,7,0,0,0,21,21,0,0,0,0,0,7,7,7,0,0,14,14,0,7,22,14,0,7,0,22,0,20,0,13,0,13,0,19,31,25,6,12,6,12,0,7,31,21,35,13,0,6,0,12,6,6,6,6,6,22,5,10,28,31,26,16,21,0,16,17,16,5,23,6,0,6,13,13,0,13,19,27,26,19,6,6,36,6,31,13,0,19,6,31,19,43,6,13,19,41,20,13,19,12,19,12,12,6,0,0,14]
  }]
});
