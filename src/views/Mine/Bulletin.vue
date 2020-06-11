<template>
  <article class="content">
    <p class="header">本周好书双手捧上！</p>
    <div class="block" v-for="(val,key) in article" :key="key">
      <p class="chanel">{{key}}</p>
      <section v-for="item in val" :key="item.title">
        <p class="title">{{item.title}}</p>
        <p class="detail">{{item.detail}}</p>
      </section>
    </div>
  </article>
</template>

<script>
export default {
  name: "Bulletin",
  props: {},
  data() {
    return {
      article: {
        女频: [
          {
            title: "1.《总裁的契约情人》热门，豪门、恋爱（文案建议前4-5章）",
            detail:
              "身世坎坷的孤女，为何会得到总裁青睐？冷面总裁有什么不为人知的过去？"
          },
          {
            title: "2.《霸道总裁爱上我》恋爱、霸总（文案建议前3章）",
            detail:
              "绝路下她被迫接受天价交易，本以为钱货两清，没想到五年后再相逢。 他嘴上说着厌弃，身体却很诚实的耍流氓。她拼命守护的秘密忽然曝光，他誓要将她困在身边一睡到底！无耻！别以为你长得帅体力好就人见人爱！"
          },
          {
            title: "3.《总裁的替嫁新娘》豪门、恋爱（文案建议前2-3章）",
            detail:
              "姐姐在出嫁前一天和别的男人私奔，而她成了代替品要嫁给满腔怒火的他。 新婚夜，帅气高冷的他道 “开始履行妻子的义务” 褪掉单薄的衣衫的她却被他叫着姐姐的名字。 她代替偿还姐姐的债，却不知……"
          }
        ],
        男频: [
          {
            title: "1.《谢文东》新书，热血、都市（文案建议前2章）",
            detail:
              "姐姐在出嫁前一天和别的男人私奔，而她成了代替品要嫁给满腔怒火的他。 新婚夜，帅气高冷的他道 “开始履行妻子的义务” 褪掉单薄的衣衫的她却被他叫着姐姐的名字。 她代替偿还姐姐的债，却不知……"
          },
          {
            title: "《斗战狂潮》新书，魔幻、热血（文案建议前2-3章）",
            detail:
              "双月当空，无限可能的英魂世界 孤寂黑暗，神秘古怪的嬉命小丑 百城联邦，三大帝国，异族横行，魂兽霸幽 这是一个英雄辈出的年代，人类卧薪尝胆重掌地球主权，孕育着进军高纬度的野望！ 重点是…二年级的废柴学长王同学，如何使用嬉命轮盘，撬动整个世界，请注意，学长来了！！！"
          }
        ]
      }
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

<style scoped lang="less">
.content {
  border: solid #fff;
  border-width: 15px 8px;
  min-height: calc(100vh - 50px);
  background-color: #f8f8f8;
}
.header {
  font-size: 15px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}
.block {
  padding-bottom: 10px;
}
p {
  margin: 10px 0;
  font-size: 14px;
  color: #333;
}
</style>
