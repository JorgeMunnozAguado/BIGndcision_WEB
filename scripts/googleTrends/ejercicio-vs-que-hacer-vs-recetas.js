Highcharts.chart('ejercicio-vs-que-hacer-vs-recetas-container', {

  title: {
    text: 'Búsquedas de "ejericio en casa" vs "recetas" vs "que hacer en casa" en España'
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
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
        label: {
            connectorAllowed: false
        }
    }
  },

  series: [{
    name: 'Ejercicio en casa (España)',
    color: '#42929D',
    data: [4,6,5,4,3,1,4,4,6,7,4,1,4,4,3,4,4,3,3,2,3,3,3,1,4,5,3,8,1,3,1,1,1,2,5,3,3,3,2,5,5,3,5,6,5,2,2,4,5,3,2,3,9,1,3,2,3,1,2,3,6,1,5,1,1,2,7,1,4,4,0,2,3,4,2,3,2,3,3,4,3,2,2,4,2,1,7,8,3,1,6,3,5,5,2,3,14,99,55,66,56,48,44,26,16,15,20,16,11,10,8,8,6,5,8,6,6,4,6,6,11,7,7,6,9,4,4,8,4,6,6,4,9,5,5,6,5,1,5,5,10,10,16,10,9,10,6,7,6]

  }, {
    name: 'Recetas (España)',
    color: '#C9A483',
    data: [34,37,35,33,35,32,30,29,34,33,34,32,32,33,31,34,34,35,35,37,39,37,37,38,42,43,43,47,45,46,54,52,57,62,53,42,42,40,42,37,38,37,36,34,36,37,38,36,37,35,31,32,34,31,30,30,32,34,30,31,31,30,30,30,32,31,31,31,33,34,32,35,34,34,37,36,37,40,39,39,45,39,44,45,54,57,51,39,43,42,37,38,39,37,35,38,31,62,73,81,100,88,84,75,62,64,54,46,44,45,39,38,39,38,37,37,35,35,36,37,36,36,36,38,37,40,39,43,46,51,50,51,51,48,51,55,54,65,60,43,48,48,49,49,47,46,43,39,40]
  }, {
    name: 'Qué hacer en casa (España)',
    color: '#E47CA2',
    data: [14,7,19,16,12,18,14,18,15,14,17,14,18,12,17,21,20,14,15,17,14,14,18,13,12,18,10,17,9,10,17,9,13,13,16,14,11,14,12,14,13,16,11,12,12,13,15,17,11,16,19,14,12,12,7,14,10,16,12,15,14,13,15,20,18,18,20,13,13,21,13,13,16,10,12,12,12,17,20,13,12,8,18,11,14,17,9,11,13,16,7,11,19,16,16,16,46,100,56,41,54,37,41,39,27,30,37,27,27,29,29,28,23,18,29,21,21,22,29,23,25,22,20,21,16,15,12,16,21,24,18,11,18,16,16,17,10,19,17,17,17,18,16,16,16,16,13,13,13]
  }]
});