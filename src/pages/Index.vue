<template>
  <div class="m-container">
    <!-- 切换tabbar页面 -->

    <router-view class="main" v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>

    <Tabbar />
  </div>
</template>
<script setup lang="ts">
import Tabbar from "../components/Tabbar.vue";
</script>
<style scoped lang="scss">
// 给页面容器添加定位属性 在路由过渡时 位置不会产生冲突
.m-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .main {
    flex: 1;
    overflow: auto;
  }
  // 动画类
  // tabbar切换动画 渐隐渐显
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active {
    transition: all 0.3s;
    /* position: absolute;
    top: 0;
    left: 0; */
  }

  .fade-leave-active {
    transition: all 0s;
  }
}
</style>
