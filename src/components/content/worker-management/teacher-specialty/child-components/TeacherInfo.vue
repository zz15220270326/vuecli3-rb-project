<template>
  <div class="teacher-info" v-if="checkedTeacher !== {}">
    <div class="base-info">
      <div class="avatar">
        <img :src="checkedTeacher.img_url" alt="" />
      </div>
      <div class="base">
        <div>姓名: {{ checkedTeacher.name }}</div>
        <div>职位: {{ checkedTeacher.identify }}</div>
        <div>年龄: {{ checkedTeacher.age }}</div>
        <div>教育格言: &nbsp;</div>
      </div>
    </div>
    <div class="introduce">
      <div class="title">个人简介</div>
      <div class="content">ss1</div>
    </div>
    <div class="images">
      <div class="title">个人照片:</div>
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeacherInfo',
  props: {
    checkedTeacher: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="less" scoped>
.flex() {
  display: flex;
  justify-content: center;
  align-items: center;
}
.teacher-info {
  height: 25rem;
  width: 100%;
  color: #666;
  .base-info {
    width: 50%;
    height: 10rem;
    .flex();
    .avatar {
      flex: 1;
      .flex();
      img {
        height: 6rem;
        width: 6rem;
      }
    }
    .base {
      flex: 2;
      font-size: 1rem;
      padding-left: 1.2rem;
    }
  }
  .introduce {
    margin-top: 0.8rem;
    .title {
      font-size: 1.2rem;
    }
    .content {
      color: cyan;
    }
  }
  .images {
    margin-top: 0.8rem;
    .title {
      font-size: 1.2rem;
    }
    .content {
      color: cyan;
    }
  }
}
</style>
