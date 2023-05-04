<template>
  <div class="heart">
    <h2 class="mt-10 font-bold pl-2 text-lg">心愿单</h2>
    <div class="tips grid grid-cols-2 gap-8 p-6">
      <div
        class="left item rounded-lg shadown flex items-center p-2 bg-white"
      >
        <img src="../assets/svg/xy-heart.svg" alt="" />
        <div class="txt flex flex-col p-2">
          <span class="font-bold">我的心愿</span>
          <span class="text-sm transform scale-75 origin-top-left w-28"
            >共<i class="text-red-400 not-italic">10</i>个</span
          >
        </div>
      </div>
      <div
        class="right item rounded-lg shadown flex items-center p-2 bg-white"
      >
        <img src="../assets/svg/xy-history.svg" alt="" />
        <div class="txt flex flex-col ">
          <span class="font-bold">历史足迹</span>
          <span class="text-sm transform scale-75 origin-top-left block w-28"
            >最近浏览的房源</span
          >
        </div>
      </div>
    </div>
    <div class="houses">
      <div class="item flex gap-4 p-4">
        <img
          class="w-28 h-28 rounded-2xl"
          src="../assets/images/house.png"
          alt=""
        />
        <div class="info flex-1 flex flex-col items-start justify-center">
          <h3 class="text-gray-600 font-bold">
            高新区·朗悦公园茂·整租 1室1床1人
          </h3>
          <span class="text-gray-500">1200元/月</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.heart {
  /* background: url("../assets/images/heart-bg.png") no-repeat; */
  background-size: contain;
}

.heart h2{
  text-align: center;
  font-weight: bold;
  font-size: 16px;
}
.shadown{
  box-shadow: 0 2px 6px #ccc;
}
.mt-10{
  margin-top: 1rem;
}
.gap-8{
  gap: 1rem;
}
.p-6{
  padding: 1rem;
}
.pl-2{
  padding-left: 1rem;
}
.houses{
  /* background-color: #fff; */
}
.w-28{
  width: 6rem;
}
.h-28{
  height: 6rem;
}
.txt>.w-28{
    display: block;
    width: 7rem;
  }
.item{
  overflow: hidden;
  
}
.tips img{
    width:30px;
  }

.info{
  justify-content: flex-start;
  
}
.info h3{
    margin: 5px 0;
  }

  .p-2{
    padding: .2rem .5rem;
  }
</style>
