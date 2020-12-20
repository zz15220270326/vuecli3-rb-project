const ChildrenAskLeave = () => import('@GardenApprove/children-ask-leave/ChildrenAskLeave')
const ClassPlan = () => import('@GardenApprove/class-plan/ClassPlan')
const SemesterPlan = () => import('@GardenApprove/semester-plan/SemesterPlan')
const AllYearPlan = () => import('@GardenApprove/all-year-plan/AllYearPlan')
const WorkSumary = () => import('@GardenApprove/work-sumary/WorkSumary')

export default [
  {
    path: '/',
    name: '',
    showName: '',
    redirect: 'childrenAskLeave'
  },
  {
    path: 'childrenAskLeave',
    name: 'ChildrenAskLeave',
    showName: '幼儿请假',
    component: ChildrenAskLeave
  },
  {
    path: 'ClassPlan',
    name: 'ChildrenClassPlan',
    showName: '班级计划',
    component: ClassPlan
  },
  {
    path: 'semesterPlan',
    name: 'ChildrenSemesterPlan',
    showName: '学期计划',
    component: SemesterPlan
  },
  {
    path: 'allYearPlan',
    name: 'ChildrenAllYearPlan',
    showName: '整年计划',
    component: AllYearPlan
  },
  {
    path: 'workSumary',
    name: 'ChildrenWorkSumary',
    showName: '工作总结',
    component: WorkSumary
  }
]
