<template>
  <div class="orders">
    <van-nav-bar title="我的订单" left-arrow @click-left="goBack" />
    <van-tabs v-model:active="active">
      <van-tab title="已支付">
        <div
          class="item m-2 p-2 text-white bg-indigo-500 text-sm rounded shadow"
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
          <van-button
            type="danger"
            v-if="index === 0"
            @click="showPayHandle(item)"
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
      <van-button
        type="primary"
        block
        style="margin-top: 16px"
        @click="payHandle"
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
import { loadContractOrders, payOrderContractAPI } from "../services/houses";
import { formatDate, serverUrl } from "../utils/tools";
import { showToast } from "vant";
const router = useRouter();
const route = useRoute();
const goBack = () => router.back();

const active = ref(0);
const orders = ref<House.IContractOrder[] | undefined>();
const showPay = ref(false);
const showKeyboard = ref(false);
const pwd = ref("");

const loadData = () =>
  loadContractOrders(route.query.id as string).then((res) => {
    // console.log(res.data);
    orders.value = res.data;
  });

const currentId = ref("");

const showPayHandle = (item: House.IContractOrder) => {
  // currentId.value = item.id;
  // showPay.value = true;
  window.location.href = serverUrl + "/pay/alipay/pay/" + item.id;
};

const payHandle = async () => {
  // 调用支付进行付款
  await payOrderContractAPI(currentId.value);
  showToast("支付成功");
  loadData();
};

loadData();
</script>
