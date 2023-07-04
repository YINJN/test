<template>
  <div>
    <div class="top">
      <div class="department">
        <span>部门</span>
        <van-field
          readonly
          clickable
          label=""
          :value="value"
          placeholder=""
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" round position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          />
        </van-popup>
        <div class="arrow"><img src="../assets/jiant.png" alt="" /></div>
      </div>
      <div class="receiver">
        <span>领取人</span>
        <div class="name">张三</div>
      </div>
    </div>
    <div class="list">
      <chuku v-for="item in list" :data="item" />
    </div>
    <div class="up-img">
      <div class="img-title">上传照片</div>
      <van-uploader :after-read="afterRead" />
    </div>
    <div class="bottom">
      <button class="add" @click="toadd">新增</button>
      <button class="out" @click="toindex">出库</button>
    </div>
  </div>
</template>

<script>
import chuku from "@/components/chuku.vue";
export default {
  name: "outbound",
  components: { chuku },
  data() {
    return {
      value: "配菜部",
      showPicker: false,
      columns: ["配菜部", "XXX"],
      list: [
        {
          show: !1,
          title: "海天味极鲜特级酱油家用调味料包装随机 750mL/瓶",
          num: "7",
          unit: "瓶",
          kc: "7",
        },
        {
          show: !1,
          title: "鲜嫩小南瓜",
          num: "7",
          unit: "个",
          kc: "7",
        },
      ],
    };
  },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    afterRead(file) {
      console.log(file);
    },
    toadd() {
      this.$router.go(-1);
    },
    toindex() {
      alert("出库成功");
      this.$router.push({
        name: "index",
      });
    },
  },
};
</script>

<style scoped>
i .department {
  justify-content: space-between;
}
.receiver,
.department {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 32px;
  gap: 18px;
  /* width: 750px; */
  height: 108px;
  background: #ffffff;
  margin-bottom: 2px;
}
.receiver span,
.department span {
  width: 132px;
  height: 45px;
  font-size: 32px;
  line-height: 45px;
  display: flex;
  align-items: center;
  color: #000000;
}
.arrow {
  display: flex;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
}
.name {
  width: 482px;
  height: 45px;
  font-size: 32px;
  line-height: 45px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #000000;
  /* margin-left: 18px; */
}
.list {
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-direction: column;
}
.up-img {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 32px 32px;
  gap: 24px;
  width: 702px;
  height: 277.18px;
  background: #ffffff;
  border-radius: 20px;
  box-sizing: border-box;
  margin: 20px auto 0;
}
.img-title {
  width: 602px;
  height: 44px;
  font-size: 32px;
  line-height: 44px;
  display: flex;
  align-items: center;
  color: #999999;
}
.bottom {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 24px;
  gap: 16px;
  position: fixed;
  width: 748px;
  height: 116px;
  bottom: 0;
  background: #ffffff;
}
.add {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 200px;
  height: 80px;
  background: #ffffff;
  border: 1px solid #48c492;
  border-radius: 40px;
  color: #48c492;
  font-size: 32px;
  line-height: 44px;
}
.out {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 484px;
  height: 80px;
  background: #48c492;
  border-radius: 40px;
  color: #ffffff;
  font-size: 32px;
  line-height: 44px;
  border: 0;
}
</style>