// ? pwd regexp
import {
  checkPassword
} from '@utils/regexp'

export default {
  data() {
    return {
      currentImg: 'http://t.aservice.langlangyun.com/langyun/www/public/static/workplace/h-ui.admin/images/icon-logoin.png',
      newpassword: '',
      newpassword2: '',
      isSubmit: false
    }
  },
  computed: {
    ABLE_CHANGE_PWD() {
      return this.$store.state.ableChangePwd
    }
  },
  methods: {
    checkNewpassword() {
      const newpassword = this.newpassword
      if (newpassword === '') {
        this.$Message.error('请输入新密码')
        this.isSubmit = false
        return
      }
      if (!checkPassword(newpassword)) {
        this.$Message.error('密码要求: 由8-18位数字或字母的组合构成')
        this.isSubmit = false
        return
      }
      this.isSubmit = true
    },
    checkNewpassword2() {
      // const newpassword2 = this.newpassword2
      // if (newpassword2 === '') {
      //   this.$Message.error('请再一次输入新密码')
      //   this.isSubmit = false
      //   return
      // }
      // if (!checkPassword(newpassword2)) {
      //   this.isSubmit = false
      //   return
      // }
      if (this.newpassword !== this.newpassword2) {
        this.$Message.error('两次输入的密码要相同')
        this.isSubmit = false
        return
      }
      this.isSubmit = true
    },
    // ? async-functions
    handleSubmit() {
      this.checkNewpassword()
      this.checkNewpassword2()
      if (this.isSubmit) {
        setTimeout(() => {
          this.$Message.success('修改成功')
          setTimeout(() => {
            this.$router.replace('/user/login')
          }, 360);
        }, 500);
      }
    },
    backToLogin() {
      this.$router.replace('/user/login')
    }
  },
  // !life-hooks
  mounted() {
    if (!this.ABLE_CHANGE_PWD) {
      console.log(this.ABLE_CHANGE_PWD)
      this.$Message.error('无权操作')
      setTimeout(() => {
        this.$router.replace('/user/login')
      }, 300)
    }
  }
}