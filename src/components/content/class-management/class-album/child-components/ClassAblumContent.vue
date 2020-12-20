<template>
  <div class="ablums-content">
    <Card class="ablums-item" v-for="(item, key) in ablumItems" :key="key">
      <div
        class="top"
        @mouseenter="handleItemShow(key)"
        @mouseleave="handleItemLeave(key)"
      >
        <div class="operations" v-show="item.isShowOperations">
          <Button
            v-for="(btn, btnIndex) in itemOperations"
            :key="btnIndex"
            :type="btn.type"
            @click.native="itemBtnOperations(key, btnIndex)"
          >
            {{ btn.tag }}
          </Button>
        </div>
        <img :src="item.imgList[0]" alt="" />
      </div>
      <div class="bottom">
        <div class="left">
          <div class="author">
            <Checkbox
              v-model="item.isChecked"
              @on-change="handleCheckbox($event, key)"
            >
              <Tag color="lime" size="large"> 创作者:{{ item.author }} </Tag>
            </Checkbox>
          </div>
          <div class="current_class">
            <Tag color="blue" size="large">班级:{{ item.currentClass }}</Tag>
          </div>
        </div>
        <div class="right">
          <Tag color="red" size="large">总数:{{ item.total }}</Tag>
          <Button type="info" @click.native="showInfo(key)">查看详情</Button>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'ClassAblumContent',

  components: {},

  mixins: [],

  data: () => ({
    renderItems: [],
    checkedGroup: [],
    itemOperations: [
      {
        tag: '上传',
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
    ]
  }),

  props: {
    ablumItems: {
      type: Array,
      default: () => []
    }
  },

  watch: {
    ablumItems(newValue) {
      this.ablumItems = newValue
    }
  },

  computed: {},

  methods: {
    handleCheckbox(isChecked, index) {
      this.$emit('handleCheckbox', isChecked, index)
    },
    showInfo(key) {
      this.$emit('showInfo', this.ablumItems[key])
    },
    handleItemShow(key) {
      this.$emit('handleItemShow', key)
    },
    handleItemLeave(key) {
      this.$emit('handleItemLeave', key)
    },
    itemBtnOperations(itemIndex, btnIndex) {
      this.$emit('itemBtnOperations', itemIndex, btnIndex)
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
.ablums-content {
  .full_flex();
  justify-content: left;
  flex-wrap: wrap;
  .ablums-item {
    width: 23%;
    height: 20rem;
    margin: 1.2rem 0.3rem;
    .top {
      .full_flex();
      .operations {
        position: absolute;
        .ivu-btn {
          margin: 0 0.8rem;
        }
      }
      img {
        width: 22rem;
        height: 13rem;
      }
    }
    .bottom {
      margin-top: 1rem;
    }
  }
}
</style>
