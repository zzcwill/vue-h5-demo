<template>
  <div class="demo">
    <div v-for="(item, index) in routes" :key="index" class="item">
      <div @click="toRouter(item)">{{ item.name }}</div>
      <div class="dot"></div>
    </div>
    <div class="test1"></div>
    <div class="van-test"></div>
  </div>
</template>

<script>
export default {
  name: "demo",
  components: {},
  data() {
    return {
      routes: [
        {
          name: "chart",
          path: "/demo/chart",
          query: {},
        },
        {
          name: "chart2",
          path: "/demo/chart2",
          query: {},
        },
        {
          name: "chart3",
          path: "/demo/chart3",
          query: {},
        },
        {
          name: "chart4",
          path: "/demo/chart4",
          query: {},
        },

        {
          name: "ajax",
          path: "/demo/ajax",
          query: {
            code: "test",
          },
        },
        {
          name: "store",
          path: "/demo/store",
          query: {},
        },
        {
          name: "store2",
          path: "/demo/store2",
          query: {},
        },
        {
          name: "filter",
          path: "/demo/filter",
          query: {},
        },
        {
          name: "img",
          path: "/demo/img",
          query: {},
        },
        {
          name: "ref",
          path: "/demo/ref",
          query: {},
        },
        {
          name: "sync",
          path: "/demo/sync",
          query: {},
        },
        {
          name: "popup",
          path: "/demo/popup",
          query: {},
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
    toRouter(item) {
      this.$router.push({ path: item.path, query: item.query });
    },
  },
};
</script>
<style lang="less" scoped>
.demo {
  margin: 20px auto;
  width: 600px;
}
.item {
  font-size: 50px;
  line-height: 100px;
  text-align: center;
  cursor: pointer;
}
.dot {
  margin: 0, 20px;
  height: 1px;
  width: 100%;
  background-color: #eee;
}
.test1 {
  margin: 10px 0;
  width: 1px;
  height: 1px;
  background-color: blue;
}
.van-test {
  width: 10px;
  height: 10px;
  background-color: red;
}
</style>
