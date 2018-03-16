//var svgc = document.getElementById("scatter");

var data = [[1, 0.1], [3, 0.2], [5, 0.6], 
            [7, 1], [10, 2], [12, 3], [15, 4], 
            [19, 5.5], [23, 7], [27, 9],
            [31, 11.5], [35, 13.5], [39, 16]];

var body = d3.select("body");

var svg = body.append("svg")
    .attr("width",1280)
    .attr("height",720)
    .style("border-style","solid")
    .style("border-width","5px");

var xPlace = d3.scaleLinear().domain([0, d3.max(data, function(d) {return d[0];})]).range([25, 1280]);
var yPlace = d3.scaleLinear().domain([0, d3.max(data, function(d) {return d[1];})]).range([695, 0]);

var pStatus = document.getElementById("c-select");

var circles = svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function(d) { 
        return xPlace(d[0]);
    })
    .attr("cy", function(d) {
        return yPlace(d[1]);
    })
    .attr("r", 16)
    .attr("fill", "black")
    .on("mouseover",  function(d) {
        var info = "Wind speed: " + d[1] + " m/s | Wave height: " + d[0] + " m";
        console.log(info);
        pStatus.innerHTML = info;
        d3.select(this).attr("fill", "#00aeef");
    }).on("mouseout", function(d) {
        pStatus.innerHTML = '';
        d3.select(this).attr("fill", "black");
    });

    var xAxis = d3.axisBottom().scale(xPlace);
    var yAxis = d3.axisLeft().scale(yPlace);

    var xAxisGroup = svg.append("g").call(xAxis).attr("transform", "translate(0," + 695 +")");
    var yAxisGroup = svg.append("g").call(yAxis).attr("transform", "translate(25, 0)");