import userMutations from './child-mutations/userMutations'
import dateMutations from './child-mutations/dateMutations'
import judgeMutations from './child-mutations/judgeMutations'
import searchMutations from './child-mutations/searchMutations'

export default {
  ...dateMutations,
  ...userMutations,
  ...judgeMutations,
  ...searchMutations,
}
