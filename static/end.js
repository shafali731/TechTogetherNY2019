// var lastname = localStorage.getItem("leadership");
var differ = localStorage.getItem("differ");
var career = localStorage.getItem("car");

console.log(differ);
var data = differ;
console.log(data);
var width = 420,
	barHeight = 20;

var x = d3.scaleLinear()
	.domain([0, d3.max(data)])
	.range([0, width]);

var chart = d3.select(".chart")
	.attr("width", width)
	.attr("height", barHeight * data.length);

var bar = chart.selectAll("g")
	.data(data)
	.enter().append("g")
	.attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

bar.append("rect")
	.attr("width", x)
	.attr("height", barHeight - 1);

bar.append("text")
	.attr("x", function(d) { return x(d) - 3; })
	.attr("y", barHeight/2 )
	.attr("dy", ".35em")
	.text(function(d) { return d; });


// console.log(differ);
// // console.log(lastname);
// var chart = d3.bullet()
//     .width(width)
//     .height(height);
//
//
//   var svg = d3.select("body").selectAll("svg")
//       .data(data)
//     .enter().append("svg")
//       .attr("class", "bullet")
//     .append("g")
//       .call(chart);
//
//   var title = svg.append("g")
//       .style("text-anchor", "end")
//       .attr("transform", "translate(-6," + height / 2 + ")");
//
//   title.append("text")
//       .attr("class", "title")
//       .text(function(d) { return d.title; });
//
//   title.append("text")
//       .attr("class", "subtitle")
//       .attr("dy", "1em")
//       .text(function(d) { return d.subtitle; });
//
//   d3.selectAll("button").on("click", function() {
//     svg.datum(randomize).call(chart.duration(1000)); // TODO automatic transition
//   });
// });
//
// function randomize(d) {
//   if (!d.randomizer) d.randomizer = randomizer(d);
//   d.ranges = d.ranges.map(d.randomizer);
//   d.markers = d.markers.map(d.randomizer);
//   d.measures = d.measures.map(d.randomizer);
//   return d;
// }
//
// function randomizer(d) {
//   var k = d3.max(d.ranges) * .2;
//   return function(d) {
//     return Math.max(0, d + k * (Math.random() - .5));
//   }
