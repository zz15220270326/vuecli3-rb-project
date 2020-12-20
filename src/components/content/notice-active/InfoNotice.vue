<template>
  <div class="info-garden-notice">
    <div class="title">
      <h1>{{ infoItem.title }}</h1>
      <div class="user-info">
        <img :src="avatar" alt="" />
        <span>{{ infoItem.charger }}</span>
        <Tag size="large" color="lime">
          {{ infoItem.time }}
        </Tag>
        <Tag size="large" :color="infoItem.color">
          {{ infoItem.type }}
        </Tag>
      </div>
    </div>
    <div class="content">
      <div class="text-content">
        {{ infoItem.content }}
      </div>
      <div class="img-content" v-if="infoItem.img && infoItem.img[0] !== ''">
        <img
          v-for="(item, key) in infoItem.img"
          :key="key"
          :src="item"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
// ? import mixins
import InfoNoticeModalMixin from '@mixins/notice-active/InfoNoticeModalMixin'
export default {
  name: 'InfoNotice',

  components: {},

  mixins: [InfoNoticeModalMixin],

  data: () => ({}),

  props: {},

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
.info-garden-notice {
  height: 30rem;
  .title {
    text-align: center;
    .user-info {
      .full_flex();
      img {
        height: 2.7rem;
        width: 2.7rem;
      }
    }
  }
  .content {
    font-size: 1rem;
    .text-content {
      margin: 1rem 0;
    }
    .img-content {
      .full_flex();
      flex-wrap: wrap;
      img {
        height: 20%;
        width: 20%;
      }
    }
  }
}
</style>
