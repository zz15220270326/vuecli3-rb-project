<template>
  <div class="add-plan">
    <div class="title">
      <div class="tag">
        <Tag color="lime" size="large">标题:</Tag>
      </div>
      <div class="content">
        <Input
          v-model="inputTitle"
          maxlength="30"
          placeholder="请填写标题。。。"
          @on-change="inputTitleChange"
        />
      </div>
    </div>
    <div class="select-class">
      <div class="select-class-span">
        <Tag color="blue" size="large">选择班级:</Tag>
      </div>
      <div class="select-class">
        <select-menu
          :listTitle="classTitle"
          :listItems="classList"
          @handleSelect="selectClass"
        />
      </div>
    </div>
    <div class="main">
      <div class="content-span">
        <Tag color="pink" size="large">内容:</Tag>
      </div>
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
import classMixins from '@mixins/classMixins'

export default {
  name: 'AddPlan',
  components: {
    SelectMenu
  },
  mixins: [classMixins],
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
.full_flex() {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.add-plan {
  .title {
    margin-top: 0.8rem;
    .full_flex();
    .tag {
      flex: 2;
      .full_flex();
    }
    .content {
      flex: 8;
      .full_flex();
      .select-menu {
        margin-bottom: 0.8rem;
        margin-right: 28rem;
      }
    }
  }
  .select-class {
    margin-top: 0.8rem;
    height: 2rem;
    .full_flex();
    .select-class-span {
      flex: 2;
      .full_flex();
    }
    .select-class {
      flex: 8;
      .full_flex();
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
      // margin-top: 2rem;
    }
  }
}
</style>
