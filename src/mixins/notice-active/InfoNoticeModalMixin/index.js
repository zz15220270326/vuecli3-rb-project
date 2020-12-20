export default {
  data() {
    return {}
  },

  props: {
    infoItem: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    avatar() {
      return this.$store.state.avatar
    }
  },
}