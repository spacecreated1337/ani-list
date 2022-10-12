<template>
  <div class="mt-32" v-if="anime">
    <div
      class="h-96 bg-no-repeat bg-cover bg-center"
      :style="{
        'background-image':
          'url(' + anime.trailer.images.maximum_image_url + ')',
      }"
    >
      <div class="w-full h-full banner-shadow"></div>
    </div>
    <section class="my-12">
      <div class="container mx-auto px-20">
        <div class="grid grid-cols-[auto,_1fr] gap-10">
          <div class="mt-[-120px]">
            <div class="relative">
              <img
                style="height: 280px"
                :src="anime.images.jpg.image_url"
                :alt="anime.title"
              />
            </div>
            <div class="mt-3">
              <p class="text-xl">Status</p>
              <p>{{ anime.status }}</p>
            </div>
            <div class="mt-3" v-if="anime?.score">
              <p class="text-xl">Score</p>
              <p>{{ anime.score }} / 10</p>
            </div>
            <div class="mt-3" v-if="anime?.rank">
              <p class="text-xl">Rank</p>
              <p>{{ anime.rank }}</p>
            </div>
            <div class="mt-3">
              <p class="text-xl">Raiting MPAA</p>
              <p>{{ anime.rating }}</p>
            </div>
            <div class="mt-3">
              <p class="text-xl">Episodes</p>
              <p>{{ anime.episodes }}</p>
            </div>
            <div class="mt-3">
              <p class="text-xl">Duration</p>
              <p>{{ anime.duration }}</p>
            </div>
            <div class="mt-3" v-if="anime?.year">
              <p class="text-xl">Year</p>
              <p>{{ anime.year }}</p>
            </div>
            <div class="mt-3">
              <p class="text-xl">Popularity</p>
              <p>{{ anime.popularity }}</p>
            </div>
            <div class="mt-3">
              <p class="text-xl">Favorites</p>
              <p>{{ anime.favorites }}</p>
            </div>
          </div>
          <div>
            <p class="text-5xl text-center">
              {{ anime.title }}
            </p>
            <p class="mt-5" v-if="getAnimeDescription">
              {{ getAnimeDescription }}
            </p>
            <div class="mt-5">
              <iframe
                class="mx-auto"
                autoplay="false"
                width="800"
                height="400"
                :src="anime.trailer.embed_url"
                frameborder="0"
                allowfullscreen
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    window.onpopstate = function (e) {
      console.log(e.state);
    };
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
