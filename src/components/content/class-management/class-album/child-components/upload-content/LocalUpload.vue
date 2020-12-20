<template>
  <div class="local-upload">
    <div class="img-list">
      <div class="select-item" v-for="(item, key) in img" :key="key">
        <img :src="item.src" alt="" />
        <Checkbox v-model="item.isChecked">删除</Checkbox>
      </div>
    </div>
    <div class="handle-operations">
      <Button
        size="large"
        type="info"
        icon="md-checkmark"
        @click.native="handleSubmit"
      >
        确认选择
      </Button>
      <Button
        size="large"
        type="error"
        icon="ios-trash-outline"
        @click.native="handleDelete"
      >
        选择删除
      </Button>
      <Upload
        multiple
        :action="url"
        :before-upload="getFile"
        :format="['jpg', 'png', 'jpeg', 'gif']"
        accept=".jpg, .png, .jpeg, .gif"
        :show-upload-list="false"
      >
        <Button size="large" type="success" icon="ios-cloud-upload-outline">
          点击上传
        </Button>
      </Upload>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocalUpload',

  components: {},

  mixins: [],

  data: () => ({
    url: 'http://localhost:80',
    file: [],
    img: []
  }),

  props: {},

  computed: {},

  watch: {
    // img(newValue) {
    //   this.$emit('handleLocalImg', newValue)
    // }
  },

  methods: {
    getFile(file) {
      this.file.push(file)
      this.handlePreview()
      return false
    },
    handlePreview() {
      const self = this
      const reader = new FileReader()
      reader.readAsArrayBuffer(self.file[self.file.length - 1])
      reader.onload = function() {
        const bf = this.result
        const blob = new Blob([bf], {
          type: 'text/plain'
        })
        const str = URL.createObjectURL(blob)
        self.img.push({
          src: str,
          // key: self.img.length
          isChecked: false
        })
      }
    },
    handleSubmit() {
      if (this.img.length === 0) {
        this.$Message.warning('请先选择照片哦')
      } else {
        this.$emit('handleLocalImg', this.img)
        this.$Message.success('上传成功')
        this.img = []
      }
    },
    handleDelete() {
      if (this.img.length === 0) {
        this.$Message.warning('请先选择照片哦')
      } else {
        this.$Modal.confirm({
          title: '取消选中的照片',
          content: '取消后需要重新选择选中的这些照片',
          onOk: () => {
            this.img = this.img.filter(item => item.isChecked === false)
            this.$Message.error('删除成功')
          },
          onCancel: () => {
            this.$Message.warning('您取消了本次操作')
          }
        })
      }
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
.local-upload {
  height: 50vh;
  .full_flex();
  flex-direction: column;
  .img-list {
    flex: 1.2;
    overflow: scroll;
    .full_flex();
    flex-wrap: wrap;
    .select-item {
      text-align: center;
      width: 15%;
      img {
        width: 6rem;
        height: 6rem;
      }
    }
  }
  .handle-operations {
    flex: 1;
    .full_flex();
    .ivu-btn {
      margin: 0 1rem;
    }
  }
}
</style>
