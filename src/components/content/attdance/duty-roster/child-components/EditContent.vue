<template>
  <div class="edit-content">
    <div class="teacher-name">
      <div class="tag">教师姓名</div>
      <div class="input">
        <Input :placeholder="checkedTeacherName" />
      </div>
    </div>
    <div class="date">
      <div class="tag">日期</div>
      <div class="input">
        <Input :placeholder="checkedDate" />
      </div>
    </div>
    <div class="class">
      <div class="tag">当前班次</div>
      <div class="input">
        <Input :placeholder="currentClass" />
      </div>
    </div>
    <div class="select-class">
      <div class="tag">调整班次为</div>
      <div class="select">
        <select-menu
          :listTitle="updateClassTitle"
          :listItems="updateClassList"
          @handleSelect="handleSelect"
        />
      </div>
    </div>
    <div class="note">
      <div>备注: 班次调整后, 立即生效</div>
    </div>
  </div>
</template>

<script>
// ? common components
const SelectMenu = () => import('@common/select-menu/SelectMenu')

export default {
  name: 'EditContent',
  components: {
    SelectMenu
  },
  props: {
    checkedTeacherName: {
      type: String,
      default: ''
    },
    checkedDate: {
      type: String,
      default: ''
    },
    currentClass: {
      type: String,
      default: ''
    },
    updateClassTitle: {
      type: String,
      default: ''
    },
    updateClassList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleSelect(selectItem) {
      console.log(selectItem)
      this.$emit('handleSelect', selectItem)
    }
  }
}
</script>

<style lang="less" scoped>
.edit-content {
  width: 100%;
  height: 25rem;
  background-color: pink;
  .teacher-name {
    padding-top: 0.8rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 3;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .input {
      flex: 7;
    }
  }
  .date {
    padding-top: 0.8rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 3;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .input {
      flex: 7;
    }
  }
  .class {
    padding-top: 0.8rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 3;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .input {
      flex: 7;
    }
  }
  .select-class {
    padding-top: 0.8rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 3;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .select {
      flex: 7;
    }
  }
  .note {
    margin-top: 1.2rem;
    width: 100%;
    text-align: center;
  }
}
</style>
