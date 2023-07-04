<template>
  <div class="pingjia">
    <div class="top">
      <div class="head"><img src="../assets/head.png" /></div>
      <div class="top-r">
        <div class="r-l">
          <div class="r-l-t">张*三</div>
          <van-rate v-model="value" color="#F89135" readonly />
        </div>
        <div class="r-r">2023/04/11</div>
      </div>
    </div>
    <div class="bottom">{{ data.pj }}</div>
  </div>
</template>

<script>
export default {
  name: "pjInfo",
  data() {
    return {
      value: 3,
    };
  },
  props: {
    data: {},
  },
};
</script>

<style scoped>
.pingjia {
  display: flex;
  /* height: 232px; */
  background: #ffffff;
  flex-direction: column;
  margin-bottom: 2px;
}
.top {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 24px;
  width: 686px;
  height: 75.85px;
  margin: 24px 32px 18px;
}
.head img {
  width: 64px;
  height: 64px;
  background: #999999;
  border-radius: 36px;
  overflow: hidden;
}
.top-r {
  display: flex;
  flex-direction: row;
  /* justify-content: flex-end; */
  align-items: flex-start;
  padding: 0px;
  gap: 230px;
  width: 598px;
  height: 75.85px;
}
.r-l {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 200px;
  height: 75.85px;
}
.bottom {
  width: 686px;
  /* height: 96px; */
  font-size: 32px;
  line-height: 48px;
  text-align: justify;
  color: #000000;
  margin: 0 32px 18.15px;
}
.r-l-t {
  width: 71px;
  height: 40px;
  font-size: 28px;
  line-height: 40px;
  text-align: center;
  color: #000000;
}
.r-r {
  width: 168px;
  height: 34px;
  font-size: 24px;
  line-height: 34px;
  text-align: right;
  color: #999999;
}
</style>