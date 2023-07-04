<template>
  <div class="dish">
    <img src="../assets/dish2.png" />
    <div class="name">{{ data.name }}</div>
  </div>
</template>

<script>
export default {
  name: "menuItem",
  props: {
    data: {},
  },
};
</script>

<style scoped>
.dish {
  display: flex;
  flex-direction: column;
  width: 202px;
  height: 202px;
  border-radius: 8px;
  overflow: hidden;
}
.dish img {
  width: 202px;
  height: 154.47px;
}
.name {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  background: rgba(0, 0, 0, 0.4);
  color: #ffffff;
  font-size: 28px;
  width: 202px;
  height: 47.53px;
}
</style>