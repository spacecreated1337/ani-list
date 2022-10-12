<template>
  <section class="footer-bg px-14 py-10">
    <div class="container mx-auto px-24">
      <div class="grid grid-cols-[auto,800px] text-[#a0b1c5]">
        <div>
          <h2 class="text-[#3db4f2]">Site Theme</h2>
          <div class="flex mr-3">
            <div class="theme-icon-default flex items-center justify-center">
              A
            </div>
            <div class="theme-icon-dark flex items-center justify-center">
              A
            </div>
          </div>
        </div>
        <div class="flex justify-between links-pd list-mg">
          <div>
            <ul>
              <li>
                <a href="">Donate</a>
              </li>
              <li>
                <a href="">AniList.co</a>
              </li>
              <li>
                <a href="">AniChart.net</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="">Apps</a>
              </li>
              <li>
                <a href="">Site Stats</a>
              </li>
              <li>
                <a href="">Recommendations</a>
              </li>
              <li>
                <a href="">API</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="">Discord</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">GitHub</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="">Add Data</a>
              </li>
              <li>
                <a href="">Moderators</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Terms & Privacy </a>
              </li>
              <li>
                <a href="">Site Map</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.links-pd {
  a {
    padding: 10px;
    transition: 0.5s;
    &:hover {
      color: rgb(61, 180, 242);
      transition: 0.5s;
    }
  }
}
.list-mg {
  li {
    margin-bottom: 15px;
  }
}
.theme-icon-default {
  border-radius: 3px;
  border: 2px solid #46546b;
  cursor: pointer;
  font-weight: 500;
  height: 25px;
  margin-right: 10px;
  width: 25px;
  background: #fff;
  color: #000;
}
.theme-icon-dark {
  border-radius: 3px;
  border: 2px solid #46546b;
  cursor: pointer;
  font-weight: 500;
  height: 25px;
  margin-right: 10px;
  width: 25px;
}
</style>
