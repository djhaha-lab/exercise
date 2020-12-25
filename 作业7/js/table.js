(function(){
    var myChart1 = echarts.init(document.querySelector('.tu1'));
    var myChart2 = echarts.init(document.querySelector('.tu2'));
    var myChart3 = echarts.init(document.querySelector('.tu3'));
    var myChart4 = echarts.init(document.querySelector('.tu4'));
    var myChart5 = echarts.init(document.querySelector('.tu5'));
    var myChart6 = echarts.init(document.querySelector('.tu6'));
    var option1 = {
        color: [ '#ffb67e','#00d9ab', ],
        title: {
            text: '民族构成图',
            textStyle:{
                color :'#0f70b2',
                fontSize:15
            },
            top:16,
            left:24
        },
        series: [{
          
            type: 'pie',
            
            height: '78%',
            center: ['60%', '70%'],
            radius: ['29%', '43%'],
           
           
            // itemStyle: {
            //     normal: {
                   
                  
            //     }
            // },
            data: [
                { value: 75, name: '汉族',
                label: {
                    show: true,
                    position: 'outside',
                    color: '#000',
                    lineHeight :20,
                   
                    distanceToLabelLine:-30,
                    formatter :'{e|{b}}'+'\n'+'{a|{d}%}',
                    rich:{
                        e:{
                          
                            color:'#a0acbe'
                        },
                        a:{
                            align:'center',
                        }
                    
                    }
                },
                labelLine: {
                    length:25,
                    length2:40,
                    show: true,
                   
                }
                },
                { value: 25, name: '其他少数民族',
                label: {
                    show: true,
                    position: 'outside',
                   
                    color: '#000',
                    lineHeight :20,
                    distanceToLabelLine:-70,
                    formatter :'{e|{b}}'+'\n'+'{a|{d}%}',
                    rich:{
                       e:{
                            align:'center',
                            color:'#a0acbe'
                        },
                        a:{
                            align:'center',
                        }
                    }
                },
                labelLine: {
                    length:25,
                    length2:70,
                    show: true,
                   
                } },

            ]
        }]
    };
    var option2= {
        color: [ '#6cd8ee','#fcbcc1','#ffeee2','#95efdb','#6c96d0', ],
        title: {
            text: '学历结构图',
            textStyle:{
                color :'#0f70b2',
                fontSize:15
            },
            top:16,
            left: 24
        },
        series: [{
          
            type: 'pie',
            startAngle:45,
            height: '78%',
            center: ['50%', '70%'],
            radius: ['11%', '40%'],
           
           
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'outside',
                        color: '#000',
                        formatter :'{a|{b}} {d}%',
                        rich:{
                            a:{
                                color:'#889baf'
                            }
                        }
                    },
                    labelLine: {
                        length:12,
                        length2:25,
                        show: true,
                       
                    }
                }
            },
            data: [
                { value:0, name: '博士' },
                { value: 0.07, name: '硕士' },
                { value: 0.24, name: '本科' },
                { value: 0.03, name: '大专' },
                { value: 99.66, name: '其他' },
              

            ]
        }]
    };
    var option3 = {
        title: {
            text: '性别比例图',
            textStyle:{
                color :'#0f70b2',
                fontSize:15
            },
            top:16,
            left: 24
        },
    
        grid: {
            right: '4%',
            bottom: '35%',
            width: '92%',
            height: '25%'
        },
        xAxis: [{

            type: 'value',
            max: 367,
            show: false
        }],
        yAxis: [{
                type: 'category',

                axisLine: {
                    show: false
                },
                axisLabel: false,
                axisTick: {
                    show: false
                },

            },  
        ],
        series: [{
            type: 'pictorialBar',
                      
        symbol: 'image://img/1.png',
        symbolRepeat: 'fixed',
        symbolMargin: '1%',
        symbolClip: true,
        symbolSize:[17,30],
        symbolBoundingData: 367,
        z: 10,
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{a|{b}}',
                    offset:[-100,10],
                    rich:{
                        a:{
                            color:'#00d4ff',
                            fontWeight:'bold'
                        },
                        e:{
                            color:'#ff4be5',
                            fontWeight:'bold'
                        }
                    }
                },

                data: [{
                    name: '66%242人',
                    value: '242',
                }]
            },  {
                type: 'pictorialBar',
        symbol: 'image://img/2.png',
        symbolRepeat: true,
        symbolMargin: '1%',
        symbolClip: true,
        symbolSize: [17,30],
        
        z: 5,
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{e|{b}}',
                    offset:[100,10],
                     rich:{
                        a:{
                            color:'#00d4ff',
                            fontWeight:'bold'
                        },
                        e:{
                            color:'#ff4be5',
                            fontWeight:'bold'
                        }
                    }
                },
                data: [{
                    name: '32%125人',
                    value: '367',
                }]
            },
            
        ]
    }
    var option4= {
        color: [ '#ffeee2','#6cd8ee','#95efdb','#6c96d0','#f9626e', ],
        title: {
            text: '党龄结构图',
            textStyle:{
                color :'#0f70b2',
                fontSize:15
            },
            top:16,
            left: 24
        },
        series: [{
          
            type: 'pie',
            startAngle:45,
            height: '78%',
            center: ['50%', '70%'],
            radius: ['11%', '45%'],
           
           
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'outside',
                        color: '#000',
                        formatter :'{a|{b}} {d}%',
                        rich:{
                            a:{
                                color:'#889baf'
                            }
                        }
                    },
                    labelLine: {
                        length:12,
                        length2:25,
                        show: true,
                       
                    }
                }
            },
            data: [
                { value:0.04, name: '5-10年' },
                { value: 0, name: '10-20年' },
                { value: 0.06, name: '20年以上' },
                { value: 0.01, name: '2年以内' },
                { value: 99.89, name: '2-5年' },
            ]
        }]
    };
    var option5= {
        color: [ '#47cee9','#00bbe0','#fcb4b9','#ffd7b8','#8aedd8','#94b3dc', ],
        title: {
            text: '年龄结构图',
            textStyle:{
                color :'#0f70b2',
                fontSize:15
            },
            top:16,
            left: 24
        },
        series: [{
          
            type: 'pie',
          
            height: '78%',
            center: ['50%', '70%'],
            radius: ['29%', '45%'],
           
           
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'outside',
                        color: '#000',
                        formatter :'{e|{b}}'+'\n'+'{a|{d}%}',
                        rich:{
                            a:{
                                color:'#709edf'
                             
                            },
                            e:{
                                color:'#a0acbe'
                            }
                        }
                    },
                    labelLine: {
                        length:30,
                        length2:25,
                        show: true,
                       
                    }
                }
            },
            data: [
               
                { value: 0.05, name: '离退人员' },
                { value: 99.67, name: '30岁(不含)以下' },
                { value:0.02, name: '30(含)-35岁(不含)' },
                { value: 0.09, name: '35(含)-40岁(不含)' },
                { value: 0.1, name: '40岁(含)至-50岁(不含)' },
                { value: 0.07, name: '50岁(含)至-60岁' },
              
            ]
        }]
    };
    var option6={
        title: {
            text: '党员大会情况',
            textStyle:{
                color :'#0f70b2',
                fontSize:14
            },
            top:16,
            left: 24
        },
        grid:{
           top:'25%',
           width:'75%'
        },
        xAxis: {
            type: 'category',
            data: ['19-11', '19-12',' 20-01',' 20-02 ','20-03',' 20-04',' 20-05', '20-06', '20-07', '20-08', '20-09' ,'20-10'],
            splitLine:{
                show:true
            },
            axisTick:{
                show:false
            },
            axisLine:{
                show:false
            }
        },
        yAxis: {
            type: 'value',
            max:7,
              axisTick:{
                show:false
            },
            axisLine:{
                show:false
            }
        },
        series: [{
            data: [
                {
                value:0,
                
            },
                {
                value:1,
                 label:{
                show:true,
                color:'#fff',
                position:'insideTop',
                formatter:'{c}'
            }
            },
                {
                value:7,
                 label:{
                show:true,
                color:'#fff',
                position:'insideTop',
                formatter:'{c}'
            }
            },
            ],
            type: 'bar',
            barWidth:'40%',
            itemStyle:{
                
                color:'#6c96d0',
            },
           
        }]
    }
    myChart1.setOption(option1);
    myChart2.setOption(option2);
    myChart3.setOption(option3);
    myChart4.setOption(option4);
    myChart5.setOption(option5);
    myChart6.setOption(option6);

    window.addEventListener('resize', function() {
        myChart1.resize();
        myChart2.resize();
        myChart3.resize();
        myChart4.resize();
        myChart5.resize();
        myChart6.resize();
      

    })
})()