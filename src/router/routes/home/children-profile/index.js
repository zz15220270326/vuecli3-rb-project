const ChildrenInfo = () => import('@ChildrenProfile/children-info/ChildrenInfo')
const GrowProfile = () => import('@ChildrenProfile/grow-profile/GrowProfile')

export default [{
    path: '/',
    redirect: 'childrenInfo',
  },
  // ? 1. 幼儿信息
  {
    path: 'childrenInfo',
    name: 'ChildrenInfo',
    showName: '幼儿信息',
    component: ChildrenInfo
  },
  // ? 2. 成长档案
  {
    path: 'growProfile',
    name: 'GrowProfile',
    showName: '成长档案',
    component: GrowProfile
  }
]