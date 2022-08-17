<script setup lang="ts">
  import { onMounted, ref, defineProps } from "@vue/runtime-core";
  import { Bar } from "vue-chartjs";
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from "chart.js";
  interface Props {
    chartData: any;
  }
  const props = defineProps<Props>();
  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );
  onMounted(() => {
    console.log(props.chartData);
  });
  const chartOptions = {
    responsive: true,
    scaleShowLabels: false,
    layout: {
      padding: {
        top: 238,
        left: 20,
        right: 20,
        bottom: 40,
      },
    },
    plugins: {
      tooltip: {
        interaction: {
          xAlign: "center", //'left','center','right'
          yAlign: "bottom", //'top','center','bottom'
        },
        caretSize: 5,
        displayColors: false,
        enabled: true,
        usePointStyle: false,
        backgroundColor: "#1A1B1E",
        bodyColor: "#E3E5E8",
        padding: {
          left: 20,
          right: 20,
          top: 12,
          bottom: 12,
        },
        borderColor: "#2F3137",
        borderWidth: 2,
        callbacks: {
          title: function () {
            return [];
          },

          label: function (context: { [key: string]: any }) {
            return context.formattedValue + "%";
          },
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#B7BAC2",
          font: {
            size: 13,
          },
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
  };
</script>
<template>
  <div class="wrap">
    <div class="symbol">
      <img src="@/assets/images/barchart_ico.svg" />
      <strong>{{ chartData.title }}</strong>
      <span class="date">2022.08.01 기준</span>
    </div>
    <Bar
      class="bar-chart"
      :chart-data="chartData"
      :chart-options="chartOptions"
      :height="240"
    />
  </div>
</template>
<style scoped lang="scss">
  .wrap {
    position: relative;
    background: #1f2024;
    border-radius: 28px;
    .symbol {
      position: absolute;
      top: 40px;
      left: 40px;
      z-index: 0;
      strong {
        color: #e3e5e8;
        font-size: 18px;
        display: block;
        margin-top: 28px;
      }
      .date {
        margin-top: 4px;
        color: #757b8a;
        font-size: 14px;
      }
    }
  }
</style>
