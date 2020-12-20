<template>
  <Card class="add-situation">
    <div class="current-class">
      <div class="tag">
        <Tag color="lime">
          所在班级:
        </Tag>
      </div>
      <long-select :propList="classList" @handleSelect="selectClassIndex" />
    </div>
    <div class="children-name">
      <div class="tag">
        <Tag color="lime">
          幼儿姓名:
        </Tag>
      </div>
      <long-select :propList="studentList" @handleSelect="selectStuIndex" />
    </div>
    <div class="accident-name">
      <div class="tag">
        <Tag color="lime">
          状况名称:
        </Tag>
      </div>
      <div class="content">
        <Input v-model="accidentName" />
      </div>
    </div>
    <div class="enviroment">
      <div class="tag">
        <Tag color="lime">
          发生场景:
        </Tag>
      </div>
      <div class="content">
        <Input
          v-model="enviroment"
          type="textarea"
          :rows="5"
          show-word-limit
          maxlength="300"
        />
      </div>
    </div>
    <div class="situation">
      <div class="tag">
        <Tag color="lime">
          处理情况:
        </Tag>
      </div>
      <div class="content">
        <Input
          v-model="situation"
          type="textarea"
          :rows="5"
          show-word-limit
          maxlength="300"
        />
      </div>
    </div>
    <div class="teacher">
      <div class="tag"><Tag color="lime">教师姓名:</Tag></div>
      <long-select :propList="teacherList" @handleSelect="selectTchIndex" />
    </div>
    <div class="imgs">
      <div class="tag">
        <Tag color="lime">
          状况图片:
        </Tag>
      </div>
      <div class="content">
        <Upload
          :show-upload-list="true"
          :format="['jpg', 'jpeg', 'png']"
          :max-size="2048"
          multiple
          action="#"
          type="drag"
          style="display: inline-block;width:58px;"
          :transfer="false"
        >
          <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="ios-camera" size="20"></Icon>
          </div>
        </Upload>
      </div>
    </div>
  </Card>
</template>

<script>
// ? common components
const LongSelect = () => import('@common/select-menu/LongSelect')

export default {
  name: 'AddSituation',
  components: {
    LongSelect
  },
  data: () => ({
    accidentName: '',
    enviroment: '',
    situation: '',
    imgsList: []
  }),
  props: {
    classList: {
      type: Array,
      default: () => []
    },
    studentList: {
      type: Array,
      default: () => []
    },
    teacherList: {
      type: Array,
      default: () => []
    },
    // ? prop-data
    propAccidentName: {
      type: String,
      default: ''
    },
    propEnviroment: {
      type: String,
      default: ''
    },
    propSituation: {
      type: String,
      default: ''
    },
    propImgsList: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    // newValue Oldvalue
    propAccidentName(newV) {
      this.accidentName = newV
    },
    propEnviroment(newV) {
      this.enviroment = newV
    },
    propSituation(newV) {
      this.situation = newV
    },
    propImgsList(newV) {
      this.imgsList = newV
    }
  },
  methods: {
    selectClassIndex(index) {
      this.$emit('selectClassIndex', index)
    },
    selectStuIndex(index) {
      this.$emit('selectStuIndex', index)
    },
    selectTchIndex(index) {
      this.$emit('selectTchIndex', index)
    }
  },
  mounted() {},
  updated() {}
}
</script>

<style lang="less" scoped>
.add-situation {
  height: 34rem;
  margin-top: 1.2rem;
  overflow-y: scroll;
  background-color: pink;
  .current-class {
    margin: 1.2rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 4;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .select-menu {
      flex: 7;
      padding-right: 2rem;
    }
  }
  .children-name {
    margin: 1.2rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 4;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .select-menu {
      flex: 7;
      padding-right: 2rem;
    }
  }
  .accident-name {
    margin: 1.2rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 4;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .content {
      flex: 7;
      padding-right: 2rem;
    }
  }
  .enviroment {
    margin: 1.2rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 4;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .content {
      flex: 7;
      padding-right: 2rem;
    }
  }
  .situation {
    margin: 1.2rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 4;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .content {
      flex: 7;
      padding-right: 2rem;
    }
  }
  .teacher {
    margin: 1.2rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 4;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .select-menu {
      flex: 7;
      padding-right: 2rem;
    }
  }
  .imgs {
    margin: 1.8rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 4;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .content {
      flex: 7;
      padding-right: 2rem;
    }
  }
}
</style>
