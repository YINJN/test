<template>
  <div class="item-a">
    <!-- <span>{{ rankNum }}</span> -->
    <div class="item-a-msg">
      <div class="item-a-msg-l">
        <img src="../assets/dish.png" alt="" />
        <div class="marking">
          <div class="mk-top">
            <div class="mk-t-l">{{ spname }}</div>
            <div class="mk-t-r">{{ spclass }}</div>
          </div>
          <van-rate v-model="value" color="#F89135" readonly />
        </div>
      </div>
      <div class="jiantou" @click="info">更多></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "item",
  props: ["rankNum", "spname", "spclass"],
  data() {
    return {
      value: 3,
    };
  },
  methods: {
    info() {
      this.$router.push({
        name: "info",
      });
    },
  },
};
</script>

<style scoped>
.item-a {
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
}
.item-a span {
  width: 45px;
  height: 40px;
  font-family: "Humnst777 Blk BT";
  font-style: italic;
  font-weight: 400;
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  color: #fdb257;
}
.item-a-msg {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 32px;
  width: 606px;
  height: 108px;
}
.item-a-msg-l {
  display: flex;
  gap: 32px;
}
.item-a-msg-l img {
  width: 108px;
  height: 108px;
  background: #c1c1c1;
  border-radius: 20px;
  overflow: hidden;
}
.marking {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
}
.mk-top {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
}
.mk-t-l {
  font-size: 32px;
  line-height: 40px;
  display: flex;
  align-items: center;
  color: #333333;
}
.mk-t-r {
  box-sizing: border-box;
  padding: 0 6px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid #ff8a00;
  border-radius: 8px;
  color: #ff8a00;
  font-size: 24px;
  /* width: 64px; */
  height: 36px;
}
.jiantou {
  font-size: 24px;
  line-height: 40px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: rgba(153, 153, 153, 0.7);
  cursor: pointer;
}
</style>