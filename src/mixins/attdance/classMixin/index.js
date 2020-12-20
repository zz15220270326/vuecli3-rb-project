/*
 * @Author: 张先生
 * @Date: 2020-12-18 21:29:43
 * @LastEditTime: 2020-12-20 13:21:09
 * @FilePath: \langyun_manager\src\mixins\attdance\classMixin\index.js
 */
// ? async-functions / mock-data
import { getMenuInfo } from '@/request/attdance/getAttdenceReportInfo'

export default {
  data() {
    return {
      menuItems: []
    }
  },
  computed: {
    uid() {
      // ? 虚拟存储的uid的值
      return this.$store.state.uid
    }
  },
  methods: {
    async requestMenu() {
      const result = await getMenuInfo(this.uid)
      if (result.msg === 'Success' && result.data) {
        this.menuItems = []
        const { data } = result
        this.menuItems.push(...data)
      }
    }
  },
  created() {
    this.requestMenu()
  }
}
