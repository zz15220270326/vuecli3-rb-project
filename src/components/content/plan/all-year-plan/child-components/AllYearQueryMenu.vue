<!--
 * @Author: 张先生
 * @Date: 2020-12-12 10:54:15
 * @LastEditTime: 2020-12-20 13:17:55
 * @FilePath: \langyun_manager\src\components\content\plan\all-year-plan\child-components\AllYearQueryMenu.vue
-->
<template>
  <Querymenu>
    <div slot="first" class="first">
      <!-- year-info -->
      <select-menu
        :listTitle="classTitle"
        :listItems="classList"
        @handleSelect="selectClass"
      />
      <select-menu
        :listTitle="yearTitle"
        :listItems="yearList"
        @handleSelect="selectYear"
      />
    </div>
    <!-- <div slot="second" class="second"></div> -->
    <div slot="third" class="third">
      <Button
        v-for="(item, key) in operations"
        :key="key"
        :type="item.type"
        @click.native="handleAll(item.tag)"
      >
        {{ item.tag }}
      </Button>
    </div>
    <div slot="fourth" class="fourth">
      <Button type="warning" @click.native="addYearPlan">
        创建教学计划
        <Icon type="md-add" />
      </Button>
    </div>
  </Querymenu>
</template>

<script>
// ? import components
// ? 1. query-menu
import Querymenu from '@common/query-menu/Querymenu'
// ? 2. select-menu
import SelectMenu from '@common/select-menu/SelectMenu'
// ? import mixins
import classMixins from '@mixins/Common/classMixins'
import yearMixins from '@mixins/Common/yearMixins'
import menuCommonMixin from '@mixins/plan/menuCommonMixin'

export default {
  name: 'AllYearQueryMenu',
  components: {
    Querymenu,
    SelectMenu
  },
  mixins: [classMixins, yearMixins, menuCommonMixin],
  props: {},
  methods: {
    addYearPlan() {
      this.$emit('addYearPlan')
    }
  }
}
</script>

<style lang="less" scoped>
.flex_format() {
  display: flex;
  justify-content: center;
  align-items: center;
}

.query-menu {
  background-color: #fff;
  color: #666;
  margin-top: 1.2rem;
  width: 100%;
  display: flex;
  .first {
    flex: 1;
    .flex_format();
    padding: 1.2rem;
  }
  .second {
    flex: 2;
    margin-top: 1.2rem;
  }
  .third {
    flex: 1;
    margin-top: 1.2rem;
    .ivu-btn {
      margin-left: 0.6rem;
      width: 5rem;
    }
  }
  .fourth {
    flex: 1;
    margin-top: 0.2rem;
    .flex_format();
  }
}
</style>
