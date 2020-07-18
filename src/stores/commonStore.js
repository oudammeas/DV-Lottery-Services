import { observable, action } from "mobx";

class CommonStore {
  @observable activeNavMenu = "";

  @action setActiveNavMenu(menu) {
    this.activeNavMenu = menu;
  }
}
export default new CommonStore();
