<template>
  <div class="container mx-auto lg:px-20 px-5 mb-10" v-if="animeList">
    <router-link to="/search/bypopularity" class="flex justify-between">
      <h3 class="text-xl">TOP 100 ANIME</h3>
      <p>View All</p>
    </router-link>
    <ul class="mt-5 xl:block hidden">
      <li class="mb-5" v-for="anime in animeList" :key="anime.mal_id">
        <div class="grid grid-cols-[70px,_auto] items-center">
          <div class="text-center text-3xl">
            <span class="text-gray-400">#</span>
            <span class="text-gray-600">{{ anime.popularity }}</span>
          </div>
          <div
            class="grid grid-cols-[70px,_auto] bg-white items-center py-2 px-2 rounded"
          >
            <div>
              <router-link
                :to="`anime/${anime.mal_id}/${normalUrlTitle(anime.title)}`"
              >
                <img
                  class="max-h-[107px]"
                  :src="anime.images.jpg.image_url"
                  :alt="anime.title_english"
                />
              </router-link>
            </div>
            <div
              class="px-5 py-2 grid justify-between items-center grid-cols-[auto,_400px]"
            >
              <div>
                <div class="mb-3">
                  <router-link
                    :to="`anime/${anime.mal_id}/${normalUrlTitle(anime.title)}`"
                  >
                    <p>{{ anime.title_english }}</p>
                  </router-link>
                </div>
                <a
                  href=""
                  @click.prevent="selectedGenre(genres.mal_id)"
                  class="xl:mr-5 mr-2 py-1 px-3 rounded-full"
                  v-for="genres in anime.genres"
                  :key="genres.mal_id"
                  :class="`${getRandomColor(0, 8)}-100`"
                >
                  {{ genres.name }}
                </a>
              </div>
              <div class="grid grid-cols-3 items-center">
                <div class="text-center left">
                  <p class="text-gray-600">{{ anime.score }} / 10</p>
                  <p class="text-gray-600 text-sm">
                    {{ anime.scored_by }} users
                  </p>
                </div>
                <div class="text-center">
                  <p class="text-gray-600">{{ anime.type }}</p>
                  <p class="text-gray-600 text-sm">
                    {{ anime.episodes }} episodes
                  </p>
                </div>
                <div class="text-center">
                  <p class="text-gray-600">Release date {{ anime.year }}</p>
                  <p class="text-gray-600 text-sm">{{ anime.status }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div
      class="xl:hidden mb-10 mt-5 grid md:grid-cols-3 sm:grid-cols-2 justify-center gap-8 self-start"
    >
      <anime-item
        v-for="anime in animeList"
        :key="anime.mal_id"
        :anime="anime"
        :topNumber="anime.popularity"
        :color="getRandomColor(0, 8)"
      />
    </div>
  </div>
</template>
<script>
import AnimeItem from "@/components/AnimeItem.vue";
export default {
  components: {
    AnimeItem,
  },
  created() {
    this.getTopAnime();
  },
  data() {
    return {
      animeList: null,
      colors: [
        "red",
        "orange",
        "amber",
        "blue",
        "sky",
        "indigo",
        "violet",
        "pink",
        "rose",
      ],
    };
  },
  mounted() {
    this.getRandomColor(0, 8);
  },
  methods: {
    getTopAnime() {
      fetch(`https://api.jikan.moe/v4/top/anime?filter=bypopularity`)
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            this.getTopAnime();
            return;
          } else {
            this.animeList = data.data;
          }
        });
    },
    getRandomColor(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return this.colors[Math.floor(Math.random() * (max - min)) + min];
    },
    normalUrlTitle(animeTitle) {
      return animeTitle.replace(/[^A-Z0-9]+/gi, "-");
    },
    selectedGenre(genreId) {
      this.$router.push({
        name: "search",
        query: { selectGenreId: genreId },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.red-100 {
  background-color: rgb(254 226 226);
}
.orange-100 {
  background-color: rgb(255 237 213);
}
.amber-100 {
  background-color: rgb(254 243 199);
}
.blue-100 {
  background-color: rgb(219 234 254);
}
.indigo-100 {
  background-color: rgb(224 231 255);
}
.violet-100 {
  background-color: rgb(237 233 254);
}
.pink-100 {
  background-color: rgb(252 231 243);
}
.rose-100 {
  background-color: rgb(255 228 230);
}
.sky-100 {
  background-color: rgb(224 242 254);
}
</style>
