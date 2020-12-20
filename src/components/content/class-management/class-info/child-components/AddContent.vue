<template>
  <div class="add-content">
    <div class="class-name">
      <div class="tag">
        <Tag color="blue" size="large">班级名称</Tag>
      </div>
      <div class="content">
        <Input v-model="className" />
      </div>
    </div>
    <div class="children-count">
      <div class="tag">
        <Tag color="green" size="large">班级人数</Tag>
      </div>
      <div class="content">
        <InputNumber v-model="childrenCount" :min="0" :max="100" />
      </div>
    </div>
    <div class="entry-time">
      <div class="tag">
        <Tag color="pink" size="large">开学日期</Tag>
      </div>
      <div class="content">
        <exact-date />
      </div>
    </div>
    <div class="select-grade">
      <div class="tag">
        <Tag color="orange" size="large">选择年级</Tag>
      </div>
      <div class="content">
        <long-select :propList="gradeList" />
      </div>
    </div>
    <div class="select-teacher">
      <div class="tag">
        <Tag color="lime" size="large">选择老师</Tag>
      </div>
      <div class="content">
        <long-select :propList="teacherList" />
      </div>
    </div>
    <div class="class-slogan">
      <div class="tag">
        <Tag color="gold" size="large">班级口号</Tag>
      </div>
      <div class="content">
        <Input v-model="slogan" type="textarea" :rows="3" />
      </div>
    </div>
  </div>
</template>

<script>
// ? import components
const ExactDate = () => import('@common/exact-date/ExactDate')
const LongSelect = () => import('@common/select-menu/LongSelect')

// ? import mixins
import gradeMixins from '@mixins/Common/gradeMixins'
import teacherMixins from '@mixins/Common/teacherMixins'

export default {
  name: 'AddContent',

  components: {
    ExactDate,
    LongSelect
  },

  mixins: [gradeMixins, teacherMixins],

  data: () => ({
    className: '',
    childrenCount: 0,
    entryTime: '',
    grade: '',
    teacher: '',
    slogan: ''
  }),

  props: {
    editClassName: {
      type: String,
      default: ''
    },
    editChildrenCount: {
      type: Number,
      default: 0
    },
    editEntryTime: {
      type: String,
      default: ''
    },
    editGrade: {
      type: String,
      default: ''
    },
    editTeachers: {
      type: String,
      default: ''
    },
    editSlogan: {
      type: String,
      default: ''
    }
  },

  watch: {
    editClassName(newValue) {
      if (newValue !== '') {
        this.className = newValue
      } else {
        this.className = ''
      }
    },
    editChildrenCount(newValue) {
      if (newValue !== 0) {
        this.childrenCount = newValue
      } else {
        this.childrenCount = 0
      }
    },
    editEntryTime(newValue) {
      if (newValue !== '') {
        this.entryTime = newValue
      } else {
        this.entryTime = ''
      }
    },
    editGrade(newValue) {
      if (newValue !== '') {
        this.grade = newValue
      } else {
        this.grade = ''
      }
    },
    editTeachers(newValue) {
      if (newValue !== '') {
        this.teacher = newValue
      } else {
        this.teacher = ''
      }
    },
    editSlogan(newValue) {
      if (newValue !== '') {
        this.slogan = newValue
      } else {
        this.slogan = ''
      }
    }
  },

  computed: {},

  methods: {}
}
</script>

<style lang="less" scoped>
.full_flex() {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.add-content {
  height: 25rem;
  .class-name {
    margin: 0.8rem 0;
    .full_flex();
    .tag {
      flex: 3;
      text-align: right;
      margin-right: 2rem;
    }
    .content {
      flex: 7;
      margin-right: 8rem;
    }
  }
  .children-count {
    margin: 0.8rem 0;
    .full_flex();
    .tag {
      flex: 3;
      text-align: right;
      margin-right: 2rem;
    }
    .content {
      flex: 7;
      margin-right: 8rem;
    }
  }
  .entry-time {
    margin: 0.8rem 0;
    .full_flex();
    .tag {
      flex: 3;
      text-align: right;
      margin-right: 2rem;
    }
    .content {
      flex: 7;
      margin-right: 8rem;
    }
  }
  .select-grade {
    margin: 0.8rem 0;
    .full_flex();
    .tag {
      flex: 3;
      text-align: right;
      margin-right: 2rem;
    }
    .content {
      flex: 7;
      margin-right: 8rem;
    }
  }
  .select-teacher {
    margin: 0.8rem 0;
    .full_flex();
    .tag {
      flex: 3;
      text-align: right;
      margin-right: 2rem;
    }
    .content {
      flex: 7;
      margin-right: 8rem;
    }
  }
  .class-slogan {
    margin: 0.8rem 0;
    .full_flex();
    .tag {
      flex: 3;
      text-align: right;
      margin-right: 2rem;
    }
    .content {
      flex: 7;
      margin-right: 8rem;
    }
  }
}
</style>
