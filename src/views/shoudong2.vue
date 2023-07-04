<template>
  <div class="w">
    <div class="top">
      <div class="top-a">
        <img src="../assets/shangjia.png" alt="" />
        <div class="top-a-r">XX农产品商贸</div>
      </div>
      <div class="top-b">
        <div class="top-b-l">订单号：</div>
        <div class="top-b-r">231364552</div>
      </div>
      <div class="top-c">
        <div class="top-c-l">配送日期：</div>
        <div class="top-c-r">2023/03/31</div>
      </div>
    </div>
    <div class="list">
      <message v-for="item in list" :data="item" />
    </div>
    <div class="check">
      <div class="check-top"></div>
      <div class="check-btm"></div>
    </div>
    <div class="btn">
      <button @click="sure">确定入库</button>
    </div>
  </div>
</template>

<script>
import message from "@/components/message";
export default {
  name: "shoudongDetail",
  components: {
    message,
  },
  data() {
    return {
      list: [
        {
          name: "海天味极鲜特级酱油家用调味料包装随机 750mL/瓶",
          price: "28.8",
          num: "7",
          class: "蔬菜",
          show: !1,
        },
        {
          name: "士大夫大师傅十分",
          price: "28.8",
          num: "7",
          class: "蔬菜",
          show: !1,
        },
      ],
    };
  },
  methods: {
    sure() {
      this.$router.push({
        name: "index",
      });
      alert("入库成功");
    },
  },
};
</script>

<style scoped>
.w {
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: auto;
}
.top {
  width: 702px;
  height: 224px;
  background-image: url(../assets/bj.png);
  background-repeat: no-repeat;
  background-size: 100%;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.top-a {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 20px;
  width: 312px;
  height: 88px;
}
.top-a img {
  width: 64px;
  height: 64px;
}
.top-a-r {
  font-size: 36px;
  line-height: 40px;
  display: flex;
  align-items: center;
  color: #ffffff;
}
.top-b,
.top-c {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  gap: 20px;
  width: 654px;
  height: 48px;
  font-size: 28px;
  line-height: 39px;
  color: #ffffff;
}
.list {
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  margin-bottom: 20px;
  gap: 16px;
}
.check {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 702px;
  height: 364px;
  padding: 24px 0px;
  gap: 12px;
  background: #ffffff;
  border-radius: 20px;
  margin-bottom: 200px;
}
.btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 24px;
  position: fixed;
  width: 748px;
  height: 116px;
  bottom: 0;
  background: #ffffff;
}
button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 686px;
  height: 80px;
  background: #48c492;
  border-radius: 40px;
  font-size: 32px;
  line-height: 44px;
  color: #ffffff;
  border: 0;
}
</style>