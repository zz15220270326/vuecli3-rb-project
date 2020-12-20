<template>
  <Card class="accident-info">
    <div class="class">
      <div class="tag">所在班级:</div>
      <div class="content">{{ currentClass }}</div>
    </div>
    <div class="name">
      <div class="tag">幼儿姓名:</div>
      <div class="content">{{ name }}</div>
    </div>
    <div class="accident-name">
      <div class="tag">状况名称:</div>
      <div class="content">{{ accidentName }}</div>
    </div>
    <div class="enviroment">
      <div class="tag">发生场景:</div>
      <div class="content">{{ enviroment }}</div>
    </div>
    <div class="situation">
      <div class="tag">处理情况:</div>
      <div class="content">{{ situation }}</div>
    </div>
    <div class="teacher">
      <div class="tag">当班教师:</div>
      <div class="content">{{ teacher }}</div>
    </div>
    <div class="imgs">
      <div class="tag">状况图片:</div>
      <div class="content">
        <div class="img" v-for="(item, index) in imgs" :key="index">
          <img :src="item" alt="" />
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {
  name: 'AccidentInfo',
  props: {
    currentClass: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    accidentName: {
      type: String,
      default: ''
    },
    enviroment: {
      type: String,
      default: ''
    },
    situation: {
      type: String,
      default: ''
    },
    teacher: {
      type: String,
      default: ''
    },
    imgs: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="less" scoped>
.accident-info {
  height: 28rem;
  width: 100%;
  .class {
    width: 100%;
    margin-top: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 3;
      width: 100%;
      text-align: right;
      margin-right: 1.2rem;
    }
    .content {
      flex: 7;
      font-weight: 560;
      font-size: 1.25rem;
    }
  }
  .name {
    width: 100%;
    margin-top: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 3;
      width: 100%;
      text-align: right;
      margin-right: 1.2rem;
    }
    .content {
      flex: 7;
      font-weight: 560;
      font-size: 1.25rem;
    }
  }
  .accident-name {
    width: 100%;
    margin-top: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 3;
      width: 100%;
      text-align: right;
      margin-right: 1.2rem;
    }
    .content {
      flex: 7;
      font-weight: 560;
      font-size: 1.25rem;
    }
  }
  .enviroment {
    width: 100%;
    margin-top: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 3;
      width: 100%;
      text-align: right;
      margin-right: 1.2rem;
    }
    .content {
      flex: 7;
      font-weight: 560;
      font-size: 1.25rem;
    }
  }
  .situation {
    width: 100%;
    margin-top: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 3;
      width: 100%;
      text-align: right;
      margin-right: 1.2rem;
    }
    .content {
      flex: 7;
      font-weight: 560;
      font-size: 1.25rem;
    }
  }
  .teacher {
    width: 100%;
    margin-top: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 3;
      width: 100%;
      text-align: right;
      margin-right: 1.2rem;
    }
    .content {
      flex: 7;
      font-weight: 560;
      font-size: 1.25rem;
    }
  }
  .imgs {
    width: 100%;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 3;
      width: 100%;
      text-align: right;
      margin-right: 1.2rem;
    }
    .content {
      flex: 7;
      font-weight: 560;
      font-size: 1.3rem;
      width: 100%;
      display: flex;
      justify-content: left;
      align-items: center;
      .img {
        margin: 0 0.5rem;
        width: 6rem;
        height: 6rem;
        img {
          width: 6rem;
          height: 6rem;
        }
      }
    }
  }
}
</style>
