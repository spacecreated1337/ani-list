<template>
  <div v-if="anime">
    <div>
      <div class="w-full h-full banner-shadow"></div>
      <div
        class="h-96 bg-no-repeat bg-cover bg-center flex items-end"
        :style="{
          'background-image':
            'url(' + anime.trailer.images.maximum_image_url + ')',
        }"
      >
        <p>123</p>
      </div>
      <div>123</div>
    </div>
  </div>
</template>
<script>
import { getAnimeDetails } from "@/components/api";
export default {
  created() {
    let getResponce = getAnimeDetails(this.$route.params.animeId);
    getResponce.then((data) => {
      this.anime = data.data;
    });
  },
  data() {
    return {
      anime: null,
    };
  },
  computed: {
    getAnimeDescription() {
      if (!this.anime.synopsis) return;
      return this.anime?.synopsis.replace("[Written by MAL Rewrite]", "");
    },
  },
};
</script>
