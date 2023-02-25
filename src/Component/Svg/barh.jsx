import React, { Component } from "react";
import * as d3 from "d3";

const data1 = [
  ["January", 123432, 80342],
  ["February", 19342, 10342],
  ["March", 17443, 15423],
  ["April", 26342, 18432],
  ["May", 34213, 29434],
  ["June", 50321, 45343],
  ["July", 54273, 95502],
  ["August", 60000, 30344],
  ["September", 44432, 32444],
  ["October", 21332, 9974],
  ["November", 79105, 48711],
  ["December", 45246, 21785],
].map((item, i) => {
  return {
    index: i,
    month: item[0],
    revenue: item[1],
    profit: item[2],
  };
});

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      margin: { top: 10, right: 10, bottom: 20, left: 40 },
      barwidth: 50,
      bargap: 5,
      tickheight: 100,
      yscalefactor1: 0.4,
      svgwidth: 600,
      svgheight: 400,
    };
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.drawChart();
  }
  drawChart() {
    const width =
      this.state.svgwidth - this.state.margin.left - this.state.margin.right;
    const height =
      this.state.svgheight - this.state.margin.top - this.state.margin.bottom;
    const maxdata = d3.max(data1, (d) => {
      return d.profit;
    });
    // const datalength = data.length;
    const datalength = data1.length;
    const autobarwidth =
      (width - this.state.bargap * (datalength - 1)) / datalength;

    const xAxislength =
      autobarwidth * datalength + this.state.bargap * (datalength - 1);

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
      );

    // Create the scale
    var xScale = d3
      .scaleBand()
      //.domain(data1) // This is what is written on the Axis: from 0 to 100
      .range([0, xAxislength]) // This is where the axis is placed: from 100px to 800px
      .domain(data1.map((d) => d.month));

    let xAxisGenerator = d3.axisBottom(xScale).tickSize(-height);

    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxisGenerator);

    var yScale = d3
      .scaleLinear()
      .range([height, 0])
      .domain([0, d3.max(data1, (d) => d.profit)]);
    //  .range([height,0]);

    let yAxisGenerator = d3.axisLeft(yScale).tickSize(-xAxislength);
    svg.append("g").call(yAxisGenerator);

    svg
      .selectAll("rect")
      .data(data1)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * (autobarwidth + this.state.bargap))
      .attr("y", (d, i) => yScale(d.profit))
      .attr("width", autobarwidth)
      .attr("height", (d, i) => height - yScale(d.profit))
      .attr("fill", "green");

    // Create the scale

    svg
      .append("g")
      .selectAll("circle")
      .data(data1)
      .enter()
      .append("circle")
      .attr("cx", function (d, i) {
        return i * (autobarwidth + 5) + autobarwidth / 2;
      })
      .attr("cy", function (d) {
        return yScale(d.profit);
      })
      .attr("r", 2);
    //.attr("transform", "translate(" + 100 + "," + 100 + ")")
    //.style("fill", "#CC0000");

    var linedata = data1.map((d, i) => {
      return {
        x: i * (autobarwidth + 5) + autobarwidth / 2,
        y: yScale(d.profit),
      };
    });
    console.log(linedata);
   

    const line = d3
      .line()
      .x((d) => d.x)
      .y((d) => d.y)
      .curve(d3.curveCatmullRom.alpha(0.5));

    svg.append("g").append("path").datum(linedata).attr("d", line)
    .style("stroke", "black")
    .style("stroke-width", 2)
    .style("fill", 'None')
   
    
  }
  render() {
    return <div className={"vis-container"} ref={this.myRef}></div>;
  }
}
export default BarChart;
