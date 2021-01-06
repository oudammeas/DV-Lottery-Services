import { observable, action } from 'mobx'

class AuthStore {
  @observable user = {}

  @action setUser(user) {
    this.user = user
  }
}
export default new AuthStore() // The 'new' keyword ised here to export ONLY one instace of CommonStore to be used for every import statement.
