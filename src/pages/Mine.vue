<template>
  <div class="user p-6">
    <div
      class="info mt-16 border p-4 rounded-md bg-white flex items-end justify-between"
    >
      <div class="user-info">
        <h3 class="font-bold text-lg">
          HI 子涵<button
            class="btn-bg text-white text-xs px-4 py-1 rounded-2xl ml-8"
          >
            编辑
          </button>
        </h3>
        <p class="text-gray-400 text-sm">新的一天，也要预约生活哦！</p>
      </div>
      <img src="../assets/images/avatar.png" alt="" />
    </div>
    <div
      class="tools border p-4 rounded-md my-6 bg-white flex items-center justify-around gap-4 text-gray-400 text-sm"
    >
      <div class="item flex flex-col items-center">
        <img src="../assets/svg/user-money.svg" alt="" />
        <span>我的账单</span>
      </div>
      <div class="item flex flex-col items-center">
        <img src="../assets/svg/user-contract.svg" alt="" />
        <span>我的合同</span>
      </div>
      <div class="item flex flex-col items-center">
        <img src="../assets/svg/user-repairs.svg" alt="" />
        <span>报修进度</span>
      </div>
      <div class="item flex flex-col items-center">
        <img src="../assets/svg/user-house.svg" alt="" />
        <span>我的房间</span>
      </div>
    </div>
    <div class="op text-gray-400">
      <div class="op-item flex my-2 border-b py-4">
        <img src="../assets/svg/user-notice.svg" alt="" />
        <span>通知</span>
      </div>
      <div class="op-item flex my-2 border-b py-4">
        <img src="../assets/svg/user-setting.svg" alt="" />
        <span>设置</span>
      </div>
      <div class="op-item flex my-2 border-b py-4">
        <img src="../assets/svg/user-help.svg" alt="" />
        <span>帮助</span>
      </div>
      <div class="op-item flex my-2 border-b py-4">
        <img src="../assets/svg/user-about.svg" alt="" />
        <span>关于</span>
      </div>
      <div class="op-item flex my-2 border-b py-4">
        <img src="../assets/svg/user-logout.svg" alt="" />
        <span class="text-red-400">退出登录</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.user {
  background: url("../assets/images/user-bg.png") no-repeat;
  background-size: contain;
}
.btn-bg {
  /* Rectangle 154 */

  background: linear-gradient(
    107.82deg,
    rgba(67, 84, 231, 0.8) 21.15%,
    rgba(52, 209, 150, 0.8) 88.06%
  );
}
.op span {
  margin-left: 8px;
}
</style>
