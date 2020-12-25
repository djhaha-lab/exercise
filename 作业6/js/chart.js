(function(){
   
    var myChart = echarts.init(document.getElementById('zhenda'));
    var myChart1 = echarts.init(document.getElementById('zhutu'));
    option = {  
        radar: [
            {
                nameGap:'3',
                indicator: [
                    { text: '职务层级' , max: 100},
                    { text: '年龄', max: 100 },
                    { text: '熟悉领域', max: 100 },
                    { text: '学历' , max: 100},
                    { text: '经历', max: 100 }
                ],
                center: ['50%', '45%'],
                radius: '80%',
                startAngle:60,
                splitNumber: 4,
                shape: 'circle', 
                name: {
                    formatter: '{value}',
                    textStyle: {
                        color: '#000'
                    }
                },
                
                splitArea: {
                    areaStyle: {
                        color: '#f8f8fa',
                    }
                },
               
                axisLine: {
                    lineStyle: {
                        color: '#e3e8ee'
                    }
                },
               
                splitLine: {
                   show:false
                }
               
            },
         
        ],
        series: [
            {
               
                type: 'radar',
                itemStyle:{
                    borderColor:'#000',
                    borderWidth:2

                },
                 areaStyle:{color:'rgba(48, 141, 197, 0.4)'
                },
                symbol :'none',
                
                lineStyle:{ 
                   width:2,
                    type:'soild',
                     color:'#38acc5',
                    
                },
                data: [
                    {
                        value: [60, 50,50, 70, 45],
                      
                    },
                   
                ]
            },
           
        ]
    };
    option1 = {
        legend: {},
        xAxis: [
            {type: 'category', gridIndex: 0,
            data:[ '政治索质', '职业操守', '作风建设', '廉洁从业','一岗双职'],
              axisLine:{show:false},
              axisTick:{show:false,
                 },
            },
            {type: 'category',
            gridIndex: 1,
            data:['科学决策','科学决策','学习创新','团队建设','协同成效',],          
             axisLine:{show:false},
             axisTick:{show:false},
             
            }
        ],
        yAxis: [
            {gridIndex: 0,
            max:10,
                  axisLine:{show:false},
                  axisTick:{show:false,
                   },
                   axisLabel: {
                    interval: 0,
    
                },
            },
            {gridIndex: 1,
            max:10,
            type: 'value',
                axisLine:{show:false},
                axisTick:{show:false,
                   },
                   axisLabel: {
                    interval: 0,
    
                },
            }
        ],
        grid: [
            {
            bottom: '57%',
            right:'0%',
            width:'80%',
            height:'30%'
            },
            {top: '60%',
           
            right:'0%',
            width:'80%',
            height:'30%'}
        ],
        series: [
           
            {type: 'bar', seriesLayoutBy: 'row',
                itemStyle:{
                    color:'#0a5898',
                },
                barWidth:'15%',
                data:[
                    {
                        name:'政治索质',
                        value:7,
                    },
                    {
                        name:'职业操守',
                        value:8,
                    },
                    {
                        name:'作风建设',
                        value:5,
                    },
                    {
                        name:'廉洁从业',
                        value:6,
                    },
                    {
                        name:'一岗双职',
                        value:4,
                    },
                    
                    ]
            },
            {type: 'line', seriesLayoutBy: 'row',
            lineStyle:{
                color:'#40c0cd'
            },
            name:'班子考核平均值',
            data:[
                {
                    name:'政治索质',
                    value:5,
                },
                {
                    name:'职业操守',
                    value:7,
                },
                {
                    name:'作风建设',
                    value:5,
                },
                {
                    name:'廉洁从业',
                    value:4,
                },
                {
                    name:'一岗双职',
                    value:2,
                },
                
                ]},
           
            // These series are in the second grid.
            {type: 'bar', xAxisIndex: 1, yAxisIndex: 1,
              itemStyle:{
                    color:'#0a5898',
                },
                barWidth:'15%',
                data:[
                    {
                        name:'科学决策',
                        value:6,
                    },
                    {
                        name:'推动执行',
                        value:8,
                    },
                    {
                        name:'学习创新',
                        value:4,
                    },
                    {
                        name:'团队建设',
                        value:6,
                    },
                    {
                        name:'协同成效',
                        value:3,
                    },
                    
                    ]
            },
            {type: 'line', xAxisIndex: 1, yAxisIndex: 1,
            name:'班子考核平均值',
            lineStyle:{
                color:'#40c0cd'
            },   
            data:[
                    {
                        name:'科学决策',
                        value:6,
                    },
                    {
                        name:'推动执行',
                        value:4,
                    },
                    {
                        name:'学习创新',
                        value:5,
                    },
                    {
                        name:'团队建设',
                        value:4,
                    },
                    {
                        name:'协同成效',
                        value:2,
                    },
                    
                    ]
            },
          
        ]
    };
    
    myChart.setOption(option);
    myChart1.setOption(option1);
   
   window.addEventListener('resize',function(){
       myChart.resize();
       myChart1.resize();
   })
})()