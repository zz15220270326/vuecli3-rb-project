// ? lazy-load children
const Login = () => import('@UserPages/login/Login')
const FindPassword = () => import('@UserPages/find-password/FindPassword')
const AccountActivate = () => import('@UserPages/account-activate/AccountActivate')
const ChangePassword = () => import('@UserPages/change-password/ChangePassword')

export default [{
    path: '/',
    redirect: 'login'
  },
  {
    path: 'login',
    name: 'Login',
    component: Login
  },
  {
    path: 'findPassword',
    name: 'FindPassword',
    component: FindPassword
  },
  {
    path: 'accountActivate',
    name: 'AccountActivate',
    component: AccountActivate
  },
  {
    path: 'changePassword',
    name: 'ChangePassword',
    component: ChangePassword
  }
]