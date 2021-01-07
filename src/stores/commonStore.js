import { observable, action } from 'mobx'

class CommonStore {
  @observable activeNavMenu = 'Home'

  @action setActiveNavMenu(menu) {
    this.activeNavMenu = menu
  }
}
export default new CommonStore() // The 'new' keyword ised here to export ONLY one instace of CommonStore to be used for every import statement.
