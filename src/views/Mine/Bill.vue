<template>
  <div class="content">
    <van-tabs class="mt-10" v-model="active" color="#fde23d">
      <van-tab title="充值"></van-tab>
      <van-tab title="签到">
        <van-cell center v-for="item in 2" :key="item" title="签到" value="+100.00书币">
          <div class="cell-right" slot="default">
            <div class="coin">+100书币</div>
            <div class="time">2020年6月10日 15:31:27</div>
          </div>
        </van-cell>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "Bill",
  props: {},
  data() {
    return {
      active: 0,
      topUp: false
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.$toast("已加载完所有数据");
    if (!this.topUp) {
      setTimeout(() => {
        this.$toast("没有数据哦");
      }, 2000);
    }
  },
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="stylus">
.content {
  font-size: 14px;
}

.van-cell {
  // padding: 18px 12px;
  color: #333;
}

.coin {
  color: #fde23d;
}

.time {
  color: #999;
  font-size: 12px;
  line-height: 10px;
}
</style>
