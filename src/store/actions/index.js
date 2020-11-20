import userActions from './child-actions/userActions'
import dateActions from './child-actions/dateActions'

export default {
  ...dateActions,
  ...userActions,
}
