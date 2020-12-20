<template>
  <div class="info-content">
    <div class="title">
      <Button
        v-for="(item, index) in selectInfo"
        :key="index"
        :type="item.type"
        @click.native="handleSelect(index)"
        :birthDate="birthDate"
      >
        {{ item.tag }}
      </Button>
    </div>
    <div class="content" v-show="currentIndex === 0">
      <base-info
        :inputName="inputName"
        :gender="gender"
        :currentNation="nation"
        :birthDate="birthDate"
        :entryTime="entryTime"
        :classTitle="classTitle"
        :parentList="parentList"
      />
    </div>
    <div class="content" v-show="currentIndex === 1">
      <parent-info :currentList="parentList" />
    </div>
  </div>
</template>

<script>
// ? child-components
const BaseInfo = () => import('./info/BaseInfo')
const ParentInfo = () => import('./info/ParentInfo')

export default {
  name: 'InfoContent',

  components: {
    BaseInfo,
    ParentInfo
  },

  data: () => ({
    selectInfo: [
      {
        tag: '基本信息',
        type: 'primary'
      },
      {
        tag: '家长信息',
        type: 'default'
      }
    ],
    currentIndex: 0,
    inputPName: '',
    // ? 获取到的当前的添加列表
    currentList: []
  }),

  props: {
    // ? props child
    inputName: {
      type: String,
      default: ''
    },
    gender: {
      type: String,
      default: ''
    },
    nation: {
      type: String,
      default: ''
    },
    birthDate: {
      type: String,
      default: ''
    },
    entryTime: {
      type: String,
      default: ''
    },
    classTitle: {
      type: String,
      default: ''
    },
    // ? props - parent
    parentList: {
      type: Array,
      default: () => []
    }
  },

  computed: {},

  methods: {
    handleSelect(currentIndex) {
      this.currentIndex = currentIndex
      this.selectInfo.forEach((item, index) => {
        index === currentIndex
          ? (item.type = 'primary')
          : (item.type = 'default')
      })
    },
    selectClass(selectClass) {
      this.$emit('selectClass', selectClass)
    },
    pNameChange(currentList) {
      this.currentList = currentList
    }
  }
}
</script>

<style lang="less" scoped>
.info-content {
  height: 32rem;
  overflow-y: scroll;
  .title {
    background-color: #f6f6f6;
    width: 100%;
    padding: 0.6rem 0;
    .ivu-btn {
      margin: 0 0.6rem;
    }
  }
}
</style>
