<script setup lang="ts">
  import { onMounted, getCurrentInstance, ref } from "vue";
  import Plotly from "plotly.js-dist-min";
  import * as d3 from "d3";
  const globalProperties =
    getCurrentInstance()?.appContext.config.globalProperties;
  const axios = globalProperties?.axios;
  const csvToJSON = globalProperties?.$csvToJSON;
  const unpack = (rows: { [key: string]: any }[], key: string) => {
    return rows.map((row: { [key: string]: any }) => {
      return row[key];
    });
  };
  const companyList = [{ name: "나이스웨더" }, { name: "헤드쿼터" }];
  const csvToJSONarray = ref<{ [key: string]: any }[]>([]);
  const config = { responsive: true };
  const layout = {
    dragmode: "pan",
    height: 700,
    plot_bgcolor: "#1a1b1e",
    paper_bgcolor: "#1a1b1e",
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
      rangeselector: {
        activecolor: "rgb(252, 213, 53)",
        font: {
          color: "rgb(24, 26, 32)",
        },
        buttons: [
          {
            count: 6,
            label: "1D",
            step: "day",
            stepmode: "backward",
          },
          {
            count: 6,
            label: "1M",
            step: "month",
            stepmode: "backward",
          },
          {
            count: 6,
            label: "1Y",
            step: "year",
            stepmode: "backward",
          },
          {
            label: "All",
            step: "all",
          },
        ],
      },
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
  const data: { [key: string]: any }[] = [
    {
      type: "scatter",
      mode: "lines",
      name: "스냅태그",
      x: "",
      y: "",
      line: {
        color: "#17BECF",
        width: 1.5,
      },
    },
    {
      type: "scatter",
      mode: "lines",
      name: "나이스웨더",
      x: "",
      y: "",
      line: {
        color: "rgb(55, 128, 191)",
        width: 1.5,
      },
    },
  ];
  const setTimeSeriesChart = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv"
      )
      .then((result: any) => {
        csvToJSONarray.value = csvToJSON(result.data);
        data[0].x = unpack(csvToJSONarray.value, "Date");
        data[0].y = unpack(csvToJSONarray.value, "AAPL.High");
        data[1].x = unpack(csvToJSONarray.value, "Date");
        data[1].y = unpack(csvToJSONarray.value, "AAPL.Low");

        Plotly.newPlot("timeSeriesChart", data, layout, config);
      });
  };
  setTimeSeriesChart();
  const changeCompany = (params: string) => {
    if (params == "헤드쿼터") {
      data[0].x = unpack(csvToJSONarray.value, "Date");
      data[0].y = unpack(csvToJSONarray.value, "AAPL.Close");
      data[1].x = unpack(csvToJSONarray.value, "Date");
      data[1].y = unpack(csvToJSONarray.value, "up");
      data[0].line.color = "rgb(252, 213, 53)";
      data[1].line.color = "#F6465D";
      data[1].name = "헤드쿼터";
    } else {
      data[0].x = unpack(csvToJSONarray.value, "Date");
      data[0].y = unpack(csvToJSONarray.value, "AAPL.High");
      data[1].x = unpack(csvToJSONarray.value, "Date");
      data[1].y = unpack(csvToJSONarray.value, "AAPL.Low");
      data[0].line.color = "#17BECF";
      data[1].line.color = "rgb(55, 128, 191)";
      data[1].name = "나이스웨더";
    }
    Plotly.newPlot("timeSeriesChart", data, layout, config);
  };
</script>
<template>
  <div class="time-series-wrap">
    <div class="select-box-wrap">
      <BaseSelectBox
        @update:value="changeCompany"
        :options="companyList"
        :style="{
          button: {
            padding: '14px 28.5px 14px 20px',
          },
          ul: {
            padding: '8px',
          },
          li: {
            height: '48px',
            padding: '12px',
          },
        }"
      />
    </div>
    <div id="timeSeriesChart"></div>
  </div>
</template>
<style scoped lang="scss">
  .time-series-wrap {
    position: relative;
    .select-box-wrap {
      width: 200px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
  }
</style>
