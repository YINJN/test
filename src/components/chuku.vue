<template>
  <div class="body">
    <div class="main">
      <div class="img"><img src="../assets/酱油.png" alt="" /></div>
      <div class="content">
        <div class="content-top">
          <div class="title">{{ data.title }}</div>
          <div class="number">
            <span class="add">X</span>
            <span class="num">{{ data.num }}</span>
            <span class="unit">{{ data.unit }}</span>
          </div>
        </div>
        <div class="content-btm">
          <div class="kc-num">库存：{{ data.kc }}{{ data.unit }}</div>
          <div class="btm-r">
            <div class="show" v-if="a">
              <label @click="(a = !a), (data.show = !0)">
                展开选择
                <img src="../assets/jiantou.png" />
              </label>
            </div>
            <div class="up" v-else>
              <label @click="(a = !b), (data.show = !1)">
                展开选择
                <img src="../assets/jiantou.png" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="element" v-if="data.show">
        <div class="receive">
          <div class="receive-l">
            <div class="rec-title">领取：</div>
            <van-stepper v-model="value" step="0.5" />
            <div class="rec-unit">瓶</div>
          </div>
          <div class="btn">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "chuku",
  data() {
    return {
      a: true,
      b: false,
      value: 0,
    };
  },
  props: {
    data: {},
  },
};
</script>

<style scoped>
.body {
  background: #ffffff;
  border-radius: 20px;
  width: 702px;
  min-height: 168px;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.main {
  width: 702px;
  height: 168px;
  background: #ffffff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
}
.img {
  width: 120px;
  height: 120px;
  background: #c1c1c1;
  border-radius: 8px;
  overflow: hidden;
}
.img img {
  width: 120px;
  height: 120px;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 514px;
  height: 120px;
}
.content-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.title {
  width: 348px;
  font-size: 28px;
  line-height: 38px;
  text-align: justify;
  color: #000000;
}
.number {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 8px;
  width: 140px;
  height: 42px;
}
.add,
.unit {
  font-size: 24px;
  line-height: 36px;
  color: #48c492;
}
.num {
  font-size: 36px;
  line-height: 42px;
  color: #48c492;
}
.content-btm {
  width: 514px;
  height: 40px;
  display: flex;
  justify-content: space-between;
}
.kc-num {
  font-size: 28px;
  line-height: 40px;
  display: flex;
  align-items: center;
  color: #999999;
}
.btm-r {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  font-size: 24px;
  line-height: 40px;
  color: #999999;
}
.show img,
.up img {
  width: 32px;
  height: 32px;
}
.show img {
  transform: rotate(90deg);
}
.up img {
  transform: rotate(-90deg);
}
.up label,
.show label {
  display: flex;
  align-items: center;
}
.nav {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  padding: 0px;
}
.element {
  width: 100%;
}
.receive {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 0px 24px;
  width: 702px;
  height: 120px;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 0 0 20px 20px;
  border-top: 1px solid #e1e1e1;
}
.receive-l {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 432px;
  height: 120px;
}
.btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 151px;
  height: 64px;
  background: rgba(72, 196, 146, 0.08);
  border: 1px solid rgba(72, 196, 146, 0.5);
  border-radius: 40px;
  font-size: 28px;
  line-height: 44px;
  color: #48c492;
}
.rec-title {
  width: 106px;
  height: 45px;
  font-size: 32px;
  line-height: 45px;
  display: flex;
  align-items: center;
  color: #000000;
}
.rec-unit {
  width: 62px;
  height: 45px;
  font-size: 32px;
  line-height: 45px;
  text-align: center;
  color: #000000;
}
</style>