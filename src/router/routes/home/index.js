// ? lazy-load components
// ? 1. 概况 -> Main
const Main = () => import('@HomePages/Main')
// ? 2. 幼儿档案 -> ChildrenProfile
const ChildrenProfile = () => import('@HomePages/ChildrenProfile')
// ? 3. 职工管理 -> WorkerManagement
const WorkerManagement = () => import('@HomePages/WorkerManagement')
// ? 4. 职工考勤 -> Attdance
const Attdance = () => import('@HomePages/Attdance')
// ? 5. 班级管理 -> ClassManagement
const ClassManagement = () => import('@HomePages/ClassManagement')
// ? 6. 个人计划 -> Plan
const Plan = () => import('@HomePages/Plan')
// ? 7. 园务审批 -> GardenApprove
const GardenApprove = () => import('@HomePages/GardenApprove')
// ? 8. 卫生保健 -> HealthCare
const HealthCare = () => import('@HomePages/HealthCare')
// ? 9. 健康防疫 -> HealthBorder
const HealthBorder = () => import('@HomePages/HealthBorder')
// ? 10. 通知动态 -> NoticeActive
const NoticeActive = () => import('@HomePages/NoticeActive')
// ? 系统管理 -> SystemManagement
const SystemManagement = () => import('@HomePages/SystemManagement')

// ? 3rd children routes
import mainChildren from './main'
import childrenProfileChildren from './children-profile'
import attdanceChildren from './attdance'
import classManagementChildren from './class-management'
import planChildren from './plan'
import workerManagementChildren from './worker-management'
import gardenApproveChildren from './garden-approve'
import healthCareChildren from './health-care'
import healthBorderChildren from './health-border'
import noticeActiveChildren from './notice-active'
import systemManagementChildren from './system-management'

export default [{
    path: '/',
    redirect: 'main',
    showName: '',
    iconUrl: '',
  },
  // ? 1. 概况 -> Main
  {
    path: 'main',
    children: [...mainChildren],
    component: Main,
    // ? 显示名称
    showName: '概况',
    iconUrl: 'http://t.aservice.langlangyun.com/langyun/www/public/static/workplace/images/nav/icon-8.png'
  },
  // ? 2. 幼儿档案 -> ChildrenProfile
  {
    path: 'childrenProfile',
    children: [...childrenProfileChildren],
    component: ChildrenProfile,
    showName: '幼儿档案',
    iconUrl: 'http://t.aservice.langlangyun.com/langyun/www/public/static/workplace/images/nav/icon-9.png'
  },
  // ? 3. 职工管理 -> WorkerManagement
  {
    path: 'workerManagement',
    component: WorkerManagement,
    children: [...workerManagementChildren],
    showName: '职工管理',
    iconUrl: 'http://t.aservice.langlangyun.com/langyun/www/public/static/workplace/images/nav/icon-10.png'
  },
  // ? 4. 职工考勤 -> Attdance
  {
    path: 'attdance',
    component: Attdance,
    children: [...attdanceChildren],
    showName: '职工考勤',
    iconUrl: 'http://t.aservice.langlangyun.com/langyun/www/public/static/workplace/images/nav/icon-25.png'
  },
  // ? 5. 班级管理 -> ClassManagement
  {
    path: 'classManagement',
    children: [...classManagementChildren],
    component: ClassManagement,
    showName: '班级管理',
    iconUrl: 'http://t.aservice.langlangyun.com/langyun/www/public/static/workplace/images/nav/icon-11.png'
  },
  // ? 6. 个人计划 -> Plan
  {
    path: 'plan',
    component: Plan,
    children: [...planChildren],
    showName: '个人计划',
    iconUrl: 'http://t.aservice.langlangyun.com/langyun/www/public/static/workplace/images/nav/icon-12.png'
  },
  // ? 7. 园务审批 -> GardenApprove
  {
    path: 'gardenApprove',
    component: GardenApprove,
    children: [...gardenApproveChildren],
    showName: '园务审批',
    iconUrl: 'http://t.aservice.langlangyun.com/langyun/www/public/static/workplace/images/nav/icon-21.png'
  },
  // ? 8. 卫生保健 -> HealthCare
  {
    path: 'healthCare',
    component: HealthCare,
    children: [...healthCareChildren],
    showName: '卫生保健',
    iconUrl: 'http://t.aservice.langlangyun.com/langyun/www/public/static/workplace/images/nav/icon-13.png'
  },
  // ? 9. 健康防疫 -> HealthBorder
  {
    path: 'healthBorder',
    children: [...healthBorderChildren],
    component: HealthBorder,
    showName: '健康防疫',
    iconUrl: 'http://t.aservice.langlangyun.com/langyun/www/public/static/workplace/images/nav/icon-26.png'
  },
  // ? 10. 通知动态 -> NoticeActive
  {
    path: 'noticeActive',
    component: NoticeActive,
    children: [...noticeActiveChildren],
    showName: '通知动态',
    iconUrl: 'http://t.aservice.langlangyun.com/langyun/www/public/static/workplace/images/nav/icon-15.png'
  },
  // ? 系统通知 -> SystemManagement
  {
    path: 'systemManagement',
    component: SystemManagement,
    children: [...systemManagementChildren],
    showName: '系统管理',
    iconUrl: 'http://t.aservice.langlangyun.com/langyun/www/public/static/workplace/images/nav/icon-16.png'
  }
]