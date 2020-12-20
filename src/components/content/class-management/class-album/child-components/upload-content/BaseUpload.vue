<template>
  <div class="base-upload">
    <div class="top">
      <Tag color="green" size="large">班级:</Tag>
      <select-menu
        :listTitle="classTitle"
        :listItems="classList"
        @handleSelect="selectClass"
      />
      <search-button @click.native="handleSearch" />
    </div>
    <div class="content" v-if="currentImgList && currentImgList.length > 0">
      <div
        class="render-image"
        v-for="(item, key) in currentImgList"
        :key="key"
      >
        <img :src="item.src !== '' ? item.src : defaultImg" alt="" />
        <Checkbox v-model="item.isChecked">选择图片</Checkbox>
      </div>
    </div>
    <div class="content" v-else>
      敬请期待
    </div>
    <div class="bottom">
      <Button
        shape="circle"
        type="info"
        size="default"
        @click.native="handleSelect"
        >确认选择</Button
      >
      <Page
        show-elevator
        :current="currentIndex + 1"
        :prev-text="currentIndex === 0 ? '首页' : '下一页'"
        :next-text="currentIndex === albums.length - 1 ? '页底' : '下一页'"
        :page-size="pageSize"
        :total="showTotal"
        @on-change="pageChange"
      />
    </div>
  </div>
</template>

<script>
// ? import components
const SelectMenu = () => import('@common/select-menu/SelectMenu')
const SearchButton = () => import('@common/search-button/SearchButton')

// ? import mixins
import classMixins from '@mixins/Common/classMixins'
import getAblumsBaseMixin from '@mixins/class-management/getAblumsBaseMixin'
import ablumsBaseMixin from '@mixins/class-management/ablumsBaseMixin'

export default {
  name: 'BaseUpload',

  components: {
    SelectMenu,
    SearchButton
  },

  mixins: [classMixins, getAblumsBaseMixin, ablumsBaseMixin],

  data: () => ({}),

  props: {},

  computed: {},

  methods: {}
}
</script>

<style lang="less" scoped>
.full_flex() {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-evenly {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.base-upload {
  .top {
    padding: 0.8rem;
    padding-right: 1rem;
    text-align: right;
  }
  .content {
    .flex-evenly();
    flex-wrap: wrap;
    .render-image {
      width: 16%;
      text-align: center;
      img {
        width: 100%;
        height: 7.5rem;
      }
    }
  }
  .bottom {
    margin-top: 1.2rem;
    .full_flex();
    .ivu-btn {
      margin: 0 0.8rem;
    }
  }
}
</style>
