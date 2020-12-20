<template>
  <div class="add-specialty">
    <div class="header">
      <div class="left">选择教师</div>
      <div class="right">
        <select-menu />
        <select-menu />
      </div>
    </div>
    <div class="body">
      <div class="left">
        <div class="career">
          <span>当前职位</span>
          <Input />
        </div>
        <div class="birthDate">
          <span>出生日期</span>
          <Input />
        </div>
        <div class="moto">
          <span>教育格言</span>
          <Input />
        </div>
        <div class="introduce">
          <span>教师简介</span>
          <Input type="textarea" :rows="5" />
        </div>
        <div class="avatar">
          <span>教师图片</span>
        </div>
      </div>
      <div class="right">
        <Avatar
          shape="circle"
          src="https://i.loli.net/2017/08/21/599a521472424.jpg"
          size="80"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SelectMenu from '@common/select-menu/SelectMenu.vue'
export default {
  name: 'AddSpecialty',
  components: {
    SelectMenu
  }
}
</script>

<style lang="less" scoped>
.add-specialty {
  height: 25rem;
  .header {
    background-color: #fff;
    width: 70%;
    margin: 1rem 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .left {
      flex: 1.5;
      padding: 0.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .right {
      flex: 1;
      text-align: left;
      margin-right: 0.5rem;
    }
  }
  .body {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .left {
      flex: 3;
      .career {
        width: 100%;
        :first-child {
          font-size: 0.9rem;
          margin-left: 1.5rem;
        }
        :last-child {
          margin-left: 0.6rem;
          width: 22.5rem;
        }
      }
      .birthDate {
        width: 100%;
        margin-top: 0.8rem;
        :first-child {
          font-size: 0.9rem;
          margin-left: 1.5rem;
        }
        :last-child {
          margin-left: 0.6rem;
          width: 22.5rem;
        }
      }
      .moto {
        width: 100%;
        margin-top: 0.8rem;
        :first-child {
          font-size: 0.9rem;
          margin-left: 1.5rem;
        }
        :last-child {
          margin-left: 0.6rem;
          width: 22.5rem;
        }
      }
      .introduce {
        width: 100%;
        margin-top: 0.8rem;
        :first-child {
          font-size: 0.9rem;
          margin-left: 1.5rem;
        }
        :last-child {
          margin-left: 0.6rem;
          width: 22.5rem;
        }
      }
      .avatar {
        width: 100%;
        margin-top: 0.8rem;
        :first-child {
          font-size: 0.9rem;
          margin-left: 1.5rem;
        }
      }
    }
    .right {
      flex: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10rem;
    }
  }
}
</style>
