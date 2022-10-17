<template>
  <section class="mb-12 mt-32">
    <div class="container mx-auto lg:px-20 px-5 mb-10">
      <h2 class="text-3xl">{{ this.$route.params.top.toUpperCase() }} ANIME</h2>
      <div class="mt-12">
        <div>
          <div
            class="mt-5 mb-10 grid 2xl:grid-cols-6 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 justify-center gap-8 self-start"
          >
            <anime-item
              v-for="anime in animeList"
              :key="anime.mal_id"
              :anime="anime"
            />
          </div>
          <div
            v-show="animeList.length > 0"
            ref="observeSearchAnime"
            class="observer"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { getTopAnimeList } from "@/components/api";
import AnimeItem from "@/components/AnimeItem.vue";
export default {
  name: "TopAnimePageView",
  components: {
    AnimeItem,
  },
  created() {
    this.loadAnime();
  },
  data() {
    return {
      animeList: [],
      searchAnimePage: 1,
    };
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
  methods: {
    loadAnime() {
      let getTopAnime = getTopAnimeList(
        this.$route.params.top,
        this.searchAnimePage
      );
      getTopAnime.then((data) => {
        if (!data) {
          this.loadAnime();
          return;
        } else {
          this.animeList = data.data;
        }
      });
    },
    loadMoreSearchAnime() {
      this.searchAnimePage++;
      let getTopAnime = getTopAnimeList(
        this.$route.params.top,
        this.searchAnimePage
      );
      getTopAnime.then((data) => {
        this.animeList = [...this.animeList, ...data.data];
      });
    },
  },
};
</script>
