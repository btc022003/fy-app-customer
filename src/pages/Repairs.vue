<template>
  <div class="orders">
    <van-nav-bar title="我的报修" left-arrow @click-left="goBack" />
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();

const goBack = () => router.back();
</script>
