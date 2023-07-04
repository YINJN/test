<template>
  <div class="body">
    <div class="left">
      <div class="left-top">
        <div class="head"><img src="../assets/head.png" alt="" /></div>
        <div class="name">{{ data.name }}</div>
        <div class="class">陪餐人</div>
      </div>
      <div class="left-btm">
        <div class="meals">
          <div class="meals-l">午餐</div>
          <div class="meals-r">2023-06-02</div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="pic"></div>
      <div class="total">共2张</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "noteinfo",
  props: {
    data: {},
  },
};
</script>

<style scoped >
.body {
  box-sizing: border-box;
  width: 702px;
  height: 188px;
  background: #ffffff;
  border-radius: 20px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
}
.left {
  width: 300px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.left-top {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
  width: 264px;
  height: 48px;
}
.head img {
  width: 48px;
  height: 48px;
  background: #999999;
  border-radius: 36px;
  overflow: hidden;
  display: flex;
}
.name {
  max-width: 96px;
  height: 44px;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: #000000;
}
.class {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 346px;
  width: 88px;
  height: 36px;
  background: rgba(255, 116, 38, 0.08);
  border-radius: 8px;
  color: #ff7426;
  font-size: 24px;
  line-height: 40px;
  justify-content: center;
}
.left-btm {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 225px;
  height: 36px;
}
.meals {
  display: flex;
  gap: 12px;
}
.meals-l {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 68px;
  height: 34px;
  background: #48c492;
  border-radius: 8px;
  color: #ffffff;
  font-size: 24px;
  line-height: 40px;
}
.meals-r {
  width: 145px;
  height: 36px;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  color: #999999;
}
.right {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  gap: 8px;
  width: 290px;
  height: 140px;
}
.pic {
  width: 200px;
  height: 140px;
  border-radius: 8px;
  background: #666666;
  overflow: hidden;
}
.total {
  width: 82px;
  height: 44px;
  font-size: 24px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #333333;
}
</style>