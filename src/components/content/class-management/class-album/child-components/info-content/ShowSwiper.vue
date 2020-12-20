<template>
  <div class="show-swiper">
    <Carousel
      class="swiper"
      autoplay
      v-model="currentPage"
      loop
      :radius-dot="true"
      :autoplay-speed="3000"
    >
      <CarouselItem
        class="swiper-item"
        v-for="(item, key) in imgList"
        :key="key"
      >
        <div>
          <img :src="item.src" alt="" />
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
export default {
  name: 'ShowSwiper',

  components: {},

  mixins: [],

  data: () => ({
    currentPage: 0
  }),

  props: {
    imgList: {
      type: Array,
      default() {
        return []
      }
    }
  },

  computed: {},

  methods: {}
}
</script>

<style lang="less" scoped>
.show-swiper {
  padding: 3.6rem 0;
  .swiper {
    width: 100%;
    height: 20rem;
    text-align: center;
    .swiper-item {
      width: 100%;
      img {
        height: 20rem;
        width: 40rem;
      }
    }
  }
}
</style>
