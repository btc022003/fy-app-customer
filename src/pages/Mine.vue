<template>
     
  <div class="user p-6">
    <div class="title">
        <h1>我的</h1>
  </div> 
    <div
      class="info mt-16 border p-4 rounded-md bg-white flex items-end justify-between"
    >
      <div class="user-info">
        <h3 class="font-bold text-lg">
          HI {{ info?.realName || "某某" }}
          <button
            class="btn-bg text-white text-xs px-4 py-1 rounded-2xl ml-8"
            @click="$router.push('/mine/setting')"
          >
            编辑
          </button>
        </h3>
        <p class="text-gray-400 text-sm">新的一天，也要预约生活哦！</p>
      </div>
      <img src="../assets/images/avatar.png" alt="" />
    </div>
    <div
      class="tools border p-4 rounded-md my-6 bg-white flex items-center justify-around gap-4 text-gray-400 text-sm"
    >
      <div
        class="item flex flex-col items-center"
        @click="$router.push('/mine/qa')"
      >
        <img src="../assets/svg/user-money.svg" alt="" />
        <span>我的投诉</span>
      </div>
      <div
        class="item flex flex-col items-center"
        @click="$router.push('/mine/contracts')"
      >
        <img src="../assets/svg/user-contract.svg" alt="" />
        <span>我的合同</span>
      </div>
      <div
        class="item flex flex-col items-center"
        @click="$router.push('/mine/repairs')"
      >
        <img src="../assets/svg/user-repairs.svg" alt="" />
        <span>报修进度</span>
      </div>
      <div
        class="item flex flex-col items-center"
        @click="$router.push('/mine/my_room')"
      >
        <img src="../assets/svg/user-house.svg" alt="" />
        <span>我的预约</span>
      </div>
    </div>
    <div class="op text-gray-400">
      <div
        class="op-item flex border-b py-3"
        @click="$router.push('/mine/notice')"
      >
        <img src="../assets/svg/user-notice.svg" alt="" />
        <span>通知</span>
      </div>
      <div
        class="op-item flex border-b py-3"
        @click="$router.push('/mine/setting')"
      >
        <img src="../assets/svg/user-setting.svg" alt="" />
        <span>设置</span>
      </div>
      <div
        class="op-item flex border-b py-3"
        @click="$router.push('/mine/help')"
      >
        <img src="../assets/svg/user-help.svg" alt="" />
        <span>帮助</span>
      </div>
      <div
        class="op-item flex border-b py-3"
        @click="$router.push('/mine/about')"
      >
        <img src="../assets/svg/user-about.svg" alt="" />
        <span>关于</span>
      </div>
      <div class="op-item flex  border-b py-3" @click="logOutHandle">
        <img src="../assets/svg/user-logout.svg" alt="" />
        <span class="text-red-400">退出登录</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { loadUserInfoAPI } from "../services/auth";
import { useUserInfoStore } from "../store/user-info-store";

const store = useUserInfoStore();

const { info } = storeToRefs(store);

const router = useRouter();

loadUserInfoAPI().then((res) => {
  info.value = res.data;
});

const logOutHandle = () => {
  sessionStorage.removeItem("token");
  router.push("/login");
};
</script>
<style scoped>
.user {
  /* background: url("../assets/images/user-bg.png") no-repeat; */
  background-size: contain;
}
.btn-bg {
  /* Rectangle 154 */

  background: linear-gradient(
    107.82deg,
    rgba(67, 84, 231, 0.8) 21.15%,
    rgba(52, 209, 150, 0.8) 88.06%
  );
}
.op span {
  margin-left: 8px;
}
/* .item{
  flex: 1;
} */
.gap-4{
  gap: .5rem;
}
  
.p-4 img{
  margin: 5px 0; 
}
.p-4 span{
    font-size:12px;
    line-height: 2;
  }
  .user-info h3{
    margin-bottom: 5px;
  }
  .user-info p{
    font-size: 12px;
  }
  .tools{
    padding: .5rem;
  }
  .items-end {
    align-items: center;
  }

  .title h1{
    text-align: center;
    font-weight: bold;
    font-size: 16px;
  }
  .mt-16{
    margin-top: 1rem;
  }
  .my-6 {
    margin-top: 1rem;
    margin-bottom: .5rem;
    }
    .btn-bg{
      background: rgba(67, 84, 231, 0.8) 21.15%;;
    }
    .ml-8{
      margin-left: .5rem;
    }

    .info{
      border: none;
      background: none;
    }
   .tools{
      border: none;
      box-shadow: 0 0 15px #cccccc8f;
   }
   .op-item:last-of-type{
    border: none;
   }
</style>
