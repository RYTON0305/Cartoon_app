<template>
  <div>
    <div class="swiper-no">
      <img src="@/assets/empty.png" alt="没有客户" />
    </div>
    <div class="swiper-no">您还未有客户</div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
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
.swiper-no {
  padding: 20px 0 20px 0;
  min-height: 50px;
  line-height: 10px;
  background-color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #93899e;
  margin: 0 auto;
}
</style>
