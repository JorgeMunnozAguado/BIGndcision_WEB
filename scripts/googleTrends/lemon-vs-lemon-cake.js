Highcharts.chart('container-lemon-vs-lemon-cake', {

  chart: {
    style: {
            fontFamily: 'Quicksand'
        }
  },

  title: {
    text: 'Búsquedas de "Limón" y "Bizcocho de limón" en España'
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
    name: ' Limón',
    color: '#EAE000',
    data: [37,41,43,37,41,43,51,42,47,53,45,52,46,44,50,48,44,35,33,40,32,33,31,31,34,33,35,33,35,36,35,38,41,71,62,36,40,43,40,40,45,39,38,36,40,44,39,37,36,37,36,39,37,44,37,36,35,39,37,44,42,42,41,38,39,39,41,43,39,35,35,33,31,33,32,33,31,31,31,32,32,31,35,39,44,67,59,35,42,41,41,43,47,41,41,39,38,73,74,85,100,92,93,80,72,72,61,60,57,55,47,46,49,41,43,44,50,46,43,46,41,40,38,31,33,33,34,33,36,36,37,36,35,31,31,35,36,60,58,33,37,37,42,46,39,37,40,38,38]
  }, {
    name: 'Bizcocho de limón',
    color: '#C68E58',
    data: [11,12,12,10,14,12,11,9,7,6,10,8,8,6,11,13,7,10,9,10,8,17,15,18,12,15,17,15,22,18,16,16,7,12,13,11,16,18,24,20,18,18,14,12,19,20,17,9,13,17,14,17,15,10,17,16,13,15,11,8,8,12,10,8,4,10,5,9,6,12,19,15,13,11,14,16,19,15,16,14,19,12,12,12,11,12,8,9,15,21,19,18,24,16,18,19,18,67,76,100,98,82,66,55,39,40,33,19,25,22,19,9,10,15,4,11,11,11,11,13,11,15,12,10,9,17,9,12,16,20,17,17,17,12,18,19,9,8,10,9,25,20,18,20,19,19,22,19,9]
  }]
});
