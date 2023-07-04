<template>
  <div>
    <div class="goods" v-for="item in data">
      <div class="img"><img src="../assets/酱油.png" alt="" /></div>
      <div class="msg">
        <div class="msg-top">
          <div class="top-a">编号：{{ item.number }}</div>
          <div class="top-b">{{ item.name }}</div>
        </div>
        <div class="msg-btm">
          <div class="btm-l">库存：{{ item.kcNumber }}{{ item.unit }}</div>
          <div class="btm-r">
            <div class="show_a" v-if="a">
              <img src="../assets/购物车 1.png" @click="a = !a" />
            </div>
            <div class="show_b" v-else>
              <van-stepper
                v-model="item.value"
                min="0"
                input-width="8vw"
                button-size="6.4vw"
                step="0.5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "stockGoods",
  data() {
    return {
      a: true,
      b: false,
      value: "",
    };
  },
  props: {
    data: [],
  },
};
</script>

<style scoped>
.goods {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 24px;
  gap: 20px;
  width: calc(100vw - 150px);
  background: #ffffff;
}
.img img {
  width: 148px;
  height: 148px;
  background: #c1c1c1;
  border-radius: 8px;
  overflow: hidden;
}
.msg {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 384px;
  height: 148px;
}
.msg-top {
  width: 304px;
  height: 76px;
  font-size: 24px;
  line-height: 34px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #999999;
}
.top-a {
  width: 202px;
  height: 34px;
  font-size: 24px;
  line-height: 34px;
  display: flex;
  align-items: center;
  color: #999999;
}
.top-b {
  width: 304px;
  height: 38px;
  font-size: 28px;
  line-height: 38px;
  text-align: justify;
  letter-spacing: -0.05em;
  color: #000000;
}
.msg-btm {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 384px;
  height: 48px;
}
.btm-l {
  font-size: 24px;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #000000;
}
.show_a img {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
}
</style>