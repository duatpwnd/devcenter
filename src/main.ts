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
import { Vue3Mq, MqResponsive } from "vue3-mq";
import "@vuepic/vue-datepicker/dist/main.css";
import BaseCheckBox from "@/components/common/BaseCheckBox.vue";
import BaseSelectBox from "@/components/common/BaseSelectBox.vue";
import BaseModal from "@/components/common/BaseModal.vue";
import SlideUpDown from "vue3-slide-up-down";
import DoughnutChart from "@/components/chart/doughnut/DoughnutChart.vue";
import TimeSeriesChart from "@/components/chart/time-series/TimeSeriesChart.vue";
import BarChart from "@/components/chart/bar/BarChart.vue";
import KoreaMap from "@/components/chart/korea-map/KoreaMap.vue";
const app = createApp(App);
console.log(app.config);
app.config.globalProperties.axios = axios;
app.component("svg-icon", SvgIcon);
app.component("CheckBox", BaseCheckBox);
app.component("BaseModal", BaseModal);
app.component("BaseSelectBox", BaseSelectBox);
app.component("slide-up-down", SlideUpDown);
app.component("DoughnutChart", DoughnutChart);
app.component("TimeSeriesChart", TimeSeriesChart);
app.component("Datepicker", Datepicker);
app.component("KoreaMap", KoreaMap);
app.component("BarChart", BarChart);
app.component("mq-responsive", MqResponsive);
app
  .use(router)
  .use(Vue3Mq, {
    preset: "devices",
  })
  .use(store)
  .use(util)
  .use(VueApexCharts)
  .mount("#app");
