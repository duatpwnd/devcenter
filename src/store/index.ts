import { createStore, createLogger } from "vuex";
import dbStore from "@/store/modules/dbStore";
export default createStore({
  modules: { dbStore },
});
