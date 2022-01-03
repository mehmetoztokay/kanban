import {createStore} from "vuex";

import tabs from "../tabs.js";

const store = createStore({
  state: {
    tabs,
  },
  getters: {
    _getTabs(state) {
      return state.tabs;
    },
  },
});

export default store;
