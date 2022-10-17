<template>
  <div class="container mx-auto lg:px-20 px-5 mb-10">
    <div v-if="upcomingAnimeList">
      <router-link to="/upcoming" class="flex justify-between">
        <h3 class="text-xl">UPCOMING ANIME</h3>
        <p>View All</p>
      </router-link>
      <div
        class="mt-5 mb-10 grid 2xl:grid-cols-6 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 justify-center gap-8 self-start"
      >
        <anime-item
          v-for="anime in upcomingAnimeList"
          :key="anime.mal_id"
          :anime="anime"
        />
      </div>
    </div>
    <div v-if="favoriteAnimeList">
      <router-link to="/favorite" class="flex justify-between">
        <h3 class="text-xl">FAVORITE ANIME</h3>
        <p>View All</p>
      </router-link>
      <div
        class="mt-5 mb-10 grid 2xl:grid-cols-6 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 justify-center gap-8 self-start"
      >
        <anime-item
          v-for="anime in favoriteAnimeList"
          :key="anime.mal_id"
          :anime="anime"
        />
      </div>
    </div>
  </div>
</template>
<script>
import AnimeItem from "./AnimeItem.vue";
import { getAnimeList } from "@/components/api";
export default {
  components: {
    AnimeItem,
  },
  created() {
    this.getUpcomingAnimeList();
    this.getFavoriteAnimeList();
  },
  data() {
    return {
      upcomingAnimeList: null,
      favoriteAnimeList: null,
    };
  },
  methods: {
    getUpcomingAnimeList() {
      let getResponce = getAnimeList(
        "https://api.jikan.moe/v4/top/anime?filter=upcoming&limit=12"
      );
      getResponce.then((data) => {
        if (!data) {
          this.getUpcomingAnimeList();
          return;
        } else {
          this.upcomingAnimeList = data;
        }
      });
    },
    getFavoriteAnimeList() {
      let getResponce = getAnimeList(
        "https://api.jikan.moe/v4/top/anime?filter=favorite&limit=12"
      );
      getResponce.then((data) => {
        if (!data) {
          this.getUpcomingAnimeList();
          return;
        } else {
          this.favoriteAnimeList = data;
        }
      });
    },
  },
};
</script>
