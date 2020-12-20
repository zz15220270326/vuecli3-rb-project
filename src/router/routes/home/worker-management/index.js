// ?  lazy-load children
const WorkerInfo = () => import('@WorkerManagement/worker-info/WorkerInfo')
const WorkerAuthority = () => import('@WorkerManagement/worker-authority/WorkerAuthority')
const TeacherSpecialty = () => import('@WorkerManagement/teacher-specialty/TeacherSpecialty')

export default [
  {
    path: '/',
    name: '',
    showName: '',
    redirect: 'workerInfo',
  },
  {
    path: 'workerInfo',
    name: 'WorkerInfo',
    showName: '职工信息',
    component: WorkerInfo
  },
  {
    path: 'workerAuthority',
    name: 'WorkerAuthority',
    showName: '职工权限',
    component: WorkerAuthority
  },
  {
    path: 'teacherSpecialty',
    name: 'TeacherSpecialty',
    showName: '教师风采',
    component: TeacherSpecialty
  }
]