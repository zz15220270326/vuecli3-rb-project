// child-states
import mockUserState from './child-states/userState'
import dateState from './child-states/dateState'
import judgeState  from './child-states/judgeState'
import remindSstate from './child-states/remindState'

export default {
  ...mockUserState,
  ...dateState,
  // 是否显示弹窗
  ...judgeState,
  ...remindSstate,
}