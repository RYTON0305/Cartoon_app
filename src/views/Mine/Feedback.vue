<template>
  <div class="feedback-box content">
    <textarea placeholder="请输入您的建议反馈" name="feedback" id="feedback"></textarea>
    <div class="submit">提交</div>
  </div>
</template>

<script>
export default {
  name: "Feedback",
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
.feedback-box {
  padding: 12px;
}

#feedback {
  padding: 9px 12px;
  height: 195px;
  border: 1px solid #dcdcdc;
  width: 100%;
  font-size: 13px;
}

.submit {
  height: 40px;
  line-height: 40px;
  background-color: #fde23d;
  color: #fff;
  border-radius: 20px;
  text-align: center;
  margin-top: 20px;
}
</style>
