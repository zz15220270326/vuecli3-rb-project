<template>
  <div class="add-plan">
    <div class="title">
      <div class="title-span">标题:</div>
      <div class="select-semester">
        <select-menu
          :listTitle="yearTitle"
          :listItems="yearList"
          @handleSelect="selectYear"
        />
      </div>
    </div>
    <div class="select-class">
      <div class="select-class-span">选择班级:</div>
      <div class="select-class">
        <select-menu
          :listTitle="classTitle"
          :listItems="classList"
          @handleSelect="selectClass"
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

// ? import mixins
import classMixins from '@mixins/Common/classMixins'
import yearMixins from '@mixins/Common/yearMixins'

export default {
  name: 'AddPlan',
  components: {
    SelectMenu
  },
  mixins: [classMixins, yearMixins],
  data: () => ({
    inputTitle: '',
    inputContent: ''
  }),
  props: {},
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
.default_flex() {
  display: flex;
  justify-content: center;
  align-items: center;
}
.full_flex() {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-plan {
  .title {
    margin-top: 0.8rem;
    .full_flex();
    .title-span {
      flex: 2;
      .default_flex();
      margin-right: 1.2rem;
    }
    .select-semester {
      flex: 8;
      width: width;
      padding-left: 1rem;
      // display: flex;
      // justify-content: center;
      // align-items: center;
    }
  }
  .select-class {
    margin-top: 0.8rem;
    height: 2rem;
    .full_flex();
    .select-class-span {
      flex: 2;
      .default_flex();
    }
    .select-class {
      flex: 10;
      .default_flex();
      .select-menu {
        margin-bottom: 0.8rem;
        margin-right: 28rem;
      }
    }
  }
  .main {
    height: 12rem;
    .full_flex();
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
