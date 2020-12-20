export default {
  data() {
    return {}
  },
  methods: {
    searchItems() {
      this.$emit('searchItems')
    },
    deleteItems() {
      this.$emit('deleteItems')
    },
    createPlan() {
      this.$emit('createPlan')
    }
  }
}