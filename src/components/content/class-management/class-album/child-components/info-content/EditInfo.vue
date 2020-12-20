<template>
  <div class="edit-info">
    <div class="top">
      <div class="img">
        <img :src="propImgUrl" alt="" />
      </div>
      <div class="input">
        <Input
          v-model="inputIntroduce"
          type="textarea"
          :rows="4"
          placeholder="图片说明(不超过100个字)"
        />
      </div>
      <div class="set-wrap">
        <Button type="primary" :disabled="propIsSetWrapper">设置为封面</Button>
      </div>
    </div>
    <div class="bottom">
      <div class="tag">
        <Tag color="skyblue" size="large">选择所在相册:</Tag>
      </div>
      <long-select :propList="ablumTypesList" />
    </div>
  </div>
</template>

<script>
// ? import components
const LongSelect = () => import('@common/select-menu/LongSelect')

// ? import mixins
import ablumTypeMixin from '@mixins/class-management/ablumTypeMixin'

export default {
  name: 'EditInfo',

  components: {
    LongSelect
  },

  mixins: [ablumTypeMixin],

  data: () => ({
    inputIntroduce: ''
  }),

  props: {
    propImgUrl: {
      type: String,
      default: ''
    },
    propInput: {
      type: String,
      default: ''
    },
    propIsSetWrapper: {
      type: Boolean,
      default: false
    }
  },

  watch: {
    propInput(newValue) {
      this.inputIntroduce = newValue
    }
  },

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
.edit-info {
  height: 25rem;
  .top {
    padding: 1.2rem 0;
    .full_flex();
    .img {
      flex: 1;
      text-align: center;
      img {
        width: 6rem;
        height: 6rem;
      }
    }
    .input {
      flex: 3;
    }
    .set-wrap {
      flex: 1;
      text-align: center;
    }
  }
  .bottom {
    padding: 1rem 0;
    .full_flex();
    .tag {
      flex: 2;
      text-align: right;
      margin-right: 3rem;
    }
    .select-menu {
      flex: 3;
      margin-right: 5rem;
    }
  }
}
</style>
