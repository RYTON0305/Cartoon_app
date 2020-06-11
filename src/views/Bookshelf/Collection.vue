<template>
  <div class="bs-box empty">
    <div class="empty-box">
      <span class="empty">您还没有收藏记录</span>
      <div class="jumpToHome" @click="$router.push('/home')">去找几本看看</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collection",

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

<style scoped lang="less">
&.empty {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.empty {
  color: #888;
  font-size: 14px;
}
.jumpToHome {
  width: 134px;
  height: 38px;
  line-height: 38px;
  font-size: 16px;
  text-align: center;
  color: #fff;
  background-color: #fde23d;
  border: 0;
  border-radius: 19px;
  margin: 8px 0;
}
</style>
