/*
 * @Author: 张先生
 * @Date: 2020-12-18 21:29:43
 * @LastEditTime: 2020-12-20 12:27:53
 * @FilePath: \langyun_manager\src\mixins\Common\genderMixin\index.js
 */
const mockkGenderList = require('@mock/children-profile/mockkGenderList')

export default {
  data() {
    return {
      currentGender: '',
      genderList: []
    }
  },
  methods: {
    getGenderList() {
      setTimeout(() => {
        const result = mockkGenderList
        if (result.msg === 'Success' && result.data) {
          const genderList = result.data
          this.currentGender = genderList[0].info
          this.genderList = genderList
        }
      }, 300)
    },
    selectGender(selectGender) {
      this.currentGender = selectGender
    }
  },
  created() {
    this.getGenderList()
  }
}
