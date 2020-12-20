<template>
  <div class="system-notice-content">
    <div class="title" v-if="dataList.length === 0">
      <h1>{{ title }}</h1>
    </div>
    <div class="content" v-else>
      <div slot="title" class="card-title">
        <h2>系统通知</h2>
      </div>
      <Card v-for="(item, key) in dataList" :key="key">
        <div class="card-content">
          <div class="left">
            <div class="img">
              <img :src="item.avatar" alt="" />
            </div>
            <div class="title-and-introduce">
              <div class="title">
                {{ item.title }}
              </div>
              <div class="intorduce">
                <Tag color="purple" size="large">
                  {{ item.outer }}
                </Tag>
              </div>
            </div>
          </div>
          <div class="right">
            <Tag color="lime" size="large">
              {{ item.time }}
            </Tag>
            <Button
              type="info"
              size="large"
              @click.native="handleClickItem(key)"
            >
              查询信息
            </Button>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SNContent',

  components: {},

  mixins: [],

  data: () => ({}),

  props: {
    title: {
      type: String,
      default: '加载中。。。'
    },
    dataList: {
      type: Array,
      default: () => []
    }
  },

  computed: {},

  methods: {
    handleClickItem(key) {
      this.$emit('handleClickItem', key)
    }
  }
}
</script>

<style lang="less" scoped>
.full_flex() {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.system-notice-content {
  .title {
    .full_flex();
  }
  .content {
    font-size: 1.2rem;
    .card-title {
      .full_flex();
    }
    .card-content {
      width: 100%;
      margin: 1rem 0;
      .full_flex();
      .left {
        flex: 5;
        .full_flex();
        .img {
          flex: 1;
          img {
            width: 100%;
          }
        }
        .title-and-introduce {
          flex: 2;
          .full_flex();
          flex-direction: column;
          .title {
            font-size: 1.42rem;
            font-weight: 560;
          }
          .intorduce {
          }
        }
      }
      .right {
        flex: 7;
        height: 5rem;
        text-align: right;
        padding-bottom: 1.2rem;
        padding-right: 2rem;
      }
    }
  }
}
</style>
