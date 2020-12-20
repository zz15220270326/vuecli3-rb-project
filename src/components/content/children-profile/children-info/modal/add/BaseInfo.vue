<template>
  <Card>
    <div class="base-info">
      <div class="input">
        <div class="input-name">
          <div class="tag">姓名</div>
          <div class="content">
            <Input
              maxlength="8"
              show-word-limit
              size="default"
              style="width: 200px"
              v-model="name"
            />
          </div>
        </div>
        <div class="select-gender">
          <div class="tag">
            性别
          </div>
          <div class="content">
            <RadioGroup v-model="gender">
              <Radio label="男" />
              <Radio label="女" />
            </RadioGroup>
          </div>
        </div>
        <div class="nation">
          <div class="tag">民族</div>
          <div class="content">
            <select-menu
              :listTitle="nation"
              :listItems="nationList"
              @handleSelect="selectNation"
            />
          </div>
        </div>
        <div class="birth-date">
          <div class="tag">出生日期</div>
          <div class="content">
            <birth-date />
          </div>
        </div>
        <div class="entry-time">
          <div class="tag">入园日期</div>
          <div class="content">
            <entry-date />
          </div>
        </div>
        <div class="select-class">
          <div class="tag">所在班级</div>
          <div class="content">
            <select-menu
              :listTitle="classTitle"
              :listItems="classList"
              @handleSelect="selectClass"
            />
          </div>
        </div>
      </div>
      <div class="upload">
        <Upload
          :multiple="false"
          :format="['jpg', 'jpeg', 'png']"
          accept=".jpg, .jpeg, .png"
          :show-upload-list="false"
          :max-size="2048"
          :on-success="uploadAvatarSuccess"
          action="http://localhost:80"
          type="drag"
        >
          <div style="width: 100%;height:58px;line-height: 58px">
            <Icon type="ios-contact" size="36"></Icon>
          </div>
          <Tag color="lime">点击或拖拽上传头像</Tag>
        </Upload>
        <div class="img-list" v-show="imgList.length > 0"></div>
      </div>
    </div>
    <div class="parent-info" v-for="(item, key) in addList" :key="key">
      <div class="tag">家长信息</div>
      <div class="content">
        <div class="base">
          <div class="select-type">
            <select-menu
              :listTitle="item.pTitle"
              :listItems="item.pList"
              @handleSelect="updateTitle($event, key)"
            />
          </div>
          <div class="input">
            <Input
              placeholder="家长姓名"
              v-model="item.pName"
              style="width: 8rem;"
              @on-blur="pNameChange"
            />
            <Input
              placeholder="平台绑定手机"
              v-model="item.pPhone"
              type="tel"
              style="width: 12rem"
              maxlength="11"
            />
            <Input
              placeholder="考勤卡号"
              v-model="item.pCard"
              style="width: 8rem;"
            />
          </div>
          <div class="op">
            <Button
              :disabled="key === 0"
              type="error"
              icon="ios-trash-outline"
              size="large"
              @click.native="deleteParent(key)"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="add-parent-info">
      <Button type="default" icon="md-add" @click.native="addParent">
        添加家长信息
      </Button>
    </div>
  </Card>
</template>

<script>
// ? import components
const SelectMenu = () => import('@common/select-menu/SelectMenu')
const BirthDate = () => import('@common/birth-date/BirthDate')
const EntryDate = () => import('@common/entry-date/EntryDate')
// ? mock-data
const mockNationList = require('@mock/children-profile/mockNationList')

export default {
  name: 'BaseInfo',

  components: {
    SelectMenu,
    BirthDate,
    EntryDate
  },

  data: () => ({
    // ? 幼儿信息
    name: '',
    gender: '',
    nation: '',
    nationList: [],
    pList: [],
    // ? 图片信息
    imgList: [],
    // ? 父母信息列表
    addList: [
      {
        pTitle: '选择家长',
        pList: [
          {
            info: '选择家长',
            key: 0
          },
          {
            info: '父亲',
            key: 1
          },
          {
            info: '母亲',
            key: 2
          }
        ],
        pName: '',
        pPhone: '',
        pCard: '',
        pGender: ['男', '女']
      }
    ]
  }),

  props: {
    inputName: {
      type: String,
      default: ''
    },
    selectGender: {
      type: Array,
      default: () => []
    },
    nationArr: {
      type: Array,
      default: () => []
    },
    birthDate: {
      type: String,
      default: ''
    },
    entryTime: {
      type: String,
      default: ''
    },
    classTitle: {
      type: String,
      default: ''
    },
    classList: {
      type: Array,
      default: () => []
    },
    parentList: {
      type: Array,
      default: () => []
    }
  },

  watch: {
    parentList(newValue) {
      console.log(newValue)
      this.addList = newValue
    },
    nationArr(newValue) {
      this.nation = newValue[0].info
      this.nationList = newValue
    }
  },

  computed: {},

  methods: {
    updateTitle(item, key) {
      this.addList[key].pTitle = item
    },
    selectNation(item) {
      this.nation = item
    },
    selectClass(selectClass) {
      this.$emit('selectClass', selectClass)
    },
    addParent() {
      this.addList.push({
        pTitle: '选择家长',
        pList: [
          {
            info: '选择家长',
            key: 0
          },
          {
            info: '父亲',
            key: 1
          },
          {
            info: '母亲',
            key: 2
          }
        ],
        pName: '',
        pPhone: '',
        pCard: '',
        currentGender: '请选择性别',
        pGender: [
          {
            info: '请选择性别',
            key: 0
          },
          {
            info: '男',
            key: 1
          },
          {
            info: '女',
            key: 2
          }
        ]
      })
      this.$Message.success('添加成功')
      this.$emit('pNameChange', this.addList)
    },
    deleteParent(key) {
      this.addList.splice(key, 1)
      this.$Message.error('删除成功')
      this.$emit('pNameChange', this.addList)
    },
    pNameChange() {
      this.$emit('pNameChange', this.addList)
    },
    uploadAvatarSuccess() {
      this.$Message.success('上传成功')
    },
    // ? async functions
    getNation() {
      setTimeout(() => {
        const result = mockNationList
        if (result.msg === 'Success' && result.data) {
          const nationList = result.data
          this.nation = nationList[0].info
          this.nationList = nationList
        }
      }, 300)
    }
  },
  created() {
    this.getNation()
  }
}
</script>

<style lang="less" scoped>
.base-info {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .input {
    flex: 7;
    .input-name {
      margin-top: 0.8rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .tag {
        flex: 2;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .content {
        flex: 7;
        margin-right: 3rem;
      }
    }
    .select-gender {
      margin-top: 0.8rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .tag {
        flex: 2;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .content {
        flex: 7;
        margin-right: 3rem;
      }
    }
    .nation {
      margin-top: 0.8rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .tag {
        flex: 2;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .content {
        flex: 7;
        margin-right: 3rem;
      }
    }
    .birth-date {
      margin-top: 0.8rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .tag {
        flex: 2;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .content {
        flex: 7;
        margin-right: 3rem;
      }
    }
    .entry-time {
      margin-top: 0.8rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .tag {
        flex: 2;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .content {
        flex: 7;
        margin-right: 3rem;
      }
    }
    .select-class {
      margin-top: 0.8rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .tag {
        flex: 2;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .content {
        flex: 7;
        margin-right: 3rem;
      }
    }
  }
  .upload {
    flex: 3;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.parent-info {
  margin-top: 1.6rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .tag {
    flex: 3;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    flex: 17;
    .base {
      padding-top: 1rem;
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .select-type {
        flex: 1;
        margin: auto;
      }
      .input {
        flex: 6;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }
      .op {
        flex: 1;
        width: 100%;
        margin: auto;
        margin-left: 0.5rem;
      }
    }
  }
}

.add-parent-info {
  margin-top: 0.8rem;
  width: 100%;
  text-align: center;
}
</style>
