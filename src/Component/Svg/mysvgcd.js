import React, { Component } from "react";
import * as d3 from "d3";
import "./styles.scss";
import { cdata, cdataohlc, OHLC2 } from "../Utilityfn/fancy";
import { drawSVGCandle, drawSVGCandleohlc } from "./Draw/drawSVGCandle";
import * as _ from "underscore";

// gridlines in x axis function
function make_x_gridlines(x) {
  return d3.axisBottom(x).ticks(5);
}

// gridlines in y axis function
function make_y_gridlines(y) {
  return d3.axisLeft(y).ticks(5);
}

const arrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

// export default function MySvgCD() {
// https://www.essycode.com/posts/adding-gridlines-chart-d3/
export default class MySvgCD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      margin: { top: 40, right: 20, bottom: 20, left: 40 },
      barwidth: 50,
      bargap: 5,
      tickheight: 100,
      yscalefactor1: 0.4,
      svgwidth: 600,
      svgheight: 500,
    };
    this.myRef = React.createRef();
  }

  componentDidMount() {
    // const data=cdata()
    const data = cdataohlc();
    console.log(data);
    console.log(OHLC2);

    this.drawChart(OHLC2);
  }
  drawChart(data) {
    const cdwidth = 10;
    const width =
      this.state.svgwidth - this.state.margin.left - this.state.margin.right;
    const height =
      this.state.svgheight - this.state.margin.top - this.state.margin.bottom;

    OHLC2.forEach(function (d) {
      d.time = new Date(d.time * 1000);
    });
    // console.log(OHLC2);
    // var timeFormat = d3.timeFormat("%I:%M %p %a %Y");
    // var parseTime = d3.timeParse("%d-%b-%y");

    // // format the data
    // data.forEach(function (d) {
    //   d.date = parseTime(d.date);
    //   d.close = +d.close;
    // });

    const svg = d3
      .select(this.myRef.current)
      .append("svg")
      .attr("width", width + this.state.margin.left + this.state.margin.right)
      .attr("height", height + this.state.margin.top + this.state.margin.bottom)
      .attr("class", "graph-svg-component")
      .append("g")
      .attr(
        "transform",
        `translate(${this.state.margin.left}, ${this.state.margin.top})`
      )
      
      

    // Take the current date and round it to the nearest minute
    var d2 = new Date(Math.round(new Date().getTime() / 60000) * 60000);
    // Take the rounded time from above and go 10 minutes before it
    var d1 = d3.timeMinute.offset(d2, -10);

    // find data range
    var xMin = d3.min(OHLC2, function (d) {
      return Math.min(d.time);
    });
    var xMax = d3.max(OHLC2, function (d) {
      return Math.max(d.time);
    });

    var yMin = d3.min(OHLC2, function (d) {
      return Math.min(d.low);
    });
    var yMax = d3.max(OHLC2, function (d) {
      return Math.max(d.high);
    });

    // set the ranges
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    // Scale the range of the data
    var xScale = x.domain(
      d3.extent(data, function (d) {
        return d.time;
      })
    );

    var yScale = y.domain([yMin, yMax]);

    let xAxisGenerator = d3.axisBottom(xScale)
    // .ticks(6)
    // .tickSize(-height)
    let yAxisGenerator = d3.axisLeft(yScale);
    // .tickSize(-width)

    var makeYAxis = function () {
      return d3.axisLeft(yScale).ticks(10);
    };

    var makeXAxis = function () {
      return d3.axisBottom(xScale).ticks(10);
    };


    // // XgridLines
    svg
      .append("g")
      .selectAll("lines-ax")
      .data(data)
      .enter()
      .append("line")
      .attr("class", "x grid")
      .attr("x1", function (d) {
        return x(d.time) + cdwidth / 2;
      })
      .attr("y1", function (d) {
        return height;
      })
      .attr("x2", function (d) {
        return x(d.time) + cdwidth / 2;
      })
      .attr("y2", function (d) {
        return 0;
      })
      

      // var xGridLines = svg
      // .append("g")
      // .attr("class", "y grid")
      // .call(makeXAxis().tickSize(height).tickFormat(""));

    var yGridLines = svg
      .append("g")
      .attr("class", "y grid")
      .call(makeYAxis().tickSize(-width, 0, 0).tickFormat(""));


    // style gridlines
    d3.selectAll(".y.grid")
      // .selectAll(".tick.major")
      .style("stroke-dasharray", function (d, i) {
        return  "3,3" ;
        // return i !== 0 ? "3,3" : null;
      })
      
    
      // style gridlines
    d3.selectAll(".x.grid")
    // .selectAll(".tick.major")
    .style("stroke-dasharray", function (d, i) {
      return  "3,3" ;
      // return i !== 0 ? "3,3" : null;
    })
    .style("stroke-dasharray", "3,3")
    .style("stroke-opacity", .5);
    
    
    
function zoomed({ transform }) {
    ohlchart.attr("transform", transform);
    gX.call(xAxisGenerator.scale(transform.rescaleX(xScale)));
    gY.call(yAxisGenerator.scale(transform.rescaleY(yScale)));
  }
const zoom = d3.zoom()
    .scaleExtent([1, 40])
    .translateExtent([[-300, this.state.margin.bottom+this.state.margin.top], [width + 200, height]])
   // .filter(filter)
    .on("zoom", zoomed);
    
      // prevent scrolling then apply the default filter
  function filter(event) {
    event.preventDefault();
    return (!event.ctrlKey || event.type === 'wheel') && !event.button;
  }
  function reset() {
    svg.transition()
      .duration(750)
      .call(zoom.transform, d3.zoomIdentity);
  }
  
  
  var ohlchart = svg.selectAll("path.svgcandle")
    .data(OHLC2)
    .enter().append("g");

   ohlchart.append("path")
      .attr("class", function (d) {
        return d.open < d.close ? "svgcandle up" : "svgcandle down";
      })
      .attr("d", function (d) {
        // return drawSVGCandle(d.xCoordinate, d.yCoordinate, d.candleWidth, d.upper, d.body, d.lower);
        return drawSVGCandleohlc(
          xScale(d.time),
          yScale(d.open),
          yScale(d.high),
          yScale(d.low),
          yScale(d.close),
          cdwidth
        );
      });

    var line = d3
      .line()
      .x(function (d) {
        return xScale(d.time) + cdwidth / 2;
      })
      .y(function (d) {
        return yScale(d.close);
      });
      
    // .curve(d3.curveCatmullRom.alpha(0))

    // Data line
   // svg.append("g")
      ohlchart.append("path")
      .datum(data)
      .attr("class", "data-line")
      .attr("d", line)
      .style("stroke-width", 1)
      .style("stroke", "black")
      .style("fill", "None")
      
          // add the X Axis
    const gX=svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxisGenerator);

    // add the Y Axis
    const gY=svg.append("g").call(yAxisGenerator);
    // .attr("stroke-width", .5)
      
      return Object.assign(svg.call(zoom).node(), {reset});
  }

  render() {
    return <div className={"svgcd-container"} ref={this.myRef}></div>;
  }
}
