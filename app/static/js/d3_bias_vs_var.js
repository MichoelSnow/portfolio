let dv = {};
// Transition Time
dv.time_load = 1000;
// Positions of Elements on Page
dv.width_picker = 500;
dv.height_picker = 115;
dv.width_map = 615;
dv.height_map = 600;
dv.width_map_annotation = 250;
dv.height_map_annotation = 100;
dv.width_plot = 500.0;
dv.height_plot = dv.height_map * 0.54;
dv.width_grid = (dv.width_map + dv.width_plot) / 2;
dv.height_grid = 460;
dv.width_gplot = (dv.width_map + dv.width_plot) - dv.width_grid;
dv.height_gplot = dv.height_grid - 90;
dv.width_bar = dv.width_plot;
dv.height_bar = dv.height_map - dv.height_plot;

dv.svg_picker = d3.select("body").append("svg")
    .attr("class", "picker boxes")
    .attr("id", "svg_picker");


let x_property = "year", y_property = "value";

// var aspect_ratio = .68,
let margin,
    width,
    height;

var x_scale = d3.scaleLinear();
var y_scale = d3.scaleLinear();

var x_axis_generator = d3.axisBottom().tickFormat(d => d);
var y_axis_generator = d3.axisLeft();

var loess_generator = science.stats.loess(), loess_values, loess_data;
var line_generator = d3.line()
    .x(d => x_scale(d[x_property]))
    .y(d => y_scale(d[y_property]));

var input = d3.select("input");


var svg = d3.select("#chart").append("svg");

svg.append("rect").attr("class", "base")
    .attr("id", "chart_base");

svg.append("text")
    .attr("id", "x-label")
    .style("text-anchor", "middle")
    .text("Year");

svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("id", "y-label")
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Temperature");


var g = svg.append("g");

var x_axis = g.append("g");
var y_axis = g.append("g");


function plot_data(data) {
    var x_values = data.map(d => d[x_property]);
    var y_values = data.map(d => d[y_property]);

    x_scale.domain(d3.extent(x_values));
    y_scale.domain(d3.extent(y_values));

    var points = g.selectAll("circle")
        .data(data)
        .enter().append("circle")
        .attr("r", 3);

    function draw(resizing, adjusting) {
        if (resizing) {
            // width = window.innerWidth / 2 - margin.left - margin.right;
            width = d3.select(".data-contain-lg").style("width").slice(0, -2) * 0.9;
            // height = d3.min([window.innerHeight, (width * aspect_ratio)]) - margin.top - margin.bottom;
            height = d3.select(".data-contain-lg").style("height").slice(0, -2) * 0.8;

            // margin = {left: 75, right: 5, top: 25, bottom: 20};
            margin = {left: width * 0.15, right: width * 0.01, top: height * 0.025, bottom: height * 0.02};

            x_scale.range([0.1 * width, 0.9 * width]);
            y_scale.range([0.9 * height, 0.1 * height]);

            x_axis_generator.scale(x_scale);
            y_axis_generator.scale(y_scale);

            svg.attr("width", "100%")
                .attr("height", "100%");

            d3.select("#x-label")
                .attr("x", width/2 + margin.left)
                .attr("y", height + margin.top*5)
                .attr("font-size", "1.5rem");
                // .attr("transform", "translate(" + (width / 2 + margin.left) + " ," + (height + margin.top * 3) + ")");


            d3.select("#y-label")
                .attr("y", margin.left / 4)
                .attr("x", - (height / 2))
                .attr("font-size", "1.5rem");

            d3.select("#chart_base")
                .attr("rx", 15).attr("ry", 15)
                .attr("width", "100%")
                .attr("height", "100%");

            g.attr("transform", "translate(" + [margin.left, margin.top] + ")");

            x_axis.attr("transform", "translate(0, " + height + ")")
                .call(x_axis_generator)
                .attr("font-size", "1em");

            y_axis.call(y_axis_generator)
                    .attr("font-size", "1rem");

            points.attr("transform", d => "translate(" + [x_scale(d[x_property]), y_scale(d[y_property])] + ")");
        }

        if (adjusting) {
            var new_bandwidth = input.property("value") / 100;
            d3.select(".bandwidth").html(new_bandwidth.toFixed(2));
            loess_generator.bandwidth(new_bandwidth);
            loess_values = loess_generator(x_values, y_values);
            loess_data = data.map((d, i) => ({year: d[x_property], value: loess_values[i]}));
        }

        var loess_line = g.selectAll(".loess-line")
            .data([loess_data]);

        loess_line.enter().append("path")
            .attr("class", "loess-line")
            .merge(loess_line)
            .attr("d", line_generator);
    }

    // draw(1, 1);
    draw(1, 1);
    window.addEventListener("resize", _ => draw(1, 0));
    input.on("input", _ => draw(0, 1));
}