<template>
  <div class="main">
    <div class="header">
      <div class="pic"><img src="../assets/标题 (1).png" /></div>
      <!-- <div class="date">周一（04/03）</div> -->
      <div class="toweek" @click="today">今日菜单</div>
    </div>
    <div class="breakfast">
      <div class="bf-top">
        <img src="../assets/shiliang.png" />
        <span>早餐</span>
        <img src="../assets/shiliang2.png" />
      </div>
      <div class="lunch-item">
        <meunItem v-for="item in list_week_b" :data="item" />
      </div>
      <div class="lunch-btm">
        <div class="l-b-img"><img src="../assets/评价 1.png" /></div>
        <div class="l-b-r" @click="topj">用餐评价</div>
      </div>
    </div>
    <div class="lunch">
      <div class="bf-top">
        <img src="../assets/shiliang.png" />
        <span>午餐</span>
        <img src="../assets/shiliang2.png" />
      </div>
      <div class="lunch-item">
        <meunItem v-for="item in list_week_l" :data="item" />
      </div>
      <div class="lunch-btm">
        <div class="l-b-img"><img src="../assets/评价 1.png" /></div>
        <div class="l-b-r" @click="topj">用餐评价</div>
      </div>
    </div>
    <div class="dinner">
      <div class="bf-top">
        <img src="../assets/shiliang.png" />
        <span>晚餐</span>
        <img src="../assets/shiliang2.png" />
      </div>
      <div class="dinner-item">
        <meunItem v-for="item in list_week_d" :data="item" />
      </div>
      <div class="dinner-btm">
        <div class="l-b-img">
          <img src="../assets/评价 1.png" />
        </div>
        <div class="d-b-r" @click="topj">用餐评价</div>
      </div>
    </div>
  </div>
</template>

<script>
import meunItem from "@/components/meunItem";
export default {
  name: "weekMenu",
  data() {
    return {
      list_week_b: [
        {
          name: "a",
        },
        {
          name: "a",
        },
        {
          name: "a",
        },
      ],
      list_week_l: [
        {
          name: "a",
        },
        {
          name: "a",
        },
        {
          name: "a",
        },
      ],
      list_week_d: [
        {
          name: "a",
        },
        {
          name: "a",
        },
        {
          name: "a",
        },
      ],
    };
  },
  methods: {
    today() {
      this.$router.push({
        name: "dayMenu",
      });
    },
    topj() {
      this.$router.push({
        name: "evaluate",
      });
    },
  },
  components: {
    meunItem,
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  /* height: calc(100% + 200px); */
  background-image: url(../assets/beijing.png);
}
.pic {
  width: 395px;
  height: 82px;
  padding-top: 34px;
  margin: 0 auto;
}
.pic img {
  width: 395px;
  height: 82px;
}
.toweek {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  position: absolute;
  width: 124px;
  height: 43px;
  right: 0;
  top: 60px;
  background: #669336;
  border-radius: 30px 0px 0px 30px;
  color: #ffffff;
  font-size: 24px;
}
.bf-top {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 40px;
  width: 638px;
  height: 40px;
}
.bf-top img {
  width: 140.5px;
  flex-shrink: 0;
}
.bf-top span {
  font-size: 28px;
  line-height: 40px;
  color: #669336;
}
.breakfast,
.lunch,
.dinner {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 32px;
  gap: 20px;
  width: 710px;
  height: 598px;
  background: #ffffff;
  border: 5px solid #b4d690;
  border-radius: 20px;
  margin: 20px auto 0;
}
.lunch-item,
.dinner-item {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
  width: 646px;
  height: 428px;
}
.lunch-btm,
.dinner-btm {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  /* width: 128px; */
  height: 26px;
  border-radius: 40px 0px 0px 40px;
}
.l-b-r,
.d-b-r {
  font-size: 24px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #f2994a;
}
.l-b-img img {
  width: 24px;
  height: 24px;
}
</style>
