<template>
  <div class="container">
    <Navbar
      :title="$route.meta.title||title"
      :arrow-color="$route.meta.arrowColor"
      :bg-color="$route.meta.bgColor"
      :text-color="$route.meta.textColor"
    />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "Service",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    Navbar
  }
};
</script>

<style scoped lang="stylus"></style>
