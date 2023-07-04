<template>
  <div class="item">
    <div class="item-l">
      <div class="item-l-t">
        <div class="title">{{ data.title }}</div>
        <span>{{ data.class }}</span>
      </div>
      <div class="item-l-b">{{ data.number_goods }}{{ data.unit }}</div>
    </div>
    <div class="item-r">
      <div class="price"><span>￥</span>{{ data.price }}</div>
      <div class="num">x{{ data.number }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sdinfo_list",
  props: {
    data: {},
  },
};
</script>

<style scoped>
.item {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0px;
  gap: 20px;
  width: 654px;
  height: 114px;
  background: #ffffff;
}
.item-r {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;
  height: 82px;
}
.price {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  /* width: 75px; */
  height: 42px;
  font-size: 36px;
  line-height: 42px;
  color: #000000;
}
.price span {
  font-size: 24px;
  line-height: 36px;
  width: 15px;
  height: 36px;
}
.num {
  font-size: 28px;
  line-height: 40px;
  display: flex;
  align-items: center;
  color: #999999;
}
.item-l-t {
  display: flex;
  gap: 20px;
}
.title {
  /* width: 352px; */
  /* height: 78px; */
  font-size: 32px;
  line-height: 38px;
  text-align: justify;
  color: #000000;
}
.item-l span {
  display: flex;
  width: 64px;
  height: 36px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid rgba(255, 138, 0, 0.5);
  color: var(--unnamed, #ff8a00);
  text-align: center;
  font-size: 24px;
  line-height: 40px;
}
.item-l-b {
  color: #000;
  text-align: justify;
  font-size: 32px;
  font-family: PingFang SC;
  line-height: 38px;
}
</style>