<template>
  <div class="body">
    <noteinfo v-for="item in list" :data="item" />
  </div>
</template>

<script>
import noteinfo from "@/components/noteinfo.vue";
export default {
  components: { noteinfo },
  name: "note",
  data() {
    return {
      list: [
        {
          name: "张三三",
        },
        {
          name: "李四",
        },
        {
          name: "王五",
        },
      ],
    };
  },
};
</script>

<style scoped>
.body {
  gap: 20px;
  margin: 20px auto 50px;
}
</style>
