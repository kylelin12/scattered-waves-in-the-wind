//var svgc = document.getElementById("scatter");

var data = [[200,455],[547,689]];

var body = d3.select("body");

var svg = body.append("svg")
    .attr("width",750)
    .attr("height",2800)
    .style("border-style","solid")
    .style("border-width","5px");

var circles = svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle");

var display = circles.attr("cx", function(d){ return d[0]; } )
    .attr("cy", function(d){ return d[1]; } )
    .attr("r", 10);
