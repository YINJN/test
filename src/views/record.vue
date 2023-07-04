<template>
  <div class="body">
    <div class="top">
      <van-search
        v-model="value"
        shape="round"
        background="none"
        placeholder="请输入搜索关键词"
        autofocus="true"
      />
      <button>搜索</button>
    </div>
    <div class="empty">
      <van-empty
        class="custom-image"
        image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
        description="暂无记录"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "record",
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style scoped>
.body {
  height: 1372px;
  display: flex;
  flex-direction: column;
}
.top {
  position: relative;
}
button {
  position: absolute;
  top: 20px;
  right: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 128px;
  height: 56px;
  background: #48c492;
  border-radius: 40px;
  border: 0;
  color: #ffffff;
  font-size: 28px;
  line-height: 44px;
}
.empty {
  margin: auto;
}
</style>