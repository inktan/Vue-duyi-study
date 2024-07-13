<template>
    <div id="app">
      <!-- <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <h1>App组*{{ secondName }}*{{ firstName }}*件</h1>
      <P>{{ fullName }}</P>
      <button @click="fullName = 'asd'">修改名字</button>
      <icon type="github" />
      <icon type="weixin" />
  
      <pager :current="current" :total="total" :limit="limit" :visibleNumber="visibleNumber"
        @pageChange="handlePageChange($event)" />
    </div>
  </template>
  
  <script>
  import Pager from "./";
  export default {
    name: "App",
    components: {
      Pager,
    },
  
    data() {
      return {
        firstName: "wang",
        secondName: "goa",
        score: true,
        current: 1,
        total: 1000,
        limit: 10,
        visibleNumber: 10,
      };
    },
    computed: {
      fullName: {
        get() {
          // console.log("==>");
          return this.secondName + "" + this.firstName;
        },
        set(val) {
          console.log("正在设置全名", val);
          this.secondName = val;
        },
      },
      // fullName() {
      //   console.log("==>");
      //   return this.secondName + "" + this.firstName;
      // },
    },
    methods: {
      handlePageChange(newPage) {
        // console.log(newPage);
        this.current = newPage;
        // console.log("加载当前页数据")；
      },
      // getFullName() {
      //   console.log("==>");
      // },
      setNewName(asd, qwe) {
        this.secondName = asd;
        this.firstName = qwe;
      },
    },
  };
  
  // import HelloWorld from './components/HelloWorld.vue'
  
  // export default {
  //   name: 'App',
  //   components: {
  //     HelloWorld
  //   }
  // }
  </script>
  
  <style lang="less" scoped>
  // #app {
  //   font-family: Avenir, Helvetica, Arial, sans-serif;
  //   -webkit-font-smoothing: antialiased;
  //   -moz-osx-font-smoothing: grayscale;
  //   text-align: center;
  //   color: #2c3e50;
  //   margin-top: 60px;
  // }
  .iconfont {
    font-size: 26px;
    color: rgb(62, 122, 190);
  }
  </style>
  