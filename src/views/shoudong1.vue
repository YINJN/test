<template>
  <div class="body">
    <sdinfo v-for="item in list" :data="item" />
  </div>
</template>

<script>
import sdinfo from "@/components/sdinfo.vue";

export default {
  components: { sdinfo },
  name: "shoudong",
  data() {
    return {
      list: [{}],
    };
  },
};
</script>

<style scoped>
.body {
  margin-top: 16px;
  gap: 16px;
  margin-bottom: 50px;
}
</style>