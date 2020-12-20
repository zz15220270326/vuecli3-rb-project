<template>
  <div class="add-content">
    <div class="ablum-name">
      <div class="tag">
        <Tag color="lime" size="large">相册名称</Tag>
      </div>
      <div class="content">
        <Input v-model="ablumName" placeholder="相册名称 (不超过10个字) " />
      </div>
    </div>
    <div class="categories">
      <div class="tag">
        <Tag color="orange" size="large">相册分类</Tag>
      </div>
      <div class="content">
        <RadioGroup v-model="category">
          <Radio label="幼儿作品"></Radio>
          <Radio label="活动风采"></Radio>
        </RadioGroup>
      </div>
    </div>
    <div class="current-class">
      <div class="tag">
        <Tag color="blue" size="large">所在班级</Tag>
      </div>
      <div class="content">
        <long-select :propList="classList" />
      </div>
    </div>
    <div class="sync-show">
      <div class="tag">
        <Tag color="pink" size="large">同步显示</Tag>
      </div>
      <div class="content">
        <div class="class-card">
          <Checkbox v-model="isShowInClass">允许在班牌中显示</Checkbox>
          <long-select :propList="classCardList" />
        </div>
        <div class="garden-card">
          <Checkbox v-model="isShowInGarden">允许在园牌中显示</Checkbox>
          <long-select :propList="gardenCardList" :isMultiple="true" />
        </div>
      </div>
    </div>
    <div class="add-operations">
      <Button
        v-for="(item, key) in operations"
        :key="key"
        :type="item.type"
        @click.native="handleAddContent(key)"
      >
        {{ item.tag }}
      </Button>
    </div>
  </div>
</template>

<script>
// ? import components
const LongSelect = () => import('@common/select-menu/LongSelect')

// ? import mixins
import classMixins from '@mixins/Common/classMixins'
import getClassCardMixin from '@mixins/class-management/getClassCardMixin'
import getGardenCardMixin from '@mixins/class-management/getGardenCardMixin'

export default {
  name: 'AddContent',

  components: {
    LongSelect
  },

  mixins: [classMixins, getClassCardMixin, getGardenCardMixin],

  data: () => ({
    ablumName: '',
    category: '幼儿作品',
    currentClass: '',
    isShowInClass: false,
    isShowInGarden: false,
    // ? operations
    operations: [
      {
        tag: '确认新增',
        type: 'primary'
      },
      {
        tag: '取消新增',
        type: 'error'
      }
    ]
  }),

  props: {},

  computed: {},

  methods: {
    handleAddContent(currentIndex) {
      switch (currentIndex) {
        case 0:
          if (this.ablumName === '') {
            this.$Message.warning('请输入相册名称')
          } else {
            this.$Message.success('新增成功')
            this.$emit('addAblum')
            this.ablumName = ''
          }
          break
        case 1:
          this.$Message.warning('您取消了本次操作')
          this.$emit('cancelAdd')
          break
      }
    }
  }
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
  height: 30rem;
  .ablum-name {
    margin-top: 1.2rem;
    .full_flex();
    .tag {
      flex: 4;
      text-align: right;
      margin-right: 2rem;
    }
    .content {
      flex: 7;
      .full_flex();
      margin-right: 10rem;
    }
  }
  .categories {
    margin-top: 1.2rem;
    .full_flex();
    .tag {
      flex: 4;
      text-align: right;
      margin-right: 2rem;
    }
    .content {
      flex: 7;
      .full_flex();
      margin-right: 10rem;
    }
  }
  .current-class {
    margin-top: 1.2rem;
    .full_flex();
    .tag {
      flex: 4;
      text-align: right;
      margin-right: 2rem;
    }
    .content {
      flex: 7;
      .full_flex();
      margin-right: 10rem;
    }
  }
  .sync-show {
    margin-top: 1.2rem;
    .full_flex();
    .tag {
      flex: 4;
      text-align: right;
      margin-right: 2rem;
    }
    .content {
      flex: 7;
      text-align: center;
      margin-right: 10rem;
      .class-card {
        margin-top: 1.2rem;
        .full_flex();
        justify-content: space-evenly;
      }
      .garden-card {
        margin-top: 1.2rem;
        .full_flex();
        justify-content: space-evenly;
      }
    }
  }
  .add-operations {
    margin-top: 3.6rem;
    text-align: center;
    .ivu-btn {
      margin: 0 0.8rem;
    }
  }
}
</style>
