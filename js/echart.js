//**stockbar-chart**/
var dom = document.getElementById('stockchart');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};
var isMobileView = window.innerWidth <= 768;

var option;

option = {
  legend: {
    icon: "circle",
left: '7%',
textStyle: {
color: '#000',  
fontSize: 14,    
fontWeight: '400',
margin:30,
fontFamily:"Inter",
},
itemWidth: 12,  // Corrected capitalization
itemHeight: 12, // Set the height of the legend symbol
},
tooltip: {
    show: true,
    trigger: 'item',
    
// formatter: params.value[params.encode.y[0]],

    textStyle: {
      color: '#181A1C',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 12,
    },
    extraCssText: 'padding: 7px 10px;',
    formatter: function(params) {
var data = params.data;
var askingPriceValue = data['Asking price'].toLocaleString();
var marketAvgPriceValue = data['Market avg. price'].toLocaleString();

var tooltipText = '';

if (params.seriesName === 'Asking Price') {
tooltipText = '<span>Count-' + 163 + '<br><strong style="color:#000" ;font-weight:"bold"><span style="color: #90BE6D; display: inline-block; width: 10px; height: 10px; background-color: #90BE6D; border-radius: 50%; text-align: center; line-height: 12px; margin-right: 2px;">' +
'</span> Asking price</strong>&nbsp;&nbsp;&nbsp;&nbsp; $' + askingPriceValue;
} else if (params.seriesName === 'Market Avg. Price') {
tooltipText = '<span>Count-' + 163 + '<br><strong style="color:#000" ;font-weight:"bold"><span style="color: #90BE6D; display: inline-block; width: 10px; height: 10px; background-color: #0666EB; border-radius: 50%; text-align: center; line-height: 12px; margin-right: 2px;">' +
'</span> Market avg. price</strong>&nbsp;&nbsp;&nbsp;&nbsp; $' + marketAvgPriceValue;
}

return tooltipText;
},
  },
grid: {
left: isMobileView ? "70px" : "100px",
right: '6%',
},
dataset: {
dimensions: ['price', 'Asking price', 'Market avg. price'],
source: [
  { price: '0 - 15', 'Asking price': 525, 'Market avg. price': 525 },
  { price: '16 - 30', 'Asking price': 425, 'Market avg. price': 425 },
  { price: '31 - 45', 'Asking price': 325, 'Market avg. price': 325 },
  { price: '46 - 60', 'Asking price': 225, 'Market avg. price': 225 },
  { price: '61+', 'Asking price': 125, 'Market avg. price': 125 },
]
},
xAxis: { type: 'category',
axisLabel: {
  color:"#181A1C",
  margin:22
},
axisLine: {
lineStyle: {
  color: 'rgba(3, 2, 41, 0.05)',  // Change the color of the x-axis line
  width: 1  // Adjust the width of the x-axis line
}
} ,
name: 'Stock Age', // Add the title here
nameLocation: 'center', // Horizontally center the Y-Axis title
nameGap: 50,    
nameTextStyle: {
color: '#181A1C', // Change the text color (e.g., red)
fontSize: 16, // Change the font size (e.g., 16px)
},    },

yAxis: { 
marginTop:"15px",
axisLabel: {
  color:"#181A1C",
},
name: 'Price', // Add the title here
nameLocation: 'center', // Horizontally center the Y-Axis title
nameGap: isMobileView ? 30 : 50, // Adjust nameGap for mobile view
nameTextStyle: {
color: '#181A1C', // Change the text color (e.g., red)
fontSize: 16, // Change the font size (e.g., 16px)
},  
},
// Declare several bar series, each will be mapped
// to a column of dataset.source by default.
series: [{ type: 'bar',                barMaxWidth: 52,
name: 'Asking Price',
itemStyle: {
      color: '#90BE6D'
    } }, { type: 'bar',
    name: 'Market Avg. Price', // This is the series name for Market Avg. Price
itemStyle: {
      color: '#0666EB',
    },                barMaxWidth: 31,
}, ]

};



if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);

//**stockage-piechart**/
var dom = document.getElementById('stockagechart');
var myChart = echarts.init(dom, null, {
renderer: 'canvas',
useDirtyRect: false
});
var app = {};
var isMobileView = window.innerWidth <= 768;
var isSmallDesktopView = window.innerWidth <= 1366;


var option;

option = {
tooltip: {
    show: true,
trigger: 'item',
formatter: '{b}: {c} cars ({d}%)',
textStyle: {
      color: '#000',
    },
},
legend: {
    icon: "circle",
    left: 'center',  // Center the legend
textStyle: {
color: '#000',  
fontSize: isSmallDesktopView ? "12px" : "14px",    
fontWeight: '400',
margin:30,
fontFamily:"Inter",
},
itemWidth: 12,  // Corrected capitalization
itemHeight: 12, // Set the height of the legend symbol
},
series: [
{
name: 'Your Stock Age',
type: 'pie',
radius: ['40%', '70%'],
avoidLabelOverlap: false,
label: {
  show: false,
  position: 'center'
},
emphasis: {
  label: {
    show: true,
    fontSize: 18, // Adjust font size as needed
    fontWeight: 'normal',
    color:"#181A1C"
  }
},
labelLine: {
  show: false
},
data: [
  { value: 24, name: '15 days or less' , itemStyle: {
      color: '#0666EB'
    } },
  { value: 50, name: '15 - 60 days', itemStyle: {
      color: '#90BE6D'
    } ,
    selected: true // Set this data point to be selected by default
},
  { value: 26, name: '60+ days' , itemStyle: {
      color: '#EEC549'
    }  }
]
}
]
};

if (option && typeof option === 'object') {
myChart.setOption(option);
}
//   // Trigger the tooltip for the "15 - 60 days" data point in the same place
//   myChart.on('finished', function () {
//     myChart.dispatchAction({
//       type: 'showTip',
//       seriesIndex: 0, // Index of the series in case of multiple series
//       dataIndex: 1,   // Index of the data item you want to show the tooltip for
//     });
//   },1000);
//   // Show the tooltip for the "15 - 60 days" data point by default
//   myChart.on('finished', function () {
//   myChart.dispatchAction({
//     type: 'showTip',
//     seriesIndex: 0,
//     dataIndex: 1,
//   });
// });

//   // Hide the tooltip when hovering over other items
//   myChart.on('mouseover', function (params) {
//     if (params.dataIndex !== 1) {
//       myChart.dispatchAction({
//         type: 'hideTip',
//       });
//     }
//   });
window.addEventListener('resize', myChart.resize);
