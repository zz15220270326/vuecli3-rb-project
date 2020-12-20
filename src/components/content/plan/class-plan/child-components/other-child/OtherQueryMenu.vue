<!--
 * @Author: 张先生
 * @Date: 2020-12-18 21:29:43
 * @LastEditTime: 2020-12-20 12:45:29
 * @FilePath: \langyun_manager\src\components\content\plan\class-plan\child-components\other-child\OtherQueryMenu.vue
-->
<template>
  <query-menu>
    <div slot="first" class="first">
      <select-menu
        :listTitle="classTitle"
        :listItems="classList"
        @handleSelect="selectClass"
      />
      <select-menu
        :listTitle="commentStatusTitle"
        :listItems="commentStatusList"
        @handleSelect="selectCommentStatus"
      />
    </div>
    <div slot="second" class="second">
      <Button type="primary" @click="searchItems">
        查询
      </Button>
      <Button type="error" :disabled="false" @click="deleteItems">
        删除
      </Button>
    </div>
    <div slot="third" class="third">
      <Button type="warning" @click.native="createPlan">
        创建计划
        <Icon type="md-add" />
      </Button>
    </div>
  </query-menu>
</template>

<script>
// ? improt components
// ? 1. query-menu
const QueryMenu = () => import('@common/query-menu/Querymenu')
// ? 2. select-menu
const SelectMenu = () => import('@common/select-menu/SelectMenu')
// ? import mixins
import classMixins from '@mixins/Common/classMixins'
import commentStatusMixin from '@mixins/plan/commentStatusMixin'
import otherMenuMixin from '@mixins/plan/opMenuMixin'

export default {
  name: 'OtherQueryMenu',
  components: {
    QueryMenu,
    SelectMenu
  },
  mixins: [classMixins, commentStatusMixin, otherMenuMixin],
  props: {},
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
.query-menu {
  margin: 1.2rem 0;
  padding: 1.2rem 0;
  background-color: #fff;
  .full_flex();
  .first {
    flex: 1;
    .full_flex();
    .select-menu {
      margin-left: 0.8rem;
    }
  }
  .second {
    flex: 1;
    .ivu-btn {
      margin-left: 0.8rem;
      width: 5rem;
      opacity: 0.9;
    }
  }
  .third {
    flex: 1;
    text-align: right;
    margin-right: 2rem;
  }
}
</style>
