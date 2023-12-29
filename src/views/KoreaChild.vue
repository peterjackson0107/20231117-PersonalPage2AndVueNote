<script>
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";

export default {
  data() {},
  methods: {
    ...mapActions(counter, ["getLocation", "setLocation"]),

    goOutherWay1() {
      this.$router.push("/EnglishChild");
    },
    goOutherWay3() {
      this.$router.push("/ChineseChild");
    },
    goOutherWay4() {
      this.$router.push("/");
    },
  },
  mounted() {
    this.setLocation(19);
    console.log(this.getLocation);
    setTimeout(() => {
      $(".loader").hide();
    }, 10000);
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
        <i class="fa-solid fa-globe" style="margin-right: 5px"></i>한국어
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" @click="goOutherWay3()">中文</a></li>
        <li><a class="dropdown-item" @click="goOutherWay1()">English</a></li>
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
    <h1 style="padding: 1.25vw 0">게임</h1>
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
          <h5 class="card-title">벽람항로</h5>
          <p class="card-text" style="text-align: left">
            시나노：야마토급 전함의 함체에서 개조된, 중흥 일본 소속의 갑옷
            항공모함입니다. 그녀는 구식 어조로 이야기하지만, 동료를 생각하는
            성격으로 온화한 분위기를 가지고 있습니다. 항상 졸린 듯한 모습으로,
            어느샌가 중흥 낮잠 부의 부원(?)이 되어 있었습니다.
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item cardBody1">시나노</li>
          <li class="list-group-item">UID：<b>マドラス-21446009</b></li>
        </ul>
        <div class="card-body">
          <a
            href="https://www.azurlane.jp/"
            class="card-link"
            style="text-decoration: none"
            >홈페이지</a
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
            프로젝트 세카이:컬러풀 스테이지 feat. 하츠네 미쿠
          </h5>
          <p class="card-text" style="text-align: left">
            히노모리 시즈쿠：아직까지도 인기를 얻고 있는 아이돌 그룹
            'Cheerful＊Days'의 전 센터입니다. 예전 멤버들과의 갈등으로 인해
            탈퇴한 경험이 있어 약간의 미련이 남아있습니다. 그러나 MORE MORE
            JUMP!의 첫 TV 출연을 통해 함께 작업하게 되면서 조금씩 화해하고
            긍정적으로 나아가고 있습니다.
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item cardBody1">히노모리 시즈쿠</li>
          <li class="list-group-item">UID：<b>6696606497812491</b></li>
        </ul>
        <div class="card-body">
          <a
            href="https://pjsekai.sega.jp/index.html"
            class="card-link"
            style="text-decoration: none"
            >홈페이지</a
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
          <h5 class="card-title">리그 오브 레전드</h5>
          <p class="card-text" style="text-align: left">
            페이커(본명: 이상혁, 1996년 5월 7일~)는 대한민국의 리그 오브 레전드
            프로게이머이다. 포지션은 미드라이너이다. T1 소속(2013~)이다.리그
            오브 레전드 월드 챔피언십 4회 우승.
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
            >홈페이지</a
          >
        </div>
      </div>
    </div>
  </div>

  <div class="thirdArea">
    <h1 style="padding: 1.25vw 0">게임 비디오</h1>
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
          <p class="card-text">벽람항로</p>
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
            프로젝트 세카이:컬러풀 스테이지 feat.하츠네 미쿠
          </p>
        </div>
      </div>
      <div class="card" style="width: 560px">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/v9Pl7BPySao?si=Y_BUl4RSDCRKL79u&amp;start=523"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div class="card-body cardBody2">
          <p class="card-text">리그 오브 레전드</p>
        </div>
      </div>
    </div>
  </div>

  <div class="fourthArea">
    <h1 style="padding: 1.25vw 0">나에 대하여</h1>
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
                학력
              </p>
            </div>
          </figure>
          <figure class="back">
            <table style="border: solid 2px rgb(208, 162, 247)">
              <tr>
                <th>서기</th>
                <th>월</th>
                <th>학력</th>
              </tr>
              <tr>
                <td>2013</td>
                <td>09</td>
                <td>대만 펑지아 대학교 응용수학과 입학</td>
              </tr>
              <tr>
                <td>2017</td>
                <td>06</td>
                <td>대만 펑지아 대학교 응용수학과 졸업</td>
              </tr>
              <tr>
                <td>2017</td>
                <td>09</td>
                <td>대만 펑지아 대학교 응용수학과 입학</td>
              </tr>
              <tr>
                <td colspan="3">금융공학</td>
              </tr>
              <tr>
                <td>2020</td>
                <td>01</td>
                <td>대만 펑지아 대학교 응용수학과 졸업</td>
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
                일본 방문 동기
              </p>
            </div>
          </figure>
          <figure class="back">
            <table style="border: solid 2px rgb(208, 162, 247)">
              <tr>
                <th>일본 방문 동기</th>
              </tr>
              <tr>
                <td>
                  대학과 대학원에서 모두 응용수학 전공으로 졸업했으며 프로그래밍
                  언어에 대한 경험이 있어 새로운 프로그래밍 개념을 빠르게 이해할
                  수 있습니다. 이전 직무 경험에서는 엑셀을 사용하여 데이터
                  분석을 수행했습니다. 올해에는 일본에서의 IT 엔지니어 채용
                  기회에 대한 소식을 듣고, 2023년 10월에 대만의 교육 프로그램에
                  참여하여 JAVA와 JS와 같은 프로그래밍 언어를 다시 학습하고
                  있습니다.일본에 대한 일은 항상 좋아해왔으며, 작년 6월부터
                  일본어를 배우기 시작했습니다. 다른 사람과 대화할 때 일본어와
                  영어로 간단한 대화를 나눌 수 있다고 생각합니다. 올해에는 세 번
                  일본을 방문했습니다. 일본 여행 중에 일본에서의 친구가 그의
                  일본 친구를 소개해줬습니다. 처음 만난에도 불구하고 그들은 저를
                  따뜻하게 환영하고 친절하게 대해주어 일본인들이 대만인들보다 더
                  친절하다고 느끼게 했습니다. 그 결과로 일본에서 일하고 살고
                  싶은 강한 열망이 있습니다.
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
                나에 대하여
              </p>
            </div>
          </figure>
          <figure class="back">
            <table style="border: solid 2px rgb(208, 162, 247)">
              <tr>
                <th>이름</th>
                <th>왕위형</th>
              </tr>
              <tr>
                <th>생일</th>
                <th>1995/01/07</th>
              </tr>
              <tr>
                <th>출생지</th>
                <th>대만 타이베이 시</th>
              </tr>
            </table>
          </figure>
        </div>
      </section>
    </div>
  </div>
  <div class="fifthArea">
    <h1 style="padding: 1.25vw 0">입히다</h1>
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
          <h5 class="card-title">모리 칼리오페</h5>
          <p class="card-text" style="text-align: left">
            모리 칼리오페는 홀로라이브 소속의 영어권 버추얼 유튜버이자
            뮤지션이다.
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item cardBody3">모리 칼리오페</li>
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
          <h5 class="card-title">면 토리(イモウト)</h5>
          <p class="card-text" style="text-align: left">
            면 토리 여동생의 습격 공동 출연하고 있던 면 토리의 여동생. 외모는
            귀엽고 대사는 하드보일드로, 남녀 불문하고 사용하기 편리한 스탬프로
            완성했습니다
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item cardBody3">면 토리(イモウト)</li>
        </ul>
        <div class="card-body">
          <a href="https://twitter.com/mendo_tori/media" class="card-link"
            >ホームページ</a
          >
        </div>
      </div>
    </div>
  </div>

  <footer>
    <div class="footerTop">
      <div class="footerBox">
        <a href="">참고 자료</a>
        <a href="https://bootstrap5.hexschool.com/">Bootstrap</a>
        <a href="https://fontawesome.com/">Font Awesome</a>
        <a href="https://colorhunt.co/">Color Hunt</a>
      </div>
      <div class="footerBox">
        <a href="">공식 SNS</a>
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
        <a href="">게임과 자료</a>
        <a href="https://www.azurlane.jp/">アズールレーン</a>
        <a href="https://pjsekai.sega.jp/">プロセカ</a>
        <a href="https://www.leagueoflegends.com/zh-tw/">LOL</a>
        <a href="https://www.youtube.com/@MoriCalliope">森 カリオペ</a>
        <a href="https://twitter.com/mendo_tori/media">イモウト</a>
      </div>
      <div class="footerBox">
        <a href="">이름: 왕위행</a>
        <a href="">그룹: 사</a>
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
  background-image: url("bug.png");
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
