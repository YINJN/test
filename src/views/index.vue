<template>
  <div class="body">
    <div class="school">
      <div class="address">
        <div><img src="@/assets/zuobiao.png" /></div>
        <div class="schoolName">{{ schoolName }}</div>
      </div>
      <div class="change"><img src="@/assets/qiehuan.png" /></div>
    </div>
    <div class="banner"><img src="@/assets/banner.png" /></div>
    <div class="remind">
      <div class="remindmsg"><img src="@/assets/tixing.png" /></div>
      <span class="gap"></span>
      <div class="msg_word" @click="topei">本周尚未进行陪餐，请尽快完成</div>
    </div>
    <div class="app">
      <div class="app_a" @click="today">
        <img src="@/assets/ricaidan.png" />
        <span class="day_n">日菜单</span>
      </div>
      <div class="app_a" @click="toweek">
        <div class="pic"><img src="@/assets/zhoucaidan.png" /></div>
        <span class="day_n">周菜单</span>
      </div>
      <div class="app_a" @click="topei">
        <img src="@/assets//peican.png" />
        <span class="day_n">陪餐</span>
      </div>
      <div class="app_a" @click="topj">
        <img src="@/assets/pingjia.png" />
        <span class="day_n">用餐评价</span>
      </div>
    </div>
    <div class="yancai">
      <div class="yc_title">
        <span></span>
        <div>验菜</div>
      </div>
      <div class="yc_class">
        <div class="zhineng">
          <div class="sd-t">
            <div class="zn">智能验菜</div>
            <div class="yancai_go" @click="zngo">立即前往></div>
          </div>
          <img src="@/assets/zhineng.png" alt="" />
        </div>
        <div class="shoudong">
          <div class="sd-t">
            <div class="sd">手动验菜</div>
            <div class="yancai_go" @click="sdgo">立即前往></div>
          </div>
          <img src="@/assets/shoudong.png" alt="" />
        </div>
      </div>
    </div>
    <div class="manage">
      <div class="mge_title">
        <span></span>
        <div>仓库管理</div>
      </div>
      <div class="mge_class">
        <div class="stock">
          <img src="../assets/guanli.png" alt="" />
          <span @click="stock">库存管理</span>
        </div>
        <div class="warn">
          <img src="../assets/yujing.png" alt="" />
          <span @click="warn">库存预警</span>
        </div>
        <div class="note">
          <img src="../assets/churu.png" alt="" />
          <span @click="torecord">出入库记录</span>
        </div>
        <div class="yancaiNote">
          <img src="../assets/jilu.png" alt="" />
          <span>验菜记录</span>
        </div>
      </div>
    </div>
    <div class="rank">
      <div class="rank-top">
        <div class="rank-top-l">
          <span></span>
          <div>菜品排行榜</div>
        </div>
        <div class="rank-top-r" @click="torank">更多></div>
      </div>
      <div class="item">
        <div class="item-a">
          <span class="a">01</span>
          <item spname="红烧肉" spclass="荤菜" />
        </div>
        <div class="item-a">
          <span class="b">02</span>
          <item spname="红烧肉" spclass="荤菜" />
        </div>
        <div class="item-a">
          <span class="c">03</span>
          <item spname="红烧肉" spclass="荤菜" />
        </div>
        <div class="item-a">
          <span class="d">04</span>
          <item spname="红烧肉" spclass="荤菜" />
        </div>
      </div>
    </div>
    <div class="count">
      <div class="count-top">
        <span></span>
        <div>陪餐统计</div>
      </div>
      <div id="main" class="main"></div>
    </div>
  </div>
</template>

<script src="/echarts.js"></script>
<script>
import * as echarts from "echarts";
import item from "@/components/item";
import { test } from "../api/index";
export default {
  name: "index",
  data() {
    return {
      schoolName: "犀鸟校园",
      list: [],
      value: 3,
    };
  },
  created() {
    test().then((res) => {
      this.list = res;
      // console.log(this.list);
    });
  },
  mounted() {
    var chartDom = document.getElementById("main");
    var myChart = echarts.init(chartDom);
    var option;
    option = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "center",
        left: "80%",
        orient: "vertical",
        itemGap: 20,
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["56%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 72, name: "优秀" },
            { value: 122, name: "良好" },
            { value: 23, name: "一般" },
            { value: 1, name: "不及格" },
          ],
        },
      ],
    };
    myChart.setOption(option);
  },
  methods: {
    today() {
      this.$router.push({
        name: "dayMenu",
      });
    },
    toweek() {
      this.$router.push({
        name: "weekMenu",
      });
    },
    topei() {
      this.$router.push({
        name: "accompany",
      });
    },
    topj() {
      this.$router.push({
        name: "evaluate",
      });
    },
    zngo() {
      this.$router.push({
        name: "zhineng",
      });
    },
    sdgo() {
      this.$router.push({
        name: "shoudong1",
      });
    },
    stock() {
      this.$router.push({
        name: "stock",
      });
    },
    warn() {
      this.$router.push({
        name: "warn",
      });
    },
    torank() {
      this.$router.push({
        name: "rank",
      });
    },
    torecord() {
      this.$router.push({
        name: "record",
      });
    },
  },
  components: {
    item,
  },
};
</script>

<style scoped>
.body {
  background: #fff;
  padding-bottom: 100px;
  width: 100%;
  height: 100%;
}
.school {
  width: 702px;
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}
.address {
  display: flex;
  flex-direction: row;
  padding: 0px;
  gap: 4px;
  width: 196px;
  height: 48px;
}
.address img {
  width: 48px;
  height: 48px;
}
.schoolName {
  width: 144px;
  height: 42px;
  font-size: 36px;
  line-height: 42px;
  display: flex;
  align-items: center;
  color: #000000;
  cursor: default;
}
.change img {
  width: 40px;
  height: 40px;
}
.banner {
  display: flex;
  justify-content: center;
  /* width: 686px;
  height: 286px; */
  flex-shrink: 0;
  overflow: hidden;
}
.banner img {
  width: 686px;
  height: 286px;
  flex-shrink: 0;
}
.remind {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 702px;
  height: 66px;
  background: rgba(153, 153, 153, 0.08);
  border-radius: 32px;
  margin: 32px auto 44px;
  padding-left: 24px;
  box-sizing: border-box;
}
.remindmsg img {
  width: 111px;
  height: 42px;
}
.gap {
  width: 2px;
  height: 16px;
  background: black;
}
.msg_word {
  width: 336px;
  height: 36px;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  color: #999999;
  cursor: pointer;
}
.app {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 68px;
  width: 628px;
  height: 146px;
  border-radius: 20px;
  margin: 0 auto;
}
.app_a {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
}
.app_a img {
  width: 88px;
  /* height: 88px; */
}
.day_n {
  font-size: 28px;
  line-height: 42px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #333333;
}
.yancai {
  width: 100%;
  height: 238px;
  margin-top: 40px;
}
.yc_title {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  gap: 24px;
  width: 104px;
  height: 42px;
}
.yc_title span,
.mge_title span,
.rank-top span,
.count-top span {
  width: 8px;
  height: 36px;
  background: #48c492;
  border-radius: 0px 9px 9px 0px;
}
.yc_title div,
.mge_title div,
.rank-top-l div,
.count-top div {
  font-size: 36px;
  line-height: 42px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  cursor: default;
}
.yc_class {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 14px;
  width: 702px;
  height: 172px;
  margin: 24px auto 40px;
}
.zhineng {
  width: 344px;
  height: 172px;
  background: rgba(72, 196, 146, 0.1);
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.shoudong {
  width: 344px;
  height: 172px;
  background: rgba(255, 178, 45, 0.08);
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.zhineng img {
  width: 114px;
  height: 137px;
  margin-top: 37px;
}
.shoudong img {
  width: 114px;
  height: 137px;
  margin-top: 37px;
}
.shoudong img {
  width: 114px;
  height: 137px;
}
.sd-t {
  display: flex;
  flex-direction: column;
  margin-top: 37px;
}
.zn {
  width: 128px;
  height: 42px;
  font-size: 32px;
  line-height: 42px;
  display: flex;
  align-items: center;
  color: #48c492;
  cursor: default;
}
.sd {
  width: 128px;
  height: 42px;
  font-size: 32px;
  line-height: 42px;
  display: flex;
  align-items: center;
  color: #ffb22d;
  cursor: default;
}
.yancai_go {
  width: 120px;
  height: 42px;
  font-size: 24px;
  line-height: 42px;
  display: flex;
  align-items: center;
  color: #999999;
  cursor: pointer;
}
.manage {
  width: 100%;
  height: 238px;
  margin-top: 40px;
}
.mge_title {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  gap: 24px;
  width: 176px;
  height: 42px;
}
.mge_class {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 32px;
  width: 688px;
  height: 130px;
  margin: 28px auto 0;
}
.stock,
.warn,
.note,
.yancaiNote {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 148px;
  height: 130px;
}
.stock img,
.warn img,
.note img,
.yancaiNote img {
  width: 80px;
  height: 80px;
}
.stock span,
.warn span,
.note span,
.yancaiNote span {
  font-size: 28px;
  line-height: 42px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  cursor: pointer;
}
.rank {
  width: 97%;
}
.rank-top {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 42px;
  margin-bottom: 30px;
}
.rank-top-l {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  gap: 24px;
  width: 212px;
  height: 42px;
}
.rank-top-r {
  width: 72px;
  height: 40px;
  font-size: 24px;
  line-height: 40px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: #999999;
  cursor: pointer;
}
.count {
  width: 750px;
  height: 305px;
}
.count-top {
  display: flex;
  align-items: flex-end;
  gap: 24px;
  width: 100%;
  height: 42px;
  margin-top: 40px;
}
.item {
  display: flex;
  flex-direction: column;
  gap: 26px;
}
.item-a {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.a {
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
.b {
  width: 45px;
  height: 40px;
  font-family: "Humnst777 Blk BT";
  font-style: italic;
  font-weight: 400;
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  color: #afc5d9;
}
.c {
  width: 45px;
  height: 40px;
  font-family: "Humnst777 Blk BT";
  font-style: italic;
  font-weight: 400;
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  color: #daafa0;
}
.d {
  width: 45px;
  height: 40px;
  font-family: "Humnst777 Blk BT";
  font-style: italic;
  font-weight: 400;
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  color: rgba(153, 153, 153, 0.4);
}
.main {
  width: 514px;
  height: 231px;
  /* margin-left: 78px; */
}
</style>