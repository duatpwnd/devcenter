<script setup lang="ts">
  import * as d3 from "d3";
  import {
    onMounted,
    reactive,
    getCurrentInstance,
    ref,
  } from "@vue/runtime-core";
  import LOCAL_SEAT_FINAL from "@/assets/localseat.final.js";
  import geoJSON from "@/assets/korea.json";
  import mapArea from "@/assets/map.area.json";
  let centered: { [key: string]: any } | undefined | null = undefined;
  const globalProperties =
    getCurrentInstance()?.appContext.config.globalProperties;
  const axios = globalProperties?.axios;
  const province = ref<{ [key: string]: any }>({});
  const currentProvince = ref<{ [key: string]: any }>({});
  const localSeatData = reactive<{ [key: string]: any }>({});
  const mapWrapper = ref(null);
  const partyList: { [key: string]: any } = {
    theminjoo: {
      name: "더불어민주당",
      no: 1,
      localLock: false,
      ratioLock: true,
      color: "#004EA2",
    },
    unitedfuture: {
      name: "미래통합당",
      no: 2,
      localLock: false,
      ratioLock: true,
      color: "#EF426F",
    },
    minsaengdang: {
      name: "민생당",
      no: 3,
      localLock: false,
      ratioLock: false,
      color: "#0BA95F",
    },
    futurekorea: {
      name: "미래한국당",
      no: 4,
      localLock: true,
      ratioLock: false,
      color: "#EF426F",
    },
    platformparty: {
      name: "더불어시민당",
      no: 5,
      localLock: true,
      ratioLock: false,
      color: "#0088D2",
    },
    justice21: {
      name: "정의당",
      no: 6,
      localLock: false,
      ratioLock: false,
      color: "#FFCA05",
    },
    ourrepublican: {
      name: "우리공화당",
      no: 7,
      localLock: false,
      ratioLock: false,
      color: "#009900",
    },
    minjung: {
      name: "민중당",
      no: 8,
      localLock: false,
      ratioLock: false,
      color: "#F47920",
    },
    koreaeconomy: {
      name: "한국경제당",
      no: 9,
      localLock: true,
      ratioLock: false,
      color: "#009900",
    },
    people21: {
      name: "국민의당",
      no: 10,
      localLock: true,
      ratioLock: false,
      color: "#EA5504",
    },
    proparknew: {
      name: "친박신당",
      no: 11,
      localLock: false,
      ratioLock: false,
      color: "#BBBBBB",
    },
    openminjoo: {
      name: "열린민주당",
      no: 12,
      localLock: true,
      ratioLock: false,
      color: "#004098",
    },
    etcparty: {
      name: "기타",
      localLock: false,
      ratioLock: false,
      color: "#BBBBBB",
    },
    noparty: {
      name: "무소속",
      localLock: false,
      ratioLock: true,
      color: "#AAAAAA",
    },
    undecided: {
      name: "무당층",
      localLock: true,
      ratioLock: false,
      color: "#CCCCCC",
    },
  };

  const localSeatFinal = LOCAL_SEAT_FINAL;
  const color = d3
    .scaleLinear()
    .domain([1, 20])
    .clamp(true)
    .range(["#595959", "#595959"]);
  const partyColor = (code: number) => {
    let color = null;
    const localSeatCode = "" + code;
    if (localSeatCode in localSeatFinal) {
      const localSeat = localSeatFinal[localSeatCode];
      let candidate: null | { [key: string]: any } = null || {};
      localSeat.some((item: { [key: string]: any }) => {
        if (item.elected === true) {
          candidate = item;
          return true;
        }
      });
      if (candidate) {
        const party = candidate.party;
        color = partyList[party].color;
      }
    }
    return color;
  };
  const nameFn = (d: { [key: string]: any }) => {
    return d && d.properties ? d.properties.name : null;
  };
  const nameLength = (d: { [key: string]: any }) => {
    const n = nameFn(d);
    return n ? n.length : 0;
  };

  const fillFn = (d: { [key: string]: any }) => {
    const pcolor = partyColor(d.properties.SGG_Code);
    if (pcolor) {
      return pcolor;
    }
    return color(nameLength(d));
  };
  const findArea = (code: number) => {
    if (code in mapArea) {
      return Array.isArray(mapArea[code]) && mapArea[code].length >= 2
        ? mapArea[code][1]
        : "";
    }
    return "";
  };
  const drawMap = () => {
    // 지도정보
    const geojson = geoJSON;
    // 지도의 중심점 찾기
    const center = d3.geoCentroid(geojson);
    // 현재의 브라우저의 크기 계산
    const divWidth = (mapWrapper.value as unknown as HTMLDivElement)
      .clientWidth;
    const width = divWidth < 1000 ? divWidth * 0.9 : 1000;
    const height = width * 1;

    // 지도를 그리기 위한 svg 생성
    const svg = d3
      // .select('.d3')
      .select(".map-wrapper")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // 배경 그리기
    const background = svg
      .append("rect")
      .attr("class", "background")
      .attr("width", width)
      .attr("height", height);

    // 지도가 그려지는 그래픽 노드(g) 생성
    const g = svg.append("g");
    // const effectLayer = g.append('g').classed('effect-layer', true);
    // 지도가 그려지는 그래픽 노드
    const mapLayer = g.append("g").classed("map-layer", true);
    // 아이콘이 그려지는 그래픽 노드
    const iconsLayer = g.append("g").classed("icons-layer", true);

    // 지도의 출력 방법을 선택(메로카토르)
    let projection = d3.geoMercator().scale(1).translate([0, 0]);

    // svg 그림의 크기에 따라 출력될 지도의 크기를 다시 계산
    const path = d3.geoPath().projection(projection);
    const bounds = path.bounds(geojson);
    const widthScale = (bounds[1][0] - bounds[0][0]) / width;
    const heightScale = (bounds[1][1] - bounds[0][1]) / height;
    const scale = 0.95 / Math.max(widthScale, heightScale);
    const xoffset = width / 2 - (scale * (bounds[1][0] + bounds[0][0])) / 2 + 0;
    const yoffset =
      height / 2 - (scale * (bounds[1][1] + bounds[0][1])) / 2 + 0;
    const offset = [xoffset, yoffset];
    projection.scale(scale).translate(offset);

    const color = d3
      .scaleLinear()
      .domain([1, 20])
      .clamp(true)
      .range(["#595959", "#595959"]);
    const findCandidate = (code: number) => {
      let candidate = null;
      const localSeat = localSeatFinal[code];
      if (code != undefined) {
        localSeat.some((item: { [key: string]: any }) => {
          if (item.elected === true) {
            candidate = item;
            return true;
          }
        });
        return candidate;
      }
    };
    const selectProvince = (obj: { [key: string]: any }) => {
      province.value = obj;
      if (province.value) {
        province.value.candidate = findCandidate(province.value.SGG_Code);
      }
    };
    // 지역구 정보 열기
    const openInfo = (province: any) => {
      if (province) {
        province.candidate = findCandidate(province.SGG_Code);
        province.final = localSeatFinal[province.SGG_Code];
      }
      currentProvince.value = province;
    };
    // 지역구 정보 닫기
    const closeInfo = () => {
      currentProvince.value = {};
    };
    // Get province color
    const clicked = (d: { [key: string]: any }) => {
      let x, y, k;
      // Compute centroid of the selected path
      if (d.target.__data__ && centered !== d.target.__data__) {
        let centroid = path.centroid(d.target.__data__);
        console.log(centroid);
        x = centroid[0];
        y = centroid[1];
        k = 4;
        centered = d.target.__data__;
        openInfo(d.target.__data__.properties);
      } else {
        x = width / 2;
        y = height / 2;
        k = 1;
        centered = null;
        closeInfo();
      }
      mapLayer.selectAll("path").style("fill", (d: { [key: string]: any }) => {
        return centered && d === centered ? "#D5708B" : fillFn(d);
      });
      // Zoom
      g.transition()
        .duration(750)
        .attr(
          "transform",
          "translate(" +
            width / 2 +
            "," +
            height / 2 +
            ")scale(" +
            k +
            ")translate(" +
            -x +
            "," +
            -y +
            ")"
        );
    };

    const mouseover = (d: { [key: string]: any }) => {
      // Highlight hovered province
      d3.select(d.target).style("fill", "#1483ce");
      // d3.select(this).style('fill', '#004EA2');
      if (d.target) {
        selectProvince(d.target.__data__.properties);
      }
    };

    const mouseout = (d: any) => {
      selectProvince({});
      // Reset province color
      mapLayer.selectAll("path").style("fill", (d: { [key: string]: any }) => {
        return centered && d === centered ? "#D5708B" : fillFn(d);
      });
    };
    background.on("click", clicked);
    // 지도 그리기
    mapLayer
      .selectAll("path")
      .data(geojson.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("vector-effect", "non-scaling-stroke")
      .style("fill", fillFn)
      .on("mouseover", mouseover)
      .on("mouseout", mouseout)
      .on("click", clicked);
    const zoomed = (event: { [key: string]: any }) => {
      mapLayer.attr("transform", event.transform);
      iconsLayer.attr("transform", event.transform);
    };
    const zoom = d3.zoom().scaleExtent([1, 8]).on("zoom", zoomed);
    svg.call(zoom);
  };

  onMounted(() => {
    drawMap();
  });
</script>
<template>
  <div id="map-wrapper" class="map-wrapper" ref="mapWrapper">
    <div v-if="province" class="province-title text-left">
      <h3 class="text-center">
        {{ province.SGG_2 }}
        <br />
        <h4>
          <template v-if="province.candidate">
            <strong>
              {{ partyList[province.candidate.party].name }},
              {{ province.candidate.name }}
            </strong>
          </template>
        </h4>
      </h3>
      <span v-html="findArea(province.SGG_Code)"></span>
    </div>

    <div v-if="currentProvince" class="province-info">
      <h3 class="text-center">
        {{ currentProvince.SGG_2 }}
        <br />
        <h4>
          <template v-if="currentProvince.candidate">
            <strong>
              {{ partyList[currentProvince.candidate.party].name }},
              {{ currentProvince.candidate.name }}
            </strong>
          </template>
        </h4>
      </h3>

      <ul class="text-left">
        <li>
          <span v-html="findArea(currentProvince.SGG_Code)"></span>
        </li>
        <!--
        <li>SGG_Code: {{currentProvince.SGG_Code}}</li>
        <li>SGG_1: {{currentProvince.SGG_1}}</li>
        <li>SGG_2: {{currentProvince.SGG_2}}</li>
        <li>SGG_2: {{currentProvince.SGG_3}}</li>
        -->
        <!-- <template v-if="currentProvince.final">
          <li>
            <b-row>
              <b-col class="col-12 text-white"> 개표결과 </b-col>
              <b-col class="col-12 text-white">
                <vote21-ratio-bar
                  :party-list="partyList"
                  :data="currentProvince.final"
                ></vote21-ratio-bar>
              </b-col>
            </b-row>
          </li>
        </template> -->
      </ul>
    </div>

    <div class="province-summary text-left" v-if="!currentProvince">
      <h4 class="text-center">정당별 현황</h4>
      <ul>
        <li v-for="(value, key) in localSeatData" :key="key">
          {{ partyList[key].name }} : {{ value }} 석
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .map-wrapper {
    position: relative;
    text-align: center;
    .province-title {
      position: absolute;
      top: 0px;
      left: 0px;
      color: white;
      text-align: left;
      width: 500px;
      z-index: 100;
      pointer-events: none;
    }
    .province-info {
      position: absolute;
      color: white;
      text-align: left;
      bottom: 50px;
      right: 60px;
      width: 500px;
      height: 500px;
      z-index: 101;
      pointer-events: none;
    }
    .province-summary {
      position: absolute;
      color: white;
      bottom: 10px;
      right: 10px;
      width: 300px;
      z-index: 103;
      pointer-events: none;
    }
    .province-summary > ul {
      list-style: none;
    }
    .background {
      /* fill: #021019; */
      fill: transparent;
      pointer-events: all;
    }
    .map-layer {
      fill: #08304b;
      stroke: #021019;
      stroke-width: 1px;
    }
  }
</style>
