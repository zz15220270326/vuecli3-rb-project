<template>
  <div class="garden-main">
    <!-- <div class="wrapper">
      <span>园所总览</span>
    </div> -->
    <div class="main-content">
      <garden-attdance />
      <garden-scale />
      <all-class-info />
      <garden-health-info />
    </div>
  </div>
</template>

<script>
// ? import components
const GardenAttdance = () => import('./child-components/GardenAttdance')
const GardenScale = () => import('./child-components/GardenScale')
const AllClassInfo = () => import('./child-components/AllClassInfo')
const GardenHealthInfo = () => import('./child-components/GardenHealthInfo')

export default {
  name: 'GardenMain',

  components: {
    GardenAttdance,
    GardenScale,
    AllClassInfo,
    GardenHealthInfo
  },

  data: () => ({}),

  props: {},

  computed: {},

  methods: {}
}
</script>

<style lang="less" scoped>
.garden-main {
  .total-title {
    width: 100%;
    background-color: #f6f6f6;
    padding: 0.8rem;
    color: #36adea;
    font-size: 1.08rem;
  }
  .main-content {
    background-color: #fff;
    height: 100vh;
    overflow-y: scroll;
  }
}
</style>
