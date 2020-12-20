// ? child-components
const ClassPlan = () => import('@Plan/class-plan/ClassPlan')
const SemesterPlan = () => import('@Plan/semester-plan/SemesterPlan')
const AllYearPlan = () => import('@Plan/all-year-plan/AllYearPlan')
const WorkSumary = () => import('@Plan/work-sumary/WorkSumary')
const WorkReport = () => import('@Plan/work-report/WorkReport')

export default [{
    path: '/',
    name: '',
    showName: '',
    redirect: 'classPlan'
  },
  {
    path: 'classPlan',
    name: 'ClassPlan',
    showName: '班级计划',
    component: ClassPlan
  },
  {
    path: 'semesterPlan',
    name: 'SemesterPlan',
    showName: '学期计划',
    component: SemesterPlan
  },
  {
    path: 'allYearPlan',
    name: 'AllYearPlan',
    showName: '整年计划',
    component: AllYearPlan
  },
  {
    path: 'workSumary',
    name: 'WorkSumary',
    showName: '工作总结',
    component: WorkSumary
  },
  {
    path: 'workReport',
    name: 'WorkReport',
    showName: '工作汇报',
    component: WorkReport
  }
]