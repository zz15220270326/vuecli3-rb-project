<template>
  <div class="home">
    <nav-bar>
      <div slot="left">{{platformName}}</div>
      <div slot="center"></div>
      <div slot="right">
        <UserLogout :mock-username="mockUsername" :mock-img-url="mockImgUrl" />
      </div>
    </nav-bar>
    <home-menu>
      <div slot="menu-logo" class="menu-logo">
        <img :src="myLogoUrl" alt="">
      </div>
      <div slot="menu-content" class="menu-content"></div>
    </home-menu>
    <home-content />
  </div>
</template>

<script>
// 1. import components
// 1-1 common / content
import NavBar from '@common/nav-bar/NavBar'
import UserLogout from '@content/user-logout/UserLogout'
// 1-2 child-components
import HomeMenu from './child-components/HomeMenu'
import HomeContent from './child-components/HomeContent'
// 2. request: (none)
// 3. times-function
import {dateToMs, transformToYMD, getDays} from '@utils/changeTime'
// 4. store-types
import {GET_DEFAULT_YEAR, GET_DEFAULT_MONTH, GET_DEFAULT_DAY, GET_DAYS} from '@store/storeType'

export default {
  name: 'Home',
  components: {
    // common / content
    NavBar,
    UserLogout,
    // child-components
    HomeMenu,
    HomeContent
  },
  data () {
    return {
      platformName: '智慧幼教管理平台',
      mockImgUrl: 'http://t.static.langlangyun.com/pcUpload/a39c0c2a17a3c3579a04ef45b1a8fee7?imageView2/1/w/60/h/60',
      mockUsername: '陆园长',
      myLogoUrl: 'http://t.aservice.langlangyun.com/langyun/www/public/static/workplace/images/logo.png',
      profileList: [],
      profileListTitle: [],
      getMonth: '2020-11'
    }
  },
  methods: {
    initYMD () {
      // '当前的: 年-月-日'
      const datestamp = dateToMs(Date())
      // 把'年-月'转化成数组
      let ymdArr = transformToYMD(datestamp).toString().split('-')
      // sync store
      this.$store.commit(GET_DEFAULT_YEAR, ymdArr[0])
      this.$store.commit(GET_DEFAULT_MONTH, ymdArr[1])
      this.$store.commit(GET_DEFAULT_DAY, ymdArr[2])
      this.$store.commit(GET_DAYS, getDays(ymdArr[0] * 1, ymdArr[1] * 1))
    }
  },
  /***
   * life-hooks
   */
  created () {
    this.initYMD()
    console.log('Home Created ! ')
  }
}
</script>

<style lang="less" scoped>
.home {
  background-color: red
}
</style>