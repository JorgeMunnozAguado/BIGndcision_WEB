
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4charts.XYChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
chart.padding(40, 40, 40, 40);

chart.data = [
  {
    country: "China",
    visits: 21263237
  },
  {
    country: "India",
    visits: 1400000
  },
  {
    country: "Bangladesh",
    visits: 381851
  },
  {
    country: "Egypt",
    visits: 280216
  },
  {
    country: "South Korea",
    visits: 275549
  },
  {
    country: "Russia",
    visits: 262211
  },
  {
    country: "Myanmar",
    visits: 212909
  },
  {
    country: "Ukraine",
    visits: 187960
  },
  {
    country: "Uzbekistn",
    visits: 174170
  },
  {
    country: "Spain",
    visits: 170042
  },
  {
    country: "United States",
    visits: 167370
  },
  {
    country: "Argentina",
    visits: 149006
  }
];

chart.colors.list = [
  am4core.color("#BAB489"),
];

var title = chart.titles.create();
title.text = "Principales productores de ajo";
title.fontSize = 25;
title.marginBottom = 15;

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.minGridDistance = 20;
categoryAxis.fontSize = 11;
categoryAxis.renderer.labels.template.dy = 5;
categoryAxis.renderer.inversed = true;
categoryAxis.renderer.grid.template.disabled = true;

var image = new am4core.Image();
image.horizontalCenter = "middle";
image.width = 20;
image.height = 20;
image.verticalCenter = "middle";
image.adapter.add("href", (href, target)=>{
  let category = target.dataItem.category;
  if(category){
    return "https://www.amcharts.com/wp-content/uploads/flags/" + category.split(" ").join("-").toLowerCase() + ".svg";
  }
  return href;
})
categoryAxis.dataItems.template.bullet = image;

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 21500000;
valueAxis.strictMinMax = true;
valueAxis.renderer.minGridDistance = 100;
valueAxis.gridThickness = 0;
valueAxis.labelsEnabled = false;


var axisBreak = valueAxis.axisBreaks.create();
axisBreak.startValue = 1500000;
axisBreak.endValue = 21000000;
//axisBreak.breakSize = 0.005;

// fixed axis break
var d = (axisBreak.endValue - axisBreak.startValue) / (valueAxis.max - valueAxis.min);
axisBreak.breakSize = 0.05 * (1 - d) / d; // 0.05 means that the break will take 5% of the total value axis height

// make break expand on hover
var hoverState = axisBreak.states.create("hover");
hoverState.properties.breakSize = 1;
hoverState.properties.opacity = 0.1;
hoverState.transitionDuration = 1500;

axisBreak.defaultState.transitionDuration = 1000;

// this is exactly the same, but with events
/*axisBreak.events.on("over", function() {
  axisBreak.animate(
    [{ property: "breakSize", to: 1 }, { property: "opacity", to: 0.1 }],
    1500,
    am4core.ease.sinOut
  );
});
axisBreak.events.on("out", function() {
  axisBreak.animate(
    [{ property: "breakSize", to: 0.005 }, { property: "opacity", to: 1 }],
    1000,
    am4core.ease.quadOut
  );
});*/

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryY = "country";
series.dataFields.valueX = "visits";
series.columns.template.tooltipText = "{values.valueX.workingValue.formatNumber('#.0as')}";
series.columns.template.tooltipX = 0;
series.columns.template.strokeOpacity = 0;
series.columns.template.column.cornerRadiusBottomRight = 5;
series.columns.template.column.cornerRadiusTopRight = 5;

var labelBullet = series.bullets.push(new am4charts.LabelBullet())
labelBullet.label.horizontalCenter = "left";
labelBullet.label.dx = 10;
labelBullet.label.text = "{values.valueX.workingValue.formatNumber('#.0as')}";
labelBullet.locationX = 1;
//valueLabel.label.fontSize = 20;
valueLabel.label.fontSize = 20;
valueLabel.label.horizontalCenter = "left";


// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
series.columns.template.adapter.add("fill", function(fill, target) {
  return chart.colors.getIndex(target.dataItem.index);
});

}); // end am4core.ready()
