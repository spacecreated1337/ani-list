<template>
  <div v-if="anime">
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
      <div class="container mx-auto lg:px-20 px-5 mb-10">
        <div class="grid xl:grid-cols-[auto,_1fr] gap-10">
          <div class="xl:mt-[-120px] order-1">
            <div class="relative xl:block hidden">
              <img
                style="height: 280px"
                :src="anime.images.jpg.image_url"
                :alt="anime.title"
              />
            </div>
            <div
              class="xl:block grid lg:grid-cols-3 text-center xl:text-left sm:grid-cols-2 smm:grid-cols-1"
            >
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
                <p>{{ anime?.episodes }}</p>
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
          </div>
          <div class="xl:order-2">
            <p class="md:text-5xl text-3xl text-center">
              {{ anime.title }}
            </p>
            <p class="mt-5 text-center xl:text-left" v-if="getAnimeDescription">
              {{ getAnimeDescription }}
            </p>
            <div class="mt-5 xl:h-[500px] h-[400px]">
              <iframe
                class="mx-auto w-full h-full"
                autoplay="false"
                :src="anime.trailer.embed_url"
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
