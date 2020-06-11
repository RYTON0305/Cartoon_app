<template>
  <div class="container">
    <div class="profile">
      <div class="avatar">
        <img src="@/assets/logo.png" alt="头像" />
      </div>
      <div class="body">
        <div class="title">ryton</div>
        <div class="text">ID:1043</div>
        <div class="actions">
          <div class="action" @click="handleToWithdraw">申请提现</div>
          <div :class="['action',signed]" @click="handleSignIn">签到</div>
        </div>
      </div>
    </div>
    <div class="uh-row">
      <div class="col">
        <div class="num">200</div>
        <div class="title">书币余额</div>
      </div>
      <div class="col">
        <div class="num">0</div>
        <div class="title">佣金</div>
      </div>
    </div>
    <div class="item mt-10 mb-10">
      <div class="icon">
        <i class="iconfont icon-wode"></i>
      </div>
      <div class="title">我的账户</div>
      <div
        class="btn"
        @click="$router.push({
        name:'deposit',
        params:{title:'账户充值'}
      })"
      >立即充值</div>
    </div>
    <div
      class="item"
      v-for="(item,index) in myItems"
      :key="index"
      @click="$router.push({
        name:item.routePath,
        params:{title:item.title}
        })"
    >
      <div class="icon">
        <i class="iconfont icon-wode"></i>
      </div>
      <div class="title">{{item.title}}</div>
      <div class="text">
        <i class="iconfont icon-xiangyou"></i>
      </div>
    </div>
    <div class="item mt-10 mb-10">
      <div class="icon">
        <i class="iconfont icon-wode"></i>
      </div>
      <div class="title" @click="$router.push('/login')">退出</div>
      <div class="text">
        <i class="iconfont icon-xiangyou"></i>
      </div>
    </div>
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar";

export default {
  name: "Mine",
  data() {
    return {
      myItems: [
        {
          title: "我的客户",
          routePath: "client"
        },
        {
          title: "推广二维码",
          routePath: "qrcode"
        },
        {
          title: "客服帮助",
          routePath: "custom"
        },
        {
          title: "我的消息",
          routePath: "message"
        },
        {
          title: "建议反馈",
          routePath: "feedback"
        },
        {
          title: "账单明细",
          routePath: "bill"
        },
        {
          title: "绑定手机短帐号",
          routePath: "connect"
        }
      ]
    };
  },
  components: {
    Tabbar
  },
  computed: {
    signed() {
      return localStorage.getItem("signed") == "true" ? "signed" : "";
    }
  },
  methods: {
    handleToWithdraw() {
      this.$router.push({
        name: "withdraw"
      });
    },
    handleSignIn() {
      if (!this.signed) {
        this.$toast("签到成功");
        localStorage.setItem("signed", true);
      }
    }
  }
};
</script>

<style lang="less" scoped>
* {
  box-sizing: content-box;
}
.container {
  background-color: #fff;
}
.profile {
  height: 150px;
  display: flex;
  background: url("../../assets/ubg.gif");
  background-size: cover;
  align-items: center;
  position: relative;
  color: #fff;

  .title {
    height: 22px;
    font-size: 16px;
    margin: 5px 0;
  }
  .text {
    font-size: 14px;
  }
}
.avatar {
  border-radius: 50%;
  width: 70px;
  height: 70px;
  border: 2px solid #fff;
  background-color: #eee;
  margin: 0 18px;
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
}
.actions {
  position: absolute;
  top: 20px;
  right: 10px;
  font-size: 13px;
  color: #2196f3;
  .action {
    background-color: #fff;
    width: 70px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    margin-bottom: 10px;
    border-radius: 13px;
  }
}

.uh-row {
  height: 47px;
  padding: 15px 0;
  position: relative;
  .col {
    width: 50%;
    float: left;
    text-align: center;
    .num {
      height: 28px;
      line-height: 28px;
      font-size: 21px;
      color: #fde23d;
    }
    .title {
      font-size: 14px;
    }
  }
  &::after {
    content: " ";
    position: absolute;
    width: 1px;
    height: 42px;
    left: 50%;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    background-color: #dcdcdc;
  }
}
.item {
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 14px;
  .icon {
    margin-right: 14px;
  }
  .title {
    flex: 1;
    font-size: 14px;
  }
  .btn {
    width: 74px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border: 1px solid #fde23d;
    border-radius: 12px;
    font-size: 12px;
    color: #fde23d;
  }
  .text .iconfont {
    font-size: 14px;
    color: #999;
  }
}
.signed {
  &::before {
    content: "已";
  }
  color: #ff5722;
}
</style>
