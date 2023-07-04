<template>
  <div class="thing">
    <img src="../assets/酱油.png" alt="" />
    <div class="infor">
      <div class="infor-t">
        <div class="infor-t-l">
          {{ data.name }}
        </div>
        <div class="infor-t-r">￥{{ data.price }}</div>
      </div>
      <div class="infor-b">
        <div class="infor-b-l">
          <span>{{ data.class }}</span>
        </div>
        <div class="infor-b-r">
          库存：<span>{{ data.num }}</span
          >{{ data.unit }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "goods",
  props: {
    data: {},
  },
};
</script>

<style scoped>
.thing {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 20px;
  width: 702px;
  height: 192px;
  background: #ffffff;
  border-radius: 20px;
  margin: 0 auto 11px;
  overflow: hidden;
}
.thing img {
  display: flex;
  width: 140px;
  height: 140px;
  border-radius: 10px;
}
.infor {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0px;
  gap: 6px;
  width: 494px;
  height: 128px;
}
.infor-t {
  width: 494px;
  height: 82px;
  display: flex;
  justify-content: space-between;
}
.infor-t-l {
  width: 352px;
  height: 76px;
  font-size: 28px;
  line-height: 38px;
  text-align: justify;
  color: #000000;
}
.infor-t-r {
  font-size: 28px;
  line-height: 42px;
  color: #999999;
}
.infor-b {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 280px;
  width: 494px;
  height: 40px;
}
.infor-b-l {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 64px;
  height: 36px;
  border: 1px solid rgba(255, 138, 0, 0.5);
  border-radius: 8px;
  font-size: 24px;
  line-height: 40px;
  color: #ff8a00;
}
.infor-b-r {
  width: 150px;
  height: 40px;
  font-size: 24px;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: right;
  justify-content: space-evenly;
  color: #eb5757;
}
.infor-b-r span {
  font-size: 32px;
}
</style>