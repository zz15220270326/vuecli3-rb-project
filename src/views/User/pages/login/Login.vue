<template>
  <div class="login-page">
    <wrapper />
    <div class="login-content">
      <Card class="login-card" :bordered="true">
        <div slot="title">登录</div>
        <div class="input-content">
          <div class="select-registry">
            <Button
              v-for="item of registerList"
              :key="item.key"
              :type="item.type"
              size="large"
              @click.native="selectRegistry(item.key)"
            >
              {{ item.tag }}
            </Button>
          </div>
          <div class="input-info">
            <Input
              class="input"
              v-model="username"
              prefix="ios-contact"
              placeholder="请输入用户名"
              maxlength="11"
              size="large"
            />
            <Input
              class="input"
              v-model="password"
              type="password"
              password
              placeholder="请输入密码"
              size="large"
            />
          </div>
          <div class="operations">
            <div class="top">
              <Checkbox v-model="isRememberPwd">记住密码</Checkbox>
              <Button type="text" @click.native="findPwd">忘记密码?</Button>
              <Button type="primary" size="large" @click.native="handleLogin"
                >登录</Button
              >
            </div>
          </div>
          <div class="other">
            <Button type="success" @click.native="accountActive">
              账号激活
            </Button>
            <Button type="default" @click.native="backMain">返回首页</Button>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
// ? import components
const Wrapper = () => import('@UserPages/child-components/Wrapper')
// ? import mixins
import loginMixin from '@mixins/user/loginMixin'

export default {
  name: 'Login',
  components: {
    Wrapper
  },
  mixins: [loginMixin],
  data: () => ({}),
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
.flex-evenly() {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.login-page {
  .login-content {
    // height: 100%;
    padding-top: 8rem;
    padding-left: 24rem;
    .flex_full();
    .login-card {
      height: 30rem;
      width: 27rem;
      // border-radius: 20%;
      font-size: 1.2rem;
      .login-title {
        .flex_full();
        margin-top: 1.2rem;
        font-weight: 560;
      }
      .input-content {
        .select-registry {
          padding: 1.2rem 0;
          .flex_full();
          .ivu-btn {
            margin: 0 0.92rem;
          }
        }
        .input-info {
          padding: 1rem 0;
          margin: 0 1.6rem;
          .input {
            margin: 0.8rem 0;
          }
        }
        .operations {
          .flex_full();
          justify-content: space-evenly;
          .top {
            .flex-evenly();
            .ivu-btn {
              width: 6.6rem;
            }
          }
        }
        .other {
          padding: 1rem 0;
          .flex_full();
          .ivu-btn {
            width: 6.4rem;
            margin: 0 0.5rem;
          }
        }
      }
    }
  }
}
</style>
