<script setup lang="ts">
  import { onMounted, getCurrentInstance } from "vue";
  import Plotly from "plotly.js-dist-min";
  import * as d3 from "d3";
  const globalProperties =
    getCurrentInstance()?.appContext.config.globalProperties;
  const axios = globalProperties?.axios;
  const csvJSON = (csvStr: string) => {
    const lines = csvStr.split("\n");
    let result = [];
    // NOTE: If your columns contain commas in their values, you'll need
    // to deal with those before doing the next step
    // (you might convert them to &&& or something, then covert them back later)
    // jsfiddle showing the issue https://jsfiddle.net/
    const headers = lines[0].replace(/\r/g, "");
    const split = headers.split(",");
    for (let i = 1; i < lines.length; i++) {
      let obj: { [key: string]: any } = {};
      const currentline = lines[i].replace(/\r/g, "");
      const currentSplit = currentline.split(",");
      for (let j = 0; j < split.length; j++) {
        obj[split[j]] = currentSplit[j];
      }
      result.push(obj);
    }
    return result; //JavaScript object
  };
  onMounted(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv"
      )
      .then((result: any) => {
        const getCsvJSON = csvJSON(result.data);
        console.log(getCsvJSON);
        const unpack = (rows: { [key: string]: any }[], key: string) => {
          return rows.map((row: { [key: string]: any }) => {
            return row[key];
          });
        };
        const config = { responsive: true };
        const layout = {
          dragmode: "pan",
          height: 700,
          plot_bgcolor: "rgb(22, 26, 30)",
          paper_bgcolor: "rgb(22, 26, 30)",
          title: {
            text: "회사별 스캔 다운로드 횟 수",
            font: {
              color: "#f6f7f8",
            },
          },
          legend: {
            font: {
              color: "#f6f7f8",
            },
          },

          xaxis: {
            gridcolor: "#525660",
            tickfont: {
              color: "rgb(132, 142, 156)",
            },

            range: ["2015-04-01", "2015-10-01"],
            type: "date",
            tickformat: "%Y-%m-%d", // For more time formatting types, see: https://github.com/d3/d3-time-format/blob/master/README.md
          },
          yaxis: {
            gridcolor: "#525660",

            tickfont: {
              color: "rgb(132, 142, 156)",
            },
          },
        };
        const data = [
          {
            type: "scatter",
            mode: "lines",
            name: "스냅태그",
            x: unpack(getCsvJSON, "Date"),
            y: unpack(getCsvJSON, "AAPL.High"),
            line: {
              color: "#17BECF",
              width: 1.5,
            },
          },
          {
            type: "scatter",
            mode: "lines",
            name: "나이스웨더",
            x: unpack(getCsvJSON, "Date"),
            y: unpack(getCsvJSON, "AAPL.Low"),
            line: {
              color: "rgb(55, 128, 191)",
              width: 1.5,
            },
          },
        ];
        Plotly.newPlot("timeSeriesChart", data, layout, config);
      });
  });
</script>
<template>
  <div id="timeSeriesChart"></div>
</template>
<style scoped lang="scss"></style>
