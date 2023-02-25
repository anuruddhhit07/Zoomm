import * as d3 from "d3";

// This function is responsible for drawing the SVG version of the candle
// It accepts the length of the upper wick, the candle body and the lower wick and draws a single path that represents the whole candle
// We start at (x, y) which represents the leftmost coordinate and top of the candle's high
// Draw a line from the center high to the center of open or close whichever comes first
// Draw 4 lines representing the rectangle's body. We could have used a rect but we choose to use a path so that we have only 1 object per candle in DOM
// Draw the lower wick from the center bottom of the candle's body to the low
export function drawSVGCandle(x, y, width, upper, body, lower) {
    console.log(x, y, width, upper, body, lower);
    
    var path = d3.path()
    // path.moveTo(x + width/2, y)
    // path.lineTo(x + width/2, y + upper + body + lower)

    var hasUpper = upper >= 1
    var isBodyLine = body <= 1
    var isBodyRect = body > 1
    var hasLower = lower >= 1

    //draw the candle upper wick
    if (hasUpper) {
        path.moveTo(x + width / 2, y)
        path.lineTo(x + width / 2, y + upper)
    }


    //draw the candle body
    if (isBodyLine) {
        path.moveTo(x, y + upper)
        path.lineTo(x + width, y + upper)
    } else {
        path.moveTo(x, y + upper)
        path.lineTo(x + width, y + upper)
        path.lineTo(x + width, y + upper + body)
        path.lineTo(x, y + upper + body)
        path.closePath()
    }

    //lower wick
    if (hasLower) {
        path.moveTo(x + width / 2, y + upper + body)
        path.lineTo(x + width / 2, y + upper + body + lower)
    }

    return path
}


export function drawSVGCandleohlc(x,open,high,low,close,width) {
    // var width = 10
    // console.log(x,open,high,low,close);
    
    var path = d3.path()
    // path.moveTo(x + width/2, y)
    // path.lineTo(x + width/2, y + upper + body + lower)
var upper=(high-close)*-1
var body=Math.max(open, close)-Math.min(open, close)
var isbullish=open<close?false:true
var CDlenght=low-high




    if (upper){
        path.moveTo(x + width / 2, high)
        path.lineTo(x + width/ 2, high+CDlenght)
    }

    if (body>=0) {
        if (isbullish){
            path.moveTo(x, open)
            path.lineTo(x + width, open)
            path.lineTo(x + width, open-body)
            path.lineTo(x ,open-body)
        }
        else{
            path.moveTo(x, open)
            path.lineTo(x + width, open)
            path.lineTo(x + width, open+body)
            path.lineTo(x ,open+body)
        }
       
       
    }



    return path
}