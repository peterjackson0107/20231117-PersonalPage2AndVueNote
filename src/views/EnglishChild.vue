<script>
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";

export default {
  data() {},
  methods: {
    ...mapActions(counter, ["getLocation", "setLocation"]),

    goOutherWay2() {
      this.$router.push("/KoreaChild");
    },
    goOutherWay3() {
      this.$router.push("/ChineseChild");
    },
    goOutherWay4() {
      this.$router.push("/");
    },
  },
  mounted() {
    this.setLocation(18);
    console.log(this.getLocation);
    setTimeout(() => {
      $(".loader").hide();
    }, 8000);
  },
};
</script>

<template>
  <div class="loader">
    <div class="loadingio-spinner-rolling-3hvvs6i9c3b">
      <div class="ldio-b9el9z8mymt">
        <div></div>
      </div>
    </div>
  </div>

  <div class="dropdownArea">
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle dropdownButton1"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i class="fa-solid fa-globe" style="margin-right: 5px"></i>English
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" @click="goOutherWay2()">한국어</a></li>
        <li><a class="dropdown-item" @click="goOutherWay3()">中文</a></li>
        <li><a class="dropdown-item" @click="goOutherWay4()">日本語</a></li>
      </ul>
    </div>
  </div>

  <div class="firstArea">
    <div
      id="carouselExampleControls"
      class="carousel slide carouselPicture"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../components/pictures/shizukuHinomoriProjectSekai1.jpg"
            class="d-block w-100"
            alt=""
          />
        </div>
        <div class="carousel-item">
          <img
            src="../components/pictures/akali.jpg"
            class="d-block w-100"
            alt=""
          />
        </div>
        <div class="carousel-item">
          <img
            src="../components/pictures/azurLane.jpg"
            class="d-block w-100"
            alt=""
          />
        </div>
        <div class="carousel-item">
          <img
            src="../components/pictures/2023041201.jpg"
            class="d-block w-100"
            alt=""
          />
        </div>
        <div class="carousel-item">
          <img
            src="../components/pictures/2023083001.jpg"
            class="d-block w-100"
            alt=""
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carouselIcon" aria-hidden="true"
          ><i class="fa-solid fa-circle-arrow-left" style="font-size: 50px"></i
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carouselIcon" aria-hidden="true"
          ><i class="fa-solid fa-circle-arrow-right" style="font-size: 50px"></i
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div class="secondArea">
    <h1 style="padding: 1.25vw 0">Game</h1>
    <div class="cardArea">
      <div class="card" style="width: 25vw">
        <a
          href="#"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#loginModal1"
          ><img
            src="https://patchwiki.biligame.com/images/blhx/4/46/na56z6zilj0g5bnjx28pmawudt470lg.gif"
            alt=""
            style="width: 25vw; height: 300px"
        /></a>
        <div class="modal fade" id="loginModal1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <img
                src="https://patchwiki.biligame.com/images/blhx/4/46/na56z6zilj0g5bnjx28pmawudt470lg.gif"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">AZUR LANE</h5>
          <p class="card-text" style="text-align: left">
            Shinano：This is an armored aircraft carrier belonging to the Sakura
            Empire, modified from the hull of the Yamato-class battleship. She
            speaks in an old-fashioned manner and carries a fragile atmosphere,
            yet she is considerate of her comrades and has a gentle personality.
            Always appearing sleepy, she somehow became a member(?) of the
            Sakura Empire's nap club.
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item cardBody1">Shinano</li>
          <li class="list-group-item">UID：<b>マドラス-21446009</b></li>
        </ul>
        <div class="card-body">
          <a
            href="https://www.azurlane.jp/"
            class="card-link"
            style="text-decoration: none"
            >Homepage</a
          >
        </div>
      </div>
      <div class="card" style="width: 25vw">
        <a
          href="#"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#loginModal2"
          ><img
            src="../components/pictures/shizukuHinomoriProjectSekai.gif"
            alt=""
            style="width: 25vw; height: 300px"
        /></a>
        <div class="modal fade" id="loginModal2">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <img
                src="../components/pictures/shizukuHinomoriProjectSekai.gif"
                alt=""
                style="width: 50vw; height: 600px; margin: -150px"
              />
            </div>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">
            Project Sekai: Colorful Stage feat. Hatsune Miku
          </h5>
          <p class="card-text" style="text-align: left">
            Hinomori Shizuku：The former center of the still-popular idol group
            'Cheerful＊Days.' She had some lingering resentment due to a falling
            out with former members, leading to her departure. However, through
            a chance collaboration on MORE MORE JUMP!'s first TV appearance,
            they reconciled a bit and are now moving forward with a positive
            outlook.
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item cardBody1">Hinomori Shizuku</li>
          <li class="list-group-item">UID：<b>6696606497812491</b></li>
        </ul>
        <div class="card-body">
          <a
            href="https://pjsekai.sega.jp/index.html"
            class="card-link"
            style="text-decoration: none"
            >Homepage</a
          >
        </div>
      </div>
      <div class="card" style="width: 25vw">
        <a
          href="#"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#loginModal3"
          ><img
            src="../components/pictures/fakerPaisuo.gif"
            alt=""
            style="width: 25vw; height: 300px"
        /></a>
        <div class="modal fade" id="loginModal3">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <img
                src="../components/pictures/fakerPaisuo.gif"
                alt=""
                style="width: 50vw; height: 600px; margin: -180px"
              />
            </div>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">League of Legends</h5>
          <p class="card-text" style="text-align: left">
            Lee Sang-hyeok (Korean: 이상혁; born May 7, 1996), better known as
            Faker, is a South Korean professional League of Legends player for
            T1. He gained prominence after joining SK Telecom T1 (now T1) in
            2013, where he has since played as the team's mid laner. Often
            hailed as the "Michael Jordan of esports", Faker is widely regarded
            as the greatest League of Legends player in history. Throughout his
            career, he has secured a record of 10 League of Legends Champions
            Korea (LCK) titles, two Mid-Season Invitational (MSI) titles, and a
            record four World Championship titles.
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item cardBody1">Faker(이상혁)</li>
          <li class="list-group-item">UID：<b>Hinomori Shizuku</b></li>
        </ul>

        <div class="card-body">
          <a
            href="https://www.leagueoflegends.com/zh-tw/"
            class="card-link"
            style="text-decoration: none"
            >Homepage</a
          >
        </div>
      </div>
    </div>
  </div>

  <div class="thirdArea">
    <h1 style="padding: 1.25vw 0">Game Video</h1>
    <div class="cardArea">
      <div class="card" style="width: 560px">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8SXlb5fozjU?si=_z7OhtlMyHzVKQkh"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div class="card-body cardBody2">
          <p class="card-text">AZUR LANE</p>
        </div>
      </div>
      <div class="card" style="width: 560px">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bZXTeMDtUa8?si=CveR75JVlLxviVbY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div class="card-body cardBody2">
          <p class="card-text">
            Project Sekai: Colorful Stage feat. Hatsune Miku
          </p>
        </div>
      </div>
      <div class="card" style="width: 560px">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hdGqDodCS3s?si=hs0U9mrA_WPLB4Sz&amp;start=382"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div class="card-body cardBody2">
          <p class="card-text">League of Legends</p>
        </div>
      </div>
    </div>
  </div>

  <div class="fourthArea">
    <h1 style="padding: 1.25vw 0">About Me</h1>
    <div class="containerArea">
      <section class="container">
        <div id="card">
          <figure class="front">
            <img
              src="../components/pictures/school.jpg"
              alt=""
              style="width: 560px; height: 315px"
            />
            <div class="card-body">
              <p
                class="card-text"
                style="height: 56px; font-size: 24px; margin-top: 8px"
              >
                Education
              </p>
            </div>
          </figure>
          <figure class="back">
            <table style="border: solid 2px rgb(208, 162, 247)">
              <tr>
                <th>Year</th>
                <th>Month</th>
                <th>Education</th>
              </tr>
              <tr>
                <td>2013</td>
                <td>09</td>
                <td>
                  Study：Applied Mathematics at Feng Chia University, Taiwan
                </td>
              </tr>
              <tr>
                <td>2017</td>
                <td>06</td>
                <td>
                  Graduated：Applied Mathematics at Feng Chia University, Taiwan
                </td>
              </tr>
              <tr>
                <td>2017</td>
                <td>09</td>
                <td>
                  Study：Master Applied Mathematics at Feng Chia University
                  Graduate School, Taiwan
                </td>
              </tr>
              <tr>
                <td colspan="3">Study：Financial Engineering</td>
              </tr>
              <tr>
                <td>2020</td>
                <td>01</td>
                <td>
                  Graduated：Master Applied Mathematics at Feng Chia University
                  Graduate School, Taiwan
                </td>
              </tr>
            </table>
          </figure>
        </div>
      </section>
      <section class="container">
        <div id="card">
          <figure class="front">
            <img
              src="../components/pictures/2023041202.jpg"
              alt=""
              style="width: 560px; height: 315px"
            />
            <div class="card-body">
              <p
                class="card-text"
                style="height: 56px; font-size: 24px; margin-top: 8px"
              >
                Motivation for Coming to Japan
              </p>
            </div>
          </figure>
          <figure class="back">
            <table style="border: solid 2px rgb(208, 162, 247)">
              <tr>
                <th>Motivation for Coming to Japan</th>
              </tr>
              <tr>
                <td>
                  I graduated from both undergraduate and graduate school with a
                  major in Applied Mathematics and have experience in
                  programming languages, enabling me to quickly adapt to new
                  programming concepts. In my previous professional experience,
                  I utilized Excel for data analysis. This year, upon hearing
                  about IT engineer job opportunities in Japan, I started
                  participating in a training program in Taiwan in October 2023,
                  focusing on learning programming languages such as JAVA and
                  JS.I have always had a fondness for affairs related to Japan
                  and began learning Japanese in June of last year. I believe I
                  can engage in simple conversations in Japanese and English
                  when chatting with others. I visited Japan three times this
                  year. During my travels in Japan, a friend there introduced me
                  to their Japanese friends. Despite our first meeting, they
                  warmly welcomed and treated me hospitably, making me feel that
                  Japanese people are even more friendly than Taiwanese. As a
                  result, I have a strong desire to work and live in Japan.
                </td>
              </tr>
            </table>
          </figure>
        </div>
      </section>
      <section class="container">
        <div id="card">
          <figure class="front">
            <img
              src="../components/pictures/head.jpg"
              alt=""
              style="width: 560px; height: 315px"
            />
            <div class="card-body">
              <p
                class="card-text"
                style="height: 56px; font-size: 24px; margin-top: 8px"
              >
                Introduction
              </p>
            </div>
          </figure>
          <figure class="back">
            <table style="border: solid 2px rgb(208, 162, 247)">
              <tr>
                <th>Name</th>
                <th>Wei-Heng,Wang</th>
              </tr>
              <tr>
                <th>Birthday</th>
                <th>1995/01/07</th>
              </tr>
              <tr>
                <th>Born</th>
                <th>Taipei,Taiwan</th>
              </tr>
            </table>
          </figure>
        </div>
      </section>
    </div>
  </div>

  <div class="fifthArea">
    <h1 style="padding: 1.25vw 0">My Favorite</h1>
    <div class="cardArea">
      <div class="card" style="width: 25vw">
        <a
          href="#"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#loginModal44"
          ><img
            src="../components/pictures/calliLaugh.jpg"
            alt=""
            style="width: 25vw; height: 300px"
        /></a>
        <div class="modal fade" id="loginModal44">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/9-J5FmQhugs?si=VcqjSzu4UJ5ELY5c"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">Mori Calliope</h5>
          <p class="card-text" style="text-align: left">
            A VTuber and rapper affiliated with the agency Hololive Production.
            Belongs to the initial group 'Myth (神話)' of the Hololive English
            division, primarily active in the English-speaking community of
            Hololive.
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item cardBody3">Mori Calliope</li>
        </ul>
        <div class="card-body">
          <a href="https://www.youtube.com/@MoriCalliope" class="card-link"
            >YouTube</a
          >
        </div>
      </div>
      <div class="card" style="width: 25vw">
        <a
          href="#"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#loginModal55"
          ><img
            src="../components/pictures/2023083002.jpg"
            alt=""
            style="width: 25vw; height: 300px"
        /></a>
        <div class="modal fade" id="loginModal55">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <img
                src="../components/pictures/2.png"
                alt=""
                style="margin: -180px"
              />
            </div>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">mentori(イモウト)</h5>
          <p class="card-text" style="text-align: left">
            The Attack of Men-Tori's Sister - The younger sister of Men-Tori who
            co-starred. She has a cute appearance with hard-boiled lines,
            creating an easy-to-use stamp for both men and women.
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item cardBody3">mentori(イモウト)</li>
        </ul>
        <div class="card-body">
          <a href="https://twitter.com/mendo_tori/media" class="card-link"
            >Homepage</a
          >
        </div>
      </div>
    </div>
  </div>

  <footer>
    <div class="footerTop">
      <div class="footerBox">
        <a href="">Reference</a>
        <a href="https://bootstrap5.hexschool.com/">Bootstrap</a>
        <a href="https://fontawesome.com/">Font Awesome</a>
        <a href="https://colorhunt.co/">Color Hunt</a>
      </div>
      <div class="footerBox">
        <a href="">SNS</a>
        <a href="https://www.youtube.com/channel/UCQEMS6jVDx-8SrfSE2u01Ng"
          >youtube</a
        >
        <a href="https://twitter.com/snsd_area1209">X (旧Twitter)</a>
        <a href="https://www.facebook.com/profile.php?id=100002371273180"
          >facebook</a
        >
        <a href="https://www.instagram.com/kurosawasyousyou/">instagram</a>
      </div>
      <div class="footerBox">
        <a href="">Games Data</a>
        <a href="https://www.azurlane.jp/">アズールレーン</a>
        <a href="https://pjsekai.sega.jp/">プロセカ</a>
        <a href="https://www.leagueoflegends.com/zh-tw/">LOL</a>
        <a href="https://www.youtube.com/@MoriCalliope">森 カリオペ</a>
        <a href="https://twitter.com/mendo_tori/media">イモウト</a>
      </div>
      <div class="footerBox">
        <a href="">Name：王暐衡</a>
        <a href="">Group：四</a>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.loader {
  background: linear-gradient(90deg, #b3fffd 0, #e3e6ff 50%, #fde5f5 100%);
  background-size: 200% 200%;
  background-color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  background-image: url("../components/pictures/bug.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 65vw 70vh;
  top: 0;
  left: 0;
  pointer-events: none;
  animation: bgGrade 10s ease infinite;
}
.ldio-b9el9z8mymt div {
  position: absolute;
  width: 120px;
  height: 120px;
  border: 20px solid #d85be1;
  border-top-color: transparent;
  border-radius: 50%;
  opacity: 0.05;
}
.ldio-b9el9z8mymt div {
  animation: ldio-b9el9z8mymt 1s linear infinite;
  top: 100px;
  left: 100px;
}
.loadingio-spinner-rolling-3hvvs6i9c3b {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
}
.ldio-b9el9z8mymt {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
}
.ldio-b9el9z8mymt div {
  box-sizing: content-box;
}
@keyframes ldio-b9el9z8mymt {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
.dropdownArea {
  height: 50px;
  .dropdown {
    position: absolute;
    width: 100px;
    top: 5px;
    right: 5px;
    .dropdownButton1 {
      width: 100px;
      height: 40px;
      font-size: 14px;
      list-style: none;
      float: left;
      i {
        margin-left: 5px;
      }
      li {
        font-size: 14px;
        color: #557;
        list-style: none;
        float: left;
        line-height: 10px;
      }
    }
  }
}
.firstArea {
  .carouselPicture {
    img {
      max-width: 80%;
      min-width: 90vh;
      height: 850px;
      margin: 0 auto;
    }
    .carouselIcon {
      color: rgb(208, 162, 247);
    }
  }
}
.secondArea {
  margin: 0 auto;
  h1 {
    font-size: 3vw;
    color: #557;
    text-align: center;
    transition: 0.6s;
    &:hover {
      transform: scale(1.2, 1.2);
    }
  }
  .cardArea {
    display: flex;
    justify-content: space-evenly;
    margin: 20px;
    .cardBody1 {
      background: linear-gradient(
        135deg,
        #59ae6a,
        #48ae96,
        #60d9ec,
        #65a5d5,
        #9491e0,
        #c382a4
      );
      position: relative;
      overflow: hidden;
    }
    .cardBody1::before {
      content: "";
      position: absolute;
      width: 50px;
      height: calc(200% * 1.4142 + 20px);
      top: calc(-100% * 1.4142 - 20px);
      left: calc(-10px * 1.4142);
      background-color: rgba(255, 255, 255, 0.3);
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
      -webkit-animation: blink 5s linear infinite;
      -o-animation: blink 5s linear infinite;
      animation: blink 5s linear infinite;
    }
    @keyframes blink {
      0% {
        top: calc(-100% * 1.4142);
        left: calc(-30px * 1.4142);
      }
      to {
        top: calc(-20px * 1.4142);
        left: calc(100% + 10px * 1.4142);
      }
    }
  }
}
.thirdArea {
  margin: 0 auto;
  h1 {
    font-size: 3vw;
    color: #557;
    transition: 0.6s;
    &:hover {
      transform: scale(1.2, 1.2);
    }
  }
  .cardBody2 {
    background: linear-gradient(
      135deg,
      #59ae6a,
      #48ae96,
      #60d9ec,
      #65a5d5,
      #9491e0,
      #c382a4
    );
    position: relative;
    overflow: hidden;
  }
  .cardBody2::before {
    content: "";
    position: absolute;
    width: 50px;
    height: calc(200% * 1.4142 + 20px);
    top: calc(-100% * 1.4142 - 20px);
    left: calc(-10px * 1.4142);
    background-color: rgba(255, 255, 255, 0.3);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-animation: blink 5s linear infinite;
    -o-animation: blink 5s linear infinite;
    animation: blink 5s linear infinite;
  }
  @keyframes blink {
    0% {
      top: calc(-100% * 1.4142);
      left: calc(-30px * 1.4142);
    }
    to {
      top: calc(-20px * 1.4142);
      left: calc(100% + 10px * 1.4142);
    }
  }
  body {
    margin: 2rem;
  }
  .cardArea {
    display: flex;
    justify-content: space-evenly;
    margin: 20px;
    z-index: 1;
  }
}
.fourthArea {
  h1 {
    font-size: 3vw;
    color: #557;
    transition: 0.6s;
    &:hover {
      transform: scale(1.2, 1.2);
    }
  }
  .containerArea {
    display: flex;
    margin: 0 auto;
    .container {
      width: 560px;
      height: 371px;
      position: relative;
      perspective: 800px;
    }
    #card {
      width: 100%;
      height: 100%;
      position: absolute;
      transform-style: preserve-3d;
      transition: transform 1s;
    }
    #card figure {
      margin: 0;
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
    }
    #card .front {
      margin: 0;
      background: rgb(208, 162, 247);
      border-radius: 0.375rem;
    }
    #card .back {
      margin: 0;
      background: rgb(208, 162, 247);
      border-radius: 0.375rem;
      transform: rotateY(180deg);
    }
    #card:hover {
      transform: rotateY(180deg);
    }
    .back {
      table {
        width: 520px;
        height: 200px;
        margin: 10px auto;
      }
      td,
      th {
        color: #557;
        border: solid 2px rgb(69, 25, 82);
        font-size: 14px;
      }
    }
  }
}
.fifthArea {
  margin: 0 auto;
  h1 {
    font-size: 3vw;
    color: #557;
    text-align: center;
    transition: 0.6s;
    &:hover {
      transform: scale(1.2, 1.2);
    }
  }
  .cardArea {
    display: flex;
    justify-content: space-evenly;
    margin: 20px;
    .cardBody3 {
      background: linear-gradient(
        135deg,
        #59ae6a,
        #48ae96,
        #60d9ec,
        #65a5d5,
        #9491e0,
        #c382a4
      );
      position: relative;
      overflow: hidden;
    }
    .cardBody3::before {
      content: "";
      position: absolute;
      width: 50px;
      height: calc(200% * 1.4142 + 20px);
      top: calc(-100% * 1.4142 - 20px);
      left: calc(-10px * 1.4142);
      background-color: rgba(255, 255, 255, 0.3);
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
      -webkit-animation: blink 5s linear infinite;
      -o-animation: blink 5s linear infinite;
      animation: blink 5s linear infinite;
    }
    @keyframes blink {
      0% {
        top: calc(-100% * 1.4142);
        left: calc(-30px * 1.4142);
      }
      to {
        top: calc(-20px * 1.4142);
        left: calc(100% + 10px * 1.4142);
      }
    }
  }
}
footer {
  background-color: rgba(68, 68, 102, 0.7);
  .footerTop {
    width: 90vw;
    height: 20vh;
    display: flex;
    justify-content: space-around;
    margin-top: 100px;
  }
  .footBox {
    width: 20%;
  }
  a {
    display: block;
    color: rgb(0, 0, 0);
    text-decoration: none;
  }
}
</style>
