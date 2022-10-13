<template>
  <section class="mb-12 mt-32">
    <loading-bar
      :barWidth="barWidth"
      :isVisibleLoadingBar="isVisibleLoadingBar"
    />
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
import LoadingBar from "@/components/UI/LoadingBar.vue";
import { getAnimeList } from "@/components/api";
export default {
  props: {
    genreId: {
      type: Number,
      required: false,
    },
  },
  components: {
    AnimeFilter,
    AnimeItem,
    LoadingBar,
  },
  created() {
    // const windowData = Object.fromEntries([
    //   ...new URL(window.location).searchParams.entries(),
    // ]);
    // if (windowData.filter) {
    //   this.filter = windowData.filter;
    // }
    // if (windowData.genreid) {
    //   this.selectGenreId = windowData.genreid;
    // }
    // if (windowData.selectedSortBy) {
    //   this.selectedSortBy = windowData.selectedSortBy;
    // }
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
      barWidth: 0,
      isVisibleLoadingBar: false,
      searchAnimeList: [],
      selectGenreId: "",
      selectedSortBy: "",
      notFound: false,
      searchAnimePage: 1,
      lastScrollTop: 0,
    };
  },
  computed: {
    pageStateOptions() {
      return {
        filter: this.filter,
        selectGenreId: this.selectGenreId,
        selectedSortBy: this.selectedSortBy,
      };
    },
  },
  methods: {
    loadAnimeGenres() {
      let getResponce = getAnimeList("https://api.jikan.moe/v4/genres/anime");
      getResponce.then((data) => {
        if (!data) {
          loadAnimeGenres();
        } else {
          this.animeGenres = data;
        }
      });
    },
    loadAnime() {
      let getTopAnime = getAnimeList(
        `https://api.jikan.moe/v4/anime?q=${this.filter}&genres=${this.selectGenreId}&order_by=${this.selectedSortBy}&sort=desc`
      );
      getTopAnime
        .then((data) => {
          this.isVisibleLoadingBar = true;
          for (let i = 0; i < 100; i++) {
            if (this.barWidth !== 100) {
              this.barWidth += 1;
            }
          }
          if (!data) {
            this.loadAnime();
            return;
          } else {
            this.searchAnimeList = data;
          }
        })
        .finally(() => {
          setTimeout(() => {
            this.isVisibleLoadingBar = false;
          }, 300);
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
      getTopAnime
        .then((data) => {
          this.isVisibleLoadingBar = true;
          for (let i = 0; i < 100; i++) {
            if (this.barWidth !== 100) {
              this.barWidth += 1;
            }
          }
          this.searchAnimeList = [...this.searchAnimeList, ...data];
        })
        .finally(() => {
          setTimeout(() => {
            this.isVisibleLoadingBar = false;
          }, 300);
        });
    },

    findAnime() {
      this.searchAnimePage = 1;
      let getTopAnime = getAnimeList(
        `https://api.jikan.moe/v4/anime?q=${this.filter}&genres=${this.selectGenreId}&order_by=${this.selectedSortBy}&sort=desc`
      );
      getTopAnime
        .then((data) => {
          this.isVisibleLoadingBar = true;
          for (let i = 0; i < 100; i++) {
            if (this.barWidth == 100) {
              break;
            }
            this.barWidth += 1;
          }
          this.searchAnimeList = data;
          if (this.searchAnimeList.length === 0) {
            this.notFound = true;
          }
        })
        .finally(() => {
          setTimeout(() => {
            this.isVisibleLoadingBar = false;
          }, 300);
        });
    },
  },
  watch: {
    pageStateOptions(value) {
      history.pushState(
        history.state,
        document.title,
        `${window.location.pathname}?filter=${value.filter}&genreid=${value.selectGenreId}&selectedSortBy=${value.selectedSortBy}`
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.observer {
  width: 100%;
}
</style>
