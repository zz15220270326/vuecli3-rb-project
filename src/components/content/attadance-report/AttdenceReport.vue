<template>
  <div class="attdence-report">
    <!-- 考勤报表 -->
    <div class="title">
      <Querymenu>
        <div class="menu" slot="first">
          <ChoosableMenu :menuItems="menuItems" />
        </div>
        <div class="input" slot="second">
          <SearchInput />
        </div>
        <div class="date" slot="third">
          <Datespan />
        </div>
        <div class="search-button" slot="fourth">
          <SearchButton @click.native="searchTable" />
        </div>
      </Querymenu>
    </div>
    <div class="content">
      <!-- 统计报表 -->
      <Table :columns="tableTitlesArr" :data="tableContentArr" />
    </div>
    <Spin v-show="isLoading" fix>
      <Icon type="ios-loading" size="25" class="demo-spin-icon-load"></Icon>
      <div>重新查询中...</div>
    </Spin>
  </div>
</template>

<script>
// import times-function
import { dateToMs, transformToYM } from "@/utils/changeTime";
// import request-function
import {
  getMenuInfo,
  getStaticTableInfo,
} from "@/request/getAttdenceReportInfo";
// import components
// common / content components
import Querymenu from "@/components/content/query-menu/Querymenu";
import ChoosableMenu from "@/components/common/choosable-menu/ChoosableMenu";
import SearchInput from "@/components/common/search-input/SearchInput";
import Datespan from "@/components/common/date-span/Datespan";
import SearchButton from "@/components/common/search-button/SearchButton";
// childs-components
export default {
  name: "AttdenceReport",
  components: {
    Querymenu,
    ChoosableMenu,
    SearchInput,
    Datespan,
    SearchButton,
  },
  data: () => ({
    subMenu: "全员教师",
    menuItems: [],
    inputValue: "",
    tableTitlesArr: [],
    tableContentArr: [],
    year: 2020,
    month: 11,
    isLoading: false,
  }),
  computed: {
    identify() {
      return this.$store.state.identify;
    },
    uid() {
      // 虚拟存储的uid的值
      return this.$store.state.uid;
    },
    classIds() {
      // 虚拟存储classIds的值
      return this.$store.state.classIds;
    },
    teacherName() {
      return this.$store.state.teacherName;
    },
    startTime() {
      return this.$store.state.startTime;
    },
    endTime() {
      return this.$store.state.endTime;
    },
    storeSelectMonth() {
      // return this.storeSelectMonth
      return this.$store.state.selectMonth;
    },
    yearAndMonth() {
      // '年-月'
      const time = this.storeSelectMonth;
      const timestamp = dateToMs(time);
      return transformToYM(timestamp).toString();
    },
  },
  methods: {
    // 请求的方法
    async requestMenu() {
      const result = await getMenuInfo(this.uid);
      const { data } = result;
      this.menuItems.push(...data);
    },
    async requestTable() {
      const startTime = this.year + "-" + this.month + "-" + "01";
      const endTime = this.year + "-" + this.month + "-" + 30;
      const result = await getStaticTableInfo(
        this.uid,
        this.classIds,
        startTime,
        endTime
      );
      const { header } = result.data.items;
      const { data } = result.data.items;
      this.tableTitlesArr.push(...header);
      this.tableContentArr.push(...data);
    },
    // 处理事件
    async searchTable() {
      // this.isLoading = true
      // setTimeout(() => {
      //   this.isLoading = false
      // }, 1000)
      if (this.classIds === "") {
        this.$Message.info("你还没有填写班级信息呢");
        return;
      }
      if (this.startTime === "" || this.endTime === "") {
        this.$Message.info("请填写正确的时间哦");
        return;
      }
      this.isLoading = true;
      const uid = this.uid;
      const classIds = this.classIds;
      const teacherName = this.teacherName;
      const startTime = this.startTime;
      const endTime = this.endTime;
      this.tableTitlesArr = [];
      this.tableContentArr = [];
      const otherParams = {
        teacherName,
      };
      console.log(uid, classIds, startTime, endTime, otherParams);
      const result = await getStaticTableInfo(
        uid,
        classIds,
        startTime,
        endTime,
        otherParams
      );
      const { header } = result.data.items;
      const { data } = result.data.items;
      this.tableTitlesArr.push(...header);
      this.tableContentArr.push(...data);
      this.isLoading = false;
    },
  },
  /**
   * life-hooks
   **/
  created() {
    this.requestMenu();
    this.requestTable();
  },
};
</script>

<style lang="less" scoped>
.attdence-report {
  margin-top: 1.2rem;
  .title {
    width: 100%;
    height: 2rem;
    .query-menu {
      display: flex;
      .menu {
        flex: 1;
      }
      .input {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .date {
        flex: 1.5;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .search-button {
        flex: 5;
        margin-top: 0.1rem;
      }
    }
  }
  .content {
    margin-top: 6rem;
  }
}
</style>
