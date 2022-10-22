<template>
  <router-link
    class="max-w-xs relative"
    :to="`anime/${anime.mal_id}/${normalUrlTitle}`"
  >
    <div class="p-1 h-80 2xl:h-72">
      <img
        class="h-full w-full rounded-lg"
        :src="anime.images.jpg.image_url"
        :alt="anime.title"
      />
    </div>
    <div class="text-base mt-2 text-center sm:text-left">
      <p>{{ calcMaxLengthTitle }}</p>
    </div>
    <div
      class="flex justify-center items-center rounded-full absolute top-0 w-10 h-10 -translate-x-1/2 -translate-y-1/2 text-white"
      v-if="topNumber"
      :class="`${color}-800`"
    >
      #{{ topNumber }}
    </div>
  </router-link>
</template>
<script>
export default {
  props: {
    anime: {
      type: Object,
      required: false,
    },
    topNumber: {
      type: Number,
      required: false,
      default: null,
    },
    color: {
      type: String,
      required: false,
    },
  },
  computed: {
    calcMaxLengthTitle() {
      if (this.anime.title.length > 50) {
        return `${this.anime.title.slice(0, 50)}...`;
      }
      return this.anime.title;
    },
    normalUrlTitle() {
      return this.anime.title.replace(/[^A-Z0-9]+/gi, "-");
    },
  },
};
</script>
<style lang="scss" scoped>
.red-800 {
  background-color: rgb(185 28 28);
}
.orange-800 {
  background-color: rgb(154 52 18);
}
.amber-800 {
  background-color: rgb(146 64 14);
}
.blue-800 {
  background-color: rgb(30 64 175);
}
.indigo-800 {
  background-color: rgb(55 48 163);
}
.violet-800 {
  background-color: rgb(91 33 182);
}
.pink-800 {
  background-color: rgb(157 23 77);
}

.rose-800 {
  background-color: rgb(159 18 57);
}
.sky-800 {
  background-color: rgb(7 89 133);
}
</style>
