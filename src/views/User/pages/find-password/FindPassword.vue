<template>
  <div class="find-password">
    <wrapper :currentImg="currentImg" />
    <div class="find-content">
      <Card class="find-card">
        <div slot="title" class="title">找回密码</div>
        <long-select :propList="selectTypes" />
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
        </div>
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
        <div class="next-step">
          <Button type="primary" size="large" @click.native="handleNextStep">
            下一步
          </Button>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
// ? import components
const Wrapper = () => import('@common/wrapper/Wrapper')
const LongSelect = () => import('@common/select-menu/LongSelect')

// ? import mixins
import findPasswordMixin from '@mixins/user/findPasswordMixin'

export default {
  name: 'FindPassword',

  components: {
    Wrapper,
    LongSelect
  },

  mixins: [findPasswordMixin],

  data: () => ({}),

  props: {},

  computed: {},

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

.find-password {
  .find-content {
    padding-top: 8rem;
    padding-left: 56rem;
    .find-card {
      height: 30rem;
      width: 27rem;
      // border-radius: 20%;
      font-size: 1.2rem;
      .select-menu {
        margin-top: 0.85rem;
        margin-bottom: 0.25rem;
        padding: 0 3.6rem;
      }
      .input-content {
        text-align: center;
        .input {
          width: 17.6rem;
          margin-top: 0.85rem;
          margin-bottom: 0.25rem;
        }
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
      .next-step {
        margin-top: 1.6rem;
        .flex_full();
        .ivu-btn {
          width: 7rem;
        }
      }
    }
  }
}
</style>
