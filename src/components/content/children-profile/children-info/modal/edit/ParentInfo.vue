<template>
  <Card class="parents-info">
    <div class="container" v-for="(item, key) in addList" :key="key">
      <div class="parent-name">
        <div class="tag">
          家长姓名
        </div>
        <div class="content">
          <Input :readonly="true" style="width: 200px;" :value="item.pName" />
        </div>
      </div>
      <div class="gender">
        <div class="tag">性别</div>
        <div class="content">
          <select-menu
            :listTitle="currentGender"
            :listItems="genderList"
            @handleSelect="selectGender"
          />
        </div>
      </div>
      <div class="phone">
        <div class="tag">
          联系手机
        </div>
        <div class="content">
          <Input
            placeholder="请输入联系手机"
            style="width: 300px"
            :value="item.pPhone"
          />
        </div>
      </div>
      <Divider />
    </div>
  </Card>
</template>

<script>
// ? import components
const SelectMenu = () => import('@common/select-menu/SelectMenu')
// ? mixins
import genderMixin from '@mixins/Common/genderMixin'

export default {
  name: 'ParentInfo',

  components: {
    SelectMenu
  },

  mixins: [genderMixin],

  data: () => ({
    addList: [
      {
        pName: '',
        pPhone: '',
        currentGender: '请选择性别',
        pGender: [
          {
            info: '请选择性别',
            key: 0
          },
          {
            info: '男',
            key: 1
          },
          {
            info: '女',
            key: 2
          }
        ]
      }
    ]
  }),

  props: {
    currentList: {
      type: Array,
      default: () => []
    }
  },

  watch: {
    currentList(currentList) {
      currentList.map((item, index) => {
        // ? length
        if (index < this.addList.length) {
          if (this.addList[index].pPhone === '') {
            this.addList.splice(index, 1, item)
          } else {
            this.addList[index].pName = item.pName
            this.addList[index].pGender = item.pGender
          }
        } else {
          this.addList.push(item)
        }
      })
      if (currentList.length < this.addList.length) {
        this.addList = []
        this.addList.push(...currentList)
      }
    }
  },

  computed: {},

  methods: {}
}
</script>

<style lang="less" scoped>
.parents-info {
  .container {
    .parent-name {
      margin-top: 1.2rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .tag {
        flex: 3;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .content {
        flex: 7;
      }
    }
    .gender {
      margin-top: 1.2rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .tag {
        flex: 3;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .content {
        flex: 7;
      }
    }
    .phone {
      margin-top: 1.2rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .tag {
        flex: 3;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .content {
        flex: 7;
      }
    }
  }
}
</style>
