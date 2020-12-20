<template>
  <div class="account-activate">
    <wrapper :currentImg="currentImg" />
    <div class="activate-content">
      <Card class="activate-card">
        <div slot="title" class="title">激活账号</div>
        <div class="input-content">
          <Input
            v-model="phoneNumber"
            class="input"
            maxlength="11"
            prefix="ios-call-outline"
            type="tel"
            placeholder="请输入手机号"
            size="large"
          />
          <Input
            class="input"
            v-model="password"
            type="password"
            maxlength="18"
            prefix="ios-lock-outline"
            password
            placeholder="请输入密码"
            size="large"
          />
          <div class="get-vrcode">
            <!-- prefix="ios-color-wand-outline" -->
            <Input
              v-model="vrCode"
              class="vrcode-input"
              maxlength="6"
              placeholder="请输入验证码"
              size="large"
            />
            <Button type="success" size="large">获取验证码</Button>
          </div>
        </div>
        <div class="op-content">
          <div class="top">
            <Checkbox v-model="isAgree">
              <span>
                我已阅读并同意
              </span>
              <a
                href="http://t.aservice.langlangyun.com/langyun/www/public/api/html5/userguide.html"
              >
                用户协议 </a
              >、
              <a
                href="http://t.aservice.langlangyun.com/langyun/www/public/api/html5/webprivacy.html"
              >
                隐私政策
              </a>
            </Checkbox>
          </div>
          <Button
            type="primary"
            :disabled="!isAgree"
            icon="ios-magnet-outline"
            size="large"
            @click.native="handleActive"
          >
            确认激活
          </Button>
          <div class="to-login">
            <Button type="text" @click.native="toLoginPage">
              若已激活, 点击这里去登录
            </Button>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
// ? import components
const Wrapper = () => import('@common/wrapper/Wrapper')
// ? import mixins
import accountActivateMixin from '@mixins/user/accountActivateMixin'

export default {
  name: 'AccountActivate',

  components: {
    Wrapper
  },

  mixins: [accountActivateMixin],

  data: () => ({}),

  props: {},

  computed: {},

  methods: {}
}
</script>

<style lang="less" scoped>
.flex_common() {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex_full() {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.account-activate {
  .activate-content {
    padding-top: 8rem;
    padding-left: 24rem;
    .flex_full();
    .activate-card {
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
        .get-vrcode {
          margin: 0.6rem 0;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          .vrcode-input {
            width: 7.2rem;
          }
        }
      }
    }
    .op-content {
      text-align: center;
      // .top {
      // }
      .to-login {
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
