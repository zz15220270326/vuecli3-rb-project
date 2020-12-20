<template>
  <div class="teacher-special-content">
    <div class="teacher-card-wrapper">
      <div
        class="teacher-card"
        v-for="(item, index) in teacherInfo"
        :key="index"
        @mouseenter="showButton(index)"
        @mouseleave="hideButton(index)"
      >
        <div class="img-content" @click="checkInfo(index)">
          <img :src="item.img_url" />
          <div class="operations" v-show="item.showButton">
            <Button type="primary" @click.native="editItem($event, index)">
              编辑
            </Button>
            <Button type="error" @click.native="deleteItem($event, index)">
              删除
            </Button>
          </div>
        </div>
        <div class="text-content">
          <div class="top">
            <div class="name">{{ item.name }}</div>
            <div class="identify">{{ item.identify }}</div>
          </div>
          <div class="bottom">
            <div class="age">{{ item.age }}</div>
            <div class="manage-class">{{ item.manage_class }}</div>
            <Checkbox
              :value="teacherInfo.checked"
              @on-change="checkedItem($event, index)"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="page">
      <Page :total="totalPage" show-sizer show-elevator show-total />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeacherSpecialContent',
  props: {
    teacherInfo: {
      type: Array,
      default: () => []
    },
    totalPage: {
      type: Number,
      default: 0
    }
  },
  methods: {
    checkInfo(index) {
      this.$emit('checkInfo', index)
    },
    showButton(index) {
      this.$emit('showButton', index)
    },
    hideButton(index) {
      this.$emit('hideButton', index)
    },
    editItem(event, index) {
      this.$emit('editItem', event, index)
    },
    deleteItem(event, index) {
      this.$emit('deleteItem', event, index)
    },
    checkedItem(isChecked, index) {
      this.$emit('checkedItem', isChecked, index)
    }
  }
}
</script>

<style lang="less" scoped>
.teacher-special-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 1.2rem;
  height: 80vh;
  .teacher-card-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .teacher-card {
      width: 16%;
      height: 19.6rem;
      margin: 2rem 0.8rem;
      padding: 2rem 0;
      border-radius: 15%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background-color: #edecec;
      .img-content {
        .operations {
          position: absolute;
          .ivu-btn {
            margin: 0 0.3rem;
          }
        }
        flex: 5;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #edecec;
        img {
          margin-top: 1.2rem;
          width: 11rem;
          height: 11rem;
        }
      }
      .text-content {
        flex: 2;
        width: 100%;
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
        .top {
          margin: 0.5rem;
          flex: 1;
          width: 80%;
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          align-items: center;
          overflow: auto;
          .name {
            flex: 4;
            color: #333;
            font-size: 1.2rem;
          }
          .identify {
            flex: 1;
            width: 100%;
            color: orange;
            font-size: 1rem;
          }
        }
        .bottom {
          flex: 1;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          .age {
            flex: 1;
            font-size: 1rem;
            color: #999;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .manage-class {
            flex: 3;
            font-size: 1.2rem;
            text-align: right;
            color: #999;
          }
        }
      }
    }
  }
  .page {
    margin-top: 1.2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
