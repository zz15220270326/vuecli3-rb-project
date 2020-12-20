<template>
  <div class="attdance">
    <div class="garden">
      <div class="title">
        <div>园所出勤情况</div>
        <Button type="text" @click.native="handleGardenModal">
          <span>
            更多详情
            <Icon type="ios-arrow-forward" />
          </span>
        </Button>
      </div>
      <div class="content">
        <column-picture :chartStyle="chartStyle" :render="render" />
      </div>
    </div>
    <div class="class">
      <div class="title">
        <div>班级出勤情况</div>
        <Button type="text" @click.native="handleClassModal">
          <span>
            更多详情
            <Icon type="ios-arrow-forward" />
          </span>
        </Button>
      </div>
      <div class="content">
        <main-table
          :tableIsLoading="tableIsLoading"
          :titleList="classAttdanceTitleList"
          :dataList="classAttdanceDataList"
        />
      </div>
    </div>
    <!-- modal-content -->
    <Modal
      class-name="garden-modal"
      v-model="isShowGardenModal"
      :title="modalTitle"
      width="1000"
      :footer-hide="true"
    >
      <garden-info />
    </Modal>
    <Modal
      class-name="class-modal"
      v-model="isShowClassModal"
      :title="modalTitle"
      width="1000"
      :footer-hide="true"
    >
      <class-info />
    </Modal>
    <!--  -->
  </div>
</template>

<script>
// ? import components
// if () {}
const ColumnPicture = () => import('@echart/ColumnPicture')
const MainTable = () => import('@Main/MainTable')
const GardenInfo = () => import('@Main/modal/garden-attdance/GardenInfo')
const ClassInfo = () => import('@Main/modal/garden-attdance/ClassInfo')

// ? import mixins
import classAttdanceMixin from '@mixins/main/classAttdanceMixin'
import columnPictureMixin from '@mixins/main/columnPictureMixin'

export default {
  name: 'GardenAttdance',

  components: {
    ColumnPicture,
    MainTable,
    GardenInfo,
    ClassInfo
  },

  mixins: [classAttdanceMixin, columnPictureMixin],

  data: () => ({
    // ? table-data
    tableIsLoading: false,
    // ? modal-data
    modalTitle: '',
    // ?? garden-modal
    isShowGardenModal: false,
    // ?? class-modal
    isShowClassModal: false
  }),

  props: {},

  computed: {},

  methods: {
    handleGardenModal() {
      this.modalTitle = '园所出勤状况'
      this.isShowGardenModal = true
    },
    handleClassModal() {
      this.modalTitle = '班级考勤状况'
      this.isShowClassModal = true
    }
  }
}
</script>

<style lang="less" scoped>
.attdance {
  color: #666;
  font-size: 1rem;
  width: 100%;
  height: 23rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .garden {
    flex: 1;
    margin-right: 0.6rem;
    height: 100%;
    .title {
      padding: 0.8rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      :first-child {
        font-weight: 600;
        font-size: 1.3rem;
        flex: 1;
        margin-left: 1.6rem;
      }
      :last-child {
        flex: 1;
        text-align: right;
        margin-right: 1.5rem;
        color: skyblue;
        cursor: pointer;
        :hover {
          text-decoration: underline;
          color: #36adea;
          font-size: 1.1rem;
        }
      }
    }
    .content {
      width: 100%;
      height: 23rem;
      border: 1px solid #36adea;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 1.2rem;
      padding: 0 1.2rem;
    }
  }
  .class {
    flex: 1;
    height: 100%;
    margin-left: 0.6rem;
    .title {
      padding: 0.8rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      :first-child {
        font-weight: 600;
        font-size: 1.3rem;
        flex: 1;
        margin-left: 1.6rem;
      }
      :last-child {
        flex: 1;
        text-align: right;
        margin-right: 1.5rem;
        color: skyblue;
        cursor: pointer;
        :hover {
          color: #36adea;
          font-size: 1.1rem;
          text-decoration: underline;
        }
      }
    }
    .content {
      width: 100%;
      height: 23rem;
      border: 1px solid #36adea;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1.2rem;
    }
  }
}
</style>
