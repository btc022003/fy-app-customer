<template>
  <van-tabbar
    route
    active-color="#1989fa"
    inactive-color="#666"
    :placeholder="true"
    :safe-area-inset-bottom="true"
    z-index="5"
    :fixed="false"
  >
    <van-tabbar-item
      replace
      to="/home"
      :icon="active?.includes('/home') ? homeIconSel : homeIcon"
      >首页</van-tabbar-item
    >
    <van-tabbar-item
      replace
      to="/heart"
      :icon="active?.includes('/heart') ? heartIconSel : heartIcon"
      >心愿单</van-tabbar-item
    >
    <van-tabbar-item
      replace
      to="/msg"
      :icon="active?.includes('/msg') ? msgIconSel : msgIcon"
      >消息</van-tabbar-item
    >
    <van-tabbar-item
      replace
      to="/mine"
      :icon="active?.includes('/mine') ? userIconSel : userIcon"
      >我的</van-tabbar-item
    >
  </van-tabbar>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import homeIcon from "../assets/svg/icon-home.svg";
import homeIconSel from "../assets/svg/icon-home-sel.svg";
import heartIcon from "../assets/svg/icon-heart.svg";
import heartIconSel from "../assets/svg/icon-heart-sel.svg";
import msgIcon from "../assets/svg/icon-msg.svg";
import msgIconSel from "../assets/svg/icon-msg-sel.svg";
import userIcon from "../assets/svg/icon-user.svg";
import userIconSel from "../assets/svg/icon-user-sel.svg";

import { useRoute } from "vue-router";
const route = useRoute();
const active = ref<string>(route.path);
// console.log(active.value);
watch(route, (v) => (active.value = v.path));
</script>
