(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fdd3a4c2"],{"00f6":function(t,a,s){},"0479":function(t,a,s){t.exports=s.p+"img/share3.891c59e3.svg"},1187:function(t,a,s){t.exports=s.p+"img/packdown.78a5d656.svg"},"339e":function(t,a,s){t.exports=s.p+"img/music.e4304f3f.svg"},5672:function(t,a,s){"use strict";var i=s("afa8"),e=s.n(i);e.a},"613b":function(t,a,s){t.exports=s.p+"img/addsong4.b09d884f.svg"},6369:function(t,a,s){t.exports=s.p+"img/download.2d970504.svg"},6809:function(t,a,s){t.exports=s.p+"img/playaudio6.689fb552.svg"},"68c4":function(t,a,s){"use strict";var i=s("9acf"),e=s.n(i);e.a},"6af4":function(t,a,s){t.exports=s.p+"img/add2.bea46aa4.svg"},"765d":function(t,a,s){t.exports=s.p+"img/playaudio5.87a8df02.svg"},"7e92":function(t,a,s){t.exports=s.p+"img/news.11b6a6bd.svg"},"98c2":function(t,a,s){t.exports=s.p+"img/packup.7c7b2320.svg"},"9acf":function(t,a,s){},a15b:function(t,a,s){"use strict";var i=s("23e7"),e=s("44ad"),n=s("fc6a"),l=s("a640"),o=[].join,c=e!=Object,r=l("join",",");i({target:"Array",proto:!0,forced:c||!r},{join:function(t){return o.call(n(this),void 0===t?",":t)}})},ae97:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return t.playlistdata?i("div",{staticClass:"playlistdetailpage"},[i("div",{staticClass:"playlistleft"},[i("Title",{attrs:{playlistdata:t.playlistdata,pcomment:t.playlistcomment.total}}),i("div",{staticClass:"leftcontent"},[i("div",{staticClass:"leftcontentitle"},[i("h2",[t._v(" 歌曲列表 "),i("span",{staticClass:"tracklenght"},[t._v(t._s(t.playlistdata.trackCount)+"首歌")])]),t._m(0),i("div",{staticClass:"playingcount"},[t._v(" 播放: "),i("span",[t._v(t._s(t.playlistdata.playCount))]),t._v(" 次 ")])]),i("table",{staticClass:"tablecontent"},[t._m(1),t.mineplaylistSong?i("tbody",t._l(t.mineplaylistSong,(function(a,e){return i("tr",{key:"track-"+e,on:{mouseenter:function(a){t.showplayaudio=e+1},mouseleave:function(a){t.showplayaudio=0}}},[i("td",{staticClass:"one"},[t._v(t._s(e+1))]),i("td",{staticClass:"title"},[i("img",{directives:[{name:"show",rawName:"v-show",value:!(t.showindex==e+1),expression:"!(showindex == i + 1)"}],staticClass:"playimg",attrs:{src:s("765d")},on:{mouseenter:function(a){if(a.target!==a.currentTarget)return null;t.showindex=e+1}}}),i("img",{directives:[{name:"show",rawName:"v-show",value:t.showindex==e+1,expression:"showindex == i + 1"}],staticClass:"playimg",attrs:{src:s("6809")},on:{mouseout:function(a){t.showindex=0},click:function(s){return s.stopPropagation(),t.$emit("translate-song",a.id)}}}),i("span",{on:{click:function(s){return s.stopPropagation(),t.tosongdetail(a.id)}}},[t._v(t._s(a.name))])]),i("td",{directives:[{name:"show",rawName:"v-show",value:!(t.showplayaudio==e+1),expression:"!(showplayaudio == i + 1)"}],staticClass:"time"},[t._v(t._s(t.changeduration(a.dt)))]),i("td",{directives:[{name:"show",rawName:"v-show",value:t.showplayaudio==e+1,expression:"showplayaudio == i + 1"}],staticClass:"time"},[i("img",{attrs:{src:s("eef4")}}),i("img",{attrs:{src:s("f513")}}),i("img",{attrs:{src:s("0479")}}),i("img",{attrs:{src:s("6369")}})]),i("td",{staticClass:"singer"},[t._v(t._s(a.ar[0].name))])])})),0):t._e()])])],1),i("div",{staticClass:"playlistright"},[i("Card",{attrs:{simiplaylist:t.simiplaylist}})],1)]):t._e()},e=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"link"},[i("img",{attrs:{src:s("339e")}}),t._v(" 生成外部链接 ")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",{staticClass:"one"}),s("th",{staticClass:"title"},[t._v("标题")]),s("th",{staticClass:"time"},[t._v("时长")]),s("th",{staticClass:"singer"},[t._v("歌手")])])])}],n=(s("a15b"),s("d81d"),s("b680"),function(){var t=this,a=t.$createElement,i=t._self._c||a;return t.playlistdata?i("div",{staticClass:"playdetailtoppage"},[i("div",{staticClass:"left"},[i("img",{staticClass:"picurl",attrs:{src:t.playlistdata.coverImgUrl}}),i("div",{staticClass:"mask"})]),i("div",{staticClass:"right"},[i("h2",[i("span",[t._v("歌单")]),t._v(" "+t._s(t.playlistdata.name)+" ")]),t.playlistdata.creator?i("div",{staticClass:"creator"},[i("img",{attrs:{src:t.playlistdata.creator.avatarUrl,alt:""}}),i("span",[t._v(t._s(t.playlistdata.creator.nickname))]),i("p",[t._v(t._s(t.changetime(t.playlistdata.createTime))+" 创建")])]):t._e(),i("div",{staticClass:"toprightbot"},[t._m(0),t._m(1),i("el-button",{attrs:{type:"text"}},[i("img",{attrs:{src:s("613b")}}),i("span",[t._v("("+t._s(t.changecount(t.playlistdata.subscribedCount))+")")])]),i("el-button",{attrs:{type:"text"}},[i("img",{attrs:{src:s("0479")}}),i("span",[t._v("("+t._s(t.changecount(t.playlistdata.shareCount))+")")])]),i("el-button",{attrs:{type:"text"}},[i("img",{attrs:{src:s("6369")}}),i("span",[t._v("下载")])]),i("el-button",{attrs:{type:"text"}},[i("img",{attrs:{src:s("7e92")}}),i("span",[t._v("("+t._s(t.changecount(t.playlistdata.commentCount))+")")])])],1),i("div",{staticClass:"tag"},[t._v(" 标签: "),t._l(t.playlistdata.tags,(function(a,s){return i("span",{key:s},[t._v(t._s(a))])}))],2),i("div",{staticClass:"description"},[i("p",[t._v(t._s(t.playlistdata.description))]),i("div",{staticClass:"more"},[t.showhidden?t._e():i("div",{staticClass:"packup",on:{click:function(a){t.showhidden=!0}}},[t._v(" 收起 "),i("img",{attrs:{src:s("98c2")}})]),t.showhidden?i("div",{staticClass:"packdown",on:{click:function(a){t.showhidden=!1}}},[t._v(" 展开 "),i("img",{attrs:{src:s("1187")}})]):t._e()])])])]):t._e()}),l=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("span",{staticClass:"onespan"},[i("img",{attrs:{src:s("46a5")}}),t._v(" 播放 ")])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("span",{staticClass:"twospan onespan"},[i("img",{attrs:{src:s("6af4")}})])}],o=(s("99af"),s("a9e3"),{props:{playlistdata:Object,pcomment:Number},data:function(){return{showhidden:!0}},methods:{changetime:function(t){var a=new Date(t),s=a.getFullYear(),i=a.getMonth(),e=a.getDay();return"".concat(s,"-").concat(i,"-").concat(e)},changecount:function(t){return t>1e4?(t/1e4).toFixed(0)+"万":t}},computed:{}}),c=o,r=(s("e62d6"),s("2877")),d=Object(r["a"])(c,n,l,!1,null,"81eabd2e",null),p=d.exports,u=function(){var t=this,a=t.$createElement,s=t._self._c||a;return t.simiplaylist?s("div",{staticClass:"playlistdetailricard"},[s("div",{staticClass:"top"},[t._v("相似歌单")]),s("ul",{staticClass:"simisonglist"},t._l(t.simiplaylist,(function(a,i){return s("li",{key:"simi-"+i,attrs:{item:a},on:{click:function(s){return t.toplaylist(a.id)}}},[s("div",{staticClass:"rli-left"},[s("img",{attrs:{src:a.coverImgUrl,alt:""}})]),s("div",{staticClass:"rli-right"},[s("h2",[t._v(t._s(a.name))]),s("p",[t._v("by "+t._s(a.creator.nickname))])])])})),0),s("div",{staticClass:"top"},[t._v("玖玖音乐多端下载")]),s("div",{staticClass:"ri-bot"}),s("p",{staticClass:"lastp"},[t._v("同步歌单，随时畅听320k好音乐")])]):t._e()},m=[],g={props:{simiplaylist:Array},methods:{toplaylist:function(t){this.$router.push({path:"/Playlistdetail?id=".concat(t)})}}},h=g,y=(s("5672"),Object(r["a"])(h,u,m,!1,null,"09df4f32",null)),v=y.exports,f={components:{Title:p,Card:v},data:function(){return{playlistid:0,playlistdata:{},playlistcomment:{},showplayaudio:0,showindex:0,songids:"",mineplaylistSong:[],simiplaylist:[]}},computed:{trackIds:function(){return this.playlistdata.trackIds}},methods:{getPlaylist:function(){var t=this;this.axios.get("/playlist/detail",{params:{id:this.playlistid}}).then((function(a){t.playlistdata=a.data.playlist,window.localStorage.setItem("pl-"+t.playlistid,JSON.stringify({val:t.playlistdata,time:Date.now()+72e5})),t.getplaylistsongids()})).catch((function(t){console.log(t)}))},checkPlaylist:function(){var t=JSON.parse(window.localStorage.getItem("pl-"+this.playlistid));t&&t.time>Date.now()?(this.playlistdata=t.val,this.getplaylistsongids()):this.getPlaylist()},getplaycomment:function(){var t=this;this.axios.get("/comment/playlist",{params:{id:this.playlistid}}).then((function(a){t.playlistcomment=a.data,window.localStorage.setItem("plcomment-"+t.playlistid,JSON.stringify({val:t.playlistcomment,time:Date.now()+216e5}))})).catch((function(t){console.log(t)}))},checkplaycomment:function(){var t=JSON.parse(window.localStorage.getItem("plcomment-"+this.playlistid));t&&t.time>Date.now()?this.playlistcomment=t.val:this.getplaycomment()},changeduration:function(t){t>1e4&&(t=(t/1e3).toFixed(0));var a=(t/60).toFixed(0);a=a<10?"0"+a:a;var s=t%60<10?"0"+t%60:t%60;return a+":"+s},getplaylistsongids:function(){var t=[];this.trackIds.map((function(a){t.push(a.id)})),this.songids=t.join(","),this.getPlaylistSong()},getPlaylistSong:function(){var t=this;this.$axios.get("/song/detail?ids="+this.songids).then((function(a){t.mineplaylistSong=a.data.songs,window.localStorage.setItem("playlistSong"+t.id,JSON.stringify({val:a.data.songs}))})).catch((function(t){console.log("访问失败",t)}))},getsimiplaylist:function(){var t=this;this.axios.get("/related/playlist",{params:{id:this.playlistid}}).then((function(a){t.simiplaylist=a.data.playlists,window.localStorage.setItem("simipl-"+t.playlistid,JSON.stringify({val:a.data.playlists,time:Date.now()+216e5}))}))},checksimiplaylist:function(){var t=JSON.parse(window.localStorage.getItem("simipl-"+this.playlistid));t&&t.time>Date.now()?this.simiplaylist=t.val:this.getsimiplaylist()},tosongdetail:function(t){this.$router.push({path:"/Songdetail?id=".concat(t)})}},created:function(){0!=this.playlistid&&this.checkPlaylist()},watch:{playlistid:function(){this.checkPlaylist(),this.checkplaycomment(),this.checksimiplaylist()}},beforeRouteUpdate:function(t,a,s){this.playlistid=t.query.id,s()},beforeRouteEnter:function(t,a,s){s((function(a){a.playlistid=t.query.id,window.scrollTo(0,0)}))}},_=f,w=(s("68c4"),Object(r["a"])(_,i,e,!1,null,"051207d4",null));a["default"]=w.exports},afa8:function(t,a,s){},e62d6:function(t,a,s){"use strict";var i=s("00f6"),e=s.n(i);e.a},eef4:function(t,a,s){t.exports=s.p+"img/add.8a954dc9.svg"},f513:function(t,a,s){t.exports=s.p+"img/addsong3.b8636153.svg"}}]);
//# sourceMappingURL=chunk-fdd3a4c2.f56eda9d.js.map