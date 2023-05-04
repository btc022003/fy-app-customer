<template>
  <div style="background-color: #f9f9fa" class="wrap overflow-x-hidden">
    <!-- <div class="right-circle"></div>
    <div class="left-circle"></div> -->
    <div class="top">
      
      <div class="title">
        <h2>Hi 爱生活的你</h2>
        <p class="sub-title">在锋寓，给你愉悦的选房体验</p>
      </div>
      <div class="banner">
        <img src="../assets/images/banner.png" alt="" />
      </div>
      <div class="tools">
        <section> <div class="item">
          <img src="../assets/svg/location.svg" alt="" />
          
        </div><p class="p-0 m-0">地图找房</p></section>
        <section> <div class="item">
          <img src="../assets/svg/date.svg" alt="" />
         
        </div> <p>我的预约</p></section>
        <section> <div class="item">
          <img src="../assets/svg/question.svg" alt="" />
          
        </div><p>我的投诉</p></section>
        <section> <div class="item">
          <img src="../assets/svg/repair.svg" alt="" />
          
        </div><p>我的报修</p></section>
        <section> <div class="item">
          <img src="../assets/svg/one-pay.svg" alt="" />
          
        </div><p>一键交租</p></section>
      </div>
      <div class="ipt bg-white border-gray-300 rounded-md flex flex-col m-4 p-4">
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
        class="house-item  relative w-full"
        :class="item.isFull?'house-item-active':''"
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
          :src="fav"
          v-if="item.isCollection"
          class="absolute top-2 right-2"
          alt=""
        />

        <img
          :src="dalImg(item.images?.split(',')[0])"
          class="rounded-xl w-full h-full"
          alt=""
        />
        <div
          class="info absolute bottom-0 p-2  left-0 text-gray-200 bg-slate-500 w-full bg-opacity-80"
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
  // background: url(../assets/images/Vector.png) no-repeat ;
  background-size: contain;

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
  .top {
    position: relative;
    
    h2 {
      padding-top: 24px;
      padding-left: 1rem;
      font-weight: bold;
    }
    .sub-title {
      color: #979797;
      /* margin-left: ; */
      padding-left: 1rem;
      padding-top: 4px;
      font-size: 13px;
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
    
    .tools {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100vw;
      padding: 0 1rem;
      box-sizing: border-box;

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
        // border: 1px solid #d7d7d7;
        box-shadow: 0 0 10px #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 3rem;
        height: 3rem;
        gap: 2px;
        
        img {
          width: 30px;
          height: 30px;
        }
      }
      section:nth-child(1) .item{
        background-image: linear-gradient(#ffc62b,#ffb032);
      }
      section:nth-child(2) .item{
        background-image: linear-gradient(#ff5b3d,#ff2b67);
      }
      section:nth-child(3) .item{
        background-image: linear-gradient(#3facda,#2f8de2);
      }
      section:nth-child(4) .item{
        background-image: linear-gradient(#9448ff,#6946fa);
      }
      section:nth-child(5) .item{
        background-image: linear-gradient(#a8e541,#6dd227);
      }
      p {
          font-size: 12px;
          line-height: 2;
          color: #000;
        }
    }
  }
  .houses{
    padding: 0 1rem;
    box-sizing: border-box;
    font-size: 14px;
    position: relative;
    .house-item>span{
      background-color: transparent;
      left: 0px;
      top: 0px;
      position: absolute;
      z-index: 99;
      font-size: 13px;
    }
    
    
    
    .info{
      background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.9) 90%);
      background-color: transparent!important;
      span{
        font-size: 12px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.8);
      }
      p:nth-of-type(1){
        font-size: 16px;
        font-weight: bold;
        line-height: 2;
      }
      p:nth-of-type(2){
        font-size: 12px;
      }
    }
  }
  .gap-8{
    gap: 1rem;
  }
}

.house-item{
  overflow: hidden;
  border-radius: 10px;
}
.house-item-active::after{
      width: 0;
      height: 0;
      content: "";
      border: 30px solid transparent;
      border-top: 30px solid rgb(244,63,94);
      border-left: 30px solid rgb(244,63,94);
      position: absolute;
      left: 0;
      top: 0;
    }

    .ipt{
      box-shadow: 0 0 5px rgba(204, 204, 204, 0.477);
    }
</style>
