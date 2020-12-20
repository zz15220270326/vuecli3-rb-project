<template>
  <div class="add-plan">
    <div class="title">
      <div class="title-span">标题:</div>
      <div class="title-content">
        <Input
          v-model="inputTitle"
          maxlength="30"
          placeholder="请填写标题。。。"
          @on-change="inputTitleChange"
        />
      </div>
      <div class="select-semester">
        <select-menu
          :listTitle="semesterTitle"
          :listItems="semesterInfo"
          @handleSelect="handleSelectSemester"
        />
      </div>
    </div>
    <div class="select-class">
      <div class="select-class-span">选择班级:</div>
      <div class="select-class">
        <select-menu
          :listTitle="classTitle"
          :listItems="classInfo"
          @handleSelect="handleSelectClass"
        />
      </div>
    </div>
    <div class="main">
      <div class="content-span">内容:</div>
      <div class="main-content">
        <Input
          v-model="inputContent"
          type="textarea"
          placeholder="请填写新增计划内容, 计划内容不得少于20字"
          @on-change="inputContentChange"
          :rows="8"
        />
      </div>
    </div>
  </div>
</template>

<script>
// ? import components
const SelectMenu = () => import('@common/select-menu/SelectMenu')

export default {
  name: 'AddPlan',
  components: {
    SelectMenu
  },
  data: () => ({
    inputTitle: '',
    inputContent: ''
  }),
  props: {
    semesterTitle: {
      type: String,
      default: ''
    },
    semesterInfo: {
      type: Array,
      default: () => []
    },
    classTitle: {
      type: String,
      default: ''
    },
    classInfo: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleSelectClass(item) {
      this.$emit('handleSelectClass', item)
    },
    handleSelectSemester(item) {
      this.$emit('handleSelectSemester', item)
    },
    inputTitleChange() {
      this.$emit('inputTitleChange', this.inputTitle)
    },
    inputContentChange() {
      this.$emit('inputContentChange', this.inputContent)
    }
  }
}
</script>

<style lang="less" scoped>
.add-plan {
  .title {
    margin-top: 0.8rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .title-span {
      flex: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 1.2rem;
    }
    .title-content {
      flex: 6;
      width: 100%;
    }
    .select-semester {
      flex: 2;
      width: width;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .select-class {
    margin-top: 0.8rem;
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .select-class-span {
      flex: 2;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .select-class {
      flex: 10;
      display: flex;
      justify-content: center;
      align-items: center;
      .select-menu {
        margin-bottom: 0.8rem;
        margin-right: 28rem;
      }
    }
  }
  .main {
    width: 100%;
    height: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .content-span {
      flex: 1;
      text-align: right;
      margin-right: 1.6rem;
      height: 8rem;
    }
    .main-content {
      flex: 7;
      height: 9rem;
    }
  }
}
</style>
