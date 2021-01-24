import { observable, action, computed } from 'mobx'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
class AuthStore {
  @observable authUser = {}
  @observable authState = AuthState.SignedOut
  @observable isAuthenticated = false

  @action setAuth(state, user) {
    this.authState = state
    this.authUser = user
  }
  @action setIsAuthenticated(state) {
    this.isAuthenticated = state
  }
}
export default new AuthStore() // The 'new' keyword ised here to export ONLY one instace of CommonStore to be used for every import statement.
