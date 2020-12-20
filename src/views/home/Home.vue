<template>
  <div class="home">
    <home-top
      :platformName="platformName"
      :mockUsername="mockUsername"
      :mockImgUrl="$store.state.avatar"
    />
    <Layout>
      <Header>
        <Menu mode="horizontal">
          <MenuItem
            v-for="(item, index) in routerList"
            :key="index"
            :name="item.path"
            @click.native="clickMenuTop(index, item.path)"
          >
            <img
              v-if="item.iconUrl !== ''"
              class="router-icon"
              :src="item.iconUrl"
              alt=""
            />
            <span>
              {{ item.showName }}
            </span>
          </MenuItem>
        </Menu>
      </Header>
      <Layout :style="{ padding: '0 50px' }">
        <Breadcrumb :style="{ margin: '16px 0' }">
          <BreadcrumbItem>
            <img :src="$store.state.projectIcon" alt="" />
          </BreadcrumbItem>
          <BreadcrumbItem>{{ activeTitle }}</BreadcrumbItem>
        </Breadcrumb>
        <Content
          :style="{ padding: '24px 0', minHeight: '280px', background: '#fff' }"
        >
          <Layout>
            <!-- <Sider hide-trigger :style="{ background: '#fff' }"> -->
            <!-- collapsible -->
            <Sider
              collapsible
              :collapsed-width="80"
              v-model="isCollapsed"
              :style="{ background: '#fff' }"
            >
              <Menu
                active-name="1-3"
                theme="light"
                width="auto"
                :open-names="['1']"
              >
                <MenuItem
                  v-for="(item, index) in childrenList"
                  :key="index"
                  :name="item.name"
                  @click.native="clickMenuLeft(index, item.path)"
                >
                  {{ item.showName }}
                </MenuItem>
              </Menu>
            </Sider>
            <Content>
              <home-content />
            </Content>
          </Layout>
        </Content>
      </Layout>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>

<script>
// ? 1. import components
// ? 1-1 common
// import UserLogout from '@common/user-logout/UserLogout'
// ? 1-2 child-components
const HomeTop = () => import('./content/HomeTop')
// import HomeMenu from './content/HomeMenu'
import HomeContent from './content/HomeContent'
// ? 2. request: (none auth-routers)

// ? mixins
import HOME_MIXINS from '@mixins/Common/HomeMixin'

export default {
  name: 'Home',
  components: {
    // ? common
    // UserLogout,
    // ? child-components
    HomeTop,
    // HomeMenu,
    HomeContent
  },
  mixins: [HOME_MIXINS],
  methods: {}
}
</script>

<style lang="less" scoped>
.home {
  color: #fff;
  .ivu-layout-header {
    // background-color: #36adea;
    background-color: #fff;
    .router-icon {
      height: 1.2rem;
      width: 1.2rem;
      margin-right: 0.5rem;
    }
    .ivu-layout-sider-trigger {
      background-color: #fff;
    }
  }
}
</style>
