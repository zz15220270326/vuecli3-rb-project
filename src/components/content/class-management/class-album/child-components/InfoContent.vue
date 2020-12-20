<template>
  <div class="info-content">
    <div class="tools">
      <Button
        v-for="(item, key) in operations"
        :key="key"
        :type="item.type"
        @click.native="handleItemInfo(key)"
      >
        <Icon :type="item.icon" />
        <span>{{ item.tag }}</span>
      </Button>
    </div>
    <!-- <CheckboxGroup></CheckboxGroup> -->
    <div class="imgs" v-show="!isShowSwiperInfo">
      <div
        class="single-img"
        v-show="infoImgs.length > 0"
        v-for="(item, key) in imgList"
        :key="key"
        @mouseenter="singleOpsShow(key)"
        @mouseleave="singleOpsHide(key)"
      >
        <div class="operations" v-show="item.isShow">
          <Button
            v-for="(btn, btnIndex) in itemOperations"
            :key="btnIndex"
            :type="btn.type"
            @click.native="handleItemOperations(key, btn.tag)"
          >
            {{ btn.tag }}
          </Button>
        </div>
        <img :src="item.src" alt="" />
        <Checkbox v-model="item.isChecked">选择进行删除</Checkbox>
      </div>
    </div>
    <!-- modal-content -->
    <div class="swipers" v-show="isShowSwiperInfo">
      <show-swiper :imgList="imgList" />
      <Button type="error" @click.native="cancelCheck">
        <Icon type="ios-trash-outline" />
        <span>关闭查看内容</span>
      </Button>
    </div>
    <Modal
      :title="infoChildModalTitle"
      v-model="isShowEditInfo"
      width="800"
      ok-text="保存"
      cancel-text="取消"
    >
      <edit-info
        :propImgUrl="propImgUrl"
        :propInput="propInput"
        :propIsSetWrapper="propIsSetWrapper"
      />
    </Modal>
    <!--  -->
    <div class="pages">
      <Page></Page>
    </div>
  </div>
</template>

<script>
// ? import components
const ShowSwiper = () => import('./info-content/ShowSwiper')
const EditInfo = () => import('./info-content/EditInfo')
export default {
  name: 'InfoContent',

  components: {
    ShowSwiper,
    EditInfo
  },

  mixins: [],

  data: () => ({
    // ? operations
    imgList: [],
    operations: [
      { tag: '上传图片', type: 'primary', icon: 'ios-cloud-upload' },
      { tag: '批量删除', type: 'error', icon: 'ios-trash-outline' }
    ],
    itemOperations: [
      {
        tag: '点击查看',
        type: 'info'
      },
      {
        tag: '编辑',
        type: 'primary'
      },
      {
        tag: '删除',
        type: 'error'
      }
    ],
    // ? edit-info-modal
    infoChildModalTitle: '',
    // ?? swiper-modal
    isShowSwiperInfo: false,
    // ?? edit-info-modal
    isShowEditInfo: false,
    propImgUrl: '',
    propInput: '',
    propIsSetWrapper: false
  }),

  props: {
    infoContent: {
      type: String,
      default: ''
    },
    infoImgs: {
      type: Array,
      default: () => []
    }
  },

  watch: {
    infoImgs(newValue) {
      if (newValue.length > 0) {
        this.imgList = []
        this.imgList.push(...newValue)
      }
    }
  },

  computed: {},

  methods: {
    handleItemInfo(key) {
      this.$emit('handleItemInfo', key)
    },
    singleOpsShow(key) {
      this.$emit('singleOpsShow', key)
    },
    singleOpsHide(key) {
      this.$emit('singleOpsHide', key)
    },
    handleItemOperations(itemIndex, btnTag) {
      switch (btnTag) {
        case '点击查看':
          this.$Message.info('点击查看')
          this.infoChildModalTitle = '点击查看'
          this.isShowSwiperInfo = true
          break
        case '编辑':
          this.propImgUrl = this.imgList[itemIndex].src
          this.propInput = `第${itemIndex + 1}张图片的描述内容`
          this.propIsSetWrapper = itemIndex === 0 ? true : false
          this.infoChildModalTitle = '编辑'
          this.isShowEditInfo = true
          break
        case '删除':
          this.$Modal.confirm({
            title: `删除第${itemIndex + 1}项`,
            content: '是否删除?删除后数据无法恢复',
            onOk: () => {
              // ?? 发请求删除
              this.$Spin.show()
              setTimeout(() => {
                this.imgList.splice(itemIndex, 1)
                this.$Spin.hide()
                this.$Message.error('删除成功')
              }, 500)
            },
            onCancel: () => {
              this.$Message.success('您取消了本次操作')
            }
          })
          break
      }
    },
    cancelCheck() {
      this.$Message.info('关闭查看')
      this.isShowSwiperInfo = false
    }
  }
}
</script>

<style lang="less" scoped>
.full_flex() {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.info-content {
  height: 34rem;
  overflow-y: scroll;
  .tools {
    padding: 0.8rem 0;
    text-align: right;
    .ivu-btn {
      margin: 0 0.8rem;
    }
  }
  .imgs {
    height: 80%;
    .full_flex();
    justify-content: space-between;
    flex-wrap: wrap;
    .single-img {
      width: 23%;
      height: 50%;
      position: relative;
      img {
        width: 16rem;
        height: 10rem;
      }
      .operations {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(0%, -10%);
        .ivu-btn {
          margin: 1rem 0;
          margin-left: 0.3rem;
          margin-right: 0.3rem;
        }
      }
    }
  }
  .swipers {
    text-align: center;
    .ivu-btn {
      margin: 1.2rem auto;
      opacity: 0.88;
    }
  }
  .pages {
    text-align: center;
  }
}
</style>
