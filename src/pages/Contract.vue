<template>
  <div class="orders">
    <van-nav-bar title="我的合同" left-arrow @click-left="goBack" />
    <div class="contract m-2">
      <div className="contract-info shadow bg-gray-200 p-2 m-2">
        <h3>金额：￥{{ contract?.price }}</h3>
        <p>开始时间：{{ formatDate(contract?.startTime) }}</p>
        <p>结束时间：{{ formatDate(contract?.endTime) }}</p>
        <p>房东：{{ contract?.landLord.realName || "暂无" }}</p>
        <p>
          联系方式：
          <a :href="`tel:${contract?.landLord.userName}`">
            {{ contract?.landLord.userName }}
          </a>
        </p>
      </div>

      <div className="room-info bg-slate-200 p-2 m-2">
        <h3>
          【{{ contract?.room.house.dwelling }}】{{ contract?.room.content }}
        </h3>
        <p>{{ contract?.room.house.region }}</p>
        <p>{{ contract?.room.house.address }}</p>
        <p>
          屋内设施:
          <span
            class="bg-green-600 text-white px-2 py-1 m-2"
            v-for="item in contract?.room.roomAndDevices"
            :key="item.id"
          >
            {{ item.device.name }}
          </span>
        </p>
      </div>
      <van-button
        v-if="contract?.isChecked"
        block
        @click="$router.push('/mine/orders?id=' + contract?.id)"
        >查看账单</van-button
      >
      <van-button v-else type="primary" block @click="checkContractHandle"
        >确认合同</van-button
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { checkContractAPI, loadContractAPI } from "../services/houses";
import { formatDate } from "../utils/tools";
import { showToast } from "vant";
const router = useRouter();

const contract = ref<House.IRoomContract | undefined>();

const goBack = () => router.back();

// 加载合同信息
loadContractAPI().then((res) => {
  contract.value = res.data;
});

const checkContractHandle = async () => {
  await checkContractAPI(contract.value?.id as string);
  showToast("确认合同成功");
  router.push("/mine/orders?id=" + contract.value?.id);
};
</script>
