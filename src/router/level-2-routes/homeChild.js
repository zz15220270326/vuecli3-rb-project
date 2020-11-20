// lazy-load children
const Attdance = () => import('@views/home/child-components/home-content/Attdance')
const Plan = () => import('@views/home/child-components/home-content/Plan')

export default [
  {
    path: '/',
    redirect: 'attdance'
  },
  {
    path: 'attdance',
    name: 'Attdance',
    component: Attdance
  },
  {
    path: 'plan',
    name: 'Plan',
    component: Plan
  }
]