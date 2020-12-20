<template>
  <div class="upload-content">
    <div class="step1" v-show="showStepIndex === 0">
      <div class="header">
        <Button
          v-for="(item, key) in selectUploadTypes"
          :key="key"
          :type="item.type"
          @click.native="selectType(key)"
        >
          <span>{{ item.tag }}</span>
          <Icon :type="item.icon" />
        </Button>
      </div>
      <div class="content" v-show="typeIndex === 0">
        <local-upload @handleLocalImg="handleLocalImg" />
      </div>
      <div class="content" v-show="typeIndex === 1">
        <base-upload @handleBaseImg="handleBaseImg" />
      </div>
    </div>
    <div class="step2" v-show="showStepIndex === 1">
      <upload-page
        :propList="renderList"
        @handleItemOperations="handleItemOperations"
        @addPlan="addPlan"
      />
    </div>
    <Footer
      v-show="typeIndex === 1"
      :op="footerOperations"
      @handleFooterOperations="handleFooterOperations"
    />
  </div>
</template>

<script>
// ? import components
const LocalUpload = () => import('./upload-content/LocalUpload')
const BaseUpload = () => import('./upload-content/BaseUpload')
const UploadPage = () => import('./upload-content/UploadPage')
const Footer = () => import('./upload-content/Footer')

// ? import mixins
import uploadContentMixin from '@mixins/class-management/uploadContentMixin'

export default {
  name: 'UploadContent',

  components: {
    LocalUpload,
    BaseUpload,
    UploadPage,

    Footer
  },

  mixins: [uploadContentMixin],

  data: () => ({}),

  props: {},

  computed: {},

  methods: {}
}
</script>

<style lang="less" scoped>
.upload-content {
  height: 33rem;
  .step1 {
    .header {
      width: 100%;
      height: 8%;
      padding: 0.3rem 0;
      .ivu-btn {
        margin: 0 0.5rem;
        padding: 0 1rem;
      }
    }
    .content {
      height: 75%;
    }
  }
  .step2 {
    min-height: 28rem;
  }
}
</style>
