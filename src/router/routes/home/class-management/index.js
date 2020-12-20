const ChildrenAttdance = () => import('@ClassManagement/children-attdance/ChildrenAttdance')
const ClassAlbum = () => import('@ClassManagement/class-album/ClassAlbum')
const ClassInfo = () => import('@ClassManagement/class-info/ClassInfo')

export default [
  {
    path: '/',
    name: '',
    showName: '',
    redirect: 'childrenAttdance'
  },
  // ? 1. 幼儿考勤
  {
    path: 'childrenAttdance',
    name: 'ChildrenAttdance',
    showName: '幼儿考勤',
    component: ChildrenAttdance
  },
  // ? 2. 班级相册
  {
    path: 'classAlbum',
    name: 'ClassAlbum',
    showName: '班级相册',
    component: ClassAlbum
  },
  // ? 3. 班级信息
  {
    path: 'classInfo',
    name: 'ClassInfo',
    showName: '班级信息',
    component: ClassInfo
  }
]