<template>
  <div class="edit-content">
    <div class="current-class">
      <div class="tag">
        <Tag>所在班级:</Tag>
      </div>
      <div class="content">
        <select-menu
          :listTitle="classTitle"
          :listItems="classList"
          @handleSelect="selectClass"
        />
      </div>
    </div>
    <div class="child-name">
      <div class="tag">
        <Tag>幼儿姓名:</Tag>
      </div>
      <div class="content">
        <select-menu
          :listTitle="selectName"
          :listItems="childrenList"
          @handleSelect="selectChildren"
        />
      </div>
    </div>
    <div class="select-month">
      <div class="tag">
        <Tag>幼儿姓名:</Tag>
      </div>
      <div class="content">
        <select-month />
      </div>
    </div>
    <div class="honner">
      <div class="tag">
        <Tag>获得荣誉:</Tag>
      </div>
      <div class="content">
        <Rate v-model="rate" />
      </div>
    </div>
    <div class="teacher-comment">
      <div class="tag">
        <Tag>教师评语:</Tag>
      </div>
      <div class="content">
        <Input
          type="textarea"
          :rows="6"
          maxlength="1000"
          :show-word-limit="true"
        />
      </div>
    </div>
    <div class="life-images">
      <div class="tag">
        <Tag>生活剪影:</Tag>
      </div>
      <div class="content">
        <img v-for="(item, key) in lifeImages" :key="key" :src="item" alt="" />
        <Upload
          ref="upload"
          :show-upload-list="true"
          :format="['jpg', 'jpeg', 'png']"
          :max-size="2048"
          multiple
          type="drag"
          action="//jsonplaceholder.typicode.com/posts/"
          style="display: inline-block;width:58px;"
        >
          <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="ios-add" size="20"></Icon>
          </div>
        </Upload>
      </div>
    </div>
  </div>
</template>

<script>
// ? import components
const SelectMenu = () => import('@common/select-menu/SelectMenu')
const SelectMonth = () => import('@common/select-month/SelectMonth')

// ? import mixins
import classInfoMixins from '@mixins/Common/classMixins'
import childrenNameMixin from '@mixins/children-profile/childrenNameMixin'
export default {
  name: 'EditContent',

  components: {
    SelectMenu,
    SelectMonth
  },

  mixins: [classInfoMixins, childrenNameMixin],

  data: () => ({
    rate: 0
  }),

  props: {
    honner: {
      type: Array,
      default: () => []
    },
    lifeImages: {
      type: Array,
      default: () => []
    },
    rateValue: {
      type: Number,
      default: 0
    }
  },

  watch: {
    rateValue(newValue) {
      this.rate = newValue
    }
  },

  computed: {},

  methods: {}
}
</script>

<style lang="less" scoped>
.edit-content {
  height: 30rem;
  overflow-y: scroll;
  padding: 1.2rem 0;
  .current-class {
    margin-top: 0.3rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 2.5;
      text-align: right;
      margin-right: 1.2rem;
    }
    .content {
      flex: 7;
    }
  }
  .child-name {
    margin-top: 1.2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 2.5;
      text-align: right;
      margin-right: 1.2rem;
    }
    .content {
      flex: 7;
    }
  }
  .select-month {
    margin-top: 1.2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 2.5;
      text-align: right;
      margin-right: 1.2rem;
    }
    .content {
      flex: 7;
    }
  }
  .honner {
    margin-top: 1.2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 2.5;
      text-align: right;
      margin-right: 1.2rem;
    }
    .content {
      flex: 7;
    }
  }
  .teacher-comment {
    margin-top: 1.2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 2.5;
      text-align: right;
      margin-right: 1.2rem;
    }
    .content {
      flex: 7;
    }
  }
  .life-images {
    margin-top: 1.2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .tag {
      flex: 2.5;
      text-align: right;
      margin-right: 1.2rem;
    }
    .content {
      flex: 7;
      img {
        height: 6rem;
        width: 6rem;
        margin: 0 0.6rem;
      }
    }
  }
}
</style>
