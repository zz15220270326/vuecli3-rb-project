<template>
  <div class="person-management">
    <div class="title">
      <span>选择排班周期</span>
      <select-menu
        :listTitle="classCircleTitle"
        :listItems="classCircleContent"
        @handleSelect="handleSelect"
      />
    </div>
    <div class="content">
      <Transfer
        class="person-management-transfer"
        :data="allList"
        :target-keys="rightList"
        @on-change="handleChange"
        :filterable="true"
        not-found-text=""
        :titles="titles"
      ></Transfer>
    </div>
  </div>
</template>

<script>
import SelectMenu from '@common/select-menu/SelectMenu.vue'
// ? components

export default {
  name: 'PersonManagement',
  components: {
    SelectMenu
  },
  data: () => ({
    titles: ['待排班列表', '已排班列表'],
    allList: [],
    rightList: [],
    classCircleTitle: '请选择周期',
    classCircleContent: [
      { info: '请选择周期', key: 0 },
      { info: '4周', key: 0 },
      { info: '8周', key: 0 },
      { info: '12周', key: 0 },
      { info: '16周', key: 0 },
      { info: '20周', key: 0 },
      { info: '24周', key: 0 }
    ]
  }),
  methods: {
    getMockData() {
      this.allList = [
        {
          key: '1',
          label: '陆园长'
        },
        {
          key: '2',
          label: '王老师呀'
        },
        {
          key: '3',
          label: 'wan'
        },
        {
          key: '4',
          label: '水门老师'
        },
        {
          key: '5',
          label: '张先生'
        },
        {
          key: '6',
          label: '测试刘老师'
        },
        {
          key: '7',
          label: '阿言'
        }
      ]
    },
    // getMockDataKey() {
    //   this.rightList = this.allList.map(item => item.key)
    // },
    handleChange(newKey) {
      this.rightList = newKey
    },
    handleSelect(item) {
      this.classCircleTitle = item
    }
  },
  created() {
    this.getMockData()
  }
}
</script>

<style lang="less" scoped>
.person-management {
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    flex: 5;
    display: flex;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 11.2rem;
  }
  .content {
    flex: 8;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
