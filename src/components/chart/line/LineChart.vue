<script setup lang="ts">
  import { onMounted } from "@vue/runtime-core";
  function dateFormat(date: { [key: string]: any }) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    month = month >= 10 ? month : "0" + month;
    day = day >= 10 ? day : "0" + day;
    hour = hour >= 10 ? hour : "0" + hour;
    minute = minute >= 10 ? minute : "0" + minute;
    second = second >= 10 ? second : "0" + second;

    return date.getFullYear() + "-" + month + "-" + day;
  }
  function getDatesInRange(startDate: Date, endDate: Date) {
    const date = new Date(startDate.getTime());

    const dates = [];

    while (date <= endDate) {
      dates.push(dateFormat(date));
      date.setDate(date.getDate() + 1);
    }

    return dates;
  }
  const chartOptions = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: true,
      },
    },
    markers: {
      size: 5,
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Product Trends by Month",
      align: "left",
    },
    grid: {
      row: {
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: getDatesInRange(
        new Date("2022-01-18"),
        new Date("2023-01-24")
      ),
    },
  };
  const series = [
    {
      name: "스냅태그1",
      data: [13, 3, 33, 43, 35, 3, 73, 83, 50, 13, 3],
    },
    {
      name: "나이스웨더",
      data: [10, 2, 40, 68, 64, 10, 8, 99, 54, 13, 2],
    },
  ];
</script>
<template>
  <apexchart
    type="line"
    height="350"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>
<style scoped lang="scss"></style>
