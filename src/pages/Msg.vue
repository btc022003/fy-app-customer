<template>
  <div class="msg">
      <!-- <div class="right-circle"></div>
      <div class="left-circle"></div> -->
    <h2 class="mt-10 font-bold pl-2 text-lg">消息</h2>
    <div class="msg-list mt-6">
      <div
        class="msg-item  border-gray-400 p-4 flex items-center"
        v-for="i in 10"
        :key="i"
      >
        <img
          src="../assets/images/avatar.png"
          class="avatar  rounded-full"
          alt=""
        />
        <div class="u-info flex-1 flex flex-col p-4">
          <div class="u-name text-gray-600">房东</div>
          <div class="txt text-gray-400 text-sm">本月房租该交了！</div>
        </div>
        <span class="w-24">22/11/17</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.msg{
  /* position: relative; */
  /* background:  url(../assets/images/Vector.png) no-repeat ; */
  background-size: contain;
}
.msg-item{
  /* background-color: #fff; */
  /* border-radius: 10px; */
  position: relative;
  z-index: 1;
  /* box-shadow: 0 0 6px #cccccc86; */
  border-bottom: 1px solid #eee!important;
  padding: .5rem!important;
}
.w-24{
  width: 4rem;
  font-size: 12px;
  color: #999;
  text-align: right;
}
.u-name{
  margin-bottom: 5px;
  color: #333;
  font-weight: bold;
  font-size: 14px;
}
.p-4 {
    margin: 1rem;
    padding: 0;
    margin: 0 1rem;
    /* background-color: #fff; */
    border-radius: 0px;

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
  .msg>h2{
    text-align: center;
    font-weight: bold;
    font-size: 16px;
  }
  .mt-10{
    margin-top: 1rem;
  }
  
  .msg-list{
    /* background-color: rgba(255, 255, 255, 0.445); */
  }
  .msg-item img{
    width: 2.4rem;
    height: 2.4rem;
  }
  .u-name{
    margin-bottom: 3px;
  }
  .text{
    font-size: 12px;
  }

  .txt{
    font-size: 12px;
  }
</style>
