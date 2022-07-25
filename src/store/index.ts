import { createStore, createLogger } from "vuex";
import dbStore from "./modules/dbStore";
export default createStore({
  modules: { dbStore },
});
