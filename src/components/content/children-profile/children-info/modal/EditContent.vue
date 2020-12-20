<template>
  <div class="edit-content">
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
        :currentGender="currentGender"
        :birthDate="birthDate"
        :entryTime="entryTime"
        :parentList="parentList"
      />
    </div>
    <div class="content" v-show="currentIndex === 1">
      <parent-info :currentList="parentList" />
    </div>
  </div>
</template>

<script>
// ? import components
const BaseInfo = () => import('./edit/BaseInfo')
const ParentInfo = () => import('./edit/ParentInfo')

export default {
  name: 'EditContent',

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
    currentGender: {
      type: String,
      default: ''
    },
    currentNation: {
      type: String,
      default: ''
    },
    nationArr: {
      type: Array,
      default: () => []
    },
    birthDate: {
      type: String,
      default: ''
    },
    entryTime: {
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
.edit-content {
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
