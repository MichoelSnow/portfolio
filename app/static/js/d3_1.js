var dv = {};
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
dv.x_map = 0;
dv.x_map_annotation = 25;
dv.x_plot = dv.x_map + dv.width_map;
dv.x_grid = dv.x_map;
dv.x_picker = dv.width_map;
dv.x_bar = dv.x_map + dv.width_map;
dv.y_map = 160;
dv.y_map_annotation = 50;
dv.y_grid = dv.y_map + dv.height_map;
dv.y_bar = dv.y_map;
dv.y_picker = dv.y_bar - dv.height_picker;
dv.y_plot = dv.y_bar + dv.height_bar;
dv.x_gplot = dv.x_grid + dv.width_grid;
dv.y_gplot = dv.y_grid;

// Base Properties
dv.basepad = 10;
dv.baserad = 15;

d3.select("h1").attr("style", "margin: " + (dv.basepad * 2) + "px 0px 0px " + (dv.basepad * 2) + "px;");
d3.select("p").attr("style", "margin: " + (dv.basepad) + "px 0px 0px " + (dv.basepad * 2) + "px;");

// Picker
dv.tpad_picker = dv.basepad * 4;
dv.tpadspc_picker = dv.basepad;
dv.pad_picker = dv.basepad * 3;
dv.rad_picker = dv.baserad;
dv.height_picker_button = 40;
dv.svg_picker = d3.select("body").append("svg")
    .attr("class", "picker")
    .attr("id", "svg_picker")
    .attr("width", dv.width_picker)
    .attr("height", dv.height_picker)
    .attr("style", "position:absolute; top:" + dv.y_picker + "px; left:" + dv.x_picker + "px;");
dv.svg_picker.append("rect").attr("class", "base")
    .attr("x", dv.basepad).attr("y", dv.basepad)
    .attr("width", dv.width_picker - dv.basepad * 2).attr("height", dv.height_picker - dv.basepad * 2)
    .attr("rx", dv.baserad).attr("ry", dv.baserad);

// Map
dv.x_map_return = 50;
dv.y_map_return = 200;
dv.width_map_return = 150;
dv.height_map_return = dv.height_picker_button;
dv.svg_map = d3.select("body").append("svg")
    .attr("class", "map")
    .attr("id", "svg_map")
    .attr("width", dv.width_map)
    .attr("height", dv.height_map)
    .attr("style", "position:absolute; top:" + dv.y_map + "px; left:" + dv.x_map + "px;");
dv.svg_map.append("rect").attr("class", "base")
    .attr("x", dv.basepad * 2).attr("y", dv.basepad)
    .attr("width", dv.width_map - dv.basepad * 3).attr("height", dv.height_map - dv.basepad * 2)
    .attr("rx", dv.baserad).attr("ry", dv.baserad);

// Bar
dv.pad_top_bar = 40;
dv.pad_bottom_bar = 155;
dv.pad_right_bar = 50;
dv.pad_left_bar = 85;
dv.pad_xaxis_bar = 115;
dv.pad_title_bar = 35;
dv.svg_bar = d3.select("body")
    .append("svg")
    .attr("id", "svg_bar")
    .attr("width", dv.width_bar)
    .attr("height", dv.height_bar)
    .attr("style", "position:absolute; top:" + dv.y_bar + "px; left:" + dv.x_bar + "px;");
dv.svg_bar.append("rect").attr("class", "base")
    .attr("x", dv.basepad).attr("y", dv.basepad)
    .attr("width", dv.width_bar - dv.basepad * 2).attr("height", dv.height_bar - dv.basepad * 2)
    .attr("rx", dv.baserad).attr("ry", dv.baserad);

// Plot
dv.pad_top_plot = dv.basepad * 4;
dv.pad_bottom_plot = 90;
dv.pad_right_plot = dv.pad_right_bar;
dv.pad_left_plot = 100;
dv.pad_xaxis_plot = 40;
dv.pad_yaxis_plot = 55;
dv.svg_plot = d3.select("body")
    .append("svg")
    .attr("id", "svg_plot")
    .attr("width", dv.width_plot)
    .attr("height", dv.height_plot)
    .attr("style", "position:absolute; top:" + dv.y_plot + "px; left:" + dv.x_plot + "px;");
dv.svg_plot.append("rect").attr("class", "base")
    .attr("x", dv.basepad).attr("y", dv.basepad)
    .attr("width", dv.width_plot - dv.basepad * 2).attr("height", dv.height_plot - dv.basepad * 2)
    .attr("rx", dv.baserad).attr("ry", dv.baserad);

// Grid
dv.pad_top_grid = dv.basepad * 7;
dv.pad_bottom_grid = 160;
dv.pad_right_grid = 50;
dv.pad_left_grid = 110;
dv.pad_xaxis_grid = 50;
dv.pad_yaxis_grid = 55;
dv.xr = (dv.width_grid - dv.pad_right_grid - dv.pad_left_grid) / 24.0 / 2.0,
    dv.yr = (dv.height_grid - dv.pad_bottom_grid - dv.pad_top_grid) / 12.0 / 2.0,
    dv.maxr = dv.xr;
dv.svg_grid = d3.select("body")
    .append("svg")
    .attr("id", "svg_grid")
    .attr("width", dv.width_grid)
    .attr("height", dv.height_grid)
    .attr("style", "position:absolute; top:" + dv.y_grid + "px; left:" + dv.x_grid + "px;");
dv.svg_grid.append("rect").attr("class", "base")
    .attr("x", dv.basepad * 2).attr("y", dv.basepad)
    .attr("width", dv.width_grid - dv.basepad * 3).attr("height", dv.height_grid - dv.basepad * 2)
    .attr("rx", dv.baserad).attr("ry", dv.baserad);

// Gridplot
dv.pad_top_gplot = dv.pad_top_grid;
dv.pad_bottom_gplot = dv.pad_bottom_grid - 90;
dv.pad_right_gplot = 50;
dv.pad_left_gplot = 100;
dv.pad_xaxis_gplot = 40;
dv.pad_yaxis_gplot = 55;
dv.svg_gplot = d3.select("body")
    .append("svg")
    .attr("id", "svg_gplot")
    .attr("width", dv.width_gplot)
    .attr("height", dv.height_gplot)
    .attr("style", "position:absolute; top:" + dv.y_gplot + "px; left:" + dv.x_gplot + "px;");
dv.svg_gplot.append("rect").attr("class", "base")
    .attr("x", dv.basepad).attr("y", dv.basepad)
    .attr("width", dv.width_gplot - dv.basepad * 2).attr("height", dv.height_gplot - dv.basepad * 2)
    .attr("rx", dv.baserad).attr("ry", dv.baserad);


// Current State of Data You're Displaying
dv.tflag_set = 0; // Numbers
dv.tbname_set = ""; // New York City