<template>
  <div class="user">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'User',

  components: {},

  mixins: [],

  data: () => ({}),

  props: {},

  computed: {},

  methods: {},

  beforeCreate() {
    const userInfo = localStorage.getItem('userInfo')
    if (userInfo) {
      this.$router.replace('/home/main')
    }
  }
}
</script>

<style lang="less" scoped>
.user {
  width: 100%;
  height: 100vh;
  position: absolute;
  // border: 3px solid #fff;
  background-color: #3283ac;
  opacity: 0.92;
  background: url(http://t.aservice.langlangyun.com/langyun/www/public/static/workplace/h-ui.admin/images/admin_login-bg2.jpg)
    no-repeat;
  // background-size: contain;
}
</style>
