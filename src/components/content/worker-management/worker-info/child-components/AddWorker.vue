<template>
  <div class="add-worker">
    <div class="header">
      <Button
        v-for="(item, index) in selectInfo"
        :key="index"
        :type="item.type"
        @click.native="switchInfo(index)"
      >
        {{ item.tag }}
      </Button>
    </div>
    <div class="body">
      <div v-show="currentIndex === 0" class="base-info">
        <div class="left-content">
          <div class="name">
            <div class="name-tag">姓名</div>
            <div class="name-input">
              <Input v-model="inputName" />
            </div>
          </div>
          <div class="phone">
            <div class="phone-tag">手机号</div>
            <div class="phone-input">
              <Input v-model="inputPhone" />
            </div>
          </div>
          <div class="gender">
            <div class="gender-span">性别</div>
            <div class="gender-select">
              <RadioGroup v-model="gender">
                <Radio label="男"></Radio>
                <Radio label="女"></Radio>
              </RadioGroup>
            </div>
          </div>
          <div class="manage-class">
            <div class="manage-class-span">负责班级</div>
            <div class="manage-class-select">
              <CheckboxGroup v-model="selectClassList">
                <Checkbox label="朗云小班"></Checkbox>
                <Checkbox label="朗云3班中班级"></Checkbox>
                <Checkbox label="计算机201"></Checkbox>
              </CheckboxGroup>
            </div>
          </div>
          <div class="current-career">
            <div class="current-career-span">当前职位</div>
            <div class="current-career-select">
              <Select v-model="selectCareer" style="width:200px">
                <Option
                  v-for="item in careerList"
                  :value="item.value"
                  :key="item.value"
                >
                  {{ item.label }}
                </Option>
              </Select>
            </div>
          </div>
          <div class="attdance-number">
            <div class="attdance-number-span">考勤卡号</div>
            <div class="attdance-number-input">
              <Input v-model="attdanceNumberInput" />
            </div>
          </div>
        </div>
        <div class="right-content">
          <Upload :multiple="false" type="drag" action="#">
            <div class="upload-content" style="padding: 25px 10px">
              <Avatar
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606300912549&di=989454deb34aaea4d35fa469344393a5&imgtype=0&src=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F06%2FMonkey-PNG-Image.png"
                size="150"
              />
              <div class="notice">
                点击选择文件上传, 可以拖拽到此处上传
              </div>
            </div>
          </Upload>
        </div>
      </div>
      <div v-show="currentIndex === 1" class="detail-info">
        <div class="birth-date">
          <div class="tag">出生日期</div>
          <div class="content"><birth-date /></div>
        </div>
        <div class="entry-date">
          <div class="tag">入职日期</div>
          <div class="content">
            <entry-date />
          </div>
        </div>
        <div class="edu-moto">
          <div class="tag">教育格言</div>
          <div class="content">
            <Input v-model="eduMoto" />
          </div>
        </div>
        <div class="teacher-introduce">
          <div class="tag">教师简介</div>
          <div class="content">
            <Input type="textarea" :rows="4" v-model="teacherIntroduce" />
          </div>
        </div>
        <div class="upload-images">
          <div class="tag">个人照片</div>
          <div class="content">
            <Upload action="//jsonplaceholder.typicode.com/posts/">
              <Button type="primary" icon="ios-cloud-upload-outline">
                Upload files
              </Button>
            </Upload>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// ? common components
const BirthDate = () => import('@common/birth-date/BirthDate')
const EntryDate = () => import('@common/entry-date/EntryDate')

export default {
  name: 'AddWorker',
  components: {
    BirthDate,
    EntryDate
  },
  data: () => ({
    inputName: '',
    inputPhone: '',
    attdanceNumberInput: '',
    currentIndex: 0,
    gender: '男',
    eduMoto: '',
    teacherIntroduce: '',
    selectClassList: ['朗云小班'],
    careerList: [
      {
        value: '园所管理员',
        label: '园所管理员'
      },
      {
        value: '主班教师',
        label: '主班教师'
      },
      {
        value: '配班',
        label: '配班'
      },
      {
        value: '体育教师',
        label: '体育教师'
      },
      {
        value: '开发专用角色',
        label: '开发专用角色'
      },
      {
        value: '测试主任',
        label: '测试主任'
      }
    ],
    selectCareer: ''
  }),
  props: {
    selectInfo: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    switchInfo(index) {
      this.currentIndex = index
      this.$emit('switchInfo', this.currentIndex)
    }
  }
}
</script>

<style lang="less" scoped>
.add-worker {
  height: 25rem;
  overflow-y: scroll;
  .header {
    .ivu-btn {
      width: 5.4rem;
      margin: 0 0.5rem;
    }
  }
  .body {
    margin-top: 1.2rem;
    width: 100%;
    background-color: pink;
    color: #777;
    .base-info {
      padding-top: 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .left-content {
        flex: 1;
        .name {
          display: flex;
          justify-content: center;
          align-items: center;
          .name-tag {
            flex: 2;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .name-input {
            flex: 5;
          }
        }
        .phone {
          margin-top: 0.8rem;
          display: flex;
          justify-content: center;
          align-items: center;
          .phone-tag {
            flex: 2;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .phone-input {
            flex: 5;
          }
        }
        .gender {
          margin-top: 0.8rem;
          display: flex;
          justify-content: center;
          align-items: center;
          .gender-span {
            flex: 2;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .gender-select {
            flex: 5;
          }
        }
        .manage-class {
          margin-top: 0.8rem;
          display: flex;
          justify-content: center;
          align-items: center;
          .manage-class-span {
            flex: 2;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .manage-class-select {
            flex: 5;
          }
        }
        .current-career {
          margin-top: 0.8rem;
          display: flex;
          justify-content: center;
          align-items: center;
          .current-career-span {
            flex: 2;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .current-career-select {
            flex: 5;
          }
        }
        .attdance-number {
          margin-top: 0.8rem;
          padding-bottom: 0.8rem;
          display: flex;
          justify-content: center;
          align-items: center;
          .attdance-number-span {
            flex: 2;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .attdance-number-input {
            flex: 5;
          }
        }
      }
      .right-content {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        .avatar-upload {
          // .upload-content {
          //   padding: 25px 10px;
          // }
          .notice {
            color: skyblue;
          }
        }
      }
    }
    .detail-info {
      .birth-date {
        padding-top: 0.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .tag {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .content {
          flex: 5;
        }
      }
      .entry-date {
        padding-top: 0.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .tag {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .content {
          flex: 5;
        }
      }
      .edu-moto {
        padding-top: 0.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .tag {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .content {
          flex: 5;
          padding-right: 0.5rem;
        }
      }
      .teacher-introduce {
        padding-top: 0.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .tag {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .content {
          flex: 5;
          padding-right: 0.5rem;
        }
      }
      .upload-images {
        padding: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .tag {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .content {
          flex: 5;
          padding-right: 0.5rem;
        }
      }
    }
  }
}
</style>
