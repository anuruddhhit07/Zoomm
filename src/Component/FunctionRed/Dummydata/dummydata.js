import * as d3 from "d3";
export const testdata = [
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
  
  
  export const arraydata=()=>{
    const dataset = []
  
    for(let i=0; i<5; i++){
      dataset.push(Math.round(Math.random()*100));
  }
  
      return dataset;
  
  }
  
  // ===Daten===
  export const datapluck = [{
    "Datum": "2013-02-04 00:00:00",
    "Summe": "1000.00",
    "Type": "Type1",
    "Notizen": null
  }, {
    "Datum": "2013-02-04 00:00:00",
    "Summe": "200.00",
    "Type": "Type2",
    "Notizen": null
  }, {
    "Datum": "2013-02-21 00:00:00",
    "Summe": "4000.00",
    "Type": "Type1",
    "Notizen": null
  }, {
    "Datum": "2013-02-23 00:00:00",
    "Summe": "2000.00",
    "Type": "Type1",
    "Notizen": null
  }, {
    "Datum": "2013-02-23 00:00:00",
    "Summe": "601.00",
    "Type": "Type2",
    "Notizen": null
  }, {
    "Datum": "2013-03-04 00:00:00",
    "Summe": "775.00",
    "Type": "Type1",
    "Notizen": null
  }, {
    "Datum": "2013-03-04 00:00:00",
    "Summe": "1395.10",
    "Type": "Type2",
    "Notizen": null
  }, {
    "Datum": "2013-04-03 00:00:00",
    "Summe": "400.00",
    "Type": "Type1",
    "Notizen": null
  }, {
    "Datum": "2013-04-03 00:00:00",
    "Summe": "1040.00",
    "Type": "Type2",
    "Notizen": null
  }, {
    "Datum": "2013-05-24 00:00:00",
    "Summe": "400.00",
    "Type": "Type1",
    "Notizen": null
  }, {
    "Datum": "2013-05-24 00:00:00",
    "Summe": "3288.88",
    "Type": "Type2",
    "Notizen": null
  }, {
    "Datum": "2013-05-28 00:00:00",
    "Summe": "400.00",
    "Type": "Type1",
    "Notizen": null
  }, {
    "Datum": "2013-05-28 00:00:00",
    "Summe": "4407.10",
    "Type": "Type2",
    "Notizen": null
  }, {
    "Datum": "2013-06-01 00:00:00",
    "Summe": "400.00",
    "Type": "Type1",
    "Notizen": null
  }, {
    "Datum": "2013-06-01 00:00:00",
    "Summe": "3525.86",
    "Type": "Type2",
    "Notizen": null
  }, {
    "Datum": "2013-06-04 00:00:00",
    "Summe": "400.00",
    "Type": "Type1",
    "Notizen": null
  }, {
    "Datum": "2013-06-04 00:00:00",
    "Summe": "2990.17",
    "Type": "Type2",
    "Notizen": null
  }, {
    "Datum": "2013-06-10 00:00:00",
    "Summe": "390.00",
    "Type": "Type1",
    "Notizen": null
  }, {
    "Datum": "2013-06-10 00:00:00",
    "Summe": "366.00",
    "Type": "Type2",
    "Notizen": null
  }, {
    "Datum": "2013-06-14 00:00:00",
    "Summe": "390.00",
    "Type": "Type1",
    "Notizen": null
  }, {
    "Datum": "2013-06-14 00:00:00",
    "Summe": "925.18",
    "Type": "Type2",
    "Notizen": null
  }, {
    "Datum": "2013-06-16 00:00:00",
    "Summe": "708.44",
    "Type": "Type1",
    "Notizen": null
  }, {
    "Datum": "2013-06-16 00:00:00",
    "Summe": "609.10",
    "Type": "Type2",
    "Notizen": null
  }, {
    "Datum": "2013-06-20 00:00:00",
    "Summe": "708.44",
    "Type": "Type1",
    "Notizen": null
  }, {
    "Datum": "2013-06-20 00:00:00",
    "Summe": "1760.80",
    "Type": "Type2",
    "Notizen": null
  }]

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }


  export const timesereiohlc = () => {
    // Generate data for 30 days
    const data = d3.range(30).map((d, i) => {
      // console.log(d3.timeDay.offset(new Date(), i));
      // console.log(Math.random() * 100);
      return {
        time: d3.timeDay.offset(new Date(), i),
        open: getRandomArbitrary(30, 50),
        high: getRandomArbitrary(51, 55),
        low: getRandomArbitrary(5, 29),
        close: getRandomArbitrary(30, 50),
        

      };
    });
    // console.log(data);
    return data;
  };

  export const timesereisdata = () => {
    // Generate data for 30 days
    const data = d3.range(30).map((d, i) => {
      // console.log(d3.timeDay.offset(new Date(), i));
      // console.log(Math.random() * 100);
      return {
        time: d3.timeDay.offset(new Date(), i),
        value: Math.random() * 100,
        

      };
    });
    // console.log(data);
    return data;
  };


  export const timesereisdataimpression = () => {
    // Generate data for 30 days
    const data = d3.range(30).map((d, i) => {
      // console.log(d3.timeDay.offset(new Date(), i));
      // console.log(Math.random() * 100);
      return {
        date1: d3.timeDay.offset(new Date(), i),
        date:(d3.timeDay.offset(new Date(), i)).getTime() ,
        Impressions: Math.random() * 100,
        

      };
    });
    console.log('dd',data);
    return data;
  };

  // timesereisdataimpression()
  
  