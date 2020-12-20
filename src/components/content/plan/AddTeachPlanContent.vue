<template>
  <div class="add-plan">
    <div class="title">
      <div class="title-span">
        <Tag color="lime" size="large">标题:</Tag>
      </div>
      <div class="title-content">
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
        <quill-editor
          v-model="inputContent"
          type="textarea"
          :options="options"
          @blur.native="inputContentChange"
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

export default {
  name: 'AddTeachPlanContent',
  components: {
    SelectMenu
  },
  mixins: [classMixins],
  data: () => ({
    inputTitle: '',
    inputContent: '',
    options: {
      placeholder: '请填写新增计划内容, 计划内容不得少于20字',
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'], //加粗，斜体，下划线，删除线
          ['blockquote', 'code-block'], //引用，代码块
          [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
          [{ list: 'ordered' }, { list: 'bullet' }], //列表
          [{ script: 'sub' }, { script: 'super' }], // 上下标
          [{ indent: '-1' }, { indent: '+1' }], // 缩进
          [{ direction: 'rtl' }], // 文本方向
          [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
          [{ header: [1, 2, 3, 4, 5, 6, false] }], //几级标题
          [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
          [{ font: [] }], //字体
          [{ align: [] }], //对齐方式
          ['clean'], //清除字体样式
          ['image', 'video'] //上传图片、上传视频
        ]
      }
    }
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
    .title-span {
      flex: 2;
      .full_flex();
    }
    .title-content {
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
