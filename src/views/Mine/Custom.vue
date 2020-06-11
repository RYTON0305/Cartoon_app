<template>
  <div class="content">
    <div class="contact-box mt-10 mb-10">
      <div class="row">在线时间：周一至周六9:00-18:00</div>
      <div class="row">
        客服QQ：
        <label class="label">929750027</label>
      </div>
    </div>
    <div class="qustion">
      <van-collapse v-model="activeNames">
        <van-collapse-item
          title="本平台怎么收费？"
          label-class="label-class"
          name="1"
        >答：目前平台上的书籍分为两种，一种是免费阅读，一种是充值阅读。</van-collapse-item>
        <van-collapse-item
          class="label-class"
          title="所有书籍都是正版的吗？"
          label-class="label-class"
          name="2"
        >答:本平台始终致力于支持正版内容的引入及合作，平台上所有书籍都是正版。</van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {},
  data() {
    return {
      activeNames: []
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="stylus">
.content {
  background-color: #fff;
  min-height: calc(100vh - 50px);
}

.contact-box {
  padding: 12px;
  background-color: #fff;

  .row {
    margin: 9px 0;
    font-size: 15px;
    color: #333;

    .label {
      display: inline-block;
      margin-left: 9px;
      border: 1px dotted #ff730b;
      background-color: #fffde2;
      height: 27px;
      line-height: 27px;
      padding: 0 9px;
      color: #ff730b;
      font-size: 13px;
    }
  }
}

/deep/.van-collapse-item__content {
  background-color: #f9f9fb;
}
</style>
