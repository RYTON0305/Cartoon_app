<template>
  <div>
    <ul>
      <li class="mt-10" v-for="message in messageList" :key="message.id">
        <van-notice-bar
          @click="$router.push({name:'bulletin',params:{
title:'系统公告'
          } })"
          :text="message.title"
          background="#fff"
          color="#333"
          left-icon="volume-o"
        >
          <i slot="left-icon" class="icon-xiaoxitongzhifill iconfont"></i>
        </van-notice-bar>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {},
  data() {
    return {
      messageList: [{ id: 0, title: "本周好书双手奉上" }]
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
.iconfont {
  margin-right: 10px;
  color: #ff7550;
  font-size: 22px;
}
</style>
