export function range(start, end, step = 1) {
  const len = Math.floor((end - start) / step) + 1;
  return Array(len)
    .fill()
    .map((_, idx) => start + idx * step);
}

export function cdata() {
  var candleWidth = 10;
  //Number of candles to draw
  var candleCount = 2;
  //The data array containing our candle values
  var data = [];
  //The amount of shifting to do for each candle on the x axis
  var increment = 100;
  for (var i = 0; i < candleCount; i++) {
    var xCoordinate = increment;

    //Generate random y coordinates, upper, body and lower
    //I took 75 as the multiplier since 75 x 4 = 300 which is also our total height
    var yCoordinate = Math.floor(Math.random() * 50 + 10);
    var upper = Math.floor(Math.random() * 50 + 10);
    var body = Math.floor(Math.random() * 50 + 10);
    var lower = Math.floor(Math.random() * 50 + 10);
    var bullish = Math.random() >= 0.5;

    data.push({
      xCoordinate: xCoordinate,
      yCoordinate: yCoordinate,
      candleWidth: candleWidth,
      upper: upper,
      body: body,
      lower: lower,
      bullish: bullish,
    });
    increment += 20;
  }
  return data;
}

export function cdataohlc() {
  var candleWidth = 10;
  //Number of candles to draw
  var candleCount = 50;
  //The data array containing our candle values
  var data = [];
  //The amount of shifting to do for each candle on the x axis
  var increment = 100;
  for (var i = 0; i < candleCount; i++) {
    var datetime = increment;

    //Generate random y coordinates, upper, body and lower
    //I took 75 as the multiplier since 75 x 4 = 300 which is also our total height
    var open = Math.floor((Math.random() * 50) + 10);
    var high = Math.floor((Math.random() * 10) +60);
    var close =Math.floor((Math.random() * 50) + 10);
    var low =  Math.floor((Math.random() * 10) + 1);

    // var bullish = Math.random() >= 0.5;

    data.push({
      datetime: datetime,
      open: open,
      high: high,
      low: low,
      close: close,
      // bullish:open>close?true:false
    });

    increment += 20;
  }

  // data.push({ datetime: 100, open: 50, high: 100, low: 20, close: 30 });
  // data.push({ datetime: 120, open: 20, high: 80, low: 10, close: 30 });
  // data.push({datetime: 100, open: 32, high: 67, low: 2, close: 32});
  

  return data;
}


export const OHLC2 = [
  {"time": 1387212120, "open": 368, "close": 300, "high": 380, "low": 158},
  {"time": 1387212130, "open": 330, "close": 250, "high": 389, "low": 310},
  {"time": 1387212140, "open": 213, "close": 253, "high": 289, "low": 213},
  {"time": 1387212150, "open": 180, "close": 150, "high": 189, "low": 110},
  {"time": 1387212160, "open": 310, "close": 350, "high": 389, "low": 310},
  {"time": 1387212170, "open": 213, "close": 253, "high": 289, "low": 213},
  {"time": 1387212180, "open": 190, "close": 150, "high": 189, "low": 110},
  {"time": 1387212190, "open": 362, "close": 530, "high": 589, "low": 510},
  {"time": 1387212200, "open": 409, "close": 356, "high": 300, "low": 510},
  {"time": 1387212210, "open": 334, "close": 275, "high": 369, "low": 185},
  {"time": 1387212220, "open": 304, "close": 389, "high": 389, "low": 310},
  {"time": 1387212230, "open": 395, "close": 235, "high": 289, "low": 213},
  {"time": 1387212240, "open": 339, "close": 148, "high": 189, "low": 110},
  {"time": 1387212250, "open": 310, "close": 350, "high": 389, "low": 310},
  {"time": 1387212260, "open": 283, "close": 253, "high": 289, "low": 213},
  {"time": 1387212270, "open": 290, "close": 350, "high": 376, "low": 110},
  {"time": 1387212280, "open": 448, "close": 550, "high": 624, "low": 510},
  {"time": 1387212290, "open": 419, "close": 299, "high": 194, "low": 510},
  {"time": 1387212300, "open": 150, "close": 163, "high": 189, "low": 145},
  {"time": 1387212310, "open": 330, "close": 350, "high": 356, "low": 310},
  {"time": 1387212320, "open": 213, "close": 253, "high": 289, "low": 213},
  {"time": 1387212330, "open": 180, "close": 150, "high": 189, "low": 110},
  {"time": 1387212340, "open": 310, "close": 350, "high": 389, "low": 310},
  {"time": 1387212350, "open": 213, "close": 253, "high": 289, "low": 213},
  {"time": 1387212360, "open": 190, "close": 150, "high": 230, "low": 110},
  {"time": 1387212370, "open": 408, "close": 301, "high": 382, "low": 245},
  {"time": 1387212380, "open": 330, "close": 356, "high": 404, "low": 230},
  {"time": 1387212390, "open": 183, "close": 143, "high": 190, "low": 31},
  {"time": 1387212400, "open": 183, "close": 265, "high": 271, "low": 165},
  {"time": 1387212410, "open": 395, "close": 253, "high": 424, "low": 213},
  {"time": 1387212420, "open": 339, "close": 379, "high": 446, "low": 275},
  {"time": 1387212430, "open": 310, "close": 350, "high": 389, "low": 310},
  {"time": 1387212440, "open": 283, "close": 253, "high": 289, "low": 213},
  {"time": 1387212450, "open": 162, "close": 350, "high": 189, "low": 122},
  {"time": 1387212460, "open": 452, "close": 361, "high": 525, "low": 329},
  {"time": 1387212470, "open": 173, "close": 281, "high": 312, "low": 141},
  {"time": 1387212480, "open": 183, "close": 265, "high": 271, "low": 165},
  {"time": 1387212490, "open": 395, "close": 253, "high": 424, "low": 213},
  {"time": 1387212500, "open": 339, "close": 379, "high": 446, "low": 275},
  {"time": 1387212510, "open": 310, "close": 350, "high": 389, "low": 310},
  {"time": 1387212520, "open": 283, "close": 253, "high": 289, "low": 213},
  {"time": 1387212530, "open": 162, "close": 350, "high": 189, "low": 122},
  {"time": 1387212540, "open": 452, "close": 361, "high": 542, "low": 329},
  {"time": 1387212550, "open": 173, "close": 281, "high": 312, "low": 91},
  {"time": 1387212560, "open": 183, "close": 265, "high": 271, "low": 165},
  {"time": 1387212570, "open": 395, "close": 253, "high": 424, "low": 213}
];
