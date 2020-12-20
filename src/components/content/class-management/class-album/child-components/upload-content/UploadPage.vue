<template>
  <!-- v-show="propList.length > 0 -->
  <div class="upload-page">
    <div class="list-item" v-for="(item, key) in propList" :key="key">
      <div class="img">
        <img :src="item.src" alt="" />
      </div>
      <div class="input">
        <Input
          :value="item.content"
          type="textarea"
          placeholder="请输入编辑的内容"
          :rows="5"
          @on-blur="itemInputChange($event, key)"
        />
      </div>
      <!-- title="提示"
      trigger="hover"
          :content="
            btnIndex === 0
              ? `删除第${key + 1}条内容`
              : `将第${key + 1}张照片设置为封面`
          " -->
      <div class="operations">
        <Poptip
          v-for="(btn, btnIndex) in item.operations"
          :key="btnIndex"
          title="提示"
          trigger="hover"
          :content="
            btnIndex === 0
              ? `删除第${key + 1}条内容`
              : `将第${key + 1}张照片设置为封面`
          "
        >
          <Button
            shape="circle"
            :type="btn.type"
            @click.native="handleItemOperations(key, btnIndex)"
          >
            <Icon :type="btn.icon" />
          </Button>
        </Poptip>
      </div>
    </div>
    <div class="to-content">
      <long-select :propList="ablumTypesList" />
      <Button type="warning" @click.native="addPlan">新建计划</Button>
    </div>
  </div>
</template>

<script>
// ? import components
const LongSelect = () => {
  return import('@common/select-menu/LongSelect')
}

// ? import mixins
import ablumTypeMixin from '@mixins/class-management/ablumTypeMixin'

export default {
  name: 'UploadPage',

  components: {
    LongSelect
  },

  mixins: [ablumTypeMixin],

  data: () => ({
    // renderList: []
  }),

  props: {
    propList: {
      type: Array,
      default: () => []
    }
  },

  watch: {
    // propList(newValue) {
    //   if (newValue.length > 0) {
    //     this.renderList = newValue
    //   }
    // }
  },

  computed: {},

  methods: {
    itemInputChange(event, itemIndex) {
      const { value } = event.target
      this.$emit('itemInputChange', value, itemIndex)
    },
    handleItemOperations(key, btnIndex) {
      this.$emit('handleItemOperations', key, btnIndex)
    },
    addPlan() {
      this.$emit('addPlan')
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
.upload-page {
  height: 28rem;
  overflow-y: auto;
  .full_flex();
  justify-content: space-evenly;
  flex-direction: column;
  .list-item {
    padding-top: 5rem;
    width: 100%;
    .full_flex();
    flex-direction: row;
    .img {
      flex: 2;
      .full_flex();
      img {
        width: 10rem;
        // height: 7rem;
        height: 100%;
      }
    }
    .input {
      flex: 5;
      .full_flex();
    }
    .operations {
      flex: 2;
      .full_flex();
      .ivu-btn {
        margin: 0 0.8rem;
      }
    }
  }
  .to-content {
    .full_flex();
    padding: 1.2rem 0;
    .ivu-btn {
      margin: 0 0.8rem;
    }
  }
}
</style>
