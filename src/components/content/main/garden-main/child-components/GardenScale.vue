<template>
  <div class="scale">
    <div class="gender">
      <div class="title">
        男女比例
      </div>
      <div class="content">
        <cookie-picture :propOption="sexOption" />
      </div>
    </div>
    <div class="nation">
      <div class="title">
        各民族比例
      </div>
      <div class="content">
        <cookie-picture :propOption="nationOption" />
      </div>
    </div>
  </div>
</template>

<script>
// ? import components
const CookiePicture = () => import('@echart/CookiePicture')
// ? import mixins
import cookiesPictureMixin from '@mixins/main/cookiesPictureMixin'

export default {
  name: 'GardenScale',

  components: {
    CookiePicture
  },

  mixins: [cookiesPictureMixin],

  data: () => ({
    // ? 男女比例
    sexList: ['男生人数', '女生人数'],
    sexPresentList: [
      { value: 19, name: '男生人数' },
      { value: 4, name: '女生人数' }
    ],
    sexColorList: ['#1cb1f5', '#ff5823'],
    // ? 其他比例
    nationList: ['汉族人数', '少数民族人数'],
    nationPresentList: [
      { value: 23, name: '汉族人数' },
      { value: 0, name: '少数民族人数' }
    ],
    nationColorList: ['#1cb1f5', '#ff5823']
  }),

  props: {},

  computed: {},

  methods: {}
}
</script>

<style lang="less" scoped>
.scale {
  color: #666;
  font-size: 1rem;
  width: 100%;
  height: 23rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 5rem;
  .gender {
    flex: 1;
    padding: 0.8rem 0;
    :nth-child(1) {
      font-weight: 600;
      font-size: 1.3rem;
      margin-left: 1.6rem;
    }
  }
  .nation {
    flex: 1;
    padding: 0.8rem 0;
    :nth-child(1) {
      font-weight: 600;
      font-size: 1.3rem;
      margin-left: 1.6rem;
    }
  }
  .content {
    width: 100%;
    height: 23rem;
    border: 1px solid #36adea;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.8rem;
  }
}
</style>
