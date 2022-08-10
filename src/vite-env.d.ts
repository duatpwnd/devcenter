/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "froala-editor/js/froala_editor.pkgd.min.js" {
  export default class FroalaEditor {
    constructor(id: string, params: { [key: string]: any }) {
      this.id = id;
      this.params = params;
    }
  }
}
declare module "*";
