<template>
  <div class="body">
    <div class="main">
      <div class="img"><img src="../assets/dish2.png" alt="" /></div>
      <div class="main-r">
        <div class="title">{{ data.name }}</div>
        <div class="detail">
          <van-rate v-model="value" color="#F89135" />
          <div class="change">
            <div class="show" v-if="a">
              <label @click="(a = !a), (data.show = !0)">
                写评价
                <img src="../assets/jiantou.png" />
              </label>
            </div>
            <div class="up" v-else>
              <label @click="(a = !b), (data.show = !1)">
                写评价
                <img src="../assets/jiantou.png" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="element" v-if="data.show">
        <div class="info">
          <div class="tag">
            <!-- // v-for循环模拟的数组lists -->
            <div
              v-for="(item, index) in listpj"
              :key="index"
              @click="onPitch(item.id)"
            >
              <span
                class="tagContant"
                :class="{ tagAlter: gather.indexOf(item.id) > -1 }"
                >{{ item.pj }}</span
              >
            </div>
          </div>
          <div class="write">
            <textarea placeholder="还想补充点什么？"></textarea>
          </div>
          <div class="remind">
            <div class="remind-pic">
              <img src="../assets/提示 (1) 1.png" alt="" />
            </div>
            <div class="msg">客观真实的评价能帮助我们做得更好!</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "writepj",
  methods: {
    //点击事件 通过传参拿到每一条的id
    onPitch(id) {
      let subscript = this.gather.indexOf(id); //indexOf:返回某个指定的字符串值在字符串中首次出现的位置
      if (subscript > -1) {
        this.gather.splice(subscript, 1); //splice:用于添加或删除数组中的元素
      } else {
        this.gather.push(id); //通过push方法将选中id添加到数组中
      }
      this.stringList = this.gather.join(","); //转换成字符串并以逗号隔开
      console.log(this.stringList);
    },
  },
  data() {
    return {
      value: 0,
      a: true,
      b: false,
      listpj: [
        { pj: "美味", id: "1" },
        { pj: "喜欢", id: "2" },
        { pj: "好吃", id: "3" },
        { pj: "食材新鲜", id: "4" },
        { pj: "咸淡适中", id: "5" },
      ],
      gather: [], //选中集合数组
      stringList: null, //选中集合数组转换成字符串
    };
  },
  props: {
    data: {},
  },
};
</script>

<style scoped>
.body {
  width: 702px;
  min-height: 144px;
  background: #ffffff;
  border-radius: 20px;
  margin: 0 auto;
}
.main {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  width: 654px;
  height: 96px;
}
.img img {
  width: 96px;
  height: 96px;
  background: #c1c1c1;
  border-radius: 8px;
  overflow: hidden;
}
.main-r {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  width: 534px;
  height: 92.24px;
}
.title {
  width: 96px;
  height: 40px;
  font-size: 32px;
  line-height: 40px;
  display: flex;
  align-items: center;
  color: #333333;
}
.detail {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  gap: 202px;
  width: 534px;
  height: 52.24px;
}
.change {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 104px;
  height: 40px;
  color: #999999;
  font-size: 24px;
}
.show label,
.up label {
  display: flex;
}
.change img {
  width: 32px;
  height: 32px;
  transform: rotate(90deg);
}
.up img {
  width: 32px;
  height: 32px;
  transform: rotate(-90deg);
}
.nav {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  padding: 0px;
}

.element {
  width: 100%;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 448px;
}
.tag {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  padding: 0px;
  gap: 20px;
  width: 652px;
  height: 208px;
  margin: 0 auto;
}
.tagContant {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 22px;
  background: rgba(153, 153, 153, 0.12);
  border: 1px solid rgba(153, 153, 153, 0.12);
  border-radius: 30px;
  font-size: 28px;
  line-height: 44px;
  color: #666666;
}
/* 点击后的样式 */
.tagAlter {
  background: #ffffff;
  border-radius: 30px;
  border: 1px solid rgba(72, 196, 146, 0.5);
  box-sizing: border-box;
  color: rgba(72, 196, 146, 1);
}

.write {
  margin: 10px auto;
}
textarea {
  width: 654px;
  height: 144px;
  padding: 12px;
  box-sizing: border-box;
  font-size: 28px;
  resize: none;
  border: 0;
}
.remind {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 6px 20px;
  gap: 6px;
  width: 654px;
  height: 56px;
  background: rgba(255, 134, 46, 0.08);
  border-radius: 12px;
  box-sizing: border-box;
  margin: 0 24px 20px;
}
.remind-pic img {
  width: 36px;
  height: 36px;
  overflow: hidden;
}
.msg {
  font-size: 24px;
  line-height: 44px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #eb8236;
}
/* 默认的样式 */
/* .tagContant {
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 14px;
  width: 80px;
  padding: 3px 0px;
  color: rgb(161, 161, 161);
  border: 1px solid rgb(161, 161, 161);
  border-radius: 4px;
  margin: 10px 4px;
} */
</style>

