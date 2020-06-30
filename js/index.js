// 立即执行函数，防止变量污染（为局部变量），减少命名冲突
// bar_1
(function() {
  // 初始化echarts,生成实例对象
  let bar_1 = echarts.init(document.querySelector('.left_top .bar_1'));
  // 配置option
  let option = {
    // 柱状图颜色
    color: ['red'],
    // 提示盒子
    tooltip: {
        // 触发方式
        // 'item',数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
        // 'axis',坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
      // 控制grid网格的大小
        left: '0%',
        top: '10px',
        right: '0%',
        bottom: '4%',
        // grid刻度,true则以y轴标签（文字）为准left
        // false则以y轴坐标轴为准left
        containLabel: true
    },
    xAxis: [
        {   
            // 类目category 
            type: 'category',
            data: [
                  "旅游",
                  "教育",
                  "游戏",
                  "医疗",
                  "电商",
                  "社交",
                  "金融"],
            // 刻度tick
            axisTick: {
              // 在柱状中间显示
                alignWithLabel: true
            },
            // 修改刻度文字标签样式
            axisLabel: {
              color: 'rgba(255, 255, 255, .6)',
              fontSize: '12'
            },
            // 不显示x坐标轴的样式
            axisLine: {
              show: false
            }
        }
    ],
    yAxis: [
        {
            // 值value
            type: 'value',
            axisLabel: {
              color: 'rgba(255, 255, 255, .6)',
              fontSize: '12'
            },
            // y轴坐标轴的样式
            axisLine: {
              // 坐标轴线的样式
              lineStyle: {
                color: "rgba(255, 255, 255, .1)",
                // 线条的宽度
                width: 2
              }
            },
            // y轴分割线的样式
            splitLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, .1)'
              }
            }
        }
    ],
    series: [
        {     
            // 设柱子的样式
            name: '直接访问',
            type: 'bar',
            barWidth: '30%',
            // 决定y轴坐标轴的上限值
            data: [200, 300, 300, 900, 1500, 1200, 600],
            itemStyle: {
              // 修改柱子圆角
              barBorderRadius: 4
            }
        }
    ]
  };
  // 把option给实例对象
  bar_1.setOption(option);
  // 窗口缩放适配
  window.addEventListener('resize', function() {
    bar_1.resize();
  })
})();

// bar_2
(function() {
  // 定义颜色
  let barColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  let bar_2 = echarts.init(document.querySelector('.right_top .bar_2'));
  let option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '22%',
        top: '10%',
        bottom: '10%',
        containLabel: false
    },
    xAxis: {
      // 不显示x轴
        show: false 
    },
    yAxis: [
      {
        type: 'category',
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
        axisLine: {
          // 不显示y轴坐标轴
          show: false
        },
        axisTick: {
          // 不显示刻度
          show: false
        },
        // 修改标签（文字）样式
        axisLabel: {
          color: '#fff'
        },
        // y轴label数据是从下到上，inverse:true 是其从上到下
        inverse: true
      },
      {
        data: [702, 350, 610, 793, 664],
        // 数据反向
        inverse: true,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#fff'
        }
      }
    ],
    series: [
        {
            name: '条形',
            type: 'bar',
            data: [70, 34, 60, 78, 69],
            itemStyle: {
              barBorderRadius: 20,
              // 给每个柱子赋颜色
              // params echarts提供的柱子对象
              // barColor返回每条bar对应索引的color
              color(params) {
                // dataIndex,每条bar的索引
                return barColor[params.dataIndex]
              }
            },
            // barCategoryGap同类目柱子间的距离，不同类目的是barGap
            barCategoryGap: 50,
            barWidth: 10,
            // 显示柱子内的标签（文字）
            label: {
              show: true,
              // 柱子内
              position: 'inside',
              // c为series的data
              // b为类目（category）名的data
              // a为系列的name
              formatter: '{c}%'
            },
            yAxisIndex: 0,
        },
        {
            name: '边框',
            type: 'bar',
            data: [100, 100, 100, 100, 100],
            barCategoryGap: 50,
            barWidth: 15,
            itemStyle: {
              // 柱子颜色none
              color: 'none',
              borderColor: '#00c1de',
              borderWidth: 3,
              barBorderRadius: 15
            },
            yAxisIndex: 1
        }
    ]
  };
  bar_2.setOption(option);
  window.addEventListener('resize', () => {
    bar_2.resize();
  })
})();

// line_1
(function() {
  let yearData = [
    {
      year: "2020", // 年份
      data: [
        // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    {
      year: "2021", // 年份
      data: [
        // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
    }
  ];
  let line_1 = echarts.init(document.querySelector('.left_middle .line_1'));
  let option = {
    // series中的颜色
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
      // 如果series 对象有name 值，则 legend可以不用写data
        // data: ['2020', '2021'],
        // 文字样式
        textStyle: {
          color: '#4c9bfd'
        },
        // 距离右边10%
        right: '10%'
    },
    grid: {
        left: '3%',
        top: '20%',
        right: '4%',
        bottom: '3%',
        // 显示边框
        show: true,
        // 边框颜色
        borderColor: '#012f4a',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月"
        ],
        axisLabel: {
          color: '#4c9bfd'
        },
        axisTick:{
          show: false
        },
        axisLine: {
          show: false
        },
        // 去除轴內间距
        boundaryGap: false
    },
    yAxis: {
        type: 'value',
        axisLabel: {
          color: "#4c9bfd"
        },
        axisTick: {
          show: false
        },
        // y轴分割线
        splitLine: {
          lineStyle: {
            color: '#012f4a'
          }
        }
    },
    series: [
        {
            name: '新增粉丝',
            type: 'line',
            smooth: true,
            data: yearData[0].data[0]
        },
        {
            name: '新增游客',
            type: 'line',
            smooth: true,
            data: yearData[0].data[1]
        }
    ]
  };
  line_1.setOption(option);
  window.addEventListener('resize', () => {
    line_1.resize()
  });

  // 点击切换series-data数据
  $('.left_middle a').on('click', function() {
    // $(this).index() 获取点击的index
    let currentIndex = $(this).index();
    option.series[0].data = yearData[currentIndex].data[0];
    option.series[1].data = yearData[currentIndex].data[1];

    // 替换数据后，需要重新渲染
    line_1.setOption(option);
  })
})();

// line_2
(function() {
  let line_2 = echarts.init(document.querySelector('.right_middle .line_2'));
  let option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
          // line(default) shadow cross
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
       right: '10%',
       textStyle: {
         color: '#4c9bfd'
       }
    },
    grid: {
        left: 10,
        top: 30,
        right: 10,
        bottom: 10,
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: [
              "01",
              "02",
              "03",
              "04",
              "05",
              "06",
              "07",
              "08",
              "09",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24",
              "25",
              "26",
              "26",
              "28",
              "29",
              "30"
            ],
            axisLabel: {
              color: 'rgba(255, 255, 255, .6)',
              fontSize: 12
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.2)'
              }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, .1)'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.1)'
              }
            }
        }
    ],
    series: [
        {
            name: '邮件营销',
            type: 'line',
            // 填充线条区域内的颜色
            areaStyle: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    // 渐变线起始的颜色
                    offset: 0,
                    color: "rgba(1, 132, 213, .4)"
                  },
                  {
                    // 渐变线结束的颜色
                    offset: 0.8,
                    color: "rgba(1, 132, 213, .1)"
                  }
                ],
                false
              ),
              shadowColor: 'rgba(0, 0, 0, .1)'
            },
            data: [
              30,
              40,
              30,
              40,
              30,
              40,
              30,
              60,
              20,
              40,
              30,
              40,
              30,
              40,
              30,
              40,
              30,
              60,
              20,
              40,
              30,
              40,
              30,
              40,
              30,
              40,
              20,
              60,
              50,
              40
            ],
            smooth: true,
            // 单独修改当前线条的样式
            lineStyle: {
              color: '#0184d5',
              width: 2
            },
            // 折线拐点标志的样式，default红色
            symbol: 'circle',
            // 拐点标志的大小
            symbolSize: 8,
            // 开始不显示拐点， 鼠标经过显示
            showSymbol: false,
            // 设置拐点的样式
            itemStyle: {
              // 拐点颜色
              color: "#0184d5",
              // 拐点边框颜色
              borderColor: "rgba(221, 220, 107, .1)",
              // 拐点边框宽度
              borderWidth: 12
            }
        },
        {
            name: '联盟广告',
            type: 'line',
            areaStyle: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(0, 216, 135, 0.4)"
                  },
                  {
                    offset: 0.8,
                    color: "rgba(0, 216, 135, 0.1)"
                  }
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)"
            },
            data: [
              130,
              10,
              20,
              40,
              30,
              40,
              80,
              60,
              20,
              40,
              90,
              40,
              20,
              140,
              30,
              40,
              130,
              20,
              20,
              40,
              80,
              70,
              30,
              40,
              30,
              120,
              20,
              99,
              50,
              20
            ],
            smooth: true,
            lineStyle: {
              color: '#00d887',
              width: 2
            },
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            itemStyle: {
              // 拐点颜色
              color: "#00d887",
              // 拐点边框颜色
              borderColor: "rgba(221, 220, 107, .1)",
              // 拐点边框宽度
              borderWidth: 12
            }
        }
    ]
  };
  line_2.setOption(option);
  window.addEventListener('resize', () => {
    line_2.resize();
  });
})();

// pie_1
(function() {
  let pie_1 = echarts.init(document.querySelector('.left_bottom .pie_1'));
  let option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        // orient: 'vertical', //垂直居中
        bottom: "0%",
        // 修改图标的宽高
        itemWidth: 10,
        itemHeight: 10,
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        textStyle: {
          color: "rgba(255, 255, 255, .5)",
          fontSize: 10
        }
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            // 修改饼形图在容器中的位置，水平，垂直
            center: ['50%', '45%'],
            // 第一个参数为内圆半径，第二个为外圆半径
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            // 图形上的标签（文字）
            label: {
                show: false // 只有当labelshow为true时，labelLineshow的true才生效
                // position: 'center'
            },
            // 强调之（文字）标签样式
            // emphasis: {
            //     label: {
            //         show: true,
            //         fontSize: '30',
            //         fontWeight: 'bold'
            //     }
            // },
            // 链接文字和图形的线是否显示,即是设置了show-true，没有label的show-true也不会生效
            labelLine: {
                show: true 
            },
            data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
            ]
        }
    ]
  };
  pie_1.setOption(option);
  window.addEventListener('resize', () => {
    pie_1.resize()
  });
})();

// pie_2
(function() {
  let pie_2 = echarts.init(document.querySelector('.right_bottom .pie_2'));
  let option = {
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        bottom: '0%',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          fontSize: 10,
          color: 'rgba(255, 255, 255, .5)'
        }
    },
    series: [
        {
            name: '半径模式',
            type: 'pie',
            radius: ["10%", "60%"],
            center: ['50%', '40%'],
            roseType: 'radius',
            data: [
              { value: 20, name: "云南" },
              { value: 26, name: "北京" },
              { value: 24, name: "山东" },
              { value: 25, name: "河北" },
              { value: 20, name: "江苏" },
              { value: 25, name: "浙江" },
              { value: 30, name: "四川" },
              { value: 42, name: "湖北" }
            ],
            label: {
              fontSize: 10
            },
            labelLine: {
              length: 6,
              length2: 4
            }
        }
    ]
  };
  pie_2.setOption(option);
  window.addEventListener('resize', () => {
    pie_2.resize()
  });
})();