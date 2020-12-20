<template>
  <div class="add-content" v-if="parentList.length > 0">
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
        :selectGender="selectGender"
        :nationArr="nationArr"
        :birthDate="birthDate"
        :entryTime="entryTime"
        :classTitle="classTitle"
        :classList="classList"
        :parentList="parentList"
        @selectClass="selectClass"
        @pNameChange="pNameChange"
      />
    </div>
    <div class="content" v-show="currentIndex === 1">
      <parent-info :currentList="currentList" />
    </div>
  </div>
</template>

<script>
// ? child-components
const BaseInfo = () => import('./add/BaseInfo')
const ParentInfo = () => import('./add/ParentInfo')

export default {
  name: 'AddContent',

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
    selectGender: {
      type: Array,
      default: () => []
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
    classTitle: {
      type: String,
      default: ''
    },
    classList: {
      type: Array,
      default: () => []
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
.add-content {
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
