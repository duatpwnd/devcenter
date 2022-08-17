import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import router from "./router";
import util from "./plugin/util";
import store from "./store";
import axios from "axios";
import SvgIcon from "vue3-icon";
import Datepicker from "@vuepic/vue-datepicker";
import VueApexCharts from "vue3-apexcharts";
import mitt from "mitt";
import { Vue3Mq, MqResponsive } from "vue3-mq";
import "@vuepic/vue-datepicker/dist/main.css";
import BaseCheckBox from "@/components/common/BaseCheckBox.vue";
import BaseSelectBox from "@/components/common/BaseSelectBox.vue";
import BaseSwitcherButton from "@/components/common/BaseSwitcherButton.vue";
import BaseModal from "@/components/common/BaseModal.vue";
import SlideUpDown from "vue3-slide-up-down";
import TimeSeriesChart from "@/components/chart/time-series/TimeSeriesChart.vue";
import BarChart from "@/components/chart/bar/BarChart.vue";
import KoreaMap from "@/components/chart/korea-map/KoreaMap.vue";
import D3Map from "@/components/chart/d3-korea-map/D3Map.vue";
const app = createApp(App);
const emitter = mitt();
app.config.globalProperties.emitter = emitter;
app.config.globalProperties.axios = axios;
app.component("svg-icon", SvgIcon);
app.component("CheckBox", BaseCheckBox);
app.component("BaseModal", BaseModal);
app.component("BaseSelectBox", BaseSelectBox);
app.component("BaseSwitcherButton", BaseSwitcherButton);
app.component("slide-up-down", SlideUpDown);
app.component("TimeSeriesChart", TimeSeriesChart);
app.component("Datepicker", Datepicker);
app.component("KoreaMap", KoreaMap);
app.component("BarChart", BarChart);
app.component("mq-responsive", MqResponsive);
app.component("D3Map", MqResponsive);
app
  .use(router)
  .use(Vue3Mq, {
    preset: "devices",
  })
  .use(store)
  .use(util)
  .use(VueApexCharts)
  .mount("#app");
