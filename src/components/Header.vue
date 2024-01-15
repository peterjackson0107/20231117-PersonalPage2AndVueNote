<script>
import { RouterLink, RouterView } from "vue-router";
import { mapState, mapActions } from "pinia";
import counter from "../stores/counter";
export default {
  data() {
    return {
      arr: ["tsuhong", "toupao", "hahaha"],
    };
  },
  methods: {
    fuzzyFunction() {
  // Declare variables
  let input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value;
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    console.log(a)
    if (a.innerHTML.indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
  },
  components: {
    RouterLink,
  },
  computed: {
    ...mapState(counter, ["location", "locationInfo"]),
  },
};
</script>

<template>
  <div class="row">
  <input type="text" id="mySearch" @input="fuzzyFunction()" placeholder="Search.." title="Type in a category">
  <ul id="myMenu">
    <div class="headerShow">
      <li><a href="#"><RouterLink to="/" class="routerItem" :class="{ cass: this.location === 1 }">Home<small>ホーム</small></RouterLink></a></li>
      <li><a href="#"><RouterLink to="/Vfor" class="routerItem" :class="{ cass: this.location === 3 }">VFor<small>ビー・フォー</small></RouterLink></a></li>
      <li><a href="#"><RouterLink to="/VforKeban" class="routerItem" :class="{ cass: this.location === 4 }">VForKeban<small>ビー・フォー・ケバン</small></RouterLink></a></li>
      <li><a href="#"><RouterLink to="/Von" class="routerItem" :class="{ cass: this.location === 5 }">VOn<small>ビー・オン</small></RouterLink></a></li>
      <li><a href="#"><RouterLink to="/Vbind" class="routerItem" :class="{ cass: this.location === 6 }">VBind<small>ビー・バインド</small></RouterLink></a></li>
      <li><a href="#"><RouterLink to="/VifAndVshow" class="routerItem" :class="{ cass: this.location === 7 }">VIfAndVShow<small>ビー・イフ・アンド・ビー・ショー</small></RouterLink></a></li>
      <li><a href="#"><RouterLink to="/WatchAndComputed" class="routerItem" :class="{ cass: this.location === 8 }">WatchAndComputed<small>ウォッチ・アンド・コンピューティド</small></RouterLink></a></li>
      <li><a href="#"><RouterLink to="/Storage" class="routerItem" :class="{ cass: this.location === 9 }">Storage<small>ストレージ</small></RouterLink></a></li>
      <li><a href="#"><RouterLink to="/Props" class="routerItem" :class="{ cass: this.location === 10 }">Props<small>プロプス</small></RouterLink></a></li>
      <li><a href="#"><RouterLink to="/Emit" class="routerItem" :class="{ cass: this.location === 11 }">Emit<small>エミット</small></RouterLink></a></li>
      <li><a href="#"><RouterLink to="/Accouting" class="routerItem" :class="{ cass: this.location === 12 }">Accouting<small>アカウティング</small></RouterLink></a></li>
      <li><a href="#"><RouterLink to="/DataFlow" class="routerItem" :class="{ cass: this.location === 13 }">DataFlow<small>データー・フロー</small></RouterLink></a></li>
      <li><a href="#"><RouterLink to="/ProvideAndInject" class="routerItem" :class="{ cass: this.location === 14 }">ProvideAndInject<small>プロバイド・アンド・インジェクト</small></RouterLink></a></li>
      <li><a href="#"><RouterLink v-for="i in arr" :to="`/User/${i}`" class="routerItem" :class="{ cass: this.location === 15 }">User{{ i }}<small>ユーザー/{{ i }}</small></RouterLink></a></li>
      <li><a href="#"><RouterLink to="/RouteFam" class="routerItem" :class="{ cass: this.location === 16 }">RouteFam<small>ルート・ファム</small></RouterLink></a></li>
      <li><a href="#"><RouterLink to="/Vslot" class="routerItem" :class="{ cass: this.location === 17 }">Vslot<small>ビー・スロット</small></RouterLink></a></li>
      <RouterLink to="/EnglishChild" class="routerItem" :class="{ cass: this.location === 18 }" style="display: none;">EnglishChild</RouterLink>
      <RouterLink to="/KoreaChild" class="routerItem" :class="{ cass: this.location === 19 }" style="display: none;">KoreaChild</RouterLink>
      <RouterLink to="/ChineseChild" class="routerItem" :class="{ cass: this.location === 20 }" style="display: none;">ChineseChild</RouterLink><li><a href="#"><RouterLink to="/VtextAndVmodel" class="routerItem" :class="{ cass: this.location === 2 }">VtextAndVmodel<small>ビー・テクスト・アンド・ビー・モデル</small></RouterLink></a></li>
    </div>
    
  </ul>
  <!-- <span>{{ locationInfo }}</span> -->
</div>
  
</template>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}
/* Create a column layout with Flexbox */
.cass {
  background-color: #d0a2f7;
}
.row {
  margin: 0;
  display: flex;
}
/* Style the search box */
#mySearch {
  width: 90%;
  font-size: 16px;
  padding: 10px;
  margin-top: 60px;
  margin-left: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
}
/* Style the navigation menu inside the left column */
#myMenu {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
#myMenu li a {
  margin: 8px;
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  line-height: 1;
  color: #557;
  display: block
}
#myMenu small {
  margin-top: 5px;
  padding: 0.5px;
  font-family: 'M PLUS 1', sans-serif;
  text-decoration: none;
  line-height: 1;
  color: #557;
  display: block
}
#myMenu li a:hover {
  background-color: rgb(208, 162, 247);
}
</style>
