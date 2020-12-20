<template>
  <div class="add-garden-notice">
    <div class="title">
      <div class="tag">
        <Tag color="gold" size="large">标题:</Tag>
      </div>
      <div class="content">
        <Input v-model="inputTitle" @on-change="getInputTitle" />
      </div>
    </div>
    <div class="content">
      <div class="tag">
        <Tag color="lime" size="large">内容:</Tag>
      </div>
      <div class="content">
        <Input
          type="textarea"
          v-model="inputContent"
          maxlength="1000"
          :rows="6"
          :show-word-limit="true"
          @on-change="getInputContent"
        />
      </div>
    </div>
    <div class="img">
      <div class="tag">
        <Tag color="purple" size="large">图片</Tag>
      </div>
      <div class="content">
        <!-- action="//jsonplaceholder.typicode.com/posts/" -->
        <Upload
          multiple
          ref="sourceList"
          action="http://localhost:80"
          :format="['jpg', 'jpeg', 'png']"
          :max-size="2048"
          :show-upload-list="false"
          :default-file-list="sourceList"
          :before-upload="handlePhotoSuccess"
          :on-success="handleSuccess"
        >
          <Button icon="ios-cloud-upload-outline" size="large">上传图片</Button>
        </Upload>
        <div class="img-content" v-show="imgList.length !== 0">
          <img
            v-for="(item, key) in imgList"
            :key="key"
            :src="item"
            alt=""
            @load="imgListLoad"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// ? import mixins
import addNoticeModalMixin from '@mixins/notice-active/addNoticeModalMixin'
export default {
  name: 'AddNotice',

  components: {},

  mixins: [addNoticeModalMixin],

  data: () => ({}),

  props: {},

  watch: {},

  computed: {},

  methods: {}
  /**
   * ! life-hooks
   */
}
</script>

<style lang="less" scoped>
.common_dec() {
  margin-top: 1.2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .tag {
    flex: 2;
    text-align: right;
    margin-right: 2.5rem;
  }
  .content {
    flex: 7;
    margin-right: 5rem;
  }
}

.add-garden-notice {
  height: 30rem;
  .title {
    .common_dec();
  }
  .content {
    .common_dec();
  }
  .img {
    .common_dec();
    .img-content {
      .common_dec();
      flex-wrap: wrap;
      img {
        height: 20%;
        width: 20%;
      }
    }
  }
}
</style>
