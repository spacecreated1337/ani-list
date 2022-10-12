<template>
  <div
    v-if="isVisibleLoadingBar"
    class="loading-bar bg-red-900 fixed top-0 z-10"
    :style="{ width: `${barWidth}%` }"
  ></div>
</template>

<script>
export default {
  props: {
    barWidth: {
      type: Number,
      required: true,
    },
    isVisibleLoadingBar: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.loading-bar {
  height: 5px;
  background: #29a6ff;
}
</style>
