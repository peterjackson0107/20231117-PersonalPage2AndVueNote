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
    goOutherWay2() {
      this.$router.push("/KoreaChild");
    },
    goOutherWay3() {
      this.$router.push("/ChineseChild");
    },
  },
  mounted() {
    this.setLocation(1);
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
      <button class="btn btn-secondary dropdown-toggle dropdownButton1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="fa-solid fa-globe" style="margin-right: 5px"></i>日本語
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" @click="goOutherWay1()">English</a></li>
        <li><a class="dropdown-item" @click="goOutherWay2()">한국어</a></li>
        <li><a class="dropdown-item" @click="goOutherWay3()">中文</a></li>
      </ul>
    </div>
  </div>

  <div class="firstArea">
    <div id="carouselExampleControls" class="carousel slide carouselPicture" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../components/pictures/shizukuHinomoriProjectSekai1.jpg" class="d-block w-100" alt=""/>
        </div>
        <div class="carousel-item">
          <img src="../components/pictures/akali.jpg" class="d-block w-100" alt=""/>
        </div>
        <div class="carousel-item">
          <img src="../components/pictures/azurLane.jpg" class="d-block w-100" alt=""/>
        </div>
        <div class="carousel-item">
          <img src="../components/pictures/2023041201.jpg" class="d-block w-100" alt=""/>
        </div>
        <div class="carousel-item">
          <img src="../components/pictures/2023083001.jpg" class="d-block w-100" alt=""/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carouselIcon" aria-hidden="true"><i class="fa-solid fa-circle-arrow-left" style="font-size: 50px"></i></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carouselIcon" aria-hidden="true"><i class="fa-solid fa-circle-arrow-right" style="font-size: 50px"></i></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div class="secondArea">
    <h1 style="padding: 1.25vw 0">ゲーム</h1>
    <div class="cardArea">
      <div class="card" style="width: 25vw">
        <a href="#" type="button" data-bs-toggle="modal" data-bs-target="#loginModal1">
          <img src="https://patchwiki.biligame.com/images/blhx/4/46/na56z6zilj0g5bnjx28pmawudt470lg.gif" alt="" style="width: 25vw; height: 300px"/>
        </a>
        <div class="modal fade" id="loginModal1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <img src="https://patchwiki.biligame.com/images/blhx/4/46/na56z6zilj0g5bnjx28pmawudt470lg.gif" alt=""/>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">アズールレーン</h5>
          <p class="card-text" style="text-align: left">
            信濃：大和型戦艦の艦体から改造された、重桜所属の装甲空母。言葉遣いが古風で儚げな雰囲気をまとっているが、仲間思いで人柄が穏やか。いつも眠そうにしており、いつの間にか重桜昼寝部の部員（？）になっていた。
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item cardBody1">信濃</li>
          <li class="list-group-item">UID：<b>マドラス-21446009</b></li>
        </ul>
        <div class="card-body">
          <a href="https://www.azurlane.jp/" class="card-link" style="text-decoration: none">
            ホームページ
          </a>
        </div>
      </div>
      <div class="card" style="width: 25vw">
        <a href="#" type="button" data-bs-toggle="modal" data-bs-target="#loginModal2">
          <img src="../components/pictures/shizukuHinomoriProjectSekai.gif" alt="" style="width: 25vw; height: 300px"/>
        </a>
        <div class="modal fade" id="loginModal2">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <img src="../components/pictures/shizukuHinomoriProjectSekai.gif" alt="" style="width: 50vw; height: 600px; margin: -150px"/>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">プロセカ</h5>
          <p class="card-text" style="text-align: left">
            日野森雫：今でも人気を博しているアイドルグループ『Cheerful＊Days』の元センター。かつてのメンバー達とうまくいかず脱退してしまったことにわだかまりを持っていたが、MORE MORE JUMP！初のテレビ出演での共演をきっかけに少しだけ和解し、前向きに進んでいる。
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item cardBody1">日野森雫</li>
          <li class="list-group-item">プレイヤーID：<b>6696606497812491</b></li>
        </ul>
        <div class="card-body">
          <a href="https://pjsekai.sega.jp/index.html" class="card-link" style="text-decoration: none">
            ホームページ
          </a>
        </div>
      </div>
      <div class="card" style="width: 25vw">
        <a href="#" type="button" data-bs-toggle="modal" data-bs-target="#loginModal3">
          <img src="../components/pictures/fakerPaisuo.gif" alt="" style="width: 25vw; height: 300px"/>
          </a>
        <div class="modal fade" id="loginModal3">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <img src="../components/pictures/fakerPaisuo.gif" alt="" style="width: 50vw; height: 600px; margin: -180px"/>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">リーグ・オブ・レジェンド</h5>
          <p class="card-text" style="text-align: left">
            Faker(フェーカー、이상혁、1996年5月7日-)は、大韓民国のプロゲーマー。ソウル出身。T1所属。1996年ソウル特別市麻浦区生まれ。2013年、麻浦高等学校を中退後、T1入団。以後、リーグ・オブ・レジェンド・ワールド・チャンピオンシップ4回優勝。
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item cardBody1">Faker(フェーカー、이상혁)</li>
          <li class="list-group-item">プレイヤーID：<b>Hinomori Shizuku</b></li>
        </ul>

        <div class="card-body">
          <a href="https://www.leagueoflegends.com/zh-tw/" class="card-link" style="text-decoration: none">
            ホームページ
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="thirdArea">
    <h1 style="padding: 1.25vw 0">ゲーム動画</h1>
    <div class="cardArea">
      <div class="card" style="width: 560px">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8SXlb5fozjU?si=_z7OhtlMyHzVKQkh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
        <div class="card-body cardBody2">
          <p class="card-text">アズールレーン</p>
        </div>
      </div>
      <div class="card" style="width: 560px">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/bZXTeMDtUa8?si=ip6p-Ty6G4q1UeAK&amp;start=65" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
      </iframe>
        <div class="card-body cardBody2">
          <p class="card-text">プロセカ</p>
        </div>
      </div>
      <div class="card" style="width: 560px">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xwdwpDQbYsM?si=bhHY4otxOdMOh7dQ&amp;start=421" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
      </iframe>
        <div class="card-body cardBody2">
          <p class="card-text">リーグ・オブ・レジェンド</p>
        </div>
      </div>
    </div>
  </div>

  <div class="fourthArea">
    <h1 style="padding: 1.25vw 0">自己紹介</h1>
    <div class="containerArea">
      <section class="container">
        <div id="card">
          <figure class="front">
            <img src="../components/pictures/school.jpg" alt="" style="width: 560px; height: 315px"/>
            <div class="card-body">
              <p class="card-text" style="height: 56px; font-size: 24px; margin-top: 8px">
                学歴
              </p>
            </div>
          </figure>
          <figure class="back">
            <table style="border: solid 2px rgb(208, 162, 247)">
              <tr>
                <th>西曆年</th>
                <th>月</th>
                <th>学歴</th>
              </tr>
              <tr>
                <td>2013</td>
                <td>09</td>
                <td>台湾 台中逢甲大学 応用数学学科 入学</td>
              </tr>
              <tr>
                <td>2017</td>
                <td>06</td>
                <td>台湾 台中逢甲大学 応用数学学科 卒業</td>
              </tr>
              <tr>
                <td>2017</td>
                <td>09</td>
                <td>台湾 台中逢甲大学院 応用数学学科 入学</td>
              </tr>
              <tr>
                <td colspan="3">金融工学専攻</td>
              </tr>
              <tr>
                <td>2020</td>
                <td>01</td>
                <td>台湾 台中逢甲大学院 応用数学学科 修了</td>
              </tr>
            </table>
          </figure>
        </div>
      </section>
      <section class="container">
        <div id="card">
          <figure class="front">
            <img src="../components/pictures/2023041202.jpg" alt="" style="width: 560px; height: 315px"/>
            <div class="card-body">
              <p class="card-text" style="height: 56px; font-size: 24px; margin-top: 8px">
                来日動機
              </p>
            </div>
          </figure>
          <figure class="back">
            <table style="border: solid 2px rgb(208, 162, 247)">
              <tr>
                <th>来日動機</th>
              </tr>
              <tr>
                <td>
                  私の大学も大学院は応用数学学科を卒業しており、プログラム言語の経験があります。そのため、プログラム言語に対する飲み込みが早いです。過去の業務経歴ではEXCELのデータ分析して。そして、最近日本でのプログラミング関連の仕事が多いことを知り、今年10月から、台湾でもう一度プログラム言語の研修会を参加しています。ずっと日本に対する興味がある、去年6月から日本語の勉強を始めた、今年12月にJLPTのN2とN3の試験を受けた。中国語は母語。自分の日本語と英語能力は人と話し合えると、支障がないと自分がそう思います。今年3回も日本に旅行することがありました。日本の友達は初対面なのにとても親切で、温かく迎えてくれました、彼と他の旅先で知り合った日本の友達との交流から、日本人は台湾人よりも親切だと思います、日本が大好きになりました。だからこそ、日本での仕事と生活が非常に憧れています。私は何でも仕事を受け入れ、一生懸命頑張ります。
                </td>
              </tr>
            </table>
          </figure>
        </div>
      </section>
      <section class="container">
        <div id="card">
          <figure class="front">
            <img src="../components/pictures/head.jpg" alt="" style="width: 560px; height: 315px"/>
            <div class="card-body">
              <p class="card-text" style="height: 56px; font-size: 24px; margin-top: 8px">
                自己紹介
              </p>
            </div>
          </figure>
          <figure class="back">
            <table style="border: solid 2px rgb(208, 162, 247)">
              <tr>
                <th>名前</th>
                <th>王暐衡</th>
              </tr>
              <tr>
                <th>誕生日</th>
                <th>1995/01/07</th>
              </tr>
              <tr>
                <th>出生地</th>
                <th>台湾台北市</th>
              </tr>
            </table>
          </figure>
        </div>
      </section>
    </div>
  </div>

  <div class="fifthArea">
    <h1 style="padding: 1.25vw 0">推し</h1>
    <div class="cardArea">
      <div class="card" style="width: 25vw">
        <a href="#" type="button" data-bs-toggle="modal" data-bs-target="#loginModal44" >
          <img src="../components/pictures/calliLaugh.jpg" alt="" style="width: 25vw; height: 300px"/>
      </a>
        <div class="modal fade" id="loginModal44">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/9-J5FmQhugs?si=VcqjSzu4UJ5ELY5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">森 カリオペ</h5>
          <p class="card-text" style="text-align: left">
            森 カリオペ：森 カリオペ（もり カリオペ、英語: Mori Calliope）は、バーチャルYouTuber、ラッパー。所属事務所はホロライブプロダクションで。ホロライブの英語圏を中心に活動する部門「ホロライブEnglish」の初期グループ「Myth（神話）」メンバー。
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item cardBody3">森 カリオペ</li>
        </ul>
        <div class="card-body">
          <a href="https://www.youtube.com/@MoriCalliope" class="card-link">
            YouTube
            </a>
        </div>
      </div>
      <div class="card" style="width: 25vw">
        <a href="#" type="button" data-bs-toggle="modal" data-bs-target="#loginModal55">
          <img src="../components/pictures/2023083002.jpg" alt="" style="width: 25vw; height: 300px"/>
        </a>
        <div class="modal fade" id="loginModal55">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <img src="../components/pictures/2.png" alt="" style="margin: -180px"/>
            </div>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">めんトリ(イモウト)</h5>
          <p class="card-text" style="text-align: left">
            めんトリ妹の襲来 共演していためんトリの妹。見た目は可愛くセリフはハードボイルドに、男女問わず使いやすいスタンプに仕上げっています。
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item cardBody3">めんトリ(イモウト)</li>
        </ul>
        <div class="card-body">
          <a href="https://twitter.com/mendo_tori/media" class="card-link">
            ホームページ
          </a>
        </div>
      </div>
    </div>
  </div>

  <footer>
    <div class="footerTop">
      <div class="footerBox">
        <a href="">参考資料</a>
        <a href="https://bootstrap5.hexschool.com/">Bootstrap</a>
        <a href="https://fontawesome.com/">Font Awesome</a>
        <a href="https://colorhunt.co/">Color Hunt</a>
      </div>
      <div class="footerBox">
        <a href="">公式SNS</a>
        <a href="https://www.youtube.com/channel/UCQEMS6jVDx-8SrfSE2u01Ng">youtube</a>
        <a href="https://twitter.com/snsd_area1209">X (旧Twitter)</a>
        <a href="https://www.facebook.com/profile.php?id=100002371273180">facebook</a>
        <a href="https://www.instagram.com/kurosawasyousyou/">instagram</a>
      </div>
      <div class="footerBox">
        <a href="">ゲームと資料</a>
        <a href="https://www.azurlane.jp/">アズールレーン</a>
        <a href="https://pjsekai.sega.jp/">プロセカ</a>
        <a href="https://www.leagueoflegends.com/zh-tw/">LOL</a>
        <a href="https://www.youtube.com/@MoriCalliope">森 カリオペ</a>
        <a href="https://twitter.com/mendo_tori/media">イモウト</a>
      </div>
      <div class="footerBox">
        <a href="">名前：王暐衡</a>
        <a href="">グループ：四</a>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.loader {
  //又報錯
  background: linear-gradient(90deg, #b3fffd 0, #e3e6ff 50%, #fde5f5 100%);
  background-size: 200% 200%;
  background-color: white;
  // opacity: 0.8;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100000;
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
  //轉動齒輪
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
