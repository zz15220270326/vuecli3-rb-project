<template>
  <div class="reminder">
    <div class="reminder-title">
      <div class="punch-time">
        {{ renderReminderItems.title }}
      </div>
      <div class="arrive-account">
        {{ renderReminderItems.desc }}
      </div>
    </div>
    <Divider />
    <div class="render-content" v-if="renderReminderItems.info.length === 0">
      <div v-for="(item, index) in renderReminderItems.date" :key="index">
        <div v-if="renderReminderItems.info.length === 0">
          {{ item }}
        </div>
        <Divider />
      </div>
    </div>
    <div class="render-content" v-else>
      <Tree :data="renderReminderItemsInfo" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AttdanceReminder',
  components: {},
  props: {
    renderReminderItems: {
      type: Object,
      default: () => {}
    },
    renderReminderItemsInfo: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="less" scoped>
.reminder {
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  .reminder-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 560;
    .punch-time {
      flex: 3;
      margin-left: 1.2rem;
    }
    .arrive-account {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
