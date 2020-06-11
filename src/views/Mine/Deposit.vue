<template>
  <div class="content">
    <div class="deposit-list">
      <div
        class="item"
        :class="{active:index ===activeIndex}"
        @click="handleToActive(index)"
        v-for="(item,index) in depositList"
        :key="item.amount"
      >
        <div class="amount">{{item.amount}}</div>
        <div class="coin">{{item.coin}}</div>
        <div class="gift">{{item.gift}}</div>
        <label class="label"></label>
      </div>
    </div>
    <div class="deposit-btn" @click="handleToDeposit">立即充值</div>
    <div class="deposit-notice">
      <div class="title">充值说明</div>
      <p>1、人民币/金币的汇率为：1元=100书币</p>
      <p>2、金币属于虚拟商品，一经购买概不退换。</p>
      <p>3、若充值遇到任何问题，可以联系我们的客服。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      depositList: [
        {
          amount: "10元",
          coin: "1000+500书币",
          gift: "多送5元"
        },
        {
          amount: "20元",
          coin: "2000+1200书币",
          gift: "多送12元"
        },
        {
          amount: "30元",
          coin: "3000+2100书币",
          gift: "多送21元"
        },
        {
          amount: "50元",
          coin: "5000+4000书币",
          gift: "多送40元"
        },
        {
          amount: "80元",
          coin: "8000+7200书币",
          gift: "多送72元"
        },
        {
          amount: "100元",
          coin: "10000+10000书币",
          gift: "多送100元"
        },
        {
          amount: "300元",
          coin: "VIP包年",
          gift: "VIP包年"
        }
      ],
      activeIndex: 0
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    handleToActive(index) {
      this.activeIndex = index;
    },
    handleToDeposit() {
      this.$toast("数据正在请求中，请稍等...");
    }
  },
  components: {}
};
</script>

<style scoped lang="stylus">
.content {
  padding: 0 10px;
}

.deposit-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  padding: 12px 0;

  .item {
    height: 84px;
    position: relative;
    border-radius: 3px;
    border: 1px solid #e6e6e6;
    color: #999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 13px;

    .amount {
      color: #333;
      font-size: 18px;
    }

    .coin {
      padding: 5px;
    }

    .label {
      display: block;
      width: 50px;
      height: 35px;
      position: absolute;
      right: 0;
      top: 0;
      background-size: cover;
      background-image: url('http://xiaoshuo.dreoma.com/Public/home/mhimages/label.svg') !important; // xiaoshuo.dreoma.com/Public/home/mhimages/label.svg) !important;
    }
  }
}

.deposit-btn {
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 25px;
  background-color: #ff730a;
  color: #fff;
  font-size: 16px;
  margin: 15px 0;
}

.deposit-notice {
  font-size: 13px;
  color: #666;
  line-height: 1.8;

  .title {
    height: 30px;
    line-height: 30px;
  }
}

.active {
  background: #fdf2e9 !important;
  border-color: #ff730b !important;

  .amount {
    color: #ff730b !important;
  }

  .gift {
    color: #ff5539 !important;
  }
}
</style>
