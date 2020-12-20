<template>
  <div class="base-info">
    <div class="name">
      <div class="tag">姓名</div>
      <div class="content">
        <Input v-model="inputName" placeholder="请输入姓名" />
      </div>
    </div>
    <div class="phone">
      <div class="tag"></div>
      <div class="content"></div>
    </div>
    <div class="select-gender">
      <div class="tag"></div>
      <div class="content"></div>
    </div>
    <div class="managed-class">
      <div class="tag"></div>
      <div class="content"></div>
    </div>
    <div class="identify">
      <div class="tag"></div>
      <div class="content"></div>
    </div>
    <div class="attdance-number">
      <div class="tag"></div>
      <div class="content"></div>
    </div>
    <div class="user-face">
      <div class="tag"></div>
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
// ? components
// ? store
import { mapState } from 'vuex'

export default {
  name: 'BaseInfo',

  components: {},

  mixins: [],

  data: () => ({
    inputName: '',
    phone: '',
    selectGender: '',
    attdanceCard: '',
    userAvatar: '',
    img: []
  }),

  props: {},

  computed: {
    ...mapState(['managedClass', 'attdanceNumber', 'identify'])
  },

  methods: {},
  created() {
    // const key = localStorage.getItem('userInfo')
    // console.log(key)
    // console.log(mapState)
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
.common-content {
  padding: 1rem 0;
  .full_flex();
  .tag {
    flex: 2;
    text-align: right;
    margin-right: 6rem;
  }
  .content {
    flex: 7;
    margin-right: 16rem;
  }
}
.base-info {
  background-color: pink;
  width: 100%;
  height: 100vh;
  .name {
    .common-content;
  }
}
</style>
