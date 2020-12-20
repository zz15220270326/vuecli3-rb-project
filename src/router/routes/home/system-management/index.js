// ? lazy-load
const AccountManagement = () => import('@SystemManagement/account-management/AccountManagement')
const GardenInfo = () => import('@SystemManagement/garden-info/GardenInfo')
const GardenSpecialty = () => import('@SystemManagement/garden-specialty/GardenSpecialty')
const HardwareManagement = () => import('@SystemManagement/hardware-management/HardwareManagement')
const GardenVideo = () => import('@SystemManagement/garden-video/GardenVideo')
const BasicSetting = () => import('@SystemManagement/basic-setting/BasicSetting')

export default [
  {
    path: '/',
    name: '',
    showName: '',
    redirect: 'accountManagement',
  },
  // ? 1. 账户管理
  {
    path: 'accountManagement',
    name: 'AccountManagement',
    showName: '账户管理',
    component: AccountManagement
  },
  // ? 2. 园所信息
  {
    path: 'gardenInfo',
    name: 'GardenInfo',
    showName: '园所信息',
    component: GardenInfo
  },
  // ? 3. 园所风采
  {
    path: 'gardenSpecialty',
    name: 'GardenSpecialty',
    showName: '园所风采',
    component: GardenSpecialty
  },
  // ? 4. 硬件管理
  {
    path: 'hardwareManagement',
    name: 'HardwareManagement',
    showName: '硬件管理',
    component: HardwareManagement
  },
  // ? 5. 园所视频
  {
    path: 'gardenVideo',
    name: 'GardenVideo',
    showName: '园所视频',
    component: GardenVideo
  },
  // ? 6. 基础设置
  {
    path: 'basicSetting',
    name: 'BasicSetting',
    showName: '基础设置',
    component: BasicSetting
  }
]
