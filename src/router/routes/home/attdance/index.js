const PersonalAttdance = () =>
  import('@Attdance/attendance-table/PersonalAttdance')
const FullAttdance = () =>
  import('@Attdance/attendance-table/FullAttdance')
const AttdenceReport = () =>
  import('@Attdance/attadance-report/AttdenceReport')
const PersonalReport = () =>
  import('@Attdance/attadance-report/PersonalReport')
const AttdanceRules = () =>
  import('@Attdance/attdance-rules/AttdanceRules')
const AttdanceTypeSetting = () =>
  import('@Attdance/attdance-type-setting/AttdanceTypeSetting')
const ClassManagement = () =>
  import('@Attdance/class-management/ClassManagement')
const DutyRoster = () => import('@Attdance/duty-roster/DutyRoster')
const SwipeCard = () => import('@Attdance/swipe-card/SwipeCard')
const AttdancePresent = () => 
  import('@Attdance/attdance-present/AttdancePresent')

export default [
  {
    // ? 默认跳转到个人考勤报表
    path: '/',
    name: '',
    showName: '',
    redirect: 'personalReport',
  },
  {
    // ? 个人考勤报表
    path: 'personalReport',
    name: 'PersonalReport',
    showName: '个人考勤报表',
    component: PersonalReport
  },
  {
    // ? 全员考勤报表
    path: 'attdenceReport',
    name: 'AttdenceReport',
    showName: '全员考勤报表',
    component: AttdenceReport
  },
  {
    // ? 个人考勤明细
    path: 'personalAttdance',
    name: 'PersonalAttdance',
    showName: '个人考勤明细',
    component: PersonalAttdance
  },
  {
    // ? 全员考勤明细
    path: 'fullAttdance',
    name: 'FullAttdance',
    showName: '全员考勤明细',
    component: FullAttdance
  },
  {
    // ? 考勤类型设置
    path: 'attdanceTypeSetting',
    name: 'AttdanceTypeSetting',
    showName: '考勤类型设置',
    component: AttdanceTypeSetting
  },
  {
    // ? 考勤规则设置
    path: 'attdanceRules',
    name: 'AttdanceRules',
    showName: '考勤规则设置',
    component: AttdanceRules
  },
  {
    // ? 班次管理
    path: 'classManagement',
    name: 'ClassManagement',
    showName: '班次管理',
    component: ClassManagement
  },
  {
    // ? 排班管理
    path: 'dutyRoster',
    name: 'DutyRoster',
    showName: '排班管理',
    component: DutyRoster
  },
  {
    // ? 刷卡记录
    path: 'swipeCard',
    name: 'SwipeCard',
    showName: '刷卡记录',
    component: SwipeCard
  },
  {
    path: 'attdancePresent',
    name: 'AttdancePresent',
    showName: '出勤率分析',
    component: AttdancePresent
  }
]