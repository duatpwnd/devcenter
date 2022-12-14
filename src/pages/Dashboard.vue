<script setup lang="ts">
  import { onMounted, ref, Suspense, onErrorCaptured } from "@vue/runtime-core";
  import { useMq } from "vue3-mq";
  import CircleProgress from "vue3-circle-progress";
  import "vue3-circle-progress/dist/circle-progress.css";
  import BaseSelectBox from "../components/common/BaseSelectBox.vue";
  const date = ref();
  const mq = useMq();
  onMounted(() => {
    const startDate = new Date();
    const endDate = new Date();
    date.value = [startDate, endDate];
  });
  const scrollRight = () => {
    document.body.scrollIntoView({ behavior: "smooth" });
  };
  const regionList = {
    서울: 2,
    경기도: 1,
    인천: 5,
    강원도: 16545,
    충청북도: 12,
    충청남도: 15,
    세종: 19,
    대전: 25,
    경상북도: 1555,
    대구: 239,
    울산: 56,
    경상남도: 20,
    부산: 4,
    제주도: 12,
    광주: 9,
    전라남도: 12,
    전라북도: 1555,
  };
  const chartData = {
    title: "직군별 / 랩코드 스캔 비율",
    labels: [
      "마케팅",
      "디자인",
      "개발",
      "영업",
      "HR",
      "식음료",
      "교육",
      "제조•생산",
    ],
    datasets: [
      {
        borderColor: "#2F3137",
        backgroundColor: "#2F3137",
        hoverBackgroundColor: "#0E63FE",
        borderRadius: 10,
        borderSkipped: false,
        barPercentage: 0.8,
        categoryPercentage: 0.8,
        data: [40, 20, 30, 40, 10, 15, 45, 25],
      },
    ],
  };
  const chartData1 = {
    title: "연령대 / 랩코드 스캔 비율",
    labels: ["10대", "20대", "30대", "40대", "50대", "60대"],
    datasets: [
      {
        borderColor: "#2F3137",
        backgroundColor: "#2F3137",
        hoverBackgroundColor: "#0E63FE",
        borderRadius: 10,
        borderSkipped: false,
        barPercentage: 0.8,
        categoryPercentage: 0.8,
        data: [40, 20, 30, 40, 10, 15, 45, 25],
      },
    ],
  };
  const options = [
    { name: "2022년 08월" },
    { name: "2022년 01월" },
    { name: "2022년 02월" },
    { name: "2022년 03월" },
    { name: "2022년 04월" },
    { name: "2022년 05월" },
    { name: "2022년 06월" },
    { name: "2022년 07월" },
  ];
  onErrorCaptured(() => {
    console.log("onErrorCaptured");
  });
</script>
<template>
  <main>
    <!-- <D3Map /> -->
    <Suspense>
      <template #default>
        <TimeSeriesChart />
      </template>
      <template #fallback>
        <div class="spinner-container">
          <div class="spinner"></div>
        </div>
      </template>
    </Suspense>
    <!-- <div class="korea-map-wrapper">
      <KoreaMap :data="regionList" />
    </div> -->
    <BaseSelectBox
      :options="options"
      :style="{
        button: {
          fontSize: '13px',
          background: 'transparent',
          borderRadius: '4px',
          lineHeight: 2.616,
        },
        li: {
          fontSize: '13px',
        },
      }"
    />
    <button @click="scrollRight" class="scroll-top-btn"></button>
    <div class="scan-ratio">
      <div class="left-area">
        <img src="@/assets/images/scan_ratio_ico.svg" />
        <strong>성별 / 랩코드 스캔 비율</strong>
        <div class="date">2022.08.01 기준</div>
        <div class="men-progress-area">
          <div class="top">
            <span class="type">남성</span><span class="value">57%</span>
          </div>
          <progress :max="100" :value="57"></progress>
        </div>
        <div class="women-progress-area">
          <div class="top">
            <span class="type">여성</span><span class="value">43%</span>
          </div>
          <progress :max="100" :value="57"></progress>
        </div>
      </div>
      <div class="right-area">
        <CircleProgress
          percent="57"
          :viewport="true"
          :show-percent="true"
          :fill-color="'#0E60FE'"
          :empty-color="'#2F3137'"
          :border-width="12"
          class="men"
        />
        <CircleProgress
          percent="43"
          :viewport="true"
          :show-percent="true"
          :fill-color="'#9840CC'"
          :empty-color="'#2F3137'"
          :border-width="12"
          class="women"
        />
      </div>
    </div>
    <BarChart :chartData="chartData1" class="bar-chart1" />
    <BarChart :chartData="chartData" class="bar-chart2" />
  </main>
</template>
<style scoped lang="scss">
  .spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 240px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  .spinner {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 5px solid #e0e0e0;
    border-bottom: 5px solid #fe9616;
    animation: spin 1s linear infinite;
    position: relative;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  main {
    padding: 40px 130px;
    .select-box-wrap {
      margin-bottom: 40px;
    }
    .bar-chart1 {
      max-width: 560px;
    }
    .bar-chart2 {
      max-width: 728px;
    }
    .scroll-top-btn {
      width: 48px;
      height: 48px;
      position: fixed;
      bottom: 32px;
      right: 32px;
      background: url("@/assets/images/scroll_top_ico.svg") no-repeat center
        center / 48px 48px;
      z-index: 1;
    }
    .korea-map-wrapper {
      max-width: 640px;
      margin: 0 auto;
    }
    .wrap {
      margin-top: 40px;
    }
    .scan-ratio {
      background: #1f2024;
      border-radius: 28px;
      padding: 40px;
      display: flex;
      justify-content: space-between;
      .left-area {
        align-self: center;
        width: 30%;
        strong {
          color: #e3e5e8;
          font-size: 18px;
          display: block;
          margin-top: 40px;
          margin-bottom: 4px;
        }
        .date {
          color: #757b8a;
        }
        .men-progress-area {
          margin-top: 22px;
          .top {
            display: flex;
            justify-content: space-between;
            height: 11px;

            .type {
              color: #b7bac2;
              font-size: 13px;
            }
            .value {
              color: #0e60fe;
            }
          }

          progress {
            width: 100%;
            height: 4px;
          }
          progress::-webkit-progress-bar {
            background: #2f3137;
            border-radius: 4px;
          }
          progress::-webkit-progress-value {
            background: #0e60fe;
            border-radius: 4px;
          }
        }
        .women-progress-area {
          @extend .men-progress-area;
          progress::-webkit-progress-value {
            background: #9c52c7;
            border-radius: 4px;
          }
          .top {
            .value {
              color: #9c52c7;
            }
          }
        }
      }
      .right-area {
        align-self: center;
        text-align: right;
        width: 60%;
      }
      .men {
        width: 40% !important;
        height: auto !important;
      }
      .women {
        width: 32% !important;
        height: auto !important;
      }
      .men,
      .women {
        display: inline-block;
        vertical-align: middle;
      }
      .women {
        margin-left: 40px;
      }
      :deep .current-counter {
        font-weight: 700;
        font-family: "Poppins";
        font-size: 18px;
        color: #0e60fe;
        &:after {
          content: "%";
        }
      }
      :deep .women .current-counter {
        color: #9c52c7;
      }
    }
  }
</style>
