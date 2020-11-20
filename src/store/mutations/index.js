import userMutations from './child-mutations/userMutations'
import dateMutations from './child-mutations/dateMutations'
import judgeMutations from './child-mutations/judgeMutations'

export default {
  ...dateMutations,
  ...userMutations,
  ...judgeMutations,
}
