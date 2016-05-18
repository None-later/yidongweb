// JavaScript Document
  var oItem = document.getElementById("total");
  var oLis = oItem.getElementsByTagName("li");
  var oDivs = oItem.getElementsByClassName("chart_bd");

  function changeTab(nIndex) {
      for (var i = 0; i < oLis.length; i++) {
          oLis[i].className = null;
          oDivs[i].className = "chart_bd";
      }
      oLis[nIndex].className = "select";
      oDivs[nIndex].className = "chart_bd select";
  }

  for (var i = 0; i < oLis.length; i++) {
      ~function (i) {
          oLis[i].onclick = function () {
              changeTab(i);
          }
      }(i);
  }


  var oTab = document.getElementById("total_current");
  var oBtns = oTab.getElementsByTagName("span");
  var oChts = oTab.getElementsByClassName("bar_chart");

  function changeChart(nIndex) {
      for (var j = 0; j < oBtns.length; j++) {
          oBtns[j].className = null;
          oChts[j].className = "bar_chart";
      }
      oBtns[nIndex].className = "cur";
      oChts[nIndex].className = "bar_chart cur";
      updateChart(oChts[nIndex].firstElementChild.id);
  }

  for (var j = 0; j < oBtns.length; j++) {
      ~function (j) {
          oBtns[j].onclick = function () {
              changeChart(j);
          }
      }(j);
  }

  var oTabApply = document.getElementById("apply_current");
  var oBtnsApply = oTabApply.getElementsByTagName("span");
  var oChtsApply = oTabApply.getElementsByClassName("area_chart");

  function changeAreaChart(nIndex) {
      for (var j = 0; j < oBtnsApply.length; j++) {
          oBtnsApply[j].className = null;
          oChtsApply[j].className = "area_chart";
      }
      oBtnsApply[nIndex].className = "cur";
      oChtsApply[nIndex].className = "area_chart cur";
      updateChart(oChtsApply[nIndex].firstElementChild.id);
  }

  for (var j = 0; j < oBtnsApply.length; j++) {
      ~function (j) {
          oBtnsApply[j].onclick = function () {
              changeAreaChart(j);
          }
      }(j);
  }
	
  //切换标签时更换图表
  function updateChart(id) {
    if (id == 'department') {
      $('#' + id).highcharts({
        chart: {
            type: 'bar',
            spacingTop: 50,
        },
        title: {
            text: null,
        },
        xAxis: {
            categories: ['业务所', '大数据', '网络所', '安全所', '科管', '无线所', '市场所', '其他'],
            labels: {
                style: {
                    color: '#545454',
                    fontSize: '13px'
                }
            },
            title: {
                text: '部所名称',
                align: 'high',
                offset: 0,
                rotation: 0,
                y: -10,
                style: {
                    color: '#323232',
                    fontSize: '14px'
                }
            },
            lineColor: '#999',
            lineWidth: 2,   //轴线宽度为2px
            gridLineWidth: 1,
            tickLength: 0   //坐标轴刻度宽度为0
  
        },
        yAxis: {
            min: 0,
            title: {
                text: '项目数<br/>(个)',
                align: 'high',
                style: {
                    color: '#323232',
                    fontSize: '14px'
                }
            },
            lineColor: '#999',
            lineWidth: 2,
            gridLineWidth: 1, 
            labels: {
                overflow: 'justify',
                style: {
                    color: '#323232',
                    fontSize: '11px'
                },
            }    
        },
        tooltip: {
            pointFormat: '{point.y}'
        },
        legend: {
            enabled: false    //关闭图例
        },
        navigation: {
            buttonOptions: {
                enabled: false
            }
        },
        /*legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },*/
        credits: {
            enabled: false
        },
        series: [{
            data: [6, 5, 4, 3, 2, 2, 1, 1],
            color: '#5bbf00'
        }]
    });
  }
  else if (id == 'project') {
    $('#' + id).highcharts({
        chart: {
            type: 'bar',
            spacingTop: 50,
        },
        title: {
            text: null,
        },
        xAxis: {
            categories: ['和阅读', 'Volte EYE', 'Mulim', '智能卡', 'Dayse', '精分平台', '光纤网平台', '公有云'],
            labels: {
                style: {
                    color: '#545454',
                    fontSize: '13px'
                }
            },
            title: {
                text: '项目名称',
                align: 'high',
                offset: 0,
                rotation: 0,
                y: -10,
                style: {
                    color: '#323232',
                    fontSize: '14px'
                }
            },
            lineColor: '#999',
            lineWidth: 2,   //轴线宽度为2px
            gridLineWidth: 1,
            tickLength: 0   //坐标轴刻度宽度为0
  
        },
        yAxis: {
            min: 0,
            title: {
                text: '运行总时长<br/>(小时)',
                align: 'high',
                style: {
                    color: '#323232',
                    fontSize: '14px'
                }
            },
            lineColor: '#999',
            lineWidth: 2,
            tickInterval: 50,   //坐标轴上的刻度线的单位间隔
            gridLineWidth: 1, 
            labels: {
                overflow: 'justify',
                style: {
                    color: '#323232',
                    fontSize: '11px'
                },
                step: 2   //轴标签显示间隔数
            }    
        },
        tooltip: {
            //valueSuffix: ' 小时',
            pointFormat: '{point.y}h'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true   //显示点值
                }
            }
        },
        legend: {
            enabled: false    //关闭图例
        },
        navigation: {
            buttonOptions: {
                enabled: false
            }
        },
        /*legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },*/
        credits: {
            enabled: false
        },
        series: [{
            data: [550, 510, 475, 310, 280, 170, 135, 40],
            color: '#5bbf00'
        }]
    });
  }
  else if (id == 'cloudPhysical') {
      $('#' + id).highcharts({
        chart: {
            type: 'area',
            zoomType: 'x',
            spacingTop: 30
        },
        title: {
            text: null,
        },
        xAxis: {
            type: 'datetime',
            lineColor: '#999',
            lineWidth: 2,
            gridLineWidth: 1,   
            tickLength: 0,    //坐标轴刻度宽度为0
            tickInterval: 30 * 24 * 3600 * 1000   //坐标轴上的刻度线的单位间隔，时间轴是根据毫秒来计算的
        },
        yAxis: {
            title: {
                text: '机器数（台）',
                align: 'high',
                offset: 0,
                rotation: 0,
                y: -15,
                style: {
                    color: '#323232',
                    fontSize: '14px'
                }
            },
            labels: {
                overflow: 'false'
            },
            //lineColor: '#999',
            //lineWidth: 2,   //轴线宽度为2px
            gridLineWidth: 1,
            tickInterval: 200,
            tickLength: 0
        },
        plotOptions: {
            series: {
                pointStart: Date.UTC(2015, 0, 1),
                pointIntervalUnit: 'month',
                fillOpacity: 0.1
            }
        },
        tooltip: {
            valueSuffix: ' 台',
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: 15,
            y: 100           
        },
        navigation: {
            buttonOptions: {
                enabled: false
            }
        },
        credits: {
            enabled: false
        },
        series: [{            
            name:'虚拟机',
            data: [200, 430, 500, 550, 630, 700, 750, 830, 950, 1000, 1030, 1100],
            color: '#5bbf00'
        },{            
            name:'物理机',
            data: [50, 60, 80, 90, 100, 120, 150, 170, 180, 200, 230, 250],
            color: '#1d9fff'
        }]
    });
  }
  else{
    $('#' + id).highcharts({
        chart: {
            zoomType: 'x',
            spacingTop: 30
        },
        title: {
            text: null,
        },
        xAxis: {
            type: 'datetime',
            lineColor: '#999',
            lineWidth: 2,
            gridLineWidth: 1,   
            tickLength: 0,    //坐标轴刻度宽度为0
            tickInterval: 30 * 24 * 3600 * 1000   //坐标轴上的刻度线的单位间隔，时间轴是根据毫秒来计算的
        },
        yAxis: {
            title: {
                text: '机器数（台）',
                align: 'high',
                offset: 0,
                rotation: 0,
                y: -15,
                style: {
                    color: '#323232',
                    fontSize: '14px'
                }
            },
            labels: {
                overflow: 'false'
            },
            //lineColor: '#999',
            //lineWidth: 2,   //轴线宽度为2px
            gridLineWidth: 1,
            tickInterval: 200,
            tickLength: 0
        },
        plotOptions: {
            series: {
                fillOpacity: 0.1
            }
        },
        tooltip: {
            //valueSuffix: ' 小时',
            pointFormat: '{point.y}台'
        },
        legend: {
            enabled: false    //关闭图例
        },
        navigation: {
            buttonOptions: {
                enabled: false
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            type: 'area',
            data: [200, 430, 500, 550, 630, 700, 750, 830, 950, 1000, 1030, 1100],
            color: '#1d9fff',
            pointStart: Date.UTC(2015, 0, 1),
            pointIntervalUnit: 'month'
        }]
    });
  }
}

$(function () {
    $('#project').highcharts({
        chart: {
            type: 'bar',
            spacingTop: 50,
        },
        title: {
            text: null,
        },
        xAxis: {
            categories: ['和阅读', 'Volte EYE', 'Mulim', '智能卡', 'Dayse', '精分平台', '光纤网平台', '公有云'],
            labels: {
                style: {
                    color: '#545454',
                    fontSize: '13px'
                }
            },
            title: {
                text: '项目名称',
                align: 'high',
                offset: 0,
                rotation: 0,
                y: -10,
                style: {
                    color: '#323232',
                    fontSize: '14px'
                }
            },
            lineColor: '#999',
            lineWidth: 2,   //轴线宽度为2px
            gridLineWidth: 1,
            tickLength: 0   //坐标轴刻度宽度为0
  
        },
        yAxis: {
            min: 0,
            title: {
                text: '运行总时长<br/>(小时)',
                align: 'high',
                style: {
                    color: '#323232',
                    fontSize: '14px'
                }
            },
            lineColor: '#999',
            lineWidth: 2,
            tickInterval: 50,   //坐标轴上的刻度线的单位间隔
            gridLineWidth: 1, 
            labels: {
                overflow: 'justify',
                style: {
                    color: '#323232',
                    fontSize: '11px'
                },
                step: 2   //轴标签显示间隔数
            }    
        },
        tooltip: {
            //valueSuffix: ' 小时',
            pointFormat: '{point.y}h'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true   //显示点值
                }
            }
        },
        legend: {
            enabled: false    //关闭图例
        },
        navigation: {
            buttonOptions: {
                enabled: false
            }
        },
        /*legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },*/
        credits: {
            enabled: false
        },
        series: [{
            data: [550, 510, 475, 310, 280, 170, 135, 40],
            color: '#5bbf00'
        }]
    });

    // $('#department').highcharts({
    //     chart: {
    //         type: 'bar',
    //         spacingTop: 50,
    //     },
    //     title: {
    //         text: null,
    //     },
    //     xAxis: {
    //         categories: ['业务所', '大数据', '网络所', '安全所', '科管', '无线所', '市场所', '其他'],
    //         labels: {
    //             style: {
    //                 color: '#545454',
    //                 fontSize: '13px'
    //             }
    //         },
    //         title: {
    //             text: '部所名称',
    //             align: 'high',
    //             offset: 0,
    //             rotation: 0,
    //             y: -10,
    //             style: {
    //                 color: '#323232',
    //                 fontSize: '14px'
    //             }
    //         },
    //         lineColor: '#999',
    //         lineWidth: 2,   //轴线宽度为2px
    //         gridLineWidth: 1,
    //         tickLength: 0   //坐标轴刻度宽度为0
  
    //     },
    //     yAxis: {
    //         min: 0,
    //         title: {
    //             text: '项目数<br/>(个)',
    //             align: 'high',
    //             style: {
    //                 color: '#323232',
    //                 fontSize: '14px'
    //             }
    //         },
    //         lineColor: '#999',
    //         lineWidth: 2,
    //         gridLineWidth: 1, 
    //         labels: {
    //             overflow: 'justify',
    //             style: {

    //                 color: '#323232',
    //                 fontSize: '11px'
    //             },
    //         }    
    //     },
    //     tooltip: {
    //         pointFormat: '{point.y}'
    //     },
    //     legend: {
    //         enabled: false    //关闭图例
    //     },
    //     navigation: {
    //         buttonOptions: {
    //             enabled: false
    //         }
    //     },
    //     /*legend: {
    //         layout: 'vertical',
    //         align: 'right',
    //         verticalAlign: 'top',
    //         x: -40,
    //         y: 100,
    //         floating: true,
    //         borderWidth: 1,
    //         backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
    //         shadow: true
    //     },*/
    //     credits: {
    //         enabled: false
    //     },
    //     series: [{
    //         data: [6, 5, 4, 3, 2, 2, 1, 1],
    //         color: '#5bbf00'
    //     }]
    // });

    
    $('#cloudVirtual').highcharts({
        chart: {
            zoomType: 'x',
            spacingTop: 30
        },
        title: {
            text: null,
        },
        xAxis: {
            type: 'datetime',
            lineColor: '#999',
            lineWidth: 2,
            gridLineWidth: 1,   
            tickLength: 0,    //坐标轴刻度宽度为0
            tickInterval: 30 * 24 * 3600 * 1000   //坐标轴上的刻度线的单位间隔，时间轴是根据毫秒来计算的
        },
        yAxis: {
            title: {
                text: '机器数（台）',
                align: 'high',
                offset: 0,
                rotation: 0,
                y: -15,
                style: {
                    color: '#323232',
                    fontSize: '14px'
                }
            },
            labels: {
                overflow: 'false'
            },
            //lineColor: '#999',
            //lineWidth: 2,   //轴线宽度为2px
            gridLineWidth: 1,
            tickInterval: 200,
            tickLength: 0
        },
        plotOptions: {
            series: {
                fillOpacity: 0.1
            }
        },
        tooltip: {
            //valueSuffix: ' 小时',
            pointFormat: '{point.y}台'
        },
        legend: {
            enabled: false    //关闭图例
        },
        navigation: {
            buttonOptions: {
                enabled: false
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            type: 'area',
            data: [200, 430, 500, 550, 630, 700, 750, 830, 950, 1000, 1030, 1100],
            color: '#1d9fff',
            pointStart: Date.UTC(2015, 0, 1),
            pointIntervalUnit: 'month'
        }]
    });
    
    // $('#cloudPhysical').highcharts({
    //     chart: {
    //         type: 'areaspline',
    //         zoomType: 'x',
    //         spacingTop: 30
    //     },
    //     title: {
    //         text: null,
    //     },
    //     xAxis: {
    //         type: 'datetime',
    //         lineColor: '#999',
    //         lineWidth: 2,
    //         gridLineWidth: 1,   
    //         tickLength: 0,    //坐标轴刻度宽度为0
    //         tickInterval: 30 * 24 * 3600 * 1000   //坐标轴上的刻度线的单位间隔，时间轴是根据毫秒来计算的
    //     },
    //     yAxis: {
    //         title: {
    //             text: '机器数（台）',
    //             align: 'high',
    //             offset: 0,
    //             rotation: 0,
    //             y: -15,
    //             style: {
    //                 color: '#323232',
    //                 fontSize: '14px'
    //             }
    //         },
    //         labels: {
    //             overflow: 'false'
    //         },
    //         //lineColor: '#999',
    //         //lineWidth: 2,   //轴线宽度为2px
    //         gridLineWidth: 1,
    //         tickInterval: 200,
    //         tickLength: 0
    //     },
    //     plotOptions: {
    //         series: {
    //             pointStart: Date.UTC(2015, 0, 1),
    //             pointIntervalUnit: 'month',
    //             fillOpacity: 0.1
    //         }
    //     },
    //     tooltip: {
    //         valueSuffix: ' 台',
    //     },
    //     legend: {
    //         layout: 'vertical',
    //         align: 'right',
    //         verticalAlign: 'top',
    //         x: 15,
    //         y: 100           
    //     },
    //     navigation: {
    //         buttonOptions: {
    //             enabled: false
    //         }
    //     },
    //     credits: {
    //         enabled: false
    //     },
    //     series: [{            
    //         name:'虚拟机',
    //         data: [200, 430, 500, 550, 630, 700, 750, 830, 950, 1000, 1030, 1100],
    //         color: '#5bbf00'
    //     },{            
    //         name:'物理机',
    //         data: [50, 60, 80, 90, 100, 120, 150, 170, 180, 200, 230, 250],
    //         color: '#1d9fff'
    //     }]
    // });

    $('#failure').highcharts({
        chart: {
            zoomType: 'x',
            spacingTop: 30
        },
        title: {
            text: null,
        },
        xAxis: {
            type: 'datetime',
            lineColor: '#999',
            lineWidth: 2,
            gridLineWidth: 1,   
            tickLength: 0,    //坐标轴刻度宽度为0
            tickInterval: 30 * 24 * 3600 * 1000   //坐标轴上的刻度线的单位间隔，时间轴是根据毫秒来计算的
        },
        yAxis: {
            title: {
                text: '故障数',
                align: 'high',
                offset: 0,
                rotation: 0,
                y: -15,
                style: {
                    color: '#323232',
                    fontSize: '14px'
                }
            },
            labels: {
                overflow: 'false'
            },
            //lineColor: '#999',
            //lineWidth: 2,   //轴线宽度为2px
            gridLineWidth: 1,
            tickInterval: 2,
            tickLength: 0
        },
        plotOptions: {
            series: {
                fillOpacity: 0.1
            }
        },
        tooltip: {
            pointFormat: '{point.y}'
        },
        legend: {
            enabled: false    //关闭图例
        },
        navigation: {
            buttonOptions: {
                enabled: false
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            type: 'area',
            data: [2, 4, 5, 6, 8, 9, 11, 14, 15, 18, 21, 25],
            color: '#ff3434',
            pointStart: Date.UTC(2015, 0, 1),
            pointIntervalUnit: 'month'
        }]
    });
  
});
