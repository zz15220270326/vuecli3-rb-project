<template>
  <div class="info-content">
    <Card>
      <div slot="title" class="card-title">
        <h2>{{ infoTitle }}</h2>
      </div>
      <div class="card-content">
        <div class="top">
          <Avatar :src="infoAvatar" />
          <Tag color="pink" size="large">
            {{ infoAuthor }}
          </Tag>
          <Tag color="green" size="large">
            {{ infoTime }}
          </Tag>
        </div>
        <div class="bottom">
          <Input :value="infoContent" type="textarea" :rows="5" readonly />
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'InfoContent',

  components: {},

  mixins: [],

  data: () => ({}),

  props: {
    infoTitle: {
      type: String,
      default: ''
    },
    infoAvatar: {
      type: String,
      default: ''
    },
    infoAuthor: {
      type: String,
      default: ''
    },
    infoTime: {
      type: String,
      default: ''
    },
    infoContent: {
      type: String,
      default: ''
    }
  },

  computed: {},

  methods: {}
}
</script>

<style lang="less" scoped>
.full-flex() {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.info-content {
  height: 30rem;
  .card-title {
    .full-flex();
    padding: 3/4rem 0;
  }
  .card-content {
    height: 20rem;
    overflow-y: scroll;
    .top {
      padding: 3/4rem 0;
      .full-flex();
    }
    .bottom {
      margin: 0.8rem;
    }
  }
}
</style>
