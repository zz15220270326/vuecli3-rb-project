import {
  checkPhoneNumber,
  checkPassword,
  checkVrCode
} from '@utils/regexp'

export default {
  data() {
    return {
      currentImg: 'http://t.aservice.langlangyun.com/langyun/www/public/static/workplace/h-ui.admin/images/icon-logoin.png',
      phoneNumber: '',
      password: '',
      vrCode: '',
      isAgree: false,
      isActivate: false
    }
  },
  methods: {
    // ? 校验方法
    checkPhoneNumber() {
      const phone = this.phoneNumber
      if (phone === '') {
        this.$Message.error('请填写您的手机号')
        this.isActivate = false
        return
      }
      if (checkPhoneNumber(phone) === false) {
        this.$Message.error('请填写合法的手机号')
        this.isActivate = false
        return
      }
      this.isActivate = true
    },
    checkPassword() {
      const password = this.password
      if (password === '') {
        this.$Message.error('请输入密码')
        this.isActivate = false
        return
      }
      if (!checkPassword(password)) {
        this.$Message.error('密码要求: 由8-18位数字或字母的组合构成')
        this.isActivate = false
        return
      }
      this.isActivate = true
    },
    checkVrCode() {
      const vrCode = this.vrCode
      if (vrCode === '') {
        this.$Message.error('请输入验证码')
        this.isActivate = false
        return
      }
      if (!checkVrCode(vrCode)) {
        this.$Message.error('验证码由6位数字组成, 请重新输入')
        this.isActivate = false
        return
      }
      this.isActivate = true
    },
    // ? 激活请求
    handleActive() {
      this.checkPhoneNumber()
      this.checkPassword()
      this.checkVrCode()
      if (this.isActivate) {
        this.$Message.success('激活成功')
        setTimeout(() => {
          this.$router.replace('/')
        }, 500)
      }
    },
    toLoginPage() {
      this.$router.push('/user/login')
    }
  }
}