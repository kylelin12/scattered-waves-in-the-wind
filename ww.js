//var svgc = document.getElementById("scatter");

var data = [[1880, -0.2], [1909, -0.47], [1930, -0.15], 
            [1953, 0.08], [1979, 0.17], [1982, 0.13],
            [1987, 0.33], [1992, 0.26], [2005, 0.66],
            [2011, 0.6], [2015, 0.9], [2016, 0.94],
            [1924, -0.28], [1968, -0.03], [1997, 0.48],
            [1958, 0.07], [1975, -0.02], [1925, -0.15],
            [1902, -0.25], [1882, -0.1], [1911, -0.44]];

var body = d3.select("body");

var svg = body.append("svg")
    .attr("width",1280)
    .attr("height",720)
    .style("border-style","solid")
    .style("border-width","5px");

var xPlace = d3.scaleLinear().domain([1860, 2018]).range([90, 1280]);
var yPlace = d3.scaleLinear().domain([-0.5, 1]).range([655, 0]);

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
        var info = "Average Change: " + d[1] + " degrees Celcius<br>Year: " + d[0];
        console.log(info);
        pStatus.innerHTML = info;
        d3.select(this).attr("fill", "#00aeef");
    }).on("mouseout", function(d) {
        pStatus.innerHTML = '';
        d3.select(this).attr("fill", "black");
    });

var xAxis = d3.axisBottom().scale(xPlace);
var yAxis = d3.axisLeft().scale(yPlace);

var xAxisGroup = svg.append("g").call(xAxis).attr("transform", "translate(0," + 655 +")").append("text")
.attr("class", "axis-title")
.attr("transform", "translate(700, 25)")
.attr("y", 6)
.attr("dy", ".71em")
.style("text-anchor", "end")
.attr("fill", "#5D6971")
.text("Year");

var yAxisGroup = svg.append("g").call(yAxis).attr("transform", "translate(90, 0)").append("text")
.attr("class", "axis-title")
.attr("transform", "rotate(-90), translate(-320, -50)")
.attr("y", 6)
.attr("dy", ".71em")
.style("text-anchor", "end")
.attr("fill", "#5D6971")
.text("Average Change");