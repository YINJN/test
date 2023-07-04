<template>
  <div class="body">
    <goods v-for="item in list1" :data="item" />
  </div>
</template>

<script>
import goods from "@/components/goods.vue";
export default {
  name: "warn",
  data() {
    return {
      list1: [
        {
          name: "海天味极鲜特级酱油家用调味料包装随机 750mL/瓶",
          price: 28.8,
          class: "蔬菜",
          num: "7",
          unit: "瓶",
        },
        {
          name: "海天味极鲜特级酱油家用调味料包装随机 750mL/瓶",
          price: 28.8,
          class: "肉类",
          num: "1",
          unit: "瓶",
        },
        {
          name: "海天味极鲜特级酱油家用调味料包装随机 750mL/瓶",
          price: 28.8,
          class: "肉类",
          num: "1",
          unit: "瓶",
        },
      ],
    };
  },
  components: {
    goods,
  },
};
</script>

<style scoped>
.body {
  background: #f5f5f5;
}
</style>