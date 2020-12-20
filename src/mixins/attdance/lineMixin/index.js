// ? async-function / mock-data
const attdancePresent = require('@mock/attdance/attdancePresent')

// todo 折线图混入数据
export default {
  data() {
    return {
      lineOption: {}
    }
  },
  methods: {
    setOption(titleInfo, legendList, xAxisList, dataInfo) {
      return {
        title: titleInfo,
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: legendList
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : xAxisList
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    // formatter: '{value} °C'
                    formatter: '{value} %'
                }
            }
        ],
        series : [
            {
                name: '考勤率',
                type: 'line',
                data: dataInfo,
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            }
        ]
      }
    },
    getLineOption() {
      setTimeout(() => {
        // const titleInfo = {
        //   text: '未来一周气温变化',
        //   subtext: '纯属虚构'
        // }
        // const legendList = ['最高气温','最低气温']
        // const xAxisList = ['周一','周二','周三','周四','周五','周六','周日']
        // const dataInfo = [11, 11, 15, 13, 12, 13, 10]
        // this.lineOption = this.setOption(
        //   titleInfo,
        //   legendList,
        //   xAxisList,
        //   dataInfo
        // )
        const result = attdancePresent
        if (result.msg === 'Success' && result.data) {
          const titleInfo = {
            text: '考勤情况',
            subtext: '目前是模拟数据'
          }
          const legendList = ['考勤率']
          const xAxisList = []
          const dataInfo = []
          const dataList = result.data
          dataList.map(item => {
            xAxisList.push(item.day)
            dataInfo.push(item.data)
          })
          this.lineOption = this.setOption(
            titleInfo,
            legendList,
            xAxisList,
            dataInfo
          )
        }
      }, 500)
    }
  },
  created() {
    this.getLineOption()
  }
}
