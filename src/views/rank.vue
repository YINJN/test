<template>
  <div class="main">
    <div class="top">
      <span class="a" @click="info">更多></span>
      <div class="list-a">
        <div class="img-a">
          <img src="../assets/dish2.png" alt="" />
        </div>
        <div class="a-list">1</div>
        <div class="spname-a">红烧肉</div>
        <div class="class-a">荤菜</div>
        <van-rate
          v-model="value1"
          color="#F89135"
          style="
            position: absolute;
            width: 22.93328vw;
            height: 5.96932vw;
            left: 4.53333vw;
            top: 40.26657vw;
            justify-content: center;
            margin-top: 1.06664vw;
          "
          readonly
        />
      </div>
      <span class="b" @click="info">更多></span>
      <div class="list-b">
        <div class="img-b">
          <img src="../assets/dish2.png" alt="" />
        </div>
        <div class="b-list">2</div>
        <div class="lei-b">
          <div class="spname-b">红烧肉</div>
          <div class="class-b">荤菜</div>
          <van-rate
            v-model="value2"
            color="#F89135"
            style="
              position: absolute;
              width: 22.93332vw;
              height: 5.96931vw;
              top: 13.6vw;
              justify-content: center;
              /* margin-top: 12px; */
            "
            readonly
          />
        </div>
      </div>
      <span class="c" @click="info">更多></span>
      <div class="list-c">
        <div class="img-c">
          <img src="../assets/dish2.png" alt="" />
        </div>
        <div class="c-list">3</div>
        <div class="lei-c">
          <div class="spname-c">红烧肉</div>
          <div class="class-c">荤菜</div>
          <van-rate
            v-model="value3"
            color="#F89135"
            style="
              position: absolute;
              width: 22.93332vw;
              height: 5.96931vw;
              top: 13.6vw;
              justify-content: center;
              /* margin-top: 12px; */
            "
            readonly
          />
        </div>
      </div>
      <div class="list">
        <div class="item">
          <div class="item-a">
            <span>04</span>
            <item spname="红烧肉" spclass="荤菜" />
          </div>
          <div class="item-a">
            <span>05</span>
            <item spname="红烧肉" spclass="荤菜" />
          </div>
          <div class="item-a">
            <span>06</span>
            <item spname="红烧肉" spclass="荤菜" />
          </div>
          <div class="item-a">
            <span>07</span>
            <item spname="红烧肉" spclass="荤菜" />
          </div>
          <div class="item-a">
            <span>08</span>
            <item spname="红烧肉" spclass="荤菜" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import item from "@/components/item";
export default {
  components: { item },
  name: "rank",
  data() {
    return {
      value1: 3,
      value2: 3,
      value3: 3,
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
.main {
  background: #48c492;
  height: 412px;
  position: absolute;
  width: 100%;
}
.a {
  position: absolute;
  width: 72px;
  height: 40px;
  left: 422px;
  top: 4px;
  font-size: 24px;
  line-height: 40px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
}
.list-a {
  position: absolute;
  width: 240px;
  height: 364px;
  left: 254px;
  top: 47px;
  background: linear-gradient(
    180deg,
    #ffffff 39.37%,
    rgba(255, 255, 255, 0.959003) 64.9%,
    rgba(255, 255, 255, 0.69) 100%
  );
  border-radius: 20px 20px 0px 0px;
}
.img-a {
  position: absolute;
  width: 124px;
  height: 124px;
  left: 58px;
  top: 42px;
  background: #c1c1c1;
  border: 6px solid #ffe03b;
  border-radius: 62px;
  overflow: hidden;
}
.a-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  position: absolute;
  width: 48px;
  height: 48px;
  left: 100px;
  top: 144px;
  background: #ffe03b;
  border-radius: 30px;
  font-family: "Impact";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 40px;
  text-align: center;
  color: #f5941e;
}
.spname-a {
  position: absolute;
  width: 96px;
  height: 40px;
  left: 72px;
  top: 208px;
  font-size: 32px;
  line-height: 40px;
  display: flex;
  align-items: center;
  color: #333333;
}
.class-a {
  box-sizing: border-box;
  justify-content: center;
  /* padding: 0px 12px; */
  gap: 10px;
  position: absolute;
  width: 64px;
  height: 36px;
  left: 88px;
  top: 260px;
  border: 1px solid #ff8a00;
  border-radius: 8px;
  color: #ff8a00;
  font-size: 24px;
  line-height: 40px;
  display: flex;
  align-items: center;
  text-align: center;
}
.b {
  position: absolute;
  width: 72px;
  height: 40px;
  left: 160px;
  top: 46px;
  font-size: 24px;
  line-height: 40px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
}
.list-b {
  position: absolute;
  width: 200px;
  height: 322px;
  left: 32px;
  top: 89px;
  background: linear-gradient(
    180deg,
    #ffffff 39.37%,
    rgba(255, 255, 255, 0.959003) 64.9%,
    rgba(255, 255, 255, 0.69) 100%
  );
  border-radius: 20px 20px 0px 0px;
}
.img-b {
  position: absolute;
  width: 96px;
  height: 96px;
  left: 52px;
  top: 30px;
  background: #c1c1c1;
  border: 4px solid #ccdcf5;
  border-radius: 62px;
  overflow: hidden;
}
.b-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  position: absolute;
  width: 36px;
  height: 36px;
  left: 84px;
  top: 110px;
  background: #ccdcf5;
  border-radius: 30px;
  font-family: "Impact";
  font-size: 24px;
  line-height: 40px;
  text-align: center;
  color: #678cad;
}
.lei-b,
.lei-c {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 12px;
  position: absolute;
  width: 128px;
  height: 88px;
  left: calc(50% - 128px / 2);
  top: 167px;
}
.spname-b,
.spname-c {
  width: 128px;
  height: 40px;
  font-size: 32px;
  line-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333333;
}
.class-b,
.class-c {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 64px;
  height: 36px;
  border: 1px solid #ff8a00;
  border-radius: 8px;
  color: #ff8a00;
  font-size: 24px;
  line-height: 40px;
}
.list-c {
  position: absolute;
  width: 200px;
  height: 322px;
  left: 516px;
  top: 89px;
  background: linear-gradient(
    180deg,
    #ffffff 39.37%,
    rgba(255, 255, 255, 0.959003) 64.9%,
    rgba(255, 255, 255, 0.69) 100%
  );
  border-radius: 20px 20px 0px 0px;
}
.img-c {
  position: absolute;
  width: 96px;
  height: 96px;
  left: 52px;
  top: 30px;
  background: #c1c1c1;
  border: 4px solid #eed2c8;
  border-radius: 62px;
  overflow: hidden;
}
.c-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  position: absolute;
  width: 36px;
  height: 36px;
  left: 85px;
  top: 110px;
  background: #eed2c8;
  border-radius: 30px;
  color: #cd8065;
  font-family: "Impact";
  font-size: 24px;
}
.c {
  position: absolute;
  width: 72px;
  height: 40px;
  left: 644px;
  top: 46px;
  font-size: 24px;
  line-height: 40px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
}
.item {
  margin-top: 439px;
  display: flex;
  flex-direction: column;
  gap: 38px;
}
.item-a {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
  color: rgba(153, 153, 153, 0.4);
}
.img-a img {
  width: 124px;
  height: 124px;
}
.img-b img,
.img-c img {
  width: 96px;
  height: 96px;
}
</style>