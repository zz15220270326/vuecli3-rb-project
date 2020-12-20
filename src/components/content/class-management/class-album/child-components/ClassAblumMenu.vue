<!--
 * @Author: 张先生
 * @Date: 2020-12-18 21:29:42
 * @LastEditTime: 2020-12-20 12:37:43
 * @FilePath: \langyun_manager\src\components\content\class-management\class-album\child-components\ClassAblumMenu.vue
-->
<template>
  <querymenu>
    <div slot="first" class="select">
      <select-menu
        :listTitle="classTitle"
        :listItems="classList"
        @handleSelect="selectClass"
      />
      <select-menu
        :listTitle="ablumTypeTitle"
        :listItems="ablumTypeList"
        @handleSelect="selectAblumType"
      />
    </div>
    <div slot="second" class="operations">
      <Button
        v-for="(item, key) in operations"
        :key="key"
        :type="item.type"
        @click.native="handleOperations(key, item.tag)"
      >
        {{ item.tag }}
      </Button>
    </div>
    <div slot="third" class="img-operations">
      <Button
        v-for="(item, key) in abOperations"
        :key="key"
        :type="item.type"
        @click.native="handleAbOperations(key)"
      >
        <span>{{ item.tag }}</span>
        <Icon :type="item.icon" />
      </Button>
    </div>
  </querymenu>
</template>

<script>
// ? import components
const Querymenu = () => import('@common/query-menu/Querymenu')
const SelectMenu = () => import('@common/select-menu/SelectMenu')

// ? import mixins
import classMixins from '@mixins/Common/classMixins'
import ablumTypeMixin from '@mixins/Common/ablumTypeMixin'
import classAlbumMenuMixin from '@mixins/class-management/classAlbumMenuMixin'

export default {
  name: 'ClassAblumMenu',

  components: {
    Querymenu,
    SelectMenu
  },

  mixins: [classMixins, ablumTypeMixin, classAlbumMenuMixin],

  data: () => ({}),

  props: {},

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
.query-menu {
  padding: 1rem 0;
  .full_flex();
  .select {
    flex: 2;
    .full_flex();
  }
  .operations {
    flex: 2;
    .ivu-btn {
      margin: 0 0.8rem;
      width: 6rem;
    }
  }
  .img-operations {
    flex: 3;
    text-align: right;
    margin-right: 3rem;
    .ivu-btn {
      margin: 0 1rem;
    }
  }
}
</style>
