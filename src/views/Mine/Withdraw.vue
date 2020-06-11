<template>
  <div class="container">
    <Navbar :bgColor="'#d43f3a'" :arrowColor="'#fff'" :textColor="'#fff'" :title="'ryton -- 客户信息'" />
    <section>
      <div class="form">
        <div class="form-amount">
          可提现金额：
          <span class="num">￥0.00</span>
        </div>
        <div class="form-item">
          <span>金额(￥):</span>
          <input
            class="txt"
            type="text"
            name="money"
            id="money"
            value
            autocomplete="off"
            placeholder="请输入金额1元起"
          />
        </div>
        <div class="form-item">
          <span>支付宝名称:</span>
          <input
            class="txt"
            type="text"
            name="truename"
            id="truename"
            value
            autocomplete="off"
            placeholder="请输入支付宝名称"
          />
        </div>
        <div class="form-item">
          <span>支付宝账号:</span>
          <input
            class="txt"
            type="text"
            name="cardno"
            id="cardno"
            value
            autocomplete="off"
            placeholder="请输入支付宝账号"
          />
        </div>
      </div>
      <div class="btn-box">
        <div class="btn">申请提现</div>
      </div>

      <div class="record-box">
        <div class="record-title">提现记录</div>
        <ul class="recode-list">
          <li class="redord-item">无提现记录</li>
        </ul>
        <div class="page-box">
          <div class="page-turn">上一页</div>
          <div class="page-number">1/0</div>
          <div class="page-turn">下一页</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "Withdraw",
  components: {
    Navbar
  }
};
</script>

<style lang="less" scoped>
section {
  margin-top: 15px;
  background-color: #fff;
}
.form {
  box-shadow: 0px 0px 4px #999999;
}
.form-amount {
  height: 46px;
  line-height: 46px;
  color: #333;
  padding: 0 20px;
  border-bottom: 1px solid #ddd;
  font-size: 12px;
  .num {
    color: #d71629;
    font-size: 12px;
  }
}
.form-item {
  height: 46px;
  line-height: 46px;
  padding: 0 20px;
  font-size: 12px;
  color: #4f4d4d;
  overflow: hidden;
  input {
    height: 100%;
    border: 0;
    color: #757577;
    font-size: 10px;
  }
}
.btn-box {
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  .btn {
    width: 284px;
    text-align: center;
    background-color: #f33;
    height: 38px;
    line-height: 40px;
    color: #ffffff;
    font-size: 12px;
    border-radius: 3px;
    box-shadow: 0px 3px #aadc33;
  }
}

.record-box {
  margin: 10px 20px;
  .record-title {
    border-bottom: 1px solid #ddd;
    font-size: 12px;
    color: #333;
    line-height: 24px;
  }
}
.redord-item {
  font-size: 12px;
  color: #999;
  line-height: 24px;
  border-bottom: 1px dashed #ddd;
}

.page-box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  font-size: 14px;

  .page-turn {
    color: #666;
    padding: 3px;
    border: 1px solid #ddd;
    line-height: 20px;
  }
  .page-number {
    width: 120px;
    text-align: center;
    color: #333;
  }
}

nav {
  box-shadow: 0px 2px 2px #999;
}
</style>
