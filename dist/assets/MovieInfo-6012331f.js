import{d as Ie,u as $e,e as Oe,m as x,_ as S,r as A,o as d,c as m,a as y,w as X,b as De,t as w,f as t,F as ue,g as pe,h as O,i as Le,j as Ve,k as Ye,l as Te,n as Ne,p as me,q as T,s as g,v as B,x as Z,y as Ue,z as Qe,A as Ge,B as re,C as ae,D as Ce,E as $,G as Fe}from"./index-0cbec836.js";const le=Ie("storeFavoriteMovies",{state:()=>({favoriteList:[]}),actions:{addTofavorite(e){this.favoriteList.some(s=>s===e)?this.favoriteList=this.favoriteList.filter(s=>s!==e):this.favoriteList.push(e),console.log(this.favoriteList)}}}),b=Ie("fetchMovieData",{state:()=>({base_url:"https://api.themoviedb.org/3",route:$e(),movies:"",imagesUrl:"https://image.tmdb.org/t/p/original/",images:"",faq:"",trailerUrl:"https://www.youtube.com/watch?v=",movieTrailer:"",casts:"",similar:"",options:{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTEzYzYwYTY4Y2FhMzRjYmRhZGM2NzI4MzVlMWJkZCIsInN1YiI6IjY1NzcwZGY5YmJlMWRkMDExYjkwNTFmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eZaedGQGVuBuIlfquQrYwRAWvvLS12jv8eohZjfxhlQ"}}}),actions:{getRandom(e,s){return Math.floor(Math.random()*(s-e)+e)},async getInfo(){await fetch(`${this.base_url}/movie/${this.route.params.id}?`,this.options).then(e=>e.json()).then(e=>{this.movies=e}).catch(e=>console.error(e)),setTimeout(()=>{fetch(`${this.base_url}/movie/${this.route.params.id}/credits`,this.options).then(e=>e.json()).then(e=>{this.casts=e.cast}).catch(e=>console.error(e)),fetch(`${this.base_url}/movie/${this.route.params.id}/similar`,this.options).then(e=>e.json()).then(e=>{this.similar=e.results.slice(0,7)}).catch(e=>console.error(e)),fetch(`${this.base_url}/movie/${this.route.params.id}/images`,this.options).then(e=>e.json()).then(e=>{this.images=e.backdrops.slice(0,10)}).catch(e=>console.log("error",e)),fetch(`${this.base_url}/movie/${this.route.params.id}/videos`,this.options).then(e=>e.json()).then(e=>{this.movieTrailer=e.results.slice(0,1)}).catch(e=>console.log("error",e))},"5000")}}});const Pe={components:{RadialProgress:Oe},computed:{...x(b,["movies"])}};function We(e,s,i,l,o,n){const a=A("RadialProgress");return d(),m("div",null,[y(a,{startColor:"#CE1212",stopColor:"#CE1212",innerStrokeColor:"#EEEBDD",strokeWidth:"6",innerStrokeWidth:"6",strokeLinecap:"thin",diameter:80,"completed-steps":e.movies.vote_average,"total-steps":"10"},{default:X(()=>{var u;return[De(w((u=e.movies.vote_average)==null?void 0:u.toFixed(1))+" ",1)]}),_:1},8,["completed-steps"])])}const Xe=S(Pe,[["render",We]]),Ze={components:{RatingCircle:Xe},computed:{...x(b,["movies"]),...x(b,["imagesUrl"])}},Je={class:"hidden md:block mt-[-50px] min-w-fit"},ze=["src"],Ke={class:"centering mt-6"},qe={class:"mr-[18px]"},He=t("h5",null,"ratings on IMDB",-1);function et(e,s,i,l,o,n){var u;const a=A("RatingCircle");return d(),m("section",Je,[t("img",{class:"w-[276px] h-[415px] rounded-xl shadow-[0px_6px_12px_0px_#1B1717]",src:e.imagesUrl+e.movies.poster_path,alt:"movie-cover"},null,8,ze),t("div",Ke,[t("div",qe,[y(a)]),t("div",null,[t("span",null,w((u=e.movies.vote_average)==null?void 0:u.toFixed(1)),1),He])])])}const tt=S(Ze,[["render",et]]),st={computed:{...x(b,["casts"]),...x(b,["imagesUrl"])},props:["actorsLoaded"]},ot=["src","alt"],nt={class:"text-bold text-sm"},it={class:"text-xs opacity-60"};function at(e,s,i,l,o,n){return d(),m("section",null,[t("ul",null,[(d(!0),m(ue,null,pe(i.actorsLoaded,a=>(d(),m("li",{class:"centering space-x-3 mt-6 hover:cursor-pointer",key:a.id},[t("div",null,[t("img",{class:"w-[75px] h-[75px] rounded-[100px] object-top object-cover",src:e.imagesUrl+a.profile_path,alt:a.name},null,8,ot)]),t("div",null,[t("h3",nt,w(a.name),1),t("span",it,w(a.character),1)])]))),128))])])}const rt=S(st,[["render",at]]),lt={components:{CastList:rt},computed:{...x(b,["casts"]),actorsLoaded(){return this.casts.slice(0,this.length)}},data(){return{length:5,show:!0}},methods:{showAll(){let e=this.casts;this.show=!this.show,!(this.length>=e.length)&&(this.length=e.length)},showLess(){this.show=!this.show,this.length=5}}},ct={class:"min-w-fit w-[265px] overflow-scroll max-h-[630px]"},dt=t("h2",{class:"md:text-h2"},"Cast & Crew",-1),ut=t("span",{class:"text-accent-color text-md"},"Show all",-1),pt=t("span",{class:"w-[21px] h-[21px] bg-no-repeat bg-flash-icon bg-contain mx-3"},null,-1),mt=[ut,pt],ht=t("span",{class:"text-accent-color text-md"},"Show less",-1),vt=t("span",{class:"w-[21px] h-[21px] bg-no-repeat bg-flash-icon bg-contain mx-3"},null,-1),ft=[ht,vt];function _t(e,s,i,l,o,n){const a=A("CastList");return d(),m("section",ct,[dt,y(a,{actorsLoaded:n.actorsLoaded},null,8,["actorsLoaded"]),o.show?(d(),m("div",{key:0,onClick:s[0]||(s[0]=(...u)=>n.showAll&&n.showAll(...u)),class:"centering mt-[39px] hover:cursor-pointer md:justify-start"},mt)):O("",!0),o.show?O("",!0):(d(),m("div",{key:1,onClick:s[1]||(s[1]=(...u)=>n.showLess&&n.showLess(...u)),class:"centering mt-[39px] hover:cursor-pointer md:justify-start"},ft))])}const gt=S(lt,[["render",_t]]),xt={computed:{...x(b,["movies"])},methods:{...Le(b,["getInfo"]),getCountryNames(e){return e.map(s=>s.name).join(", ")},getGenresNames(e){return e.map(s=>s.name).join(", ")}},created(){this.getInfo()}},bt={class:"mt-[18px] border-spacing"},At={class:"border-b-[0.5px] md:border-b-[1px]"},wt=t("td",{class:"w-[171px] py-3"},[t("h3",{class:"text-sm md:text-md font-bold"},"Writers")],-1),yt={class:"opacity-60 py-3"},kt={class:"border-b-[0.5px] md:border-b-[1px]"},St=t("td",{class:"w-[171px] py-3"},[t("h3",{class:"text-sm md:text-md font-bold"},"Genres")],-1),Ct={class:"opacity-60 py-3"},Mt={class:"border-b-[0.5px] md:border-b-[1px]"},It=t("td",{class:"w-[171px] py-3"},[t("h3",{class:"text-sm md:text-md font-bold"},"Awards")],-1),$t={class:"opacity-60 max-w-[323px] py-3"},Dt={class:"border-b-[0.5px] md:border-b-[1px] md:border-none"},Lt=t("td",{class:"w-[171px] py-3"},[t("h3",{class:"text-sm md:text-md font-bold"},"Country of Origin")],-1),Tt={class:"opacity-60 py-3"},jt={class:"md:hidden"},Rt=t("td",{class:"w-[171px] py-3"},[t("h3",{class:"text-sm md:text-md font-bold"},"IMDB Rating")],-1),Et={class:"opacity-60 py-3"};function Bt(e,s,i,l,o,n){var a;return d(),m("section",null,[t("table",bt,[t("tr",At,[wt,t("td",yt,w(e.movies.writers),1)]),t("tr",kt,[St,t("td",Ct,w(n.getGenresNames(e.movies.genres)),1)]),t("tr",Mt,[It,t("td",$t,w(e.movies.awards),1)]),t("tr",Dt,[Lt,t("td",Tt,w(n.getCountryNames(e.movies.production_countries)),1)]),t("tr",jt,[Rt,t("td",Et,w((a=e.movies.vote_average)==null?void 0:a.toFixed(1)),1)])])])}const Ot=S(xt,[["render",Bt]]),Vt="/assets/facebook-e960b123.svg",Yt="/assets/twitter-572f6424.svg",Nt="data:image/png;base64,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",Ut="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGElEQVR4nO2dS48VRRiGK4yDF3ShghiERFAu/gFhoUESIe6IRgPqnkj8DeD4E9wQjBs0gQQkrkjGxAujUUCYIW7EGRI1UUdR2QNe5jHFfJpKnWo4Z/pS1VXfk0wyc+Z0d1W9qUt/9b3dxiiKoiiKoiiKoihRAR4HXgeOAReBq8Cf8nNVPjsm33ksbmkzBbgDeBU4y+jYY16x54hdjywAngPmqM8ssCt2fXoLcBfwFs3zHnBP7Pr1CmAVcKGiQReA88ABYDuwCVghP5vks4NyvP1uCHv8qtj17AXAGhleQkIct40+wrk2AycqhPlWRRlOjNB88R3wZI3zbgW+r+gpdy/1vFkDrAa+CTTaF8BDDZz/QeCTwPkPN1ODMnrGB8B4g9dZDkwFrrOzqWv0HjoSw7neysDwZeeTMVM6dCyGN6f4E/3LpmSIJIZz/fe9654xpUJkMZwlsdtL7O8bTGlQvZo6BdzZcVmmvTLsNyVBAj3DK88bXjmOmlIAHpDVTBJiSJl2eGWZMSXA4vr/dEpiSLls7MvlD1MCwOHUxJBy3eeV6YbJHeCpwJp/KrYYRQoCjAFfe5W2d8krTQIUN2QBe70KL9SJ2jZNcZM68JFX4eMmIYCJYpa9wKPAP17vGHpzqQtsj/AEec3kCrDPq+x5kxDAlkDoZL3JFeBtT5ADJiGAk0UFFxmME203iQBsCyzF95qcAX7zKrzRpJPR8oNXtkvZb1AB171K35tAmcYrtnCfNbnDoCArhjzueeBXe5MGvNiwGDZc43PIlADwu1fx227+AHuAv5q+c76FGOdshqQpAQbX+M+MKIblSotizKYSwukE4F2vASZGFMP+/UJLYthNsjWmJBi8MZwcUYw9Na+vYrgA65y1/nwobKJidAyLu4RXgCcC/3sp0DP+tsaclnrGZeARUzLATu0ZiYP2jHRAJ/BW3K7X5aZvRpa2djW1LqIYNjb1WZZL25pu19NVaf0tirEtECjMRoy6btf5riZw2Vw6WWFVm+21GNbSBbxTQ4hGxJAMkEngTUk+2OCYObfIZxMyVFaZOc/1OhxSw+263sampIEmGxLDilqHQ70OFDbpdo0sxqXe72e05XZdypwhN4+f3mIYCmG/+6XkfY3lKsZU3fGXGhM4sFaW0EdkP95uAV+z6Z2yWWXnjqM2VSeb7JA2/Rm0tLTNljadS7QUDsmWVHoGixN4vyfgXHoGsBH42U7gplQS6xnzzgpprSmNVMSwAB96391nSqJlMXaPupqScIjLEVMKwP1tul2Bn0YRo8IYM21KQPaTP25LDAvwyyhiyDE2UNhovlUvkABba2I4Q9aP4hXcbYZAApIu10zuAE8HxFC3awyAZYEwurpdY2Gf9eSJoW7XmKjbNSGAhyVc4fYOdbvGQlJ1XNTtGpNAgoK6XWMCfO4Jom7XmEh2uYu6XWMSCPSp2zUmkgSQjCCo2/VmEnQSQxbqdr3ZCBdTmNRRt+v/DWHtAi4HExJjrteJzw3dGF7o+Prj6ukbNNb4z33aHFmMueJ6hkvAYHOig2uOqxjVjWPf04fXS7aqGHGtaLNdbFChPWPohtpVsYW7XMVI5zmHXbxU63LxT0i4jV/Q2tAIDF9LnlOydrt25BsMJcotyGt+hl4SZ+12jSDKV4FG/E+YaXmZyQ559U9ZbtcY6Mt9E0VMlaEhrDy3a2KvjbC5W2eKdbumiiQ+7xdH64zsp9zI2u2qKIqiKIqiKIpi+su/x3nXrexWT/kAAAAASUVORK5CYII=",Qt={data(){return{route:$e(),baseUrl:"",showMessage:!1,message:"Link copied!"}},methods:{coppyLink(){this.baseUrl=`http://localhost:5173/details/${this.route.params.id}`,navigator.clipboard.writeText(this.baseUrl),setTimeout(()=>{this.showMessage=!1},3e3)}}},Gt={class:"bg-background-color relative z-10 top-[10px] right-[90px] md:top-0 md:left-[-60%] rounded-xl shadow-[0px_6px_12px_0px_#1B1717] text-center w-[200px] mt-[39px] text-xs border border-black md:mt-20 md:text-sm"},Ft=Ve('<li class="centering my-2 py-2 gap-2 hover:bg-white/10"><img src="'+Vt+'" class="w-10 h-10 ml-1 inline-block" alt="facebook"><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparse.com" class="opacity-60 p-2" target="_blank">Facebook</a></li><li class="centering my-2 py-2 gap-2 hover:bg-white/10"><img src="'+Yt+'" class="w-10 h-10 ml-1 inline-block" alt="twitter"><a href="http://www.twitter.com/share" class="opacity-60 p-2" target="_blank">Twitter</a></li>',2),Pt={class:"centering my-2 py-2 gap-2 hover:bg-white/10"},Wt=t("img",{src:Nt,class:"w-10 h-10 ml-1 inline-block",alt:"email"},null,-1),Xt=["href"],Zt={class:"centering my-2 py-2 gap-2 hover:bg-white/10"},Jt=t("img",{src:Ut,class:"w-10 h-10 ml-1 inline-block",alt:""},null,-1);function zt(e,s,i,l,o,n){return d(),m("section",null,[t("ul",Gt,[Ft,t("li",Pt,[Wt,t("a",{href:"mailto:?subject=movie and series iamdb&body=Check out this site:"+o.baseUrl,class:"opacity-60 p-2",target:"_blank"},"Email Link",8,Xt)]),t("li",Zt,[Jt,t("div",{onClick:s[0]||(s[0]=a=>n.coppyLink()),class:"opacity-60 p-2",target:"_blank"},"Copy Link")])])])}const Kt=S(Qt,[["render",zt]]);const qt={data(){return{isFavorite:!1,trailerRun:!1,share:!1}},components:{DetailsTable:Ot,shareList:Kt},computed:{...Ye(le),...x(b,["movieTrailer"]),...x(b,["trailerUrl"]),...x(b,["movies"])},methods:{...Le(le,["addTofavorite"])}},Ht={class:"w-[330px] sm:w-[410px] md:w-[504px]"},es={key:0,class:"pop-up-img"},ts={class:"relative"},ss=["src"],os={class:"md:text-xl"},ns={class:"text-sm mt-1.5 md:text-md"},is={class:"mt-5 centering space-x-3 md:text-md md:mt-6"},as=t("span",{class:"dot"},null,-1),rs=t("span",{class:"dot"},null,-1),ls={class:"centering mt-5 md:mt-6 space-x-[18px]"},cs=t("span",null,"Watch thrailer",-1),ds=t("span",{class:"play ml-3"},null,-1),us=[cs,ds],ps={class:"mt-[39px] text-xs opacity-60 md:mt-10 md:text-sm"},ms={class:"mt-[38px] md:mt-[42px]"},hs=t("h2",{class:"md:text-[28px] md:leading-[50px]"},"Details",-1);function vs(e,s,i,l,o,n){var h;const a=A("shareList"),u=A("DetailsTable");return d(),m("section",Ht,[o.trailerRun?(d(),m("div",es,[t("div",ts,[t("iframe",{class:"w-screen h-screen ml-[14%]",src:e.trailerUrl+e.movieTrailer.key},null,8,ss),t("span",{onClick:s[0]||(s[0]=v=>o.trailerRun=!o.trailerRun),class:"close"})])])):O("",!0),t("h1",os,w(e.movies.title),1),t("p",ns,"Directors: "+w(e.movies.directors),1),t("div",is,[t("span",null,w(e.movies.release_date),1),as,t("span",null,w((h=e.movies.vote_average)==null?void 0:h.toFixed(1)),1),rs,t("span",null,w(e.movies.runtime),1)]),t("div",ls,[t("button",{onClick:s[1]||(s[1]=v=>(o.trailerRun=!o.trailerRun,e.watchThrailer())),class:"bg-accent-color hover:bg-accent-hover flex items-center text-sm py-3 pl-6 w-[177px] rounded-[100px] md:text-[21px] md:py-[18px] md:pl-8 md:w-[227px]"},us),t("button",{onClick:s[2]||(s[2]=v=>this.share=!this.share),class:"share bg-share hover:bg-white/10 hover:rounded-[100px]"},[o.share?(d(),Te(a,{key:0})):O("",!0)]),t("button",{onClick:s[3]||(s[3]=v=>(this.isFavorite=!this.isFavorite,e.addTofavorite(e.movies.id))),class:Ne(["heart hover:bg-white/10 hover:rounded-[100px]",[o.isFavorite?"bg-heart-filled":"bg-heart"]])},null,2)]),t("p",ps,w(e.movies.overview),1),t("div",ms,[hs,y(u)])])}const fs=S(qt,[["render",vs]]);const _s={computed:{...x(b,["images"]),...x(b,["imagesUrl"])},data(){return{expand:!1,imgSrc:""}},methods:{enlargeImg(e){this.expand=!0,this.imgSrc=this.imagesUrl+e,console.log("expand")}}},gs={key:0,class:"pop-up-img"},xs={class:"relative"},bs=["src"],As={class:"flex flex-wrap gap-3 md:gap-6"},ws=["src","alt","onClick"],ys=t("div",{class:"absolute expand opacity-0"},null,-1);function ks(e,s,i,l,o,n){return d(),m("section",null,[o.expand?(d(),m("div",gs,[t("div",xs,[t("img",{class:"rounded-xl full-screen-img",src:o.imgSrc,alt:"images",id:"fullImg"},null,8,bs),t("span",{onClick:s[0]||(s[0]=a=>o.expand=!o.expand),class:"close"})])])):O("",!0),t("ul",As,[(d(!0),m(ue,null,pe(e.images,a=>(d(),m("li",{class:"photo-container relative rounded-xl bg-black hover:cursor-pointer",key:a.title},[t("img",{class:"rounded-xl h-[102.4px] w-[159px] md:h-[144px] md:w-[216px] object-cover object-top block",src:e.imagesUrl+a.file_path,alt:a.title,onClick:u=>n.enlargeImg(a.file_path)},null,8,ws),ys]))),128))])])}const Ss=S(_s,[["render",ks]]),Cs={components:{PhotosList:Ss}},Ms=t("h2",{class:"mt-[27px] mb-6 md:mt-[65px] md:text-h2"},"Photos",-1);function Is(e,s,i,l,o,n){const a=A("PhotosList");return d(),m("section",null,[Ms,y(a)])}const $s=S(Cs,[["render",Is]]);/**
 * Vue 3 Carousel 0.2.12
 * (c) 2023
 * @license MIT
 */const k={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0},Me={itemsToShow:{default:k.itemsToShow,type:Number},itemsToScroll:{default:k.itemsToScroll,type:Number},wrapAround:{default:k.wrapAround,type:Boolean},throttle:{default:k.throttle,type:Number},snapAlign:{default:k.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:k.transition,type:Number},breakpoints:{default:k.breakpoints,type:Object},autoplay:{default:k.autoplay,type:Number},pauseAutoplayOnHover:{default:k.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:k.mouseDrag,type:Boolean},touchDrag:{default:k.touchDrag,type:Boolean},dir:{default:k.dir,validator(e){return["rtl","ltr"].includes(e)}},settings:{default(){return{}},type:Object}};function Ds({config:e,slidesCount:s}){const{snapAlign:i,wrapAround:l,itemsToShow:o=1}=e;if(l)return Math.max(s-1,0);let n;switch(i){case"start":n=s-o;break;case"end":n=s-1;break;case"center":case"center-odd":n=s-Math.ceil((o-.5)/2);break;case"center-even":n=s-Math.ceil(o/2);break;default:n=0;break}return Math.max(n,0)}function Ls({config:e,slidesCount:s}){const{wrapAround:i,snapAlign:l,itemsToShow:o=1}=e;let n=0;if(i||o>s)return n;switch(l){case"start":n=0;break;case"end":n=o-1;break;case"center":case"center-odd":n=Math.floor((o-1)/2);break;case"center-even":n=Math.floor((o-2)/2);break;default:n=0;break}return n}function ce({val:e,max:s,min:i}){return s<i?e:Math.min(Math.max(e,i),s)}function Ts({config:e,currentSlide:s,slidesCount:i}){const{snapAlign:l,wrapAround:o,itemsToShow:n=1}=e;let a=s;switch(l){case"center":case"center-odd":a-=(n-1)/2;break;case"center-even":a-=(n-2)/2;break;case"end":a-=n-1;break}return o?a:ce({val:a,max:i-n,min:0})}function js(e){var s,i,l,o;return e?((s=e[0])===null||s===void 0?void 0:s.children)==="v-if"||((l=(i=e[0])===null||i===void 0?void 0:i.type)===null||l===void 0?void 0:l.name)==="CarouselSlide"?e.filter(n=>{var a;return((a=n.type)===null||a===void 0?void 0:a.name)==="CarouselSlide"}):((o=e[0])===null||o===void 0?void 0:o.children)||[]:[]}function de({val:e,max:s,min:i=0}){return e>s?de({val:e-(s+1),max:s,min:i}):e<i?de({val:e+(s+1),max:s,min:i}):e}function Rs(e,s){let i;return s?function(...l){const o=this;i||(e.apply(o,l),i=!0,setTimeout(()=>i=!1,s))}:e}function Es(e,s){let i;return function(...l){i&&clearTimeout(i),i=setTimeout(()=>{e(...l),i=null},s)}}var Bs=me({name:"ARIA",setup(){const e=T("currentSlide",g(0)),s=T("slidesCount",g(0));return()=>B("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},`Item ${e.value+1} of ${s.value}`)}}),Os=me({name:"Carousel",props:Me,setup(e,{slots:s,emit:i,expose:l}){var o;const n=g(null),a=g([]),u=g(0),h=g(0);let v=g({}),M=Object.assign({},k);const c=Z(Object.assign({},M)),p=g((o=e.modelValue)!==null&&o!==void 0?o:0),V=g(0),he=g(0),j=g(0),Y=g(0);let R,J;$("config",c),$("slidesCount",h),$("currentSlide",p),$("maxSlide",j),$("minSlide",Y),$("slideWidth",u);function z(){const r=Object.assign(Object.assign({},e),e.settings);v=g(Object.assign({},r.breakpoints)),M=Object.assign(Object.assign({},r),{settings:void 0,breakpoints:void 0}),ve(M)}function Q(){const r=Object.keys(v.value).map(_=>Number(_)).sort((_,I)=>+I-+_);let f=Object.assign({},M);r.some(_=>window.matchMedia(`(min-width: ${_}px)`).matches?(f=Object.assign(Object.assign({},f),v.value[_]),!0):!1),ve(f)}function ve(r){Object.entries(r).forEach(([f,_])=>c[f]=_)}const fe=Es(()=>{Object.keys(v.value).length&&(Q(),N()),G()},16);function G(){if(!n.value)return;const r=n.value.getBoundingClientRect();u.value=r.width/c.itemsToShow}function N(){h.value<=0||(he.value=Math.ceil((h.value-1)/2),j.value=Ds({config:c,slidesCount:h.value}),Y.value=Ls({config:c,slidesCount:h.value}),c.wrapAround||(p.value=ce({val:p.value,max:j.value,min:Y.value})))}Ue(()=>{Object.keys(v.value).length&&Q(),Qe(()=>{N(),G(),Ee(),i("init")}),xe(),window.addEventListener("resize",fe,{passive:!0})}),Ge(()=>{J&&clearTimeout(J),R&&clearInterval(R),window.removeEventListener("resize",fe,{passive:!0})});let C=!1;const F={x:0,y:0},P={x:0,y:0},D=Z({x:0,y:0}),K=g(!1),je=()=>{K.value=!0},Re=()=>{K.value=!1};function _e(r){["INPUT","TEXTAREA"].includes(r.target.tagName)||(C=r.type==="touchstart",!(!C&&r.button!==0||E.value)&&(C||r.preventDefault(),F.x=C?r.touches[0].clientX:r.clientX,F.y=C?r.touches[0].clientY:r.clientY,document.addEventListener(C?"touchmove":"mousemove",q,!0),document.addEventListener(C?"touchend":"mouseup",ge,!0)))}let q=()=>{};function Ee(){var r;q=Rs(f=>{P.x=C?f.touches[0].clientX:f.clientX,P.y=C?f.touches[0].clientY:f.clientY;const _=P.x-F.x,I=P.y-F.y;D.y=I,D.x=_},(r=c.throttle)!==null&&r!==void 0?r:16)}function ge(){const r=c.dir==="rtl"?-1:1,f=Math.sign(D.x)*.4,_=Math.round(D.x/u.value+f)*r;if(_&&!C){const I=se=>{se.stopPropagation(),window.removeEventListener("click",I,!0)};window.addEventListener("click",I,!0)}L(p.value-_),D.x=0,D.y=0,document.removeEventListener(C?"touchmove":"mousemove",q,!0),document.removeEventListener(C?"touchend":"mouseup",ge,!0)}function xe(){!c.autoplay||c.autoplay<=0||(R=setInterval(()=>{c.pauseAutoplayOnHover&&K.value||W()},c.autoplay))}function be(){R&&(clearInterval(R),R=null),xe()}const E=g(!1);function L(r){const f=c.wrapAround?r:ce({val:r,max:j.value,min:Y.value});p.value===f||E.value||(i("slide-start",{slidingToIndex:r,currentSlideIndex:p.value,prevSlideIndex:V.value,slidesCount:h.value}),E.value=!0,V.value=p.value,p.value=f,J=setTimeout(()=>{if(c.wrapAround){const _=de({val:f,max:j.value,min:0});_!==p.value&&(p.value=_,i("loop",{currentSlideIndex:p.value,slidingToIndex:r}))}i("update:modelValue",p.value),i("slide-end",{currentSlideIndex:p.value,prevSlideIndex:V.value,slidesCount:h.value}),E.value=!1,be()},c.transition))}function W(){L(p.value+c.itemsToScroll)}function H(){L(p.value-c.itemsToScroll)}const Ae={slideTo:L,next:W,prev:H};$("nav",Ae),$("isSliding",E);const we=re(()=>Ts({config:c,currentSlide:p.value,slidesCount:h.value}));$("slidesToScroll",we);const Be=re(()=>{const r=c.dir==="rtl"?-1:1,f=we.value*u.value*r;return{transform:`translateX(${D.x-f}px)`,transition:`${E.value?c.transition:0}ms`,margin:c.wrapAround?`0 -${h.value*u.value}px`:"",width:"100%"}});function ye(){z(),Q(),N(),G(),be()}Object.keys(Me).forEach(r=>{["modelValue"].includes(r)||ae(()=>e[r],ye)}),ae(()=>e.modelValue,r=>{r!==p.value&&L(Number(r))}),ae(h,N),z();const ke={config:c,slidesCount:h,slideWidth:u,next:W,prev:H,slideTo:L,currentSlide:p,maxSlide:j,minSlide:Y,middleSlide:he};l({updateBreakpointsConfigs:Q,updateSlidesData:N,updateSlideWidth:G,initDefaultConfigs:z,restartCarousel:ye,slideTo:L,next:W,prev:H,nav:Ae,data:ke});const ee=s.default||s.slides,te=s.addons,Se=Z(ke);return()=>{const r=js(ee==null?void 0:ee(Se)),f=(te==null?void 0:te(Se))||[];r.forEach((oe,ne)=>oe.props.index=ne);let _=r;if(c.wrapAround){const oe=r.map((ie,U)=>Ce(ie,{index:-r.length+U,isClone:!0,key:`clone-before-${U}`})),ne=r.map((ie,U)=>Ce(ie,{index:r.length+U,isClone:!0,key:`clone-after-${U}`}));_=[...oe,...r,...ne]}a.value=r,h.value=Math.max(r.length,1);const I=B("ol",{class:"carousel__track",style:Be.value,onMousedownCapture:c.mouseDrag?_e:null,onTouchstartPassiveCapture:c.touchDrag?_e:null},_),se=B("div",{class:"carousel__viewport"},I);return B("section",{ref:n,class:{carousel:!0,"carousel--rtl":c.dir==="rtl"},dir:c.dir,"aria-label":"Gallery",tabindex:"0",onMouseenter:je,onMouseleave:Re},[se,f,B(Bs)])}}}),Vs=me({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:s}){const i=T("config",Z(Object.assign({},k))),l=T("currentSlide",g(0)),o=T("slidesToScroll",g(0)),n=T("slideWidth",g(0)),a=T("isSliding",g(!1)),u=re(()=>({width:n.value?`${n.value}px`:"100%"})),h=()=>e.index===l.value,v=()=>e.index===l.value-1,M=()=>e.index===l.value+1,c=()=>{const p=Math.floor(o.value),V=Math.ceil(o.value+i.itemsToShow-1);return e.index>=p&&e.index<=V};return()=>{var p;return B("li",{style:u.value,class:{carousel__slide:!0,"carousel_slide--clone":e.isClone,"carousel__slide--visible":c(),"carousel__slide--active":h(),"carousel__slide--prev":v(),"carousel__slide--next":M(),"carousel__slide--sliding":a.value},"aria-hidden":!c()},(p=s.default)===null||p===void 0?void 0:p.call(s))}}});const Ys={components:{Carousel:Os,Slide:Vs},computed:{...x(le,["favoriteList"]),...x(b,["similar"]),...x(b,["imagesUrl"])},data(){return{breakpoints:{360:{itemsToShow:1.5,snapAlign:"start"},500:{itemsToShow:2,snapAlign:"center"},700:{itemsToShow:3,snapAlign:"center"},770:{itemsToShow:4,snapAlign:"center"},1400:{itemsToShow:5,snapAlign:"center-even"},1840:{itemsToShow:6,snapAlign:"center-even"},2100:{itemsToShow:7,snapAlign:"center-even"}}}}},Ns=["src","alt"],Us={class:"flex justify-between mt-[13px] md:mt-3"},Qs={class:"text-start text-sm font-bold w-[137px] whitespace-nowrap text-ellipsis overflow-hidden md:w-[170px] md:text-lg"},Gs={class:"centering"},Fs={key:0,class:"bg-red-heart inline-block bg-no-repeat w-4 h-4 mt-[3px] mx-1.5"},Ps=t("span",{class:"bg-star inline-block bg-no-repeat w-4 h-4 mt-[3px] mx-1.5"},null,-1),Ws={class:"text-sm opacity-40 mt-[3px] md:text-md"};function Xs(e,s,i,l,o,n){const a=A("router-link"),u=A("slide"),h=A("carousel");return d(),m("section",null,[y(h,{itemsToShow:3.95,transition:10,wrapAround:!0,autoplay:3e3,breakpoints:o.breakpoints},{default:X(()=>[(d(!0),m(ue,null,pe(e.similar,v=>(d(),Te(u,{key:e.similar.id},{default:X(()=>[t("div",null,[y(a,{to:"/details/"+v.id,class:"hover:cursor-pointer"},{default:X(()=>[t("div",null,[t("img",{class:"rounded-xl w-[230px] h-[342px] md:w-[276px] md:h-[409px] block",src:e.imagesUrl+v.poster_path,alt:v.title},null,8,Ns)]),t("div",Us,[t("h5",Qs,w(v.title),1),t("div",Gs,[e.favoriteList.some(M=>M===v.id)?(d(),m("span",Fs)):O("",!0),Ps,t("span",Ws,w(v.vote_average),1)])])]),_:2},1032,["to"])])]),_:2},1024))),128)),De(" ... ")]),_:1},8,["itemsToShow","breakpoints"])])}const Zs=S(Ys,[["render",Xs]]),Js={components:{MoreLikeList:Zs}},zs=t("h2",{class:"px-[15px] my-6 md:text-h2 md:px-[132px] md:mt-[50px]"},"More like this",-1);function Ks(e,s,i,l,o,n){const a=A("MoreLikeList");return d(),m("section",null,[zs,y(a)])}const qs=S(Js,[["render",Ks]]),Hs={computed:{...x(b,["faq"]),...x(b,["movies"])},data(){return{answer:{0:!1,1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1}}}},eo=t("ul",{class:"space-y-3 pb-[43px]"},null,-1),to=[eo];function so(e,s,i,l,o,n){return d(),m("div",null,to)}const oo=S(Hs,[["render",so]]),no={components:{QuestionsList:oo}},io=t("h2",{class:"mb-6 mt-[28px] md:mt-[62px] md:text-h2"},"FAQs",-1);function ao(e,s,i,l,o,n){const a=A("QuestionsList");return d(),m("section",null,[io,y(a)])}const ro=S(no,[["render",ao]]);const lo={components:{Cover:tt,CastAndCrew:gt,Details:fs,Photos:$s,MoreLikeThis:qs,Quastions:ro},computed:{...x(b,["movies"]),...x(b,["imagesUrl"])},watch:{$route:{immediate:!0,handler(e,s){document.title=this.movies.title||"IAMDB"}}}},co={class:"px-[15px] md:px-[132px] pt-[164px] md:flex md:pr-[143px] md:pt-[521px] md:space-x-[60px] justify-center"};function uo(e,s,i,l,o,n){const a=A("Cover"),u=A("Details"),h=A("CastAndCrew"),v=A("Photos"),M=A("MoreLikeThis"),c=A("Quastions");return d(),m("div",{class:"cover",style:Fe({backgroundImage:`linear-gradient(rgba(27, 23, 23, 0) 58.33%,
                                    rgba(27, 23, 23, 0.8) 71.23%,
                                    #1B1717 100%),
                                    url(${e.imagesUrl+e.movies.poster_path})`})},[t("header",co,[y(a),y(u),y(h)]),t("main",null,[y(v,{class:"px-[15px] md:px-[132px]"}),y(M),y(c,{class:"px-[15px] md:px-[132px]"})])],4)}const mo=S(lo,[["render",uo],["__scopeId","data-v-b3a5db7c"]]);export{mo as default};
