<template>
  <Table :columns="tableTitlesArr" :data="tableContentArr">
    <template slot-scope="{ row }" slot="shouldArriveDays">
      <div v-if="row.shouldArriveDays.count !== 0">
        <a @click="handleShouldArriveDays(row.shouldArriveDays)">
          {{ row.shouldArriveDays.count }}
        </a>
      </div>
      <div v-else>
        {{ row.shouldArriveDays.count }}
      </div>
    </template>
    <template slot-scope="{ row }" slot="actuallyArriveDays">
      <div v-if="row.actuallyArriveDays.count !== 0">
        <a @click="handleActuallyArriveDays(row.actuallyArriveDays)">
          {{ row.actuallyArriveDays.count }}
        </a>
      </div>
      <div v-else>
        {{ row.actuallyArriveDays.count }}
      </div>
    </template>
    <template slot-scope="{ row }" slot="overTimeHours">
      <div v-if="row.overTimeHours.count !== 0">
        <a @click="handleOvertimeHour(row.overTimeHours)">
          {{ row.overTimeHours.count }}
        </a>
      </div>
      <div v-else>
        {{ row.overTimeHours.count }}
      </div>
    </template>
    <template slot-scope="{ row }" slot="absenceTimes">
      <div v-if="row.absenceTimes.count !== 0">
        <a @click="handleAbsenceTimes(row.absenceTimes)">
          {{ row.absenceTimes.count }}
        </a>
      </div>
      <div v-else>
        {{ row.absenceTimes.count }}
      </div>
    </template>
    <template slot-scope="{ row }" slot="leaveHours">
      <div v-if="row.leaveHours.count !== 0">
        <a @click="handleLeaveHours(row.leaveHours)">
          {{ row.leaveHours.count }}
        </a>
      </div>
      <div v-else>{{ row.leaveHours.count }}</div>
    </template>
    <template slot-scope="{ row }" slot="lateTimes">
      <div v-if="row.lateTimes.count !== 0">
        <a @click="handleLateTimes(row.lateTimes)">
          {{ row.lateTimes.count }}
        </a>
      </div>
      <div v-else>{{ row.lateTimes.count }}</div>
    </template>
    <template slot-scope="{ row }" slot="earlyTimes">
      <div v-if="row.earlyTimes.count !== 0">
        <a @click="handleEarlyTimes(row.earlyTimes)">
          {{ row.earlyTimes.count }}
        </a>
      </div>
      <div v-else>
        {{ row.earlyTimes.count }}
      </div>
    </template>
    <template slot-scope="{ row }" slot="outHours">
      <div v-if="row.outHours.count !== 0">
        <a @click="handleOutHours(row.outHours)">
          {{ row.outHours.count }}
        </a>
      </div>
      <div v-else>
        {{ row.outHours.count }}
      </div>
    </template>
  </Table>
</template>

<script>
export default {
  name: 'ReportTableContent',
  components: {},
  props: {
    tableTitlesArr: {
      type: Array,
      default: () => []
    },
    tableContentArr: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleShouldArriveDays(item) {
      this.$emit('handleShouldArriveDays', item)
    },
    handleActuallyArriveDays(item) {
      this.$emit('handleActuallyArriveDays', item)
    },
    handleOvertimeHour(item) {
      this.$emit('handleOvertimeHour', item)
    },
    handleAbsenceTimes(item) {
      this.$emit('handleAbsenceTimes', item)
    },
    handleLeaveHours(item) {
      this.$emit('handleLeaveHours', item)
    },
    handleLateTimes(item) {
      this.$emit('handleLateTimes', item)
    },
    handleEarlyTimes(item) {
      this.$emit('handleEarlyTimes', item)
    },
    handleOutHours(item) {
      this.$emit('handleOutHours', item)
    }
  }
}
</script>

<style lang="less" scoepd></style>
