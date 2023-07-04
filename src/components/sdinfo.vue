<template>
  <div class="body">
    <div class="top">
      <div class="top-l">
        <div class="img"><img src="../assets/icon.png" /></div>
        <span>XX农产品商贸</span>
      </div>
      <div class="top-r">231364553</div>
    </div>
    <div class="list">
      <sdinfo_list v-for="item in list" :data="item" />
    </div>

    <div class="bottom">
      <div class="msg">
        <div class="msg-l">配送日期：2023/03/31</div>
        <div class="msg-r">
          <span class="left">合计实付：</span>
          <span class="right">￥<span>28.8</span></span>
        </div>
      </div>
      <button @click="tosd2">立即验菜</button>
    </div>
  </div>
</template>

<script>
import sdinfo_list from "./sdinfo_list.vue";
export default {
  name: "sdinfo",
  components: {
    sdinfo_list,
  },
  methods: {
    tosd2() {
      this.$router.push({
        name: "shoudong2",
      });
    },
  },
  data() {
    return {
      showDisplay: false, //控制展示收起
      list: [
        {
          title: "番茄炒蛋",
          class: "荤菜",
          number_goods: 5,
          unit: "斤",
          price: 28.8,
          number: 1,
        },
        {
          title: "番茄炒蛋",
          class: "荤菜",
          number_goods: 5,
          unit: "斤",
          price: 28.8,
          number: 1,
        },
      ],
    };
  },
  computed: {
    testList() {
      // 当数据不需要完全显示的时候
      if (this.showDisplay == false) {
        let testList = []; // 定义一个空数组
        // 先显示前三个
        if (this.addressList.length > 3) {
          for (var i = 0; i < 3; i++) {
            testList.push(this.addressList[i]);
          }
        } else {
          testList = this.addressList;
        }
        return testList; // 返回当前数组
      } else {
        //展示全部数据
        return this.addressList;
      }
    },
  },
};
</script>

<style scoped>
.body {
  overflow: hidden;
  min-height: 376px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  background: #ffffff;
  border-radius: 20px;
  margin: 16px 24px;
}
.top {
  width: 100%;
  height: 88px;
  background: #ffffff;
  border-bottom: 1px solid #e1e1e1;
  padding: 24px 22px 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top-l {
  display: flex;
  align-items: center;
  gap: 8px;
}
.img img {
  display: flex;
  width: 48px;
  height: 48px;
}
.top-l span {
  color: #000000;
  font-size: 32px;
  line-height: 40px;
  display: flex;
  align-items: center;
}
.top-r {
  width: 152px;
  height: 40px;
  font-size: 28px;
  line-height: 40px;
  display: flex;
  align-items: center;
  color: #000000;
}
.list {
  display: flex;
  flex-direction: column;
}
.bottom {
  display: flex;
  padding: 20px 24px 28px;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  width: 654px;
  height: 126px;
}
.msg {
  display: flex;
  align-items: center;
  gap: 113px;
  width: 654px;
  height: 42px;
}
.msg-l {
  color: #666;
  font-size: 28px;
  line-height: 32px;
}
.msg-r {
  display: flex;
}
.left {
  color: #000;
  font-size: 28px;
  line-height: 40px;
}
.right {
  color: #000;
  font-size: 24px;
  line-height: 36px;
}
.right span {
  font-size: 36px;
}
button {
  display: flex;
  width: 200px;
  height: 64px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 0;
  border-radius: 40px;
  background: #48c492;
  color: #fff;
  font-size: 28px;
  line-height: 44px;
}
</style>