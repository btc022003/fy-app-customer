<template>
  <div class="orders">
    <van-nav-bar title="我的预约" left-arrow @click-left="goBack" />
    <div class="date-rooms">
      <div
        class="date-room p-2 m-2 shadow bg-slate-100"
        v-for="item in dateRooms"
        :key="item.id"
      >
        <h1 class="font-bold">
          {{ item.room.content }}|{{ item.room.house.dwelling }}
        </h1>
        <p>{{ item.room.house.address }}</p>
        <p>{{ item.room.house.region }}</p>
        <p>预约时间:{{ formatDate(item.dateTime) }}</p>
        <p>备注:{{ item.remarks }}</p>
        <p>
          联系房东:{{ item.room.house.landLord.realName }}-<a
            :href="`tel:${item.room.house.landLord.userName}`"
            >{{ item.room.house.landLord.userName }}</a
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { loadDateRoomsAPI } from "../services/houses";
import { formatDate } from "../utils/tools";
const router = useRouter();

const dateRooms = ref<House.IDateRoomInfo[] | undefined>();

const goBack = () => router.back();

loadDateRoomsAPI().then((res) => {
  // console.log(res.data);
  dateRooms.value = res.data;
});
</script>
