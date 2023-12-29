<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
export default {
  data() {
    return {
      imagePath: "https://static.tvtropes.org/pmwiki/pub/images/mori_calliope___full_illustration_mini_8.png",
      menuBtn: false,
    };
  },
  methods: {
    setupMouseTracking() {
      const img = this.$refs.mouseImage;
      this.handleMouseMove = (e) => {
        var x = e.pageX;
        var y = e.pageY;
        img.style.top = y + 10 + "px";
        img.style.left = x + 10 + "px";
      };
      window.addEventListener("mousemove", this.handleMouseMove);
    },
    removeMouseTracking() {
      window.removeEventListener("mousemove", this.handleMouseMove);
    },
    menu() {
      this.menuBtn = !this.menuBtn;
    },
  },
  mounted() {
    this.setupMouseTracking();
  },
  beforeDestroy() {
    this.removeMouseTracking();
  },
  components: {
    Header,
  },
};
let img = document.querySelector("img");
document.addEventListener("mousemove", function (e) {
  let x = e.pageX;
  let y = e.pageY;
  img.style.top = y - 50 + "px";
  img.style.left = x - 50 + "px";
});
</script>

<template>
  <div>
    <img :src="imagePath" alt="Mouse Image" class="mouse-image" ref="mouseImage" style="z-index: 9999999"/>

    <div class="snsBox">
      <span>しょうしょう</span>
      <a href="https://www.youtube.com/channel/UCQEMS6jVDx-8SrfSE2u01Ng"><i class="fa-brands fa-youtube" style="background-color: white; border-radius: 40%"></i></a>
      <a href="https://twitter.com/snsd_area1209"><i class="fa-brands fa-x-twitter" style="background-color: white; border-radius: 40%"></i></a>
      <a href="https://www.facebook.com/profile.php?id=100002371273180"><i class="fa-brands fa-facebook" style="background-color: white; border-radius: 40%"></i></a>
      <a href="https://www.instagram.com/kurosawasyousyou/"><i class="fa-brands fa-instagram" style="background-color: white; border-radius: 40%;"></i></a>
    </div>

    <div class="homeBtn">
      <a href="#"><img src="../src/components/pictures/moriCalliopePortrait.webp" alt="" style="width: 100px; height: 100px;"></a>
    </div>

    <button class="btn" type="button" @click="this.menu()">
      <i class="fa-solid fa-bars" style="font-size: 24px"></i>
    </button>

    <div class="homePage">
      <div class="header" :class="{ menuBg: menuBtn }">
        <Header />
      </div>
      
      <!-- 背景模糊，給一個div -->
      <div class="middle" :class="{ picArea: menuBtn }">
      </div>

      <div class="content" :class="{ menuArea: menuBtn }">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.homePage {
  display: flex;
  .header {
    width: 0vw;
    overflow: auto;
    height: 100vh;
    background-color: rgb(241, 234, 255);
  }
  .menuBg {
    position: fixed;
    z-index: 1001;
    overflow: auto;
    width: 35vh;
    opacity: 1;
  }
  .content {
    width: 100vw;
    height: 100%;
    text-align: center;
    background-color: rgb(229, 212, 255);
    }
  .menuArea {
    filter: blur(5px);
  }
  .picArea{ //Calli太嗨了吧
    width: 100vw;
    height: 400vw;
    z-index: 1000;
    background-color: rgba(68, 68, 102, .5);
    background-image: url("../src/components/pictures/moriCalliopeHololive\(4\).gif");
    position: absolute;
    // transition: .3s cubic-bezier(.2, .65, .36, 1);
  }
}
.mouse-image {
  width: 50px;
  height: 50px;
  position: absolute;
}
.btn {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 2000;
}
.snsBox{
    box-shadow: 0 0.3125vw 0.375vw 0.375vw rgba(68, 68, 102, .05);
    border-radius: 2vw 0 0 2vw;
    background: #fff;
    width: 2.5625vw;
    padding: 1.5625vw 0.75vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: fixed;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    z-index: 3;
    font-size: 25px;

      span{
        writing-mode: vertical-rl;
        font-family: 'M PLUS 1', sans-serif;
        font-weight: 900;
        font-size: 15px;
      }
        .fa-youtube{
            color: rgb(255, 0, 0);
        }
        .fa-x-twitter{
            color: rgb(0, 0, 0);
        }
        .fa-facebook{
            color: rgb(66, 103, 178);
        }
        .fa-instagram{
            color: rgb(193, 53, 132);
        }
    }
.homeBtn{
    box-shadow: 0 0.3125vw 0.375vw 0.375vw rgba(68, 68, 102, .05);
    border-radius: 0.3125vw 0 0 0.3125vw;
    // background-color: #000000;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: fixed;
    top: 75%;
    right: 0;
    // transform: translateY(-50%);
    z-index: 3;
}
</style>
