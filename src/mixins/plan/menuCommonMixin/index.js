/*
 * @Author: 张先生
 * @Date: 2020-12-12 11:58:58
 * @LastEditTime: 2020-12-12 12:03:38
 * @FilePath: \langyun_manager\src\mixins\plan\menuCommonMixin\index.js
 */
export default {
  data() {
    return {
      operations: [
        {
          tag: '查询',
          type: 'primary'
        },
        {
          tag: '删除',
          type: 'error'
        }
      ]
    }
  },
  methods: {
    handleAll(info) {
      this.$emit('handleAll', info)
    }
  },
  created() {}
}
