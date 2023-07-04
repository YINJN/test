<template>
  <div>
    <div class="msg">
      <div class="img"><img src="../assets/dish3.png" alt="" /></div>
      <div class="dish-info">
        <div class="dish">
          <div class="dish-name">番茄炒蛋</div>
          <div class="dish-class">荤菜</div>
        </div>
        <div class="pj">
          <div class="pj-list">味道超赞 5</div>
          <div class="pj-list">美味 2</div>
          <div class="pj-list">太咸 3</div>
          <div class="pj-list">不喜欢 2</div>
          <div class="pj-list">油腻 2</div>
        </div>
        <div class="mark">
          <div class="mark-l">总体评分：</div>
          <van-rate v-model="value" gutter="9.85px" color="#F89135" readonly />
        </div>
      </div>
    </div>
    <div class="title">菜品评价（13）</div>
    <pjInfo v-for="item in list" :data="item" />
  </div>
</template>

<script>
import pjInfo from "@/components/pjInfo";
export default {
  name: "info",
  components: {
    pjInfo,
  },
  data() {
    return {
      value: 2,
      list: [
        {
          pj: "番茄炒蛋233",
        },
        {
          pj: "口味很好吃，就是太淡了希望下次增加一些偏辣的菜。口味很好吃，就是太淡了希望下次增加一些偏辣的菜。口味很好吃，就是太淡了希望下次增加一些偏辣的菜。",
        },
        {
          pj: "番茄炒蛋",
        },
      ],
    };
  },
};
</script>

<style scoped>
.msg {
  height: 288px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.img img {
  width: 240px;
  height: 240px;
  border-radius: 8px;
  overflow: hidden;
}
.dish-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  width: 392px;
  height: 235.07px;
}
.dish {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 220px;
  height: 40px;
}
.dish-name {
  font-size: 36px;
  line-height: 40px;
  display: flex;
  align-items: center;
  color: #333333;
}
.dish-class {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  width: 64px;
  height: 36px;
  border: 1px solid #ff8a00;
  border-radius: 8px;
  color: #ff8a00;
  font-size: 24px;
}
.pj {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 392px;
  height: 110px;
}
.pj-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 18.5px;
  background: rgba(153, 153, 153, 0.08);
  border-radius: 30px;
  height: 44px;
  font-size: 24px;
  line-height: 44px;
  color: #666666;
}
.mark {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  /* width: 308px; */
  height: 45.07px;
}
.mark-l {
  /* width: 120px; */
  height: 40px;
  font-size: 24px;
  line-height: 40px;
  color: #000000;
}
.title {
  width: 231px;
  height: 40px;
  font-size: 32px;
  line-height: 40px;
  color: #000000;
  margin-top: 20px;
  margin-left: 32px;
  margin-bottom: 20px;
}
</style>