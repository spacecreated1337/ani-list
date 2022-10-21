<template>
  <section class="mb-12 mt-32">
    <div class="container mx-auto lg:px-20 px-5 mb-10">
      <h2 class="text-3xl text-center">Anime Search Engine</h2>
      <div class="mt-12">
        <anime-filter
          :animeGenres="animeGenres"
          :sortBy="sortBy"
          :selectedSortBy="selectedSortBy"
          v-model:filter="filter"
          v-model:selectGenreId="selectGenreId"
          v-model:selectedSortBy="selectedSortBy"
          @find-anime="findAnime"
          @selectedGenre="findAnime"
          @reset="reset"
        />
        <div>
          <h2 class="text-3xl">All anime</h2>
          <div
            class="mt-5 mb-10 grid 2xl:grid-cols-6 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 justify-center gap-8 self-start"
          >
            <anime-item
              v-for="anime in searchAnimeList"
              :key="anime.mal_id"
              :anime="anime"
            />
          </div>
          <div
            v-show="searchAnimeList.length > 0"
            ref="observeSearchAnime"
            class="observer"
          ></div>
        </div>
        <h2 v-if="notFound" class="text-3xl">Not Found...</h2>
      </div>
    </div>
  </section>
</template>

<script>
import AnimeFilter from "@/components/AnimeFilter.vue";
import AnimeItem from "@/components/AnimeItem.vue";
import { getAnimeList } from "@/components/api";
export default {
  name: "search",
  props: {
    genreId: {
      type: Number,
      required: false,
    },
  },
  components: {
    AnimeFilter,
    AnimeItem,
  },
  created() {
    const { filter, selectGenreId, selectedSortBy } = this.$route.query;

    if (filter) {
      this.filter = filter;
    }

    if (selectGenreId) {
      this.selectGenreId = selectGenreId;
    }

    if (selectedSortBy) {
      this.selectedSortBy = selectedSortBy;
    }

    this.loadAnime();
    this.loadAnimeGenres();
  },
  mounted() {
    const observeSearchList = () => {
      let options = {
        rootMargin: "0px",
        threshold: 1.0,
      };
      const callback = (entries) => {
        if (entries[0].isIntersecting) {
          this.loadMoreSearchAnime();
        }
      };
      let observer = new IntersectionObserver(callback, options);
      observer.observe(this.$refs.observeSearchAnime);
    };
    observeSearchList();
  },
  data() {
    return {
      filter: "",
      animeGenres: [],
      sortBy: ["Favorites", "Score"],
      searchAnimeList: [],
      selectGenreId: "",
      selectedSortBy: "",
      notFound: false,
      searchAnimePage: 1,
      lastScrollTop: 0,
    };
  },
  methods: {
    loadAnimeGenres() {
      let getResponce = getAnimeList("https://api.jikan.moe/v4/genres/anime");
      getResponce.then((data) => {
        this.animeGenres = data;
        this.$store.commit("runLoadingData");
        if (!data) {
          this.loadAnimeGenres();
        } else {
          this.$store.commit("stopLoadingData");
        }
      });
    },
    loadAnime() {
      let getTopAnime = getAnimeList(
        `https://api.jikan.moe/v4/anime?q=${this.filter}&genres=${this.selectGenreId}&order_by=${this.selectedSortBy}&sort=desc`
      );
      getTopAnime.then((data) => {
        this.searchAnimeList = data;
        if (!data) {
          this.loadAnime();
          this.$store.commit("runLoadingData");
        } else {
          this.$store.commit("stopLoadingData");
        }
      });
    },

    reset(input) {
      this[input] = "";
    },

    loadMoreSearchAnime() {
      this.searchAnimePage++;
      let getTopAnime = getAnimeList(
        `https://api.jikan.moe/v4/anime?q=${this.filter}&genres=${this.selectGenreId}&order_by=${this.selectedSortBy}&page=${this.searchAnimePage}&sort=desc`
      );
      getTopAnime.then((data) => {
        this.$store.commit("runLoadingData");
        this.searchAnimeList = [...this.searchAnimeList, ...data];
        this.$store.commit("stopLoadingData");
      });
    },

    findAnime() {
      this.searchAnimePage = 1;
      let getTopAnime = getAnimeList(
        `https://api.jikan.moe/v4/anime?q=${this.filter}&genres=${this.selectGenreId}&order_by=${this.selectedSortBy}&sort=desc`
      );
      getTopAnime.then((data) => {
        this.$store.commit("runLoadingData");
        this.searchAnimeList = data;
        if (this.searchAnimeList.length === 0) {
          this.notFound = true;
        }
        this.$store.commit("stopLoadingData");
      });
    },
  },
  watch: {
    filter(value) {
      this.$router.replace({
        query: Object.assign({}, this.$route.query, { filter: value }),
      });
    },
    selectGenreId(value) {
      this.$router.replace({
        query: Object.assign({}, this.$route.query, { selectGenreId: value }),
      });
    },
    selectedSortBy(value) {
      this.$router.replace({
        query: Object.assign({}, this.$route.query, { selectedSortBy: value }),
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.observer {
  width: 100%;
}
</style>
