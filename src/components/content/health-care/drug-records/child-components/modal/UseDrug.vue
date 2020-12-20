<template>
  <div class="use-drug">
    <div class="date">
      <div class="tag">服药时间:</div>
      <div class="content">
        <exact-date :exactDateHolder="drugTime" />
      </div>
    </div>
    <div class="input">
      <div class="tag">备注:</div>
      <div class="content">
        <Input
          :placeholder="note"
          maxlength="1000"
          v-model="inputNote"
          type="textarea"
          :rows="6"
        />
      </div>
    </div>
  </div>
</template>

<script>
// ? import components
const ExactDate = () => import('@common/exact-date/ExactDate')

export default {
  name: 'UseDrug',
  components: {
    ExactDate
  },
  data: () => ({
    inputNote: ''
  }),
  props: {
    drugTime: {
      type: String,
      default: ''
    },
    note: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.use-drug {
  height: 28rem;
  width: 100%;
  .date {
    width: 100%;
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 3;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.93rem;
      font-weight: 500;
    }
    .content {
      flex: 7;
      font-size: 1rem;
      font-weight: 560;
    }
  }
  .input {
    width: 100%;
    margin: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 3;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.93rem;
      font-weight: 500;
    }
    .content {
      flex: 7;
      font-size: 1rem;
      font-weight: 560;
      margin-right: 2rem;
      margin-top: 3rem;
    }
  }
}
</style>
