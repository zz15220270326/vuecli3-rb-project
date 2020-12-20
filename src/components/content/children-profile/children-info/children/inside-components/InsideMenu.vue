<template>
  <querymenu>
    <div slot="first" class="select">
      <select-menu
        :listTitle="classTitle"
        :listItems="classList"
        @handleSelect="selectClass"
      />
    </div>
    <div slot="second" class="input">
      <search-student-name />
      <div class="card-number">
        <Input
          placeholder="家长考勤卡号"
          v-model="inputCardNumber"
          @on-change="getInputCardNumber"
        />
      </div>
    </div>
    <div slot="third" class="table-op">
      <Button
        v-for="(item1, key1) in tableOperations"
        :key="key1"
        :type="item1.type"
        @click.native="handleCommon(key1)"
      >
        {{ item1.tag }}
      </Button>
    </div>
    <div slot="third" class="other-op">
      <Dropdown v-for="(item2, key2) in otherOperations" :key="key2">
        <Button :type="item2.type" @click.native="handleSpecial(key2)">
          <Icon :type="item2.icon" />
          <span>{{ item2.tag }}</span>
        </Button>
        <DropdownMenu v-show="key2 === 1" trigger="click" slot="list">
          <DropdownItem
            v-for="(item3, key3) in moduleImport"
            :key="key3"
            style="text-align: center;"
            @click.native="clickItem(key3)"
          >
            <span v-if="key3 === 0">
              {{ item3.info }}
            </span>
            <Upload action="#" v-if="key3 === 1">
              <span> {{ item3.info }} </span>
            </Upload>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </querymenu>
</template>

<script>
// ? import components
// ? common
const Querymenu = () => import('@common/query-menu/Querymenu')
const SelectMenu = () => import('@common/select-menu/SelectMenu')
const SearchStudentName = () => import('@common/search-input/SearchStudentName')
// ? mixins
import classInfoMixins from '@mixins/Common/classMixins'

export default {
  name: 'InsideMenu',

  components: {
    Querymenu,
    SelectMenu,
    SearchStudentName
  },

  mixins: [classInfoMixins],

  data: () => ({
    inputCardNumber: '',
    tableOperations: [
      {
        tag: '查询',
        type: 'info'
      },
      {
        tag: '删除',
        type: 'error'
      },
      {
        tag: '导出',
        type: 'success'
      }
    ],
    otherOperations: [
      {
        tag: '添加幼儿',
        icon: 'md-add',
        type: 'warning'
      },
      {
        tag: '模板导入',
        icon: 'ios-arrow-down',
        type: 'warning'
      },
      {
        tag: '批量导出',
        icon: 'md-cloud-upload',
        type: 'warning'
      }
    ],
    moduleImport: [
      {
        info: '下载简易导入模板',
        key: 0
      },
      {
        info: '简易模板导入',
        key: 1
      }
    ]
  }),

  props: {},

  computed: {},

  methods: {
    getInputCardNumber() {
      this.$emit('getInputCardNumber', this.inputCardNumber)
    },
    handleCommon(currentIndex) {
      this.$emit('handleCommon', currentIndex)
    },
    handleSpecial(currentIndex) {
      this.$emit('handleSpecial', currentIndex)
    },
    clickItem(key) {
      this.$emit('clickItem', key)
    }
  }
}
</script>

<style lang="less" scoped>
.query-menu {
  margin: 0.5rem 0;
  padding: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .select {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .input {
    flex: 3;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .table-op {
    flex: 3;
    .ivu-btn {
      width: 5.4rem;
      margin: 0 0.8rem;
    }
  }
  .other-op {
    flex: 3;
    text-align: right;
    margin-right: 1.2rem;
    .ivu-btn {
      width: 6.6rem;
      margin: 0 0.8rem;
    }
  }
}
</style>
