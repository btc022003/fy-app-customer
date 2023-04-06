<template>
  <div class="orders">
    <van-nav-bar :title="room?.content" left-arrow @click-left="goBack" />
    <div
      class="info shadow p-2 m-2 bg-sky-600 bg-opacity-60 text-white rounded"
    >
      <h2 class="text-lg font-bold">
        {{ room?.content }} | {{ room?.house.address }}
      </h2>
      <p>{{ room?.house.region }}{{ room?.house.community }}</p>
      <p>
        联系房东:<a
          class="text-white"
          :href="`tel:${room?.house.landLord.userName}`"
          >{{ room?.house.landLord.userName }}</a
        >
      </p>
      <p class="text-rose-600 font-bold">价格:￥{{ room?.price }}</p>
      <van-button
        type="primary"
        icon="clock-o"
        size="small"
        @click="toDateHandle"
        >预约</van-button
      >
      <van-button
        type="danger"
        icon="like-o"
        size="small"
        @click="toFavHandle"
        >{{ room?.isCollection ? "取消收藏" : "收藏" }}</van-button
      >
    </div>
    <div class="content p-2 text-center">
      <img
        class="block mx-auto my-1 rounded shadow"
        v-for="img in room?.images.split(',')"
        :src="dalImg(img)"
        alt=""
      />
    </div>
    <van-popup
      v-model:show="show"
      closeable
      round
      :close-on-click-overlay="false"
      position="bottom"
      :style="{ padding: '64px' }"
    >
      <van-form @submit="onSubmit">
        <van-cell
          title="预约日期"
          :value="date"
          @click="showDate = true"
          is-link
        />
        <van-cell
          title="预约时间"
          :value="time"
          @click="showTime = true"
          is-link
        />

        <van-cell-group inset>
          <van-field
            v-model="remarks"
            name="remarks"
            placeholder="请输入备注"
            type="textarea"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </van-popup>
    <van-calendar v-model:show="showDate" @confirm="onDateConfirm" />
    <van-time-picker
      v-show="showTime"
      title="选择时间"
      style="position: fixed; bottom: 0; width: 100%; z-index: 9099"
      @confirm="onTimeConfirm"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useUserInfoStore } from "../store/user-info-store";
import { loadHouseByIdAPI, toDateAPI, toFavAPI } from "../services/houses";
import { dalImg, formatDate } from "../utils/tools";
import { showToast } from "vant";

const store = useUserInfoStore();

const { info } = storeToRefs(store);

const router = useRouter();
const route = useRoute();
const goBack = () => router.back();
const show = ref(false);
const remarks = ref("");
const date = ref("");
const showDate = ref(false);
const time = ref("");
const showTime = ref(false);

const room = ref<House.IRoom | undefined>();

const loadData = () => {
  loadHouseByIdAPI(route.params.id as string).then((res) => {
    // console.log(res.data);
    room.value = res.data;
  });
};

const toDateHandle = async () => {
  show.value = true;
};
const onDateConfirm = (value: any) => {
  // console.log(value);
  showDate.value = false;
  date.value = formatDate(value);
};
const onTimeConfirm = (v: any) => {
  showTime.value = false;
  // console.log(v);
  time.value = v.selectedValues.join(":");
};
// 提交预约
const onSubmit = async () => {
  if (time.value && date.value) {
    await toDateAPI({
      dateTime: date.value + " " + time.value,
      remarks: remarks.value,
      roomId: room.value?.id as string,
      userId: info.value?.id as string,
    });
    showToast("预约成功");
    setTimeout(() => {
      router.push({
        name: "MyDateRooms",
      });
    }, 500);
  } else {
    showToast({
      type: "fail",
      message: "请选择预约时间",
    });
  }
};

const toFavHandle = async () => {
  await toFavAPI(room.value?.id as string);
  showToast(room.value?.isCollection ? "已取消收藏" : "已加入收藏");
  loadData();
};
loadData();
</script>
