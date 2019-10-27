// var lastname = localStorage.getItem("leadership");
// var differ = localStorage.getItem("differ");
var difference = JSON.parse(localStorage.getItem("difference"));
console.log(typeof difference); //object

var career = localStorage.getItem("car");

// var data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// for (var i = 0; i < differ.length; i++){
//   data[i]= differ[i];
// }
// var data = [differ[0],2,25,25,5,15,15,15,15,5]

// var margin = {top: 40, right: 30, bottom: 30, left: 50},
//       width = 460 - margin.left - margin.right,
//       height = 320 - margin.top - margin.bottom;
//
//   var greyColor = "#898989";
//   var barColor = d3.interpolateInferno(0.4);
//   var highlightColor = d3.interpolateInferno(0.3);
//
//
//   var svg = d3.select("body").append("svg")
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//       .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//
//   var x = d3.scaleBand()
//       .range([0, width])
//           .padding(0.4);
//   var y = d3.scaleLinear()
//       .range([height, 0]);
//
//   var xAxis = d3.axisBottom(x).tickSize([]).tickPadding(50);
//   var yAxis = d3.axisLeft(y)
//
//   var dataset = [{"career":"game development    ", "value": differ[0]},
//                 {"career":"graphic design    ", "value": differ[1]},
//                 {"career":"data science   ", "value": differ[2]},
//                 {"career":"software development   ", "value": differ[3]},
//                 {"career":"systems administrator   ", "value": differ[4]},
//                 {"career":"computer architecture   ", "value": differ[5]},
//                 {"career":"AI/Machine Learning   ", "value": differ[6]},
//                 {"career":"cybersecurity   ", "value": differ[7]},
//                 {"career":"robotics   ", "value": differ[8]},
//                 {"career":"computer research  ", "value": differ[9]},
//               ];
//
//   x.domain(dataset.map( d => { return d.career; }));
//   // y.domain([0, d3.max(dataset,  d => { return d.value; })]);
//   y.domain([0, 1]);
//
//   svg.append("g")
//       .attr("class", "x axis")
//       .attr("transform", "translate(0," + height + ")")
//       .call(xAxis);
//   svg.append("g")
//       .attr("class","y axis")
//       .call(yAxis);
//
//   svg.selectAll(".bar")
//       .data(dataset)
//       .enter().append("rect")
//       .attr("class", "bar")
//       .style("fill",  d => {
//           return d.value === d3.max(dataset,  d => { return d.value; })
//           ? highlightColor : barColor
//           })
//       .attr("x",  d => { return x(d.career); })
//       .attr("width", x.bandwidth())
//           .attr("y",  d => { return height; })
//           .attr("height", 0)
//               .transition()
//               .duration(750)
//               .delay(function (d, i) {
//                   return i * 150;
//               })
//       .attr("y",  d => { return y(d.value); })
//       .attr("height",  d => { return height - y(d.value); });
//
//   svg.selectAll(".label")
//       .data(dataset)
//       .enter()
//       .append("text")
//       .attr("class", "label")
//       .attr("x", ( d => { return x(d.career) + (x.bandwidth() / 2) -8 ; }))
//           .style("fill",  d => {
//               return d.value === d3.max(dataset,  d => { return d.value; })
//               ? highlightColor : greyColor
//               })
//       .attr("y",  d => { return height; })
//           .attr("height", 0)
//               .transition()
//               .duration(750)
//               .delay((d, i) => { return i * 150; })
//       .text( d => { return d.value; })
//       .attr("y",  d => { return y(d.value); })
//       .attr("dy", "-.7em");


console.log(difference);
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
