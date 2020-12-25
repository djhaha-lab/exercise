(function() {
    var myChart1 = echarts.init(document.querySelector('.chart1'));
    var myChart2 = echarts.init(document.querySelector('.chart2'));
    var myChart3 = echarts.init(document.querySelector('.chart3'));
    var myChart4 = echarts.init(document.querySelector('.chart4'));
    var myChart5 = echarts.init(document.querySelector('.chart5'));
    // var myChart6 = echarts.init(document.querySelector('.chart6'));
    var myChart7 = echarts.init(document.querySelector('.chart7'));


    var option1 = {
        color: ['#5387f3', '#da6675', '#ec9c47', '#ba85ed'],
        grid: [{

                top: '1%',
                left: '38%',
                height: '27%',
                width: '52%'
            },
            {
                top: '30%',
                height: '27%',

                left: '38%',
                width: '52%'
            },
            {
                top: '59%',
                height: '27%',
                left: '38%',
                width: '52%'
            }
        ],
        xAxis: [{

            type: 'value',
            max: 50,
            show: false
        }, {
            gridIndex: 1,
            type: 'value',
            max: 50,
            show: false
        }, {
            gridIndex: 2,
            type: 'value',
            max: 50,
            show: false
        }],
        yAxis: [{
                type: 'category',
                data: [
                    '公司正职', '公司副职', '公司助理', '公司总监', '总部正职', '总部副职'
                ],
                axisLine: {
                    show: false
                },
                axisLabel: {
                    margin: 14
                },
                axisTick: {
                    show: false
                },

            },
            {
                gridIndex: 1,
                type: 'category',
                data: [
                    '总部二级部门经理', '二级总部助理', '二级总部正职', '二级总部正职', '总部助理'
                ],
                axisLine: {
                    show: false
                },
                axisLabel: {
                    margin: 14
                },
                axisTick: {
                    show: false
                },

            },
            {
                gridIndex: 2,
                type: 'category',
                data: [
                    '非行政务', '营业部正职(卫星)', '营业部助理', '营业部助理', '营业部正职', '子公司二级部门经理'
                ],
                axisLine: {
                    show: false
                },
                axisLabel: {
                    margin: 14
                },
                axisTick: {
                    show: false
                },

            },
        ],
        series: [{
                type: 'bar',
                barWidth: '40%',
                label: {
                    show: true,
                    position: 'right'
                },
                data: [23, 33, 23, 47, 23, 33]
            },
            {
                type: 'bar',
                barWidth: '40%',
                xAxisIndex: 1,

                yAxisIndex: 1,
                label: {
                    show: true,
                    position: 'right'
                },
                data: [14, 11, 14, 14, 11, 14]
            },
            {
                type: 'bar',
                barWidth: '40%',
                xAxisIndex: 2,

                yAxisIndex: 2,
                label: {
                    show: true,
                    position: 'right'
                },
                data: [11, 35, 14, 35, 14, 11]
            },


        ]

    };

    var option2 = {
        color: ['#ba85ed', '#5387f3', ],
        legend: {
            itemGap: 3,
            itemHeight: 8,
            itemWidth: 8,
            padding: 10,
            backgroundColor: 'rgba(128, 128, 128, 0.1)',
            orient: 'vertical',
            top: '27%',
            left: '50%',

            textStyle: {
                color: '#a3a3a3',
                fontSize: 10
            },
            formatter: function(name) {
                return name + '         50%';
            },
            data: ['男', '女']
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            startAngle: '120',
            height: '78%',
            center: ['30%', '50%'],
            radius: ['50%', '80%'],
            avoidLabelOverlap: false,
            label: {
                lineHeight: '16',
                show: false,
                position: 'center'

            },
            emphasis: {
                label: {
                    show: true,
                    color: '#a9a9a9',
                    fontSize: '14',
                    formatter: ['{b}',
                        '{term|{c}}'
                    ].join('\n'),
                    rich: {
                        term: {
                            fontSize: 14,
                            color: '#ec9c47'
                        }
                    }
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 1433, name: '女' },
                { value: 1133, name: '男' },

            ]
        }]
    };


    var option3 = {
        color: ['#5387f3', '#da6675', '#ec9c47', '#ba85ed'],
        legend: {
            itemGap: 3,
            itemHeight: 8,
            itemWidth: 8,
            padding: 10,
            backgroundColor: 'rgba(128, 128, 128, 0.1)',
            orient: 'vertical',
            top: '25%',
            left: '50%',

            textStyle: {
                color: '#a3a3a3',
                fontSize: 10
            },
            formatter: (function() {
                var string = [
                    '中共党员          ' + '15%',
                    '中共顶备党员   ' + '28%',
                    '共青团员          ' + '32%',
                    '民革党员          ' + '25%'
                ];
                var n = -1;

                return function() {
                    n++;
                    if (n === 4) { n = 0 };
                    return string[n];
                }
            })(),
            data: ['中共党员',
                '中共顶备党员',
                '共青团员',
                '民革党员'
            ]
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            startAngle: '120',
            height: '78%',
            center: ['30%', '50%'],
            radius: ['40%', '65%'],
            avoidLabelOverlap: false,
            label: {
                lineHeight: '16',
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    color: '#a9a9a9',
                    fontSize: '14',
                    formatter: ['{b}',
                        '{term|{c}}'
                    ].join('\n'),
                    rich: {
                        term: {
                            fontSize: 14,
                            color: '#ec9c47'
                        }
                    }
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 2498, name: '中共党员' },
                { value: 1133, name: '中共顶备党员' },
                { value: 1133, name: '共青团员' },
                { value: 1133, name: '民革党员' },

            ]
        }]
    };

    var option4 = {
        color: ['#5387f3', '#da6675', '#ec9c47', '#ba85ed'],
        legend: {
            itemGap: 3,
            itemHeight: 8,
            itemWidth: 8,
            padding: 10,
            backgroundColor: 'rgba(128, 128, 128, 0.1)',
            orient: 'vertical',
            top: '20%',
            left: '50%',

            textStyle: {
                color: '#a3a3a3',
                fontSize: 10
            },
            formatter: (function() {
                var string = [
                    '35岁以下          ' + '15%',
                    '35-45岁            ' + '28%',
                    '46-55岁            ' + '32%',
                    '55岁以上          ' + '25%'
                ];
                var n = -1;

                return function() {
                    n++;
                    if (n === 4) { n = 0 };
                    return string[n];
                }
            })(),
            data: ['35岁以下',
                '35-45岁',
                '46-55岁',
                '55岁以上'
            ]
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            startAngle: '120',
            selectedMode: true,
            height: '78%',
            center: ['30%', '50%'],
            radius: ['50%', '80%'],

            avoidLabelOverlap: false,
            label: {
                lineHeight: '16',
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    color: '#a9a9a9',
                    fontSize: '13',
                    formatter: ['{b}',
                        '{term|{c}}'
                    ].join('\n'),
                    rich: {
                        term: {
                            fontSize: 14,
                            color: '#ec9c47'
                        }
                    }
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 2498, name: '35岁以下' },
                { value: 3424, name: '35-45岁' },
                { value: 2323, name: '46-55岁' },
                { value: 1233, name: '55岁以上' },

            ]
        }]
    };

    var option5 = {

        angleAxis: {
            max: 500,
            axisTick: {
                show: false
            }
        },
        radiusAxis: {
            type: 'category',
            inverse: true,
            axisLine: {
                show: false
            },
            axisLabel: {
                interval: 0,
                color: '#000000',
                fontWeight: 'bold',
            },
            axisTick: {
                show: false

            },
            data: ['8年及以上  138人', '5-8年  338人', '3-5年  218人', '1-3年  165人', '', ''],
            z: 10,

        },
        polar: {
            radius: '65%',
            center: ['50%', '45%']
        },
        series: [{
            type: 'bar',
            color: ['#5084f0', '#729cf3'],
            barWidth: '50%',

            data: [160, {
                value: 346,
                itemStyle: {
                    color: '#94b4f5'
                }
            }, 209, {
                value: 365,
                itemStyle: {
                    color: '#94b4f5'
                }
            }],
            coordinateSystem: 'polar',
            name: 'A',

        }, ]
    };



    var option7 = {
        color: ['#5387f3', '#ba85ed', '#ec9c47', '#da6675', ],
        grid: {
            right: '15%',
            bottom: '55%',
            width: '70%',
            height: '25%'
        },
        xAxis: [{

            type: 'value',
            max: 12000,
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
            {
                type: 'category',

                // data: [2000, 5000, 3500, 1500],
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
                type: 'bar',
                stack: 'a',
                barWidth: '40%',
                yAxisIndex: 0,
                itemStyle: {
                    barBorderRadius: [20, 0, 0, 20]
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{b}'
                },
                data: [{
                    name: '大专及以下',
                    value: '2000',
                }]
            }, {
                type: 'bar',
                stack: 'a',
                yAxisIndex: 0,
                barWidth: '40%',
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{b}'
                },
                data: [{
                    name: '大学',
                    value: '5000',
                }]
            }, {
                type: 'bar',
                stack: 'a',
                yAxisIndex: 0,
                barWidth: '40%',
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{b}'
                },
                data: [{
                    name: '硕士(全日制)',
                    value: '3500',
                }]
            }, {
                type: 'bar',
                yAxisIndex: 0,
                stack: 'a',
                barWidth: '40%',
                itemStyle: {
                    barBorderRadius: [0, 20, 20, 0]
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{b}'
                },
                data: [{
                    name: '博士',
                    value: '1500',
                }]
            },
            {
                type: 'bar',
                stack: 'b',
                yAxisIndex: 1,
                barWidth: '40%',
                itemStyle: {
                    barBorderRadius: [20, 0, 0, 20]
                },
                label: {
                    show: true,
                    position: 'bottom',
                    formatter: '{c}'
                },
                data: [{
                    name: '大专及以下',
                    value: '2000',
                }]
            }, {
                type: 'bar',
                stack: 'b',
                yAxisIndex: 1,
                barWidth: '40%',
                label: {
                    show: true,
                    position: 'bottom',
                    formatter: '{c}'
                },
                data: [{
                    name: '大学',
                    value: '5000',
                }]
            }, {
                type: 'bar',
                stack: 'b',
                yAxisIndex: 1,
                barCategoryGap: '200%',
                barWidth: '40%',
                label: {
                    show: true,
                    position: 'bottom',
                    formatter: '{c}'
                },
                data: [{
                    name: '硕士(全日制)',
                    value: '3500',
                }]
            }, {
                type: 'bar',
                yAxisIndex: 1,
                stack: 'b',
                barWidth: '40%',
                itemStyle: {
                    barBorderRadius: [0, 20, 20, 0]
                },
                label: {
                    show: true,
                    position: 'bottom',
                    formatter: '{c}'
                },
                data: [{
                    name: '博士',
                    value: '1500',
                }]
            },
        ]
    }


    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option1);
    myChart2.setOption(option2);
    myChart3.setOption(option3);
    myChart4.setOption(option4);
    myChart5.setOption(option5);
    // myChart6.setOption(option6);
    myChart7.setOption(option7);

    myChart2.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: 1 });
    myChart3.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: 2 });
    myChart4.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: 2 });

    myChart2.on('mouseover', function(event) {

        myChart2.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: 1
            }

        );


    });
    myChart3.on('mouseover', function(event) {

        myChart3.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: 2
            }

        );


    });
    myChart4.on('mouseover', function(event) {

        myChart4.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: 2
            }

        );


    });
    myChart2.on('mouseout', function() {

        myChart2.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: 1 });

    });
    myChart3.on('mouseout', function() {

        myChart3.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: 2 });

    });
    myChart4.on('mouseout', function() {

        myChart4.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: 2 });

    });

    window.addEventListener('resize', function() {
        myChart1.resize();
        myChart2.resize();
        myChart3.resize();
        myChart4.resize();
        myChart5.resize();
        // myChart6.resize();
        myChart7.resize();

    })

})();