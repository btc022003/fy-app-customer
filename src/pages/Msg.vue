<template>
  <div class="msg">
    <h2 class="mt-10 font-bold pl-2 text-lg">消息</h2>
    <div class="msg-list mt-6">
      <div
        class="msg-item border-t border-gray-400 p-4 flex items-center"
        v-for="i in 10"
        :key="i"
      >
        <img
          src="../assets/images/avatar.png"
          class="avatar w-20 h-20 rounded-full"
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
<style scoped></style>
