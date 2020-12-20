import {
  checkPhoneNumber,
  checkPassword,
} from '@utils/regexp'

export default {
  data() {
    return {
      userType: '',
      username: '',
      password: '',
      registerList: [{
          tag: '教职工',
          type: 'primary',
          key: 0
        },
        {
          tag: '主管部门',
          type: 'default',
          key: 1
        }
      ],
      registeryIndex: 0,
      isRememberPwd: '',
      ableLogin: false
    }
  },
  methods: {
    // ? 方法(sync)
    // ?? 选择部门
    selectRegistry(registeryIndex) {
      this.registeryIndex = registeryIndex
      this.registerList.forEach((item, index) => {
        index === registeryIndex ?
          (item.type = 'primary') :
          (item.type = 'default')
      })
    },
    // ?? 跳转
    findPwd() {
      this.$router.push('/user/findPassword')
    },
    accountActive() {
      this.$router.push('/user/accountActivate')
    },
    backMain() {
      this.$Message.success('跳转到首页...')
      setTimeout(() => {
        window.location.href = 'http://www.langlangyun.com/'
      }, 500);
    },
    // ?? 校验方法
    checkUsername() {
      const username = this.username
      if (username === '') {
        this.$Message.error('您输入的账号不能为空')
        this.ableLogin = false
        return
      }
      if (!checkPhoneNumber(username)) {
        this.$Message.error('请输入合法的用户名')
        this.ableLogin = false
        return
      }
      this.ableLogin = true
    },
    checkPassword() {
      const password = this.password
      if (password === '') {
        this.$Message.error('密码不能为空')
        this.ableLogin = false
        return
      }
      if (!checkPassword(password)) {
        this.$Message.error('密码要求: 由8-18位数字或字母的组合构成')
        this.ableLogin = false
        return
      }
      this.ableLogin
    },
    // ? 请求(async)
    handleLogin() {
      this.checkUsername()
      this.checkPassword()
      if (this.ableLogin) {
        this.$Spin.show()
        setTimeout(() => {
          this.$Spin.hide()
          localStorage.setItem('userInfo', `
            ${this.username},
            ${this.password}
          `)
          this.$Message.success('登录成功')
          this.$router.replace('/home/main')
        }, 500);
      }
    }
  }
}