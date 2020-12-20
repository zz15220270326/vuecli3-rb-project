// child-states
import mockUserState from './child-states/userState'
import dateState from './child-states/dateState'
import judgeState  from './child-states/judgeState'
import remindState from './child-states/remindState'
import searchState from './child-states/searchState'

export default {
  ...mockUserState,
  ...dateState,
  // 是否显示弹窗
  ...judgeState,
  ...remindState,
  ...searchState,
}