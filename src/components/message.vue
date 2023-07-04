<template>
  <div class="body">
    <div class="body-l">
      <div class="top-a">{{ data.name }}</div>
      <div class="top-c">{{ data.class }}</div>
    </div>
    <div class="top-b">
      <div class="top-b-t">
        <div class="icon">￥</div>
        <div class="price">{{ data.price }}</div>
      </div>
      <div class="top-b-b">x{{ data.num }}</div>
    </div>
    <div class="top-d">
      <div class="show" v-if="a">
        <label @click="(a = !a), (data.show = !0)">
          <span>展开验菜</span>
          <img src="../assets/jiantou.png" />
        </label>
      </div>
      <div class="up" v-else>
        <label @click="(a = !b), (data.show = !1)">
          <span>收起验菜</span>
          <img src="../assets/jiantou.png" />
        </label>
      </div>
    </div>
    <div class="nav">
      <div class="element" v-if="data.show">
        <div class="yc-info">
          <div class="type">
            <span>采购类型：</span>
            <el-select v-model="value">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div class="num">
            <span>订购数量：</span>
            <div class="num-m">7</div>
            <div class="unit">瓶</div>
          </div>
          <div class="realNum">
            <span>实际数量</span>
            <div class="num-m" style="color: #999999">7</div>
            <div class="unit">瓶</div>
          </div>
          <div class="back">
            <span>退货数量：</span>
            <div class="num-m" style="color: #999999">0</div>
            <div class="unit">瓶</div>
          </div>
          <div class="notes">
            <span>备注：</span>
            <textarea cols="650px" rows="130px"></textarea>
          </div>
          <div class="fresh">
            <span>菜品新鲜度：</span>
            <van-radio-group
              v-model="fresh"
              direction="horizontal"
              class="select"
            >
              <van-radio
                name="1"
                icon-size="24px"
                checked-color="#48C492"
                class="select-a"
                >很新鲜</van-radio
              >
              <van-radio
                name="2"
                icon-size="24px"
                checked-color="#48C492"
                class="select-a"
                >新鲜</van-radio
              >
              <van-radio
                name="3"
                icon-size="24px"
                checked-color="#48C492"
                class="select-a"
                >不新鲜</van-radio
              >
            </van-radio-group>
          </div>
          <div class="up-img">
            <span>上传照片：</span>
            <van-uploader
              v-model="fileList"
              multiple
              :max-count="4"
              style="margin-top: 28.1px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "message",
  methods: {},
  data() {
    return {
      a: true,
      b: false,
      options: [
        {
          value: "选项1",
          label: "入库",
        },
        {
          value: "选项2",
          label: "即入即出",
        },
      ],
      value: "选项1",
      fresh: "",
      fileList: [],
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
  position: relative;
  border-radius: 20px;
  width: 702px;
  min-height: 168px;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
  padding: 24px 24px 0 24px;
  box-sizing: border-box;
}
.top-a {
  width: 530px;
  /* height: 76px; */
  font-size: 32px;
  line-height: 38px;
  text-align: justify;
  color: #000000;
}
.top-b {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;
  width: 98px;
  height: 74px;
}
.top-b-t {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}
.icon {
  font-size: 24px;
  color: #000000;
}
.body-l {
  height: 124px;
}
.price {
  font-size: 36px;
  line-height: 42px;
  color: #000000;
}
.top-b-b {
  font-size: 28px;
  line-height: 32px;
  display: flex;
  align-items: center;
  color: #999999;
}
.top-c {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid rgba(255, 138, 0, 0.5);
  border-radius: 8px;
  font-size: 24px;
  color: #ff8a00;
  margin-top: 12px;
  max-width: 64px;
  height: 36px;
}
.top-d {
  position: absolute;
  top: 108px;
  right: 24px;
  font-size: 24px;
  line-height: 40px;
  display: flex;
  align-items: center;
  color: #999999;
}
.element {
  width: 100%;
}
.nav {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  padding: 0px;
}
.yc-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  height: 1006px;
  margin-top: 24px;
}
.type {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  height: 95px;
  /* margin-top: 24px; */
  border-top: 1px solid #e1e1e1;
}
.type span,
.num span,
.realNum span,
.back span {
  width: 196px;
  height: 45px;
  font-size: 32px;
  line-height: 45px;
  display: flex;
  align-items: center;
  color: #000000;
}
.el-select {
  width: 462px;
  /* border-radius: 0; */
  font-size: 32px;
}
.el-input {
  border: 0px solid #dcdfe6;
}
.num,
.realNum,
.back {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  height: 95px;
  box-sizing: border-box;
}
.num-m {
  width: 346px;
  height: 45px;
  font-size: 32px;
  line-height: 45px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #000000;
}
.unit {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0px;
  width: 72px;
  height: 45px;
  font-size: 32px;
  line-height: 45px;
  text-align: center;
  color: #000000;
}
.notes {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
}
.notes span {
  font-size: 32px;
  line-height: 45px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-top: 25.5px;
}
.notes textarea {
  resize: none;
  font-size: 28px;
  border: 0;
  margin-top: 10px;
}
.fresh {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  height: 147px;
}
.fresh span {
  width: 638px;
  height: 61px;
  font-size: 32px;
  line-height: 45px;
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
  width: 604px;
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
.up-img {
  height: 44px;
  font-size: 32px;
  line-height: 44px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  color: #000000;
}
.up label,
.show label {
  display: flex;
  align-items: center;
}
.up img {
  width: 32px;
  height: 32px;
  transform: rotate(-90deg);
}
.show img {
  width: 32px;
  height: 32px;
  transform: rotate(90deg);
}
.show span,
.up span {
  color: #999;
  font-size: 24px;
  line-height: 40px;
}
</style>