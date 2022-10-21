<template>
  <div class="flex flex-col h-screen justify-between">
    <my-navbar
      :class="{ 'fixed-navbar': scrollToTop, 'default-navbar': !scrollToTop }"
    />
    <nprogress-container />
    <router-view />
    <my-footer />
  </div>
</template>
<script>
import MyNavbar from "./components/UI/MyNavbar.vue";
import MyFooter from "./components/UI/MyFooter.vue";
import NprogressContainer from "vue-nprogress/src/NprogressContainer";
export default {
  components: {
    MyNavbar,
    MyFooter,
    NprogressContainer,
  },
  data() {
    return {
      scrollToTop: false,
      scrollToBottom: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollHandler);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
  },
  methods: {
    scrollHandler() {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > this.lastScrollTop) {
        this.scrollToTop = false;
      } else {
        this.scrollToTop = true;
      }
      this.lastScrollTop = st <= 0 ? 0 : st;
    },
  },
};
</script>
<style lang="scss" scoped>
.fixed-navbar {
  background: #2b2d42;
  position: fixed;
  width: 100%;
  top: 0;
  transition: 0.8s;
  z-index: 10;
}
.default-navbar {
  width: 100%;
  transition: 0.8s;
  top: -64px;
  position: fixed;
  z-index: 10;
}
</style>
