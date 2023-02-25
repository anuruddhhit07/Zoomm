import React, { useRef, Component } from "react";
import "./styles.scss";
import * as d3 from "d3";
import Button from "react-bootstrap/Button";

import { cdata, cdataohlc, OHLC2 } from "../Utilityfn/fancy";
import { drawSVGCandle, drawSVGCandleohlc } from "./Draw/drawSVGCandle";
import * as _ from "underscore";

export default class svgchart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      margin: { top: 20, right: 20, bottom: 0, left: 30 },
      barwidth: 50,
      bargap: 5,
      tickheight: 100,
      yscalefactor1: 0.4,
      svgwidth: 500,
      svgheight: 300,
      xaxispad: 20,
    };
    this.myRef = React.createRef();
    // this.reset = this.reset.bind(this);
  }
  componentDidMount() {
    // const data=cdata()
    const data = cdataohlc();
    console.log(data);
    console.log(OHLC2);
    const dataa = Array.from({ length: 100 }, () => [
      100 * Math.random(),
      Math.random(),
    ]);

    this.drawChart(OHLC2);
  }
  drawChart(data) {
    // const width = this.state.svgwidth;
    // const height = Math.min(this.state.svgwidth * 0.8, 500);
    const cdwidth = 5;
    const width =
      this.state.svgwidth - this.state.margin.left - this.state.margin.right;
    const height =
      this.state.svgheight - this.state.margin.top - this.state.margin.bottom;

    // const height = Math.min(this.state.svgwidth * 0.8, height1);

    data.forEach(function (d) {
      d.time = new Date(d.time * 1000);
    });

    const svg = d3
      .select(this.myRef.current)
      .append("svg")
      // .attr("width", width + this.state.margin.left + this.state.margin.right)
      // .attr("height", height + this.state.margin.top + this.state.margin.bottom)
      .attr("viewBox", [0, 0, this.state.svgwidth, this.state.svgheight])
      .attr("class", "graph-svg-component");
    // .append("g")
    // .attr(
    //   "transform",
    //   `translate(${this.state.margin.left}, ${this.state.margin.top})`
    // )

    const vo = svg.append("path");
    const gx = svg.append("g");
    const gy = svg.append("g");

    var clip = svg
      .append("defs")
      .append("svg:clipPath")
      .attr("id", "clip")
      .append("svg:rect")
      .attr("id", "clip-rect")
      .attr("x", `${this.state.margin.left}`)
      .attr("y", `${this.state.margin.top}`)
      .attr("width", width - this.state.margin.right - this.state.margin.left)
      .attr(
        "height",
        height -
          this.state.margin.bottom -
          this.state.margin.top -
          this.state.xaxispad
      );

    // var chartBody = svg.append("g").attr("clip-path", "url(#clip)");

    //const dots = svg.append("g")
    const dots = svg
      .append("g")
      .selectAll("ellipse")
      .data(data)
      .join("ellipse")
      .attr("fill", () => 0)
      .attr("clip-path", "url(#clip)");

    const ohlchart = svg
      .selectAll("path.svgcandle")
      .data(data)
      .enter()
      .append("g")
      .append("path")
      .attr("clip-path", "url(#clip)");

    const linechart = svg
      .append("path")
      .datum(data)
      .attr("clip-path", "url(#clip)");

    // find data range
    var xMin = d3.min(data, function (d) {
      return Math.min(d.time);
    });
    var xMax = d3.max(data, function (d) {
      return Math.max(d.time);
    });

    var yMin = d3.min(data, function (d) {
      return Math.min(d.low);
    });
    var yMax = d3.max(data, function (d) {
      return Math.max(d.high);
    });

    var x = d3
      .scaleTime()
      .domain(
        d3.extent(data, function (d, index) {
          return d.time;
        })
      )
      .range([this.state.margin.left, width - this.state.margin.right])
      .nice();

    var y = d3
      .scaleLinear()
      .domain([yMin, yMax])
      .range([
        height - this.state.margin.bottom,
        this.state.margin.top + this.state.margin.bottom,
      ])
      .nice();

    console.log(
      "AA",
      this.state.svgheight,
      height,
      height - this.state.margin.bottom
    );

    const xAxis = (g, scale) =>
      g
        .attr(
          "transform",
          `translate(${x(xMin) - this.state.margin.left},${y(yMin)})`
        )
        .call(d3.axisBottom(scale).ticks(12));
    // .call((g) => g.select(".domain").attr("display", "none"));

    const yAxis = (g, scale) =>
      g
        .attr(
          "transform",
          // `translate(${x(0)},${y(yMin) - height + this.state.margin.bottom})`
          `translate(${x(xMin)},${y(yMin) - height + this.state.margin.bottom})`
        )
        .call(d3.axisLeft(scale).ticks(12 * (height / width)));
    // .call((g) => g.select(".domain").attr("display", "none"));

    svg
      .append("g")
      .selectAll("lines-ax")
      .data(data.filter((v, i) => i % 2 == 0))
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
      });

    // style gridlines
    d3.selectAll(".x.grid")
      // .selectAll(".tick.major")
      .style("stroke-dasharray", function (d, i) {
        return "3,3";
        // return i !== 0 ? "3,3" : null;
      })
      .style("stroke-dasharray", "2,5")
      .style("stroke-opacity", 0.2);

    // z holds a copy of the previous transform, so we can track its changes
    let z = d3.zoomIdentity;

    // set up the ancillary zooms and an accessor for their transforms
    const zoomX = d3.zoom().scaleExtent([0.1, 10]);
    const zoomY = d3.zoom().scaleExtent([0.2, 5]);
    const tx = () => d3.zoomTransform(gx.node());
    const ty = () => d3.zoomTransform(gy.node());
    gx.call(zoomX).attr("pointer-events", "none");
    gy.call(zoomY).attr("pointer-events", "none");

    // active zooming
    const zoom = d3.zoom().on("zoom", zoomhandel);

    d3.select("#reset").on("click", reset);
    d3.select("#panLeft").on("click", panLeft);
    d3.select("#panRight").on("click", panRight);
    d3.select("#center").on("click", centerfit);
    d3.select("#horizontal").on("click", Horizontal);

    return svg
      .call(zoom)
      .call(zoom.transform, d3.zoomIdentity.scale(0.8))
      .node();

    function zoomhandel(e) {
      const t = e.transform;
      const k = t.k / z.k;
      const point = center(e, this);

      // is it on an axis? is the shift key pressed?
      const doX = point[0] > x.range()[0];
      const doY = point[1] < y.range()[0];
      const shift = e.sourceEvent && e.sourceEvent.shiftKey;
      // console.log('kkk',k);
      if (k === 1) {
        // pure translation?
        doX && gx.call(zoomX.translateBy, (t.x - z.x) / tx().k, 0);
        doY && gy.call(zoomY.translateBy, 0, (t.y - z.y) / ty().k);
      } else {
        // if not, we're zooming on a fixed point
        doX && gx.call(zoomX.scaleBy, shift ? 1 / k : k, point);
        doY && gy.call(zoomY.scaleBy, k, point);
      }

      z = t;

      redraw();
    }

    function center(event, target) {
      if (event.sourceEvent) {
        const p = d3.pointers(event, target);
        return [d3.mean(p, (d) => d[0]), d3.mean(p, (d) => d[1])];
      }
      return [width / 2, height / 2];
    }

    function initZoom() {
      svg.transition().call(zoom);
    }

    function reset() {
      svg.transition().duration(1).call(zoom.transform, d3.zoomIdentity);
    }

    function panLeft() {
      svg.transition().call(zoom.translateBy, -150, 0);
    }

    function panRight() {
      svg.transition().call(zoom.translateBy, 150, 0);
    }

    function centerfit() {
      svg.transition().call(zoom.translateTo, 0.5 * width, 0.5 * height);
    }

    function Horizontal(e) {
      var self = this;
      var m, m1, m2, horizontal, isDown = false, isDragging = false, click = 1, pathArray = [], pathArray1 = [],
          x1, y1, x2, y2, slope, isLeft;
      
      var lineFunction = d3.line()
                          .x(function(d) { return d.time; })
                          .y(function(d) { return d.open; })
                          // .interpolate("linear");

                        //   .x(function(d) { return d.x; })
                        // .y(function(d) { return d.y; })
                        // .interpolate("linear");
      const point = center(e, this);

      // console.log('point',point);
      svg.on('mousedown', function() {
          isDown = !isDown;
          m1 = d3.pointer(this);
          console.log(m1);
          self.pathArray = [{ x: m1[0], y: m1[1] }, { x: 0, y: m1[1] }, { x: 0, y: m1[1] } ];
          if(!isDragging) {
              if(click == 1){ 
                  self.horizElement = d3.select('svg').append('path').attr({'class': 'horizontal'});//.call(dragP);
                  updatePath();
              }                
          } else {
              isDragging = true;
          }
          click++;
      })
      
      .on('mousemove', function() {
          m2 = d3.pointer(this);       
          if (isDown && !isDragging && click == 2) {               
              updatePath();
          }
      });
      
      function updatePath() {
          horizontal = d3.select(self.horizElement[0][0]).data(self.pathArray);
          horizontal.attr('d', lineFunction(self.pathArray));
      }
      
  }
  

    function redraw() {
      const xr = tx().rescaleX(x);
      const yr = ty().rescaleY(y);

      gx.call(xAxis, xr);
      gy.call(yAxis, yr);

      ohlchart
        .attr("class", function (d) {
          return d.open < d.close ? "svgcandle up" : "svgcandle down";
        })
        .attr("d", function (d, index) {
          // return drawSVGCandle(d.xCoordinate, d.yCoordinate, d.candleWidth, d.upper, d.body, d.lower);
          return drawSVGCandleohlc(
            xr(d.time),
            yr(d.open),
            yr(d.high),
            yr(d.low),
            yr(d.close),
            cdwidth
          );
        });

      var line = d3
        .line()
        .x(function (d) {
          return xr(d.time) + cdwidth / 2;
        })
        .y(function (d) {
          return yr(d.close);
        });
      //  .curve(d3.curveCatmullRom.alpha(1))

      // Data line
      // svg.append("g")

      linechart
        .attr("class", "data-line")
        .attr("d", line)
        .style("stroke-width", 0.5)
        .style("stroke", "black")
        .style("fill", "None");
    }
  }

  render() {
    return (
      <>
        <button id="reset"> Reset </button>
        <button id="panLeft"> panLeft </button>
        <button id="panRight"> panRight </button>
        <button id="center"> center </button>
        <button id="horizontal">Horizontal Line</button>

        <div className={"svgcd-container"} ref={this.myRef}></div>
      </>
    );
  }
}
