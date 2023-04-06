<template>
  <div style="background-color: #f9f9fa" class="wrap overflow-x-hidden">
    <div class="top">
      <div class="right-circle"></div>
      <div class="left-circle"></div>
      <div class="title">
        <h2>Hi 爱生活的你</h2>
        <p class="sub-title">在锋寓，给你愉悦的选房体验</p>
      </div>
      <div class="banner">
        <img src="../assets/images/banner.png" alt="" />
      </div>
      <div class="tools">
        <div class="item">
          <img src="../assets/svg/location.svg" alt="" />
          <p class="p-0 m-0">地图找房</p>
        </div>
        <div class="item">
          <img src="../assets/svg/date.svg" alt="" />
          <p>我的预约</p>
        </div>
        <div class="item">
          <img src="../assets/svg/question.svg" alt="" />
          <p>我的投诉</p>
        </div>
        <div class="item">
          <img src="../assets/svg/repair.svg" alt="" />
          <p>我的报修</p>
        </div>
        <div class="item">
          <img src="../assets/svg/one-pay.svg" alt="" />
          <p>一键交租</p>
        </div>
      </div>
      <div class="ipt border border-gray-300 rounded-md flex flex-col m-4 p-4">
        <input
          class="border-b p-2 rounded"
          type="text"
          placeholder="输入区域关键词"
        />
        <button class="mt-2 bg-blue-600 text-white py-2 rounded-lg">
          搜索房源
        </button>
      </div>
      <div class="tips mb-2">
        <h2 class="font-bold text-xl">搜索更多好房源</h2>
        <p class="sub-title">开启在锋寓的选房之旅</p>
      </div>
    </div>
    <div
      class="houses grid grid-cols-2 gap-8 items-center justify-items-center"
    >
      <div
        style="min-height: 200px"
        class="house-item relative w-full"
        v-for="item in houses"
        :key="item.id"
        @click="$router.push({ name: 'HouseDetail', params: { id: item.id } })"
      >
        <span
          v-if="item.isFull"
          class="bg-rose-500 text-white p-2 absolute top-2 left-1 -rotate-45 rounded text-sm"
          >已租</span
        >
        <img
          :src="item.isCollection ? fav : noFav"
          class="absolute top-2 right-2"
          alt=""
        />

        <img
          :src="dalImg(item.images?.split(',')[0])"
          class="rounded-xl w-full h-full"
          alt=""
        />
        <div
          class="info absolute bottom-0 p-2 rounded left-0 text-gray-200 bg-slate-500 w-full bg-opacity-80"
        >
          <span class="bg-white text-black p-1 rounded-md text-sm">{{
            item.house.isWhole ? "整租" : "合租"
          }}</span>
          <p>{{ item.house.dwelling }}</p>
          <p>{{ item.content }}·{{ item.price }}元/月</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import TitleText from "../components/TitleText.vue";
import { loadHousesAPI } from "../services/houses";
import { dalImg } from "../utils/tools";
import fav from "../assets/svg/fav.svg";
import noFav from "../assets/svg/no-fav.svg";

let tip = () => {
  alert("查看更多");
};

const houses = ref<House.IRoom[] | undefined>([]);
loadHousesAPI().then((res) => {
  // console.log(res.data);
  houses.value = res.data.list;
});
</script>
<style scoped lang="scss">
.wrap {
  /* height: 100vh; */
  overflow-x: hidden !important;

  .top {
    position: relative;
    h2 {
      padding-top: 24px;
      padding-left: 8px;
    }
    .sub-title {
      color: #979797;
      /* margin-left: ; */
      padding-left: 8px;
      padding-top: 4px;
    }
    .banner {
      margin: 1rem;
      /* text-align: center; */
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
      }
    }
    .right-circle {
      /* Ellipse 97 */

      position: absolute;
      width: 508px;
      height: 508px;
      left: 77px;
      top: -107.5px;

      background: radial-gradient(
        50% 50% at 41.54% 46.36%,
        rgba(67, 84, 231, 0.44) 0%,
        rgba(67, 84, 231, 0) 100%
      );
      opacity: 0.6;
      border-radius: 50%;
    }
    .left-circle {
      /* Ellipse 104 */

      position: absolute;
      width: 176px;
      height: 176px;
      left: -24.52px;
      top: 256px;

      background: radial-gradient(
        50% 50% at 51.43% 38.07%,
        rgba(52, 209, 150, 0.45) 0%,
        rgba(52, 209, 150, 0) 100%
      );
      opacity: 0.39;
    }
    .tools {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100vw;

      .item {
        /* Ellipse 98 */

        box-sizing: border-box;
        /* padding: 4px; */
        display: flex;
        align-items: center;
        justify-content: center;
        /* left: 28px; */
        border-radius: 50%;
        /* top: 210px; */

        background: #ffffff;
        border: 1px solid #d7d7d7;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 4.2rem;
        height: 4.2rem;
        gap: 2px;
        p {
          font-size: 12px;
        }
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}
</style>
