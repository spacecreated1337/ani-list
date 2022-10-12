<template>
  <div class="container mx-auto px-20 mb-10">
    <div>
      <router-link to="/trending" class="flex justify-between">
        <h3 class="text-xl">UPCOMING ANIME</h3>
        <p>View All</p>
      </router-link>
      <div class="mt-5 mb-10 grid grid-cols-6 gap-8 self-start">
        <anime-item
          v-for="anime in upcomingAnimeList"
          :key="anime.mal_id"
          :anime="anime"
        />
      </div>
    </div>
    <div>
      <router-link to="/favorite" class="flex justify-between">
        <h3 class="text-xl">FAVORITE ANIME</h3>
        <p>View All</p>
      </router-link>
      <div class="mt-5 mb-10 grid grid-cols-6 gap-8 self-start">
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
    const getUpcomingAnimeList = () => {
      let getResponce = getAnimeList(
        "https://api.jikan.moe/v4/top/anime?filter=upcoming&limit=12"
      );
      getResponce.then((data) => {
        this.upcomingAnimeList = data;
        getFavoriteAnimeList();
      });
    };
    getUpcomingAnimeList();
    const getFavoriteAnimeList = () => {
      let getResponce = getAnimeList(
        "https://api.jikan.moe/v4/top/anime?filter=favorite&limit=12"
      );
      getResponce.then((data) => {
        this.favoriteAnimeList = data;
      });
    };
  },
  data() {
    return {
      upcomingAnimeList: [],
      favoriteAnimeList: [],
    };
  },
};
</script>
