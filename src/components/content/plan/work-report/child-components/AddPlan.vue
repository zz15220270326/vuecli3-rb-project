<template>
  <div class="add-plan">
    <div class="title">
      <div class="title-span">标题:</div>
      <div class="title-input">
        <Input
          placeholder="请输入标题内容"
          v-model="inputTitle"
          @on-change="inputTitleChange"
        />
      </div>
    </div>
    <div class="main">
      <div class="content-span">
        <span>内容:</span>
      </div>
      <div class="main-content">
        <Input
          v-model="inputContent"
          type="textarea"
          placeholder="请填写汇报内容, 计划内容不得少于20字"
          @on-change="inputContentChange"
          :rows="8"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddPlan',
  data: () => ({
    inputTitle: '',
    inputContent: ''
  }),
  props: {
    yearTitle: {
      type: String,
      default: ''
    },
    yearInfo: {
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
      flex: 1;
      text-align: right;
      margin-right: 1.2rem;
    }
    .title-input {
      flex: 7;
      padding-left: 0.5rem;
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
