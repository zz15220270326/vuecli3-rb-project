// ? lazy-load children
const WeeklyCookbook = () => import('@HealthCare/weekly-cookbook/WeeklyCookbook')
const DrugRecords = () => import('@HealthCare/drug-records/DrugRecords')
const Accidents = () => import('@HealthCare/accidents/Accidents')

export default [
  {
    path: '/',
    name: '',
    showName: '',
    redirect: 'weeklyCookbook',
  },
  {
    path: 'weeklyCookbook',
    name: 'WeeklyCookbook',
    showName: '每周食谱',
    component: WeeklyCookbook
  },
  {
    path: 'drugRecords',
    name: 'DrugRecords',
    showName: '用药服药记录',
    component: DrugRecords
  },
  {
    path: 'accidents',
    name: 'Accidents',
    showName: '突发状况',
    component: Accidents
  }
]
