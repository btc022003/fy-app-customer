<template>
  <div class="orders">
    <van-nav-bar title="我的订单" left-arrow @click-left="goBack" />
    <van-tabs v-model:active="active">
      <van-tab title="已支付">
        <div
          class="item"
          v-for="item in orders?.filter((item) => item.isPayed)"
        >
          <h1>金额:￥{{ item.price }}</h1>
          <p>支付时间:{{ formatDate(item.payDate) }}</p>
        </div>
      </van-tab>
      <van-tab title="未支付"
        ><div
          class="item shadow p-2 m-2"
          v-for="(item, index) in orders?.filter((a) => !a.isPayed)"
        >
          <h1>金额:￥{{ item.price }}</h1>
          <p>最后支付时间:{{ formatDate(item.lastPayDate) }}</p>
          <van-button type="danger" v-if="index === 0" @click="showPay = true"
            >支付</van-button
          >
        </div></van-tab
      >
    </van-tabs>
    <van-popup
      position="bottom"
      v-model:show="showPay"
      style="height: 500px"
      title="输入支付密码"
      closeable
    >
      <h1 style="margin-top: 60px; text-align: center" class="my-4">
        输入支付密码
      </h1>
      <!-- 密码输入框 -->
      <van-password-input
        :value="pwd"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
      />
      <van-button type="primary" block style="margin-top: 16px"
        >支付</van-button
      >
      <van-number-keyboard
        v-model="pwd"
        :show="showKeyboard"
        @blur="showKeyboard = false"
      />
    </van-popup>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { loadContractOrders } from "../services/houses";
import { formatDate } from "../utils/tools";
const router = useRouter();
const route = useRoute();
const goBack = () => router.back();

const active = ref(0);
const orders = ref<House.IContractOrder[] | undefined>();
const showPay = ref(false);
const showKeyboard = ref(false);
const pwd = ref("");

loadContractOrders(route.query.id as string).then((res) => {
  // console.log(res.data);
  orders.value = res.data;
});
</script>
