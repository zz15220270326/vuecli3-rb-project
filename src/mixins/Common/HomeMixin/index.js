// ? 最外层的home组件的操作

// ? utils
import { dateToMs, transformToYMD, getDays } from '@utils/changeTime'
// ? store
import {
  GET_DEFAULT_YEAR,
  GET_DEFAULT_MONTH,
  GET_DEFAULT_DAY,
  GET_DAYS
} from '@store/storeType'
// ? home-routes
import routerList from '@router/routes/home'

export default {
  data() {
    return {
      platformName: '智慧幼教管理平台',
      mockUsername: '陆园长',
      routerList: [],
      activeTitle: '',
      currentIndex: 0,
      childrenList: [],
      secondPath: '',
      thirdPath: '',
      isCollapsed: false
    }
  },
  computed: {
    activeRoute() {
      const routeArr = this.$route.path.split('/')
      return routeArr[2]
    }
  },
  methods: {
    // ? 函数(sync)
    initYMD() {
      // '当前的: 年-月-日'
      const datestamp = dateToMs(Date())
      // 把'年-月'转化成数组
      let ymdArr = transformToYMD(datestamp)
        .toString()
        .split('-')
      // sync store
      this.$store.commit(GET_DEFAULT_YEAR, ymdArr[0])
      this.$store.commit(GET_DEFAULT_MONTH, ymdArr[1])
      this.$store.commit(GET_DEFAULT_DAY, ymdArr[2])
      this.$store.commit(GET_DAYS, getDays(ymdArr[0] * 1, ymdArr[1] * 1))
    },
    // ? 更新 面包屑导航 以及 当前路由下标
    updateActive() {
      if (this.activeRoute === 'main') {
        this.activeTitle = '概况'
        this.currentIndex = 1
      } else if (this.activeRoute === 'childrenProfile') {
        this.activeTitle = '幼儿档案'
        this.currentIndex = 2
      } else if (this.activeRoute === 'workerManagement') {
        this.activeTitle = '职工管理'
        this.currentIndex = 3
      } else if (this.activeRoute === 'attdance') {
        this.activeTitle = '职工考勤'
        this.currentIndex = 4
      } else if (this.activeRoute === 'classManagement') {
        this.activeTitle = '班级管理'
        this.currentIndex = 5
      } else if (this.activeRoute === 'plan') {
        this.activeTitle = '个人计划'
        this.currentIndex = 6
      } else if (this.activeRoute === 'gardenApprove') {
        this.activeTitle = '园务审批'
        this.currentIndex = 7
      } else if (this.activeRoute === 'healthCare') {
        this.activeTitle = '卫生保健'
        this.currentIndex = 8
      } else if (this.activeRoute === 'healthBorder') {
        this.activeTitle = '健康防疫'
        this.currentIndex = 9
      } else if (this.activeRoute === 'noticeActive') {
        this.activeTitle = '通知动态'
        this.currentIndex = 10
      } else if (this.activeRoute === 'systemManagement') {
        this.activeTitle = '系统管理'
        this.currentIndex = 11
      }
    },
    // ? 初始化路由列表( 顶部为2级路由, 左边为3级路由 )
    initRouter() {
      this.routerList = routerList
      if (this.routerList[this.currentIndex].children) {
        this.childrenList = this.routerList[this.currentIndex].children
      } else {
        this.childrenList = []
      }
    },
    // ? 顶部2级路由点击事件
    clickMenuTop(index, path) {
      if (path !== '/') {
        this.$router.push('/home/' + path)
        this.currentIndex = index
        if (this.routerList[index].children) {
          this.childrenList = this.routerList[index].children
        } else {
          this.childrenList = []
        }
      } else {
        this.$router.push('/home/main')
      }
      this.updateActive()
    },
    // ? 点击三级路由触发事件
    clickMenuLeft(index, path) {
      this.$router.push(path)
    }
    // ? 方法(async)
  },
  /**
   * ! life-hooks
   */
  created() {
    const userInfo = localStorage.getItem('userInfo')
    if (userInfo === null) {
      this.$Message.warning('请先登录')
      this.$router.replace('/user/login')
    }
    this.updateActive()
    this.initRouter()
    this.initYMD()
    console.log('Home Created ! ')
  },
  destoryed() {
    console.log('destoryed')
  }
}
