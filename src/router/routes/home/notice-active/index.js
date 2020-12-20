// ? lazy-load children
const GardenNotice = () => import('@NoticeActive/garden-notice/GardenNotice')
const InsideNotice = () => import('@NoticeActive/inside-notice/InsideNotice')
const ClassNotice = () => import('@NoticeActive/class-notice/ClassNotice')
const ManagementNotice = () => import('@NoticeActive/management-notice/ManagementNotice')
const SystemNotice = () => import('@NoticeActive/system-notice/SystemNotice')
const GardenActive = () => import('@NoticeActive/garden-acitve/GardenActive')

export default [{
    path: '/',
    name: '',
    showName: '',
    redirect: 'gardenNotice',
  },
  // ? 1. 园务通知
  {
    path: 'gardenNotice',
    name: 'GardenNotice',
    showName: '园务通知',
    component: GardenNotice
  },
  // ? 2. 园内通知
  {
    path: 'insideNotice',
    name: 'InsideNotice',
    showName: '园内通知',
    component: InsideNotice
  },
  // ? 3. 班级通知
  {
    path: 'classNotice',
    name: 'ClassNotice',
    showName: '班级通知',
    component: ClassNotice
  },
  // ? 4. 主管部门
  {
    path: 'managementNotice',
    name: 'ManagementNotice',
    showName: '主管部门',
    component: ManagementNotice
  },
  // ? 5. 系统消息
  {
    path: 'systemNotice',
    name: 'SystemNotice',
    showName: '系统消息',
    component: SystemNotice
  },
  // ? 6. 院所动态
  {
    path: 'gardenActive',
    name: 'GardenActive',
    showName: '院所动态',
    component: GardenActive
  }
]