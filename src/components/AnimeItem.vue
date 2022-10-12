<template>
  <router-link :to="`anime/${anime.mal_id}/${normalUrlTitle}`">
    <div class="rounded p-1 bg-pink-400" style="height: 280px">
      <img
        class="h-full w-full"
        :src="anime.images.jpg.image_url"
        :alt="anime.title"
      />
    </div>
    <div class="text-base mt-2">
      <p>{{ calcMaxLengthTitle }}</p>
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
