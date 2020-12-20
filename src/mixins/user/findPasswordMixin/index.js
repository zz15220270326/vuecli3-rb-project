import {
  checkPhoneNumber,
  checkVrCode
} from '@utils/regexp'
import {
  GET_ABLE_CHANGE_PWD
} from '@store/storeType'

export default {
  data() {
    return {
      currentImg: 'http://t.aservice.langlangyun.com/langyun/www/public/static/workplace/h-ui.admin/images/icon-logoin.png',
      phoneNumber: '',
      vrCode: '',
      selectTypes: [{
          info: '教职工',
          key: 0
        },
        {
          info: '主管部门',
          key: 1
        }
      ]
    }
  },
  computed: {
    ABLE_CHANGE_PWD() {
      return this.$store.state.ableChangePwd
    }
  },
  methods: {
    checkPhoneNumber() {
      const phone = this.phoneNumber
      if (phone === '') {
        this.$Message.error('请填写您的手机号')
        this.$store.commit(GET_ABLE_CHANGE_PWD, false)
        return
      }
      if (checkPhoneNumber(phone) === false) {
        this.$Message.error('请填写合法的手机号')
        this.$store.commit(GET_ABLE_CHANGE_PWD, false)
        return
      }
      this.$store.commit(GET_ABLE_CHANGE_PWD, true)
    },
    checkVrCode() {
      const vrCode = this.vrCode
      if (vrCode === '') {
        this.$Message.error('请输入验证码')
        this.$store.commit(GET_ABLE_CHANGE_PWD, false)
        return
      }
      if (!checkVrCode(vrCode)) {
        this.$Message.error('验证码由6位数字组成, 请重新输入')
        this.$store.commit(GET_ABLE_CHANGE_PWD, false)
        return
      }
      this.$store.commit(GET_ABLE_CHANGE_PWD, true)
    },
    // ? 请求修改密码
    handleNextStep() {
      this.checkPhoneNumber()
      this.checkVrCode()
      if (this.ABLE_CHANGE_PWD) {
        this.$Message.success('修改密码')
        setTimeout(() => {
          this.$store.commit(GET_ABLE_CHANGE_PWD, true)
          this.$router.push('/user/changePassword')
        }, 300)
      }
    }
  },
  created() {}
}