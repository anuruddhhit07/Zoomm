import React, { useRef, useEffect, Component } from "react";
import * as d3 from "d3";

const data = [
  ["January", 123432, 80342],
  ["February", 19342, 10342],
  ["March", 17443, 15423],
  ["April", 26342, 18432],
  ["May", 34213, 29434],
  ["June", 50321, 45343],
  ["July", 54273, 90002],
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

const range =(start, end, step = 1) =>{
  const len = Math.floor((end - start) / step) + 1
  return Array(len).fill().map((_, idx) => start + (idx * step))
}

class Canvss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      margin: { top: 0, bottom: 20, left:30, right: 20 },
      cvwidth: 600,
      cvheight: 600,
    };
    this.canvasRef = React.createRef();
  }
  componentDidMount() {
      const canvas=this.canvasRef.current
    const width =
      this.state.cvwidth - this.state.margin.left - this.state.margin.right;
    const height =
      this.state.cvheight -this.state.margin.top - this.state.margin.bottom;
      
    const context = canvas.getContext("2d");
    this.drawChart(context,width,height);
  }

  drawChart(ctx,width,height) {
    const xScale=d3.scaleLinear().range([0,width]).domain([0,d3.max(data, (d) => d.index)])
    const ydatarange=[10,110]
    const yrangetick=range(ydatarange[0],ydatarange[1],10)
    console.log(yrangetick)
    const yScale=d3.scaleLinear().range([0,height-this.state.margin.bottom]).domain([d3.min(yrangetick),d3.max(yrangetick, (d) => d)])
    
    
    
    ctx.translate(this.state.margin.left,this.state.margin.bottom)
    
    ctx.beginPath()
    ctx.moveTo(0,height-this.state.margin.bottom)
    ctx.lineTo(width,height-this.state.margin.bottom)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.lineTo(0,height-this.state.margin.bottom)
    ctx.stroke()
    
      yrangetick.forEach((d)=>{
      // console.log("mylog122",yScale(d),d,height)
     ctx.moveTo( -this.state.margin.left/2 , yScale(d));
		ctx.lineTo( width , yScale(d));
	ctx.stroke();
      
    })
    
    
    
    data.forEach((d)=>{
      //console.log("mylog",d.index,xScale(d.index))
     // console.log("exter",width,xScale(11))
     //ctx.moveTo( this.state.margin.left , yScale(d));
		//	ctx.lineTo( this.state.margin.left/2 , yScale(d));
      
	//	ctx.stroke();
    
    ctx.moveTo( xScale(d.index),0* (height-this.state.margin.bottom) );
			ctx.lineTo( xScale(d.index), height-this.state.margin.bottom/2 );
		ctx.stroke();
      
    })
    
    
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(xScale(2), height-this.state.margin.bottom- yScale(50), 20, 0, 2 * Math.PI);
    ctx.fill();
    
    // Initialize path
//ctx.beginPath();

// Go to the starting coordinate
//ctx.moveTo(100, 50);

// Draw 2 segments
//ctx.lineTo(300, 50);
//ctx.lineTo(200, 370);

// Fill the shape
//ctx.fill();
//ctx.stroke();
  }

  render() {
    return (
      <>
        <canvas
          className="canvas-container"
          ref={this.canvasRef}
          width={this.state.cvwidth}
          height={this.state.cvheight}
        />
      </>
    );
  }
}

export default Canvss;
