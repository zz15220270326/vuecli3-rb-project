const ChildrenDailyCare = () => import('@HealthBorder/children-daily-care/ChildrenDailyCare')
const WorkerHealthManagement = () => import('@HealthBorder/worker-health-management/WorkerHealthManagement')
const FaceTestingRecord = () => import('@HealthBorder/face-testing-record/FaceTestingRecord')

export default [
  {
    path: '/',
    name: '',
    showName: '',
    redirect: 'childrenDailyCare'
  },
  // ? 1. 幼儿日常保健
  {
    path: 'childrenDailyCare',
    name: 'ChildrenDailyCare',
    showName: '幼儿日常保健',
    component: ChildrenDailyCare
  },
  // ? 2. 职工健康管理
  {
    path: 'workerHealthManagement',
    name: 'WorkerHealthManagement',
    showName: '职工健康管理',
    component: WorkerHealthManagement
  },
  // ? 3. 人脸测温记录
  {
    path: 'faceTestingRecord',
    name: 'FaceTestingRecord',
    showName: '人脸测温记录',
    component: FaceTestingRecord
  }
]

