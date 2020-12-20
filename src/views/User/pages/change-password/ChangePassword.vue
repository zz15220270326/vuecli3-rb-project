<template>
  <div class="change-password">
    <wrapper :currentImg="currentImg" />
    <div class="change-content">
      <Card class="change-card">
        <div slot="title" class="title">修改密码</div>
        <div class="input-content">
          <Input
            class="input"
            v-model="newpassword"
            type="password"
            password
            placeholder="请输入密码"
            size="large"
          />
          <Input
            class="input"
            v-model="newpassword2"
            type="password"
            password
            placeholder="请输入密码"
            size="large"
          />
        </div>
        <div class="op-content">
          <Button type="primary" size="large" @click.native="handleSubmit">
            提交
          </Button>
        </div>
        <div class="back-login">
          <Button type="text" @click.native="backToLogin">
            返回登录
          </Button>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
// ? import components
const Wrapper = () => import('@common/wrapper/Wrapper')

// ? import mixins
import changePasswordMixin from '@mixins/user/changePasswordMixin'

export default {
  name: 'ChangePassword',

  components: {
    Wrapper
  },

  mixins: [changePasswordMixin],

  data: () => ({}),

  props: {},

  methods: {}
}
</script>

<style lang="less" scoped>
.flex_full() {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.change-password {
  .change-content {
    padding-top: 8rem;
    padding-left: 56rem;
    .change-card {
      height: 30rem;
      width: 27rem;
      // border-radius: 20%;
      font-size: 1.2rem;
      .input-content {
        text-align: center;
        .input {
          width: 17.6rem;
          margin-top: 0.85rem;
          margin-bottom: 0.25rem;
        }
      }
      .op-content {
        margin-top: 1.2rem;
        .flex_full();
        .ivu-btn {
          width: 7rem;
        }
      }
      .back-login {
        margin-top: 0.8rem;
        width: 100%;
        text-align: right;
        .ivu-btn {
          color: #0094ff;
          :hover {
            color: skyblue;
          }
        }
      }
    }
  }
}
</style>
