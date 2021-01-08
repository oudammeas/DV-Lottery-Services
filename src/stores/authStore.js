import { observable, action, computed } from 'mobx'

class AuthStore {
  @observable authUser = {}
  @observable authState = 'signedOut'

  @action setAuth(state, user) {
    this.authState = state
    this.authUser = user
  }
}
export default new AuthStore() // The 'new' keyword ised here to export ONLY one instace of CommonStore to be used for every import statement.
