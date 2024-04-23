<template>
  <div class="Popup2" v-show="visible">
    <div class="mask"></div>
    <div class="content">
      <div class="top">
        <div class="title">{{ title }}</div>
        <div class="txt">{{ text }}</div>
      </div>
      <div class="bottom">
        <button @click="sure">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup2",
  props: {
    title: {
      type: String,
      default: "popupTitle",
    },
    text: {
      type: String,
      default: "popupText",
    },
    callBack: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    open() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    },
    changeVisible() {
      this.visible = !this.visible;
    },
    sure() {
      this.visible = false;
      this.callBack();
    },
  },
};
</script>

<style lang="less">
@import "index.less";
</style>
