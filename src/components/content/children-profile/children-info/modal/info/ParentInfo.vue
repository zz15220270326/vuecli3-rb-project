<template>
  <Card class="parents-info">
    <div class="container" v-for="(item, key) in currentList" :key="key">
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
          <Tag>{{ item.pGender }}</Tag>
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
            :readonly="true"
          />
        </div>
      </div>
      <Divider />
    </div>
  </Card>
</template>

<script>
export default {
  name: 'ParentInfo',

  data: () => ({}),

  props: {
    currentList: {
      type: Array,
      default: () => []
    }
  },

  watch: {},

  computed: {},

  methods: {
    selectGender(item, key) {
      this.addList[key].currentGender = item
    }
  }
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
