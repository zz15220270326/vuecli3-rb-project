<template>
  <Card class="system-notice-info">
    <div slot="title" class="title">
      <h2>{{ infoItem.title }}</h2>
    </div>
    <div class="content">
      <div class="top">
        <Avatar :src="infoItem.icon" size="small" />
        <Tag color="gold" size="large" style="margin: 0 0.6rem">
          {{ infoItem.user }}
        </Tag>
        <Tag color="lime" size="large">{{ infoItem.time }}</Tag>
      </div>
      <div class="bottom">
        <div class="article">
          {{ infoItem.content }}
        </div>
        <div class="img-list" v-if="infoItem.imgs.length > 0">
          <img
            v-for="(item, key) in infoItem.imgs"
            :key="key"
            :src="item"
            alt=""
          />
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {
  name: 'SystemNoticeInfo',

  components: {},

  mixins: [],

  data: () => ({}),

  props: {
    infoItem: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {},

  methods: {}
}
</script>

<style lang="less" scoped>
.full_flex() {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.system-notice-info {
  height: 30rem;
  overflow-y: scroll;
  .title {
    .full_flex();
  }
  .content {
    .top {
      .full_flex();
    }
    .bottom {
      margin-top: 1.2rem;
      .img-list {
        margin-top: 1rem;
      }
    }
  }
}
</style>
