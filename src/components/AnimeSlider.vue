<template>
  <swiper
    :loop="true"
    :modules="modules"
    class="text-white"
    :slides-per-view="1"
    :autoplay="{
      delay: 5000,
    }"
  >
    <swiper-slide
      v-for="slide in slides"
      :key="slide.id"
      class="min-h-screen flex items-center bg-center bg-no-repeat bg-cover"
      :style="{ backgroundImage: `url('${slide.img}')` }"
    >
      <div
        class="sm:px-16 px-4 xl:px-0 container pb-20 xl:pb-0 items-center mx-auto gap-7 grid xl:grid-cols-2 grid-cols-1 relative z-10"
      >
        <div>
          <h3 class="text-2xl">{{ slide.type }}</h3>
          <h2 class="text-4xl mt-5">{{ slide.title }}</h2>
          <div class="mt-4">
            <span class="border-[1px] py-1 px-2 border-[white]">{{
              slide.airing
            }}</span>
            <span class="ml-8 dot relative">{{ slide.top }}</span>
          </div>
          <p class="leading-10 mt-5 text-lg">{{ slide.desc }}</p>
          <ul class="mt-8">
            <li class="text-xl sm:text-2xl text-[#2889e9] mb-5">
              Эпизоды: <span class="text-white">{{ slide.episodes }}</span>
            </li>
            <li class="text-xl sm:text-2xl text-[#2889e9] mb-5">
              Выпуск: <span class="text-white">{{ slide.year }}</span>
            </li>
            <li class="text-xl sm:text-2xl text-[#2889e9] mb-5">
              Жанры:
              <span
                class="mr-1 text-white"
                v-for="(genre, idx) in slide.genres"
                :key="idx"
                >{{ genre }}</span
              >
            </li>
          </ul>
          <button
            class="py-3 px-10 mt-5 bg-[aqua] rounded text-2xl slider-btn ease-in duration-300"
          >
            Смотреть
          </button>
        </div>
        <div
          class="order-first xl:pt-0 pt-28 xl:order-1 flex justify-center xl:justify-start"
        >
          <img class="w-full" src="images/player.jpg" alt="" />
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
.dot {
  &::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 4px;
    background: #ffffff;
    border-radius: 100%;
    transform: translate(-50%, -50%);
    top: 50%;
    left: -10%;
  }
}
</style>
