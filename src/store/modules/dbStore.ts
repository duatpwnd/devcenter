import { Module } from "vuex";
interface RootState {
  db: { [key: string]: any };
}
const dbStore: Module<RootState, { [key: string]: any }> = {
  namespaced: true,
  state: () => ({
    db: {},
  }),
  mutations: {
    ["SET_INDEXEDDB"]: (state, payload) => {
      console.log("payload", payload);
      state.db = payload;
    },
  },
};
export default dbStore;
