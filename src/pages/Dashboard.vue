<script setup lang="ts">
  import { onMounted, ref } from "@vue/runtime-core";
  import { useMq } from "vue3-mq";
  import CircleProgress from "vue3-circle-progress";
  import "vue3-circle-progress/dist/circle-progress.css";
  const date = ref();
  const mq = useMq();
  onMounted(() => {
    const startDate = new Date();
    const endDate = new Date();
    date.value = [startDate, endDate];
  });
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
</script>
<template>
  <main>
    <!-- <D3Map /> -->
    <!-- <TimeSeriesChart /> -->
    <!-- <div class="korea-map-wrapper">
      <KoreaMap :data="regionList" />
    </div> -->
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
    <BarChart :chartData="chartData1" />
    <BarChart :chartData="chartData" />
  </main>
</template>
<style scoped lang="scss">
  main {
    padding: 40px 130px;
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
        width: 27%;
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
      }
      .men {
        width: 220px !important;
        height: 220px !important;
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
