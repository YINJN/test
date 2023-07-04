<template>
  <div>
    <div class="top">
      <span>菜品评价</span>
      <div class="top-r">
        <van-checkbox v-model="checked">匿名评价</van-checkbox>
      </div>
    </div>
    <div class="item">
      <writepj v-for="item in list" :data="item" />
    </div>
    <div class="bottom">
      <button class="btn" @click="uppj">提交评价</button>
    </div>
  </div>
</template>

<script>
import writepj from "@/components/writepj.vue";
export default {
  name: "evaluate",
  components: {
    writepj,
  },
  data() {
    return {
      checked: true,
      list: [
        {
          name: "烧肉",
          show: !1,
          value: "3",
        },
        {
          name: "红烧",
          show: !1,
          value: "4",
        },
        {
          name: "红烧肉",
          show: !1,
          value: "2",
        },
        {
          name: "红烧肉",
          show: !1,
          value: "2",
        },
        {
          name: "红烧肉",
          show: !1,
          value: "2",
        },
      ],
    };
  },
  methods: {
    uppj() {
      this.$router.push({
        name: "index",
      });
      alert("评价成功");
    },
  },
};
</script>

<style scoped>
.top {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 464px;
  width: 702px;
  height: 72px;
  margin: 0 auto;
}
.top span {
  font-size: 28px;
  line-height: 40px;
  display: flex;
  align-items: center;
  color: #999999;
}
.top-r {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 6px;
  width: 126px;
  height: 40px;
}
.item {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 150px;
}
.bottom {
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 24px;
  width: 100%;
  height: 116px;
  bottom: 0;
  background: #ffffff;
}
.btn {
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
  border: 0;
  font-size: 32px;
  line-height: 44px;
  color: #ffffff;
}
</style>