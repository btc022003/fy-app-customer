<template>
  <div class="orders">
    <van-nav-bar title="我的合同" left-arrow @click-left="goBack" />
    <div class="contract m-2">
      <div className="contract-info shadow bg-slate-200 p-2 m-2">
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
          <b>屋内设施:</b>
          <b><span
            class="bg-green-600 text-white px-2 py-1 m-2"
            v-for="item in contract?.room.roomAndDevices"
            :key="item.id"
          >
            {{ item.device.name }}
          </span></b>
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

<style scoped>
  .van-button{
    margin:1rem .5rem;
    width: calc(100% - 1rem);

  }
  .contract-info{
    border-radius: 10px;
    background-image: url(../assets/images/fw1200.png);
    background-size: 130px;
    background-repeat: no-repeat;
    background-position: right center;
    padding: 20px;
    
  }
  .contract-info h3{
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0 ;
  }
  .contract-info p{
      line-height: 2;
    }
  .room-info{
    border-radius: 10px;
    padding: 20px;
    background-image: url(../assets/images/msgssss.png);
    background-size: 100px;
    background-repeat: no-repeat;
    background-position: 90% center;
  }
  .room-info p{
      line-height: 2;
      display: flex;
      /* flex-direction: column; */
    }
    .room-info b{
      font-weight: normal;
    }
    .room-info b:nth-child(1){
      width: 70px;
    }
    .room-info b:nth-child(2){
      flex: 1;
    }
    .room-info span{
      border: 1px solid rgb(22,163,74);
      color: rgb(22,163,74);
      font-size: 12px;
      background: none;
      padding: 0px 5px;
      margin: 5px;
      display: inline-block;
      background-color: rgb(226 232 240);
      line-height: 1.5;
      font-weight: bold;
    }
</style>
