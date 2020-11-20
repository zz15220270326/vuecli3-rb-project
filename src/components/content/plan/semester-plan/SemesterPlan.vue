<template>
  <div class="semester-plan">学期计划</div>
</template>

<script>
// ? import components

export default {
  name: 'SemesterPlan',
  components: {},
  data: () => ({
    // ? 班级信息
    classTitle: '全部班级',
    classInfo: [
      { info: '全部班级', key: 0 },
      { info: '朗云小班', key: 1 },
      { info: '计算机201', key: 2 },
      { info: '朗云3班中班级', key: 3 },
      { info: 'langyun班级', key: 4 }
    ],
    // ? 学年信息
    yearTitle: '请选择学年',
    yearInfo: [
      { info: '请选择学年', key: 0 },
      { info: '2016-2017', key: 1 },
      { info: '2017-2018', key: 2 },
      { info: '2018-2019', key: 3 },
      { info: '2019-2020', key: 4 }
    ],
    // ? 学期信息
    semesterTitle: '全部学期',
    semesterInfo: [
      { info: '全部学期', key: 0 },
      { info: '第一学期', key: 1 },
      { info: '第二学期', key: 2 }
    ],
    evaluateTitle: '点评状态',
    evaluateInfo: [
      { info: '点评状态', key: 0 },
      { info: '已点评', key: 1 },
      { info: '未点评', key: 2 }
    ],
    operations: [
      {
        info: '查询',
        type: 'primary'
      },
      {
        info: '删除',
        type: 'error'
      }
    ]
  })
}
</script>

<style lang="less" scoped></style>
