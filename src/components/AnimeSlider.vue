<template>
  <swiper
    :loop="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :modules="modules"
    class="text-white"
    :slides-per-view="1"
  >
    <swiper-slide
      v-for="slide in slides"
      :key="slide.id"
      class="min-h-screen flex items-center"
      :style="{ backgroundImage: `url('${slide.img}')` }"
    >
      <div
        class="container items-center mx-auto gap-5 grid grid-cols-2 relative z-10"
      >
        <div>
          <h3>{{ slide.type }}</h3>
          <h2>{{ slide.title }}</h2>
          <div>
            <span>{{ slide.airing }}</span>
            <span>{{ slide.top }}</span>
          </div>
          <p>{{ slide.desc }}</p>
          <ul>
            <li>Эпизоды: {{ slide.episodes }}</li>
            <li>Выпуск: {{ slide.year }}</li>
            <li>
              Жанры:
              <span
                class="mr-1"
                v-for="(genre, idx) in slide.genres"
                :key="idx"
                >{{ genre }}</span
              >
            </li>
          </ul>
          <button>Смотреть</button>
        </div>
        <div>
          <img src="images/player.jpg" alt="" />
        </div>
      </div>
      <div class="overflow"></div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slides: [
        {
          type: "ТВ СЕРИАЛ",
          title: "Человек-Бензопила",
          id: 1,
          airing: "Онгоинг",
          top: "7 место в топ 100",
          desc: "Тысячелетняя Кровавая Война начинается, когда мир внезапно нарушается, когда предупреждающие трубы разносятся по Сообществу душ. Жильцы быстро бесследно исчезают вместе с пустотами в Уэко Мундо, и причина этого неизвестна.",
          episodes: 1,
          year: 2022,
          genres: ["Приключения", "Сёнен", "Экшен"],
          img: require("../../public/images/slide-1.jpg"),
        },
        {
          type: "ТВ СЕРИАЛ",
          title: "Человек-Бензопила",
          id: 2,
          airing: "Онгоинг",
          top: "7 место в топ 100",
          desc: "Тысячелетняя Кровавая Война начинается, когда мир внезапно нарушается, когда предупреждающие трубы разносятся по Сообществу душ. Жильцы быстро бесследно исчезают вместе с пустотами в Уэко Мундо, и причина этого неизвестна.",
          episodes: 2,
          year: 228,
          genres: ["Приключения", "Сёнен", "Экшен"],
          img: require("../../public/images/slide-2.jpg"),
        },
        {
          type: "ТВ СЕРИАЛ",
          title: "Человек-Бензопила",
          id: 3,
          airing: "Онгоинг",
          top: "7 место в топ 100",
          desc: "Тысячелетняя Кровавая Война начинается, когда мир внезапно нарушается, когда предупреждающие трубы разносятся по Сообществу душ. Жильцы быстро бесследно исчезают вместе с пустотами в Уэко Мундо, и причина этого неизвестна.",
          episodes: 3,
          year: 4,
          genres: ["Приключения", "Сёнен", "Экшен"],
          img: require("../../public/images/slide-3.jpg"),
        },
      ],
      modules: [Autoplay],
    };
  },
};
</script>
<style lang="scss" scoped>
.overflow {
  position: absolute;
  width: 100%;
  height: 100%;
  content: "";
  background: linear-gradient(
    180deg,
    rgba(6, 13, 34, 0) 0,
    rgba(6, 13, 34, 0.8)
  );
}
</style>
