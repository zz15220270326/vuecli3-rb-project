const scale = require('@mock/main/scale')

export default {
  data() {
    return {
      sexOption: {},
      nationOption: {}
    }
  },
  methods: {
    // ? methods
    setOptions(baseList, infoList, colorList) {
      return {
        tooltip: {
          trigger: 'item',
          formatter: `{a} <br/>{b} : {c} ({d}%)`
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: baseList
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            // dataView: { show: true, readOnly: false },
            // magicType: {
            //   show: true,
            //   type: ['pie', 'funnel'],
            //   option: {
            //     funnel: {
            //       x: '25%',
            //       width: '50%',
            //       funnelAlign: 'center',
            //       max: 1548
            //     }
            //   }
            // },
            // restore: { show: true },
            saveAsImage: { show: true },
          }
        },
        calculable: true,
        series: [
          {
            name: '人数',
            type: 'pie',
            radius: ['50%', '70%'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
                color: params => {
                  if (colorList[params.dataIndex]) {
                    return colorList[params.dataIndex]
                  } else {
                    return
                  }
                }
              },
              emphasis: {
                label: {
                  show: true,
                  position: 'center',
                  textStyle: {
                    // color: 'skyblue',
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              }
            },
            data: infoList
          }
        ]
      }
    },
    // ? async function
    getCookiesData() {
      setTimeout(() => {
        const result = scale
        if (result.msg === 'Success' && result.data) {
          const dataList = result.data
          if (dataList.gender_scale) {
            const genderScale = dataList.gender_scale
            const sexList = ['男生人数', '女生人数']
            const sexPresentList = [
              {
                value: genderScale.male,
                name: '男生人数'
              },
              {
                value: genderScale.female,
                name: '女生人数'
              }
            ]
            const sexColorList = ['#1cb1f5', '#ff5823']
            this.sexOption = this.setOptions(sexList, sexPresentList, sexColorList)
          }
          if (dataList.nation_scale) {
            const nationScale = dataList.nation_scale
            const nationList = ['汉族人数', '少数民族人数']
            const nationPresentList = [
              {
                value: nationScale.normal,
                name: '汉族人数'
              },
              {
                value: nationScale.specail,
                name: '少数民族人数'
              }
            ]
            const nationColorList = ['#1cb1f5', '#ff5823']
            this.nationOption = this.setOptions(nationList, nationPresentList, nationColorList)
          }
        }
      })
    }
  },
  created() {
    this.getCookiesData()
  }
}
