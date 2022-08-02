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
declare module "*.js";
declare module "*.json";
declare module "vue3-mq";
declare module "vue3-icon";
declare module "d3";
declare module "plotly.js-dist-min";
declare module "vue3-markdown-it";
declare module "markdown-it-strikethrough-alt";
declare module "markdown-it-abbr";
declare module "markdown-it-anchor";
declare module "markdown-it-deflist";
declare module "markdown-it-emoji";
declare module "markdown-it-footnote";
declare module "markdown-it-highlightjs";
declare module "markdown-it-ins";
declare module "markdown-it-mark";
declare module "markdown-it-sub";
declare module "markdown-it-sup";
declare module "markdown-it-task-lists";
declare module "markdown-it-toc-done-right";
