// JavaScript Document
  $(function () {
    $('#usercase').highcharts({
        chart: {
            zoomType: 'x',
            spacingTop: 30
        },
        title: {
            text: '用户活跃度',
        },
        xAxis: {
            min: 1,
            lineColor: '#999',
            lineWidth: 2,
            gridLineWidth: 1,  
            tickLength: 0 
        },
        yAxis: {
            title: {
                text: '在线时长<br/>(小时)',
                align: 'high',
                offset: 0,
                rotation: 0,
                y: -25,
                style: {
                    color: '#323232',
                    fontSize: '14px'
                }
            },
            labels: {
                overflow: 'false'
            },
            lineColor: '#999',
            lineWidth: 2,   //轴线宽度为2px
            gridLineWidth: 1,
            min: 20,
            //tickInterval: 50,
            startOnTick: false,
            tickLength: 0,
            plotLines: [{
                color: '#FF0000',
                width: 1,
                value: 180
            }]
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
            data: [20, 60, 75, 90, 105, 125, 140, 160, 75, 30, 40, 50],
            color: '#5bbf00'
        }]
    });
});