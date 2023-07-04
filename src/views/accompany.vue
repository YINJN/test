<template>
  <div class="body">
    <div class="mark">
      <div class="point">得分：</div>
      <div class="totalPoint">
        <span>{{ sum }}</span>
        /100
      </div>
    </div>
    <div class="peiMsg">
      <div class="peiDate">
        <span>陪餐日期</span>
        <div class="date">2023-03-30 星期一</div>
        <img src="../assets/jiantou.png" alt="" />
      </div>
      <div class="peiMeals">
        <span>陪餐餐次</span>
        <van-field
          readonly
          clickable
          label=""
          :value="value"
          placeholder=""
          @click="showPicker = true"
          id="a"
        />
        <van-popup v-model="showPicker" round position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
            style="font-size: 32px"
          />
        </van-popup>
        <label for="a">
          <div class="img"><img src="../assets/jiantou.png" alt="" /></div>
        </label>
      </div>
      <div class="peiPlace">
        <span>就餐地点</span>
        <div class="place">犀鸟校园 知味园</div>
        <span class="blank"></span>
      </div>
    </div>
    <div class="upload">
      <span>上传照片</span>
      <van-uploader v-model="fileList" multiple :max-count="4" />
    </div>
    <div class="tip">
      <span class="tip_a">多项打分</span>
      <span class="tip_b">（以下每一项必须填写）</span>
    </div>
    <div class="tab">
      <div class="tab_list">
        <div
          class="btn"
          :class="{ active: itemIndex == 1 }"
          @click="btnClick(1)"
        >
          餐厨卫生
        </div>
        <div
          class="btn"
          :class="{ active: itemIndex == 2 }"
          @click="btnClick(2)"
        >
          餐厨规范
        </div>
        <div
          class="btn"
          :class="{ active: itemIndex == 3 }"
          @click="btnClick(3)"
        >
          食品质量
        </div>
      </div>
      <div class="tab_con">
        <div class="health" v-if="itemIndex == 1">
          <div class="he_q_a">
            <div class="he_q_a_title">1、操作间和餐厅卫生</div>
            <van-radio-group
              v-model="qa_a"
              direction="horizontal"
              class="select"
            >
              <van-radio
                name="1"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >优</van-radio
              >
              <van-radio
                name="2"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >一般</van-radio
              >
              <van-radio
                name="3"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >较差</van-radio
              >
            </van-radio-group>
          </div>
          <div class="he_q_a">
            <div class="he_q_a_title">2、食堂防蝇、防尘、防鼠设施</div>
            <van-radio-group
              v-model="qa_b"
              direction="horizontal"
              class="select-all"
            >
              <van-radio
                name="1"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >完好</van-radio
              >
              <van-radio
                name="2"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >破损</van-radio
              >
            </van-radio-group>
          </div>
          <div class="he_q_a">
            <div class="he_q_a_title">3、餐具洗消情况</div>
            <van-radio-group
              v-model="qa_c"
              direction="horizontal"
              class="select"
            >
              <van-radio
                name="1"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >优</van-radio
              >
              <van-radio
                name="2"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >一般</van-radio
              >
              <van-radio
                name="3"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >较差</van-radio
              >
            </van-radio-group>
          </div>
          <div class="he_q_a">
            <div class="he_q_a_title">4、垃圾每日处理，容器干净</div>
            <van-radio-group
              v-model="qa_d"
              direction="horizontal"
              class="select"
            >
              <van-radio
                name="1"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >优</van-radio
              >
              <van-radio
                name="2"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >一般</van-radio
              >
              <van-radio
                name="3"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >较差</van-radio
              >
            </van-radio-group>
          </div>
        </div>
        <div class="health" v-if="itemIndex == 2">
          <div class="he_q_a">
            <div class="he_q_a_title">1、工作人员穿戴是否规范</div>
            <van-radio-group
              v-model="qb_a"
              direction="horizontal"
              class="select-all"
            >
              <van-radio
                name="1"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >是</van-radio
              >
              <van-radio
                name="2"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >否</van-radio
              >
            </van-radio-group>
          </div>
          <div class="he_q_a">
            <div class="he_q_a_title">2、备餐间食品及餐具摆放是否规范</div>
            <van-radio-group
              v-model="qb_b"
              direction="horizontal"
              class="select-all"
            >
              <van-radio
                name="1"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >是</van-radio
              >
              <van-radio
                name="2"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >否</van-radio
              >
            </van-radio-group>
          </div>
          <div class="he_q_a">
            <div class="he_q_a_title">3、工作人员是否按规定流程操作</div>
            <van-radio-group
              v-model="qb_c"
              direction="horizontal"
              class="select-all"
            >
              <van-radio
                name="1"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >是</van-radio
              >
              <van-radio
                name="2"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >否</van-radio
              >
            </van-radio-group>
          </div>
          <div class="he_q_a">
            <div class="he_q_a_title">4、剩饭剩菜是否按要求处理</div>
            <van-radio-group
              v-model="qb_d"
              direction="horizontal"
              class="select-all"
            >
              <van-radio
                name="1"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >是</van-radio
              >
              <van-radio
                name="2"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >否</van-radio
              >
            </van-radio-group>
          </div>
          <div class="he_q_a">
            <div class="he_q_a_title">5、食品是否留样</div>
            <van-radio-group
              v-model="qb_e"
              direction="horizontal"
              class="select-all"
            >
              <van-radio
                name="1"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >是</van-radio
              >
              <van-radio
                name="2"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >否</van-radio
              >
            </van-radio-group>
          </div>
        </div>
        <div class="health" v-if="itemIndex == 3">
          <div class="he_q_a">
            <div class="he_q_a_title">1、食品加工距离销售时间是否过长</div>
            <van-radio-group
              v-model="qc_a"
              direction="horizontal"
              class="select-all"
            >
              <van-radio
                name="1"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >是</van-radio
              >
              <van-radio
                name="2"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >否</van-radio
              >
            </van-radio-group>
          </div>
          <div class="he_q_a">
            <div class="he_q_a_title">2、有无过期、变质食品</div>
            <van-radio-group
              v-model="qc_b"
              direction="horizontal"
              class="select-all"
            >
              <van-radio
                name="1"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >有</van-radio
              >
              <van-radio
                name="2"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >无</van-radio
              >
            </van-radio-group>
          </div>
          <div class="he_q_a">
            <div class="he_q_a_title">3、学生餐后有无异常反应</div>
            <van-radio-group
              v-model="qc_c"
              direction="horizontal"
              class="select-all"
            >
              <van-radio
                name="1"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >有</van-radio
              >
              <van-radio
                name="2"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >无</van-radio
              >
            </van-radio-group>
          </div>
          <div class="he_q_a">
            <div class="he_q_a_title">4、食品的口感</div>
            <van-radio-group
              v-model="qc_d"
              direction="horizontal"
              class="select"
            >
              <van-radio
                name="1"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >优</van-radio
              >
              <van-radio
                name="2"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >一般</van-radio
              >
              <van-radio
                name="3"
                icon-size="32px"
                checked-color="#48C492"
                class="select-a"
                >较差</van-radio
              >
            </van-radio-group>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <button class="save">保存</button>
      <button class="determine">确定</button>
    </div>
    <div class="float" @click="tonote">
      <img src="../assets/ball.png" alt="" />
    </div>
  </div>
</template>

<script>
import { test } from "@/api";
export default {
  name: "accompany",
  data() {
    return {
      sum: 100,
      itemIndex: 1,
      qa_a: "",
      qa_b: "",
      qa_c: "",
      qa_d: "",
      qb_a: "",
      qb_b: "",
      qb_c: "",
      qb_d: "",
      qb_e: "",
      qc_a: "",
      qc_b: "",
      qc_c: "",
      qc_d: "",
      show: false,
      value: "早餐",
      showPicker: false,
      columns: ["早餐", "午餐", "晚餐"],
      fileList: [],
    };
  },
  created() {
    test().then((res) => {
      this.list = res;
      console.log(this.list.list, 1);
    });
  },
  methods: {
    btnClick(index) {
      this.itemIndex = index;
    },
    showPopup() {
      this.show = true;
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    tonote() {
      this.$router.push({
        name: "note",
      });
    },
  },
};
</script>

<style scoped>
.body {
  position: relative;
}
.mark {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 7px;
  height: 88px;
  background: #ffffff;
  cursor: default;
}
.point {
  /* width: 84px; */
  height: 44px;
  font-size: 28px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: #000000;
}
.totalPoint {
  width: 148px;
  height: 44px;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: #999999;
}
.totalPoint span {
  width: 148px;
  height: 44px;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: #ff862e;
}
.peiMsg {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 2px;
  height: 328px;
  margin-top: 16px;
}
.peiDate {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 0px 32px;
  gap: 20px;
  width: 100%;
  height: 108px;
  background: #ffffff;
  box-sizing: border-box;
}
.peiDate img {
  width: 36px;
  height: 36px;
}
.date {
  width: 64.2%;
  height: 45px;
  font-size: 32px;
  line-height: 45px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #000000;
}
.peiMeals {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 0px 32px;
  gap: 20px;
  width: 100%;
  height: 108px;
  background: #ffffff;
  box-sizing: border-box;
}
.img {
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-self: center;
}
.meals,
.place {
  font-size: 32px;
  line-height: 45px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
}
.peiDate span,
.peiMeals span,
.peiPlace span {
  height: 45px;
  font-size: 32px;
  line-height: 45px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #000000;
}
.peiPlace {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 32px;
  gap: 20px;
  width: 100%;
  height: 108px;
  background: #ffffff;
  box-sizing: border-box;
}
.peiPlace .blank {
  width: 36px;
  height: 36px;
}
.upload {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 32px 32px;
  gap: 24px;
  /* width: 748px; */
  height: 287px;
  background: #ffffff;
  box-sizing: border-box;
  margin-top: 16px;
}
.upload span {
  width: 602px;
  height: 44px;
  font-size: 32px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: #999999;
}
.tip {
  width: 420px;
  height: 44px;
  font-size: 28px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-top: 20px;
  margin-bottom: 24px;
  margin-left: 32px;
}
.tip_a {
  /* width: 420px;
  height: 44px; */
  font-size: 28px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: #000000;
}
.tip_b {
  /* width: 420px;
  height: 44px; */
  font-size: 28px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: #999999;
}
.tab_list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 32px 0px;
  gap: 40px;
  height: 128px;
  box-sizing: border-box;
  background: #ffffff;
}
.tab {
  margin-bottom: 200px;
}
.btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 0px;
  gap: 10px;
  width: 168px;
  height: 64px;
  background: #48c492;
  border-radius: 32px;
  box-sizing: border-box;
  font-size: 28px;
  line-height: 44px;
  color: #ffffff;
  cursor: pointer;
}
.tab_con {
  margin-top: 2px;
  background: #ffffff;
}
.health {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 2px;
}
.he_q_a {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 36px;
  background: #ffffff;
  box-sizing: border-box;
}
.he_q_a_title {
  width: 686px;
  height: 61px;
  font-size: 32px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: #000000;
}
.select {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px;
  gap: 50px;
  width: 640px;
  height: 44px;
  margin: 0 auto;
}
.select-a {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 20px;
  height: 44px;
  font-size: 32px;
  line-height: 44px;
  color: #000000;
}
.select-all {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  padding: 0px;
  gap: 127px;
  width: 487px;
  height: 44px;
  margin: 0 auto;
}
.bottom {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 24px;
  position: fixed;
  width: 100%;
  height: 116px;
  bottom: 0;
  background: #ffffff;
}
.save {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 200px;
  height: 80px;
  border: 1px solid #48c492;
  border-radius: 40px;
  font-size: 32px;
  line-height: 44px;
  color: #48c492;
}
.determine {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 448px;
  height: 80px;
  background: #48c492;
  border-radius: 40px;
  border: 0;
  font-size: 32px;
  line-height: 44px;
  color: #ffffff;
}
.float img {
  position: fixed;
  width: 120px;
  height: 120px;
  right: 32px;
  top: 50%;
}
</style>