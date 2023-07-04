<template>
  <div>
    <div class="top">
      <div class="search">
        <div class="sch">
          <img src="../assets/search.png" alt="" />
          <input type="text" placeholder="酱油" />
          <div class="top-sch-btn">搜索</div>
        </div>
      </div>
    </div>
    <div class="changetab">
      <van-sidebar v-model="activeKey" @change="onChange" class="tab">
        <van-sidebar-item title="全部" key="0" />
        <van-sidebar-item title="米面油" />
        <van-sidebar-item title="蔬菜" />
        <van-sidebar-item title="肉类" />
        <van-sidebar-item title="干货" />
        <van-sidebar-item title="冷冻" />
        <van-sidebar-item title="调味料" />
        <van-sidebar-item title="其他" />
      </van-sidebar>
      <div class="detail">
        <div>
          <stockGoods :data="list[[activeKey]]" />
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="btm-l">
        <span class="a">合计</span>
        <span class="b">3</span>
        <span class="c">件</span>
      </div>
      <div class="btm-r" @click="toout">出库</div>
    </div>
  </div>
</template>

<script>
import stockGoods from "@/components/stockGoods.vue";
export default {
  name: "stock",
  data() {
    return {
      activeKey: 0,
      list: [
        [
          {
            number: "231364552",
            name: "海天味极鲜特级酱油",
            kcNumber: "7",
            nuit: "瓶",
          },
          {
            number: "231364552",
            name: "海天味极鲜特级酱油",
            kcNumber: "7",
            nuit: "瓶",
          },
          {
            number: "231364552",
            name: "海天味极鲜特级酱油",
            kcNumber: "7",
            nuit: "瓶",
          },
        ],
        [
          {
            number: "23552",
            name: "海天酱油",
            kcNumber: "7",
            nuit: "瓶",
          },
          {
            number: "23552",
            name: "海天酱油",
            kcNumber: "7",
            nuit: "瓶",
          },
        ],
      ],
    };
  },
  methods: {
    onChange(index) {
      this.activeKey = index;
    },
    toout() {
      this.$router.push({
        name: "outbound",
      });
    },
  },
  components: {
    stockGoods,
  },
};
</script>

<style scoped>
.top {
  width: 750px;
  height: 96px;
  background-color: #e1e1e1;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: fixed; */
}
.sch {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 6px 6px 20px;
  width: 702px;
  height: 68px;
  background: #ffffff;
  border-radius: 34px;
  box-sizing: border-box;
}
.sch img {
  width: 32px;
  height: 32px;
}
.sch input {
  width: 510px;
  height: 44px;
  margin-left: 10.09px;
  border-style: none;
  font-size: 28px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: #999999;
}
.top-sch-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 128px;
  height: 56px;
  background: #48c492;
  border-radius: 40px;
  font-size: 28px;
  line-height: 44px;
  color: #ffffff;
}
.tab {
  width: 150px;
  /* margin-top: 96px; */
}
.tab .van-sidebar-item {
  width: 150px;
  height: 120px;
  line-height: 78px;
  font-size: 28px;
}
/* 小绿标 */
.van-sidebar-item--select::before {
  width: 4px;
  height: 36px;
  background: #48c492;
}
.changetab {
  display: flex;
  margin-bottom: 200px;
}
.bottom {
  position: fixed;
  width: 100%;
  height: 116px;
  bottom: 0;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btm-l {
  width: 152px;
  height: 36px;
  line-height: 40px;
  margin-left: 50px;
}
.a {
  color: #48c492;
  font-size: 28px;
}
.b {
  color: #999999;
  font-size: 36px;
}
.c {
  font-size: 28px;
  color: #000000;
}
.btm-r {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 486px;
  height: 80px;
  background: #48c492;
  border-radius: 40px;
  font-size: 32px;
  line-height: 44px;
  color: #ffffff;
  margin-right: 24px;
}
</style>