import { observable, action, computed } from 'mobx'

class AuthStore {
  @observable authUser = {}
  @observable authState = ""

  @action setAuthUser(user) {
    this.authUser = user
  }
  @action setAuthState(state) {
    this.authState = state
  }

  
}
export default new AuthStore() // The 'new' keyword ised here to export ONLY one instace of CommonStore to be used for every import statement.
