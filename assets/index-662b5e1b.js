var ze=Object.defineProperty;var He=(t,s,n)=>s in t?ze(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n;var Q=(t,s,n)=>(He(t,typeof s!="symbol"?s+"":s,n),n);import{c as Fe,r as c,j as e,u as Oe,S as Qe,M as _e,a as L,b as re,F as f,d as le,e as E,I as de,V as Ke,L as We,f as Pe,g as i,h as me,H as $e,D as Ze,i as qe,k as M,C as Ve,l as ue,m as he,n as Je,T as Xe,o as et,B as I,p as R,q as tt,s as ge,t as Ae,v as fe,w as pe,x as we,y as ve,z as xe,A as st,E as j,G as se,J as K,K as nt,N as at,O as ot,P as ct,Q as z,R as be,U as ye,W as it,X as rt,Y as Ne,Z as Be,_ as lt,$ as dt,a0 as mt,a1 as ut,a2 as ht,a3 as Ce,a4 as gt,a5 as Me,a6 as At,a7 as ft,a8 as pt,a9 as wt,aa as vt,ab as ke,ac as Ie,ad as xt,ae as bt,af as yt,ag as Nt,ah as _,ai as Bt,aj as Ct,ak as Mt,al as kt,am as $,an as Se,ao as It,ap as St,aq as Et,ar as Yt}from"./vendor-ddd701e3.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const Ee="set_user",Ye="container_width",W="watermark_bg_status",Gt={username:"",email:"",user:void 0},Dt=(t=Gt,s)=>{switch(s.type){case Ee:return s.value}return t},jt={containerWidth:0},Lt=(t=jt,s)=>{switch(s.type){case Ye:return{containerWidth:s.value}}return t},Tt={open:!0},Ut=(t=Tt,s)=>{switch(s.type){case W:return{open:s.value}}return t},Z=Fe({reducer:{user:Dt,containerWidth:Lt,watermarkBg:Ut}}),Rt=t=>{Z.dispatch({type:Ye,value:t})},G=({children:t,className:s=""})=>{const n=document.getElementsByClassName("bg")[0],[o,a]=c.useState(0);return c.useEffect(()=>(window.addEventListener("resize",()=>{n!=null&&n.offsetWidth&&a(n.offsetWidth)}),window.removeEventListener("resize",()=>{})),[n]),c.useEffect(()=>{Rt(o)},[o]),e("div",{className:`${s} w-full bg`,children:e("div",{className:`${s} mx-auto px-4 sm:px-6 lg:max-w-4xl xl:max-w-5xl xl:px-0`,children:t})})},zt=()=>{const{colorMode:t,toggleColorMode:s}=Oe();return e("div",{className:"cursor-pointer",onClick:()=>s(),children:t==="dark"?e(Qe,{}):e(_e,{})})},Ht=""+new URL("1-2cc23b73.gif",import.meta.url).href,Ft=""+new URL("2-89e3714d.gif",import.meta.url).href,Ot=""+new URL("3-e970c1f6.gif",import.meta.url).href,Qt=""+new URL("4-c0bfb110.gif",import.meta.url).href,_t=""+new URL("5-3b3ea8c0.gif",import.meta.url).href,Kt=""+new URL("6-11988ec0.gif",import.meta.url).href,Wt=""+new URL("7-763ba872.gif",import.meta.url).href,Pt=""+new URL("fire-f1f6c407.gif",import.meta.url).href,$t=Math.floor(Math.random()*7+1),Zt=t=>new URL(Object.assign({"../assets/images/1.gif":Ht,"../assets/images/2.gif":Ft,"../assets/images/3.gif":Ot,"../assets/images/4.gif":Qt,"../assets/images/5.gif":_t,"../assets/images/6.gif":Kt,"../assets/images/7.gif":Wt,"../assets/images/fire.gif":Pt})[`../assets/images/${t}.gif`],self.location).href,qt={backgroundImage:`url(${Zt($t)})`},Vt=()=>{const t=L(),s=re(n=>n.user);return e(f,{children:s.avatar?e("div",{className:"logo-bg rounded-full overflow-hidden w-16 h-8 md:w-20 md:h-10 cursor-pointer text-xl md:text-2xl font-bold flex justify-center items-center",style:qt,onClick:()=>t("/"),children:"讨口子"}):e(le,{className:"w-16 h-8 md:w-20 md:h-10"})})},q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAAEEAQMAAAARWB0lAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACNJREFUaN7twTEBAAAAwiD7pzbFPmAAAAAAAAAAAAAAAADkDjHEAAHC6Y9+AAAAAElFTkSuQmCC",Jt=()=>{const t=L(),s=re(o=>o.user),n=E(s.avatar,s.avatarWithe);return e(f,{children:s.avatar?e(de,{className:"inline-block rounded-full overflow-hidden w-16 h-8 md:w-20 md:h-10 cursor-pointer",src:n,fallbackSrc:q,onClick:()=>t("/")}):e(le,{className:"w-16 h-8 md:w-20 md:h-10"})})},Xt=Math.floor(Math.random()*100+1),ne=()=>(Ke.init(document.querySelector(".avatar"),{max:20,speed:3e3}),e("div",{className:"avatar","data-tilt":!0,"data-tilt-scale":1.1,children:Xt%2?e(Jt,{}):e(Vt,{})})),es=({to:t,children:s,target:n="_self"})=>e(We,{to:t,target:n,className:"px-3 hover:opacity-80 ease-in-out cursor-pointer transition flex justify-center items-center",rel:"noreferrer",children:s}),ts=""+new URL("fire-f1f6c407.gif",import.meta.url).href,ae=()=>{const{pathname:t}=Pe();return e(f,{children:[{link:"/",title:"首页",icon:"icon-shouye"},{link:"/remove-watermark",title:"消除水印",icon:"icon-quchushuiyin",isFire:!0},{link:"/hot",title:"热搜",icon:"icon-resou"},{link:"/random",title:"随机",icon:"icon-a-love"},{link:"/image",title:"美图",icon:"icon-tupian"},{link:"https://blog.csdn.net/qq_37034928",target:"_blank",title:"CSDN",icon:"icon-csdn"}].map(n=>e(es,{to:n.link,target:n.target||"_self",children:i("div",{className:`bg-[#fff] text-[#333] lg:text-current lg:bg-transparent hover:bg-[#e4e9ed] hover:text-[#333] w-full relative text-center overflow-hidden my-[5px] lg:my-0 lg:w-auto py-5 px-4 lg:py-2 font-normal rounded-md transform -skew-x-6  ${n.link===t&&"menu-active"}`,children:[i("div",{className:"lg:skew-x-6 transform text-base lg:text-base text-left lg:text-center relative -top-2 lg:top-0",children:[n.title,n.isFire&&n.link!==t&&e("img",{className:"hidden lg:block absolute -right-3 -top-1 h-[12px]",src:ts,alt:""})]}),e("div",{className:`lg:hidden text-5xl text-[#d4d4d8] absolute -right-2 -bottom-2 opacity-40 iconfont ${n.icon}`})]})},n.title))})};function ss(){const[t,s]=c.useState(!1);return{loading:t,requestLoading:async o=>{s(!0),await o(),s(!1)}}}const V=(t="smooth")=>{window.scrollTo({top:0,behavior:t})};function J(){const[t,s]=c.useState(!1);return[t,o=>{var a;(a=navigator==null?void 0:navigator.clipboard)==null||a.writeText(o).then(()=>s(!0)).catch(r=>console.error("Failed to copy: ",r))}]}const P=(t,s={})=>{const n=Object.assign({color:"#1abf6a"},s);let o="";for(const a in n)o+=`${a}:${n[a]};`;return t=String(t).replace(/</g,"&lt;").replace(/>/g,"&gt;"),`<span style="${o}">${t}</span>`},ns=t=>{if(!t)return t;const s=/(https?:\/\/[^\s]+)/g,n=t.match(s);return((n==null?void 0:n[0])||"").split("，")[0]||""},Ge=async(t="",s=t)=>{try{const o=await(await fetch(t)).blob(),a=document.createElement("a");document.body.appendChild(a),a.style.display="none";const r=window.URL.createObjectURL(o);a.href=r,a.download=s,a.click(),document.body.removeChild(a),window.URL.revokeObjectURL(r)}catch(n){console.error("下载失败：",n)}},Y=t=>{const{hideLink:s=!1}=t,{isOpen:n,onOpen:o,onClose:a}=me();return e(G,{className:`sticky top-0 z-50 ${t.className}`,children:i("nav",{className:"flex justify-between items-center  py-3 md:py-5 font-bold",onDoubleClick:()=>V(),children:[i("div",{className:"items-center hidden lg:flex",children:[e(ne,{}),!s&&e("div",{className:"flex items-center ml-8",children:e(ae,{})})]}),i("div",{className:"lg:hidden",children:[e($e,{onClick:o}),e(Ze,{size:"full",placement:"left",onClose:a,isOpen:n,children:e(qe,{className:"bg-transparent",onClick:a,children:e("div",{className:"w-full h-full tao-filter",children:i("div",{className:"px-2 py-3",children:[e(M,{className:"scale-[.6]",colorScheme:"red","aria-label":"Search database",icon:e(Ve,{})}),e("div",{className:"w-[150px]",children:e(ae,{})})]})})})})]}),e("div",{className:"items-center flex lg:hidden",children:e(ne,{})}),i("div",{className:"flex items-center text-base text-gray-500 leading-5  py-1",children:[t.children,e(zt,{})]})]})})},oe={display:"-webkit-box",overflow:"hidden",textOverflow:"ellipsis",WebkitBoxOrient:"vertical"},X=t=>{const s=L(),n=c.useCallback(()=>{t.url?window.open(t.url):s(`/${t.id}`)},[]),o=c.useMemo(()=>({1:"text-[#a82e2e] pr-2",2:"text-[#f04142] pr-2",3:"text-[#ff9a03] pr-2"}),[]),a=c.useCallback(r=>({WebkitLineClamp:String(r)}),[]);return i(ue,{direction:{base:"column",md:"row"},overflow:"hidden",variant:"outline",children:[t.img&&e(de,{objectFit:"cover",className:"w-full object-cover md:w-[240px] xl:w-[300px] h-[150px] md:h-auto md:max-h-[300px]",src:t.img,fallbackSrc:q,alt:""}),i(he,{className:"flex-1",children:[i(Je,{children:[i("div",{style:{...oe,...a(2)},className:"text-lg font-bold md:text-2xl cursor-pointer",onClick:()=>{var r;return(r=t==null?void 0:t.handlerClick)==null?void 0:r.call(t,t.title,t.url)},children:[t.rank&&i("span",{className:t.rank<=3?o[t.rank]:"text-[#999] pr-2",children:[t.rank,"."]}),t.title]}),e(Xe,{my:"2",className:"text-[15px] leading-[26px]",style:{...oe,...a(3)},children:t.description}),i("div",{className:"text-xs opacity-80 flex items-center",children:[t.viewCount!==void 0&&i("span",{className:"pr-4 flex items-center",children:[t.type=="hot"?e("div",{className:"iconfont icon-hot-for-ux-fill text-[#f00] text-[12px] pr-[2px]"}):"阅读",t.viewCount||"....."]}),e("span",{children:t.formatTime})]})]}),e(et,{children:e(I,{variant:"outline",colorScheme:"blue",onClick:n,children:t.btnText||"更多"})})]})]})},H=({loading:t})=>e("div",{className:"flex justify-center items-center py-4",children:t?i(f,{children:[e(R,{size:"sm"}),e("div",{className:"pl-2",children:"加载中"})]}):e("div",{children:"没有了"})}),ee=tt.create({baseURL:"",timeout:1e4});ee.interceptors.request.use(t=>t,t=>(console.error("request=>",t),Promise.reject(t)));ee.interceptors.response.use(t=>t.data,t=>(console.log("response=>",t),Promise.reject(t)));const b=({url:t,data:s={},method:n="post"})=>{const o={url:t,method:n};return n=="get"?Object.assign(o,{params:s}):Object.assign(o,{data:s}),ee({...o})},as="https://blog.csdn.net/community/home-api/v1",N="https://tenapi.cn/v2",os="https://api.uomg.com/api",cs="https://unsplash.com/napi",is=(t={})=>b({url:"/getList",data:t}),rs=()=>b({url:"/getUserInfo",method:"get"}),ls=(t={})=>b({url:`${as}/get-business-list`,data:t,method:"get"}),ds=(t={})=>b({url:`${N}/baiduhot`,data:t,method:"get"}),ms=(t={})=>b({url:`${N}/weibohot`,data:t,method:"get"}),us=(t={})=>b({url:`${N}/douyinhot`,data:t,method:"get"}),hs=(t={})=>b({url:`${N}/zhihuhot`,data:t,method:"get"}),gs=(t={})=>b({url:`${N}/toutiaohot`,data:t,method:"get"}),As=(t={})=>b({url:`${N}/bilihot`,data:t,method:"get"}),fs=(t={})=>b({url:`${N}/yiyan?format=json`,data:t,method:"get"}),ps=(t={})=>b({url:`${N}/Dog?format=json`,data:t,method:"get"}),ws=(t={})=>b({url:`${N}/WaSentence?format=json`,data:t,method:"get"}),vs=(t={})=>b({url:`${N}/LoveSentence?format=json`,data:t,method:"get"}),xs=(t={})=>b({url:`${N}/Xiaohua?format=json`,data:t,method:"get"}),bs=(t={})=>b({url:`${N}/video`,data:t,method:"get"}),ys=(t={})=>b({url:`${N}/images`,data:t,method:"get"}),Ns=(t={})=>b({url:`${N}/acg?format=json`,data:t,method:"get"}),Bs=(t="",s={})=>b({url:`${cs}${t}`,data:s,method:"get"}),Cs=(t={})=>b({url:`${os}/rand.img3?format=json`,data:t,method:"get"}),Ms=()=>{const[t,s]=c.useState([]),{loading:n,requestLoading:o}=ss(),[a,r]=c.useState(1),l=()=>{n||o(async()=>{const{data:d}=await is({page:a,pageSize:10});s([...t,...d])})};c.useEffect(()=>{l()},[a]);const m=()=>{const{scrollTop:d,scrollHeight:h}=document.documentElement;window.innerHeight+d>=h&&!n&&r(y=>y+1)};return c.useEffect(()=>(window.addEventListener("scroll",m),()=>{window.removeEventListener("scroll",()=>{})}),[t]),i("div",{children:[e(Y,{}),i(G,{children:[t.map((d,h)=>e("div",{className:"py-4",children:e(X,{...d})},d.id+h)),e(H,{loading:n})]})]})},ks="https://cdn.jsdelivr.net/gh/sun0225SUN/sun0225SUN/assets/images/man.png",De=({className:t="fixed  right-8 bottom-60 mb-1.5"})=>{const s=L(),n=()=>{s("/me")};return e("img",{src:ks,className:`w-10 h-10 z-50 cursor-pointer ${t}`,alt:"",onClick:n})},D=t=>{const{isOpen:s,onOpen:n,onClose:o}=me(),[a,r]=J(),l=window.location.href,m=()=>{r(l),o()};return i("div",{className:t.className,children:[!t.hideIcon&&e(De,{}),e(I,{className:"fixed w-10 z-50 bottom-52 right-8",onClick:n,children:e("div",{className:"iconfont icon-erweima"})}),i(ge,{size:"xs",onClose:o,isOpen:s,isCentered:!0,children:[e(Ae,{}),i(fe,{maxW:"15rem",children:[e(pe,{children:"分享"}),e(we,{}),i(ve,{className:"text-center pb-5",children:[e("div",{className:"p-2 w-48 h-48 m-auto bg-slate-100 rounded-lg overflow-hidden",children:e("img",{className:"w-full rounded-lg overflow-hidden",src:`${N}/qrcode?text=${l}`,alt:""})}),e("div",{className:"my-4 w-9/10 m-auto overflow-hidden whitespace-nowrap overflow-ellipsis text-xs",children:l}),i(I,{size:"sm",className:"font-normal",variant:"outline",onClick:m,children:[e(xe,{className:"mr-1"})," 复制链接"]})]})]})]})]})},F=t=>{const{className:s="",title:n="",close:o,cancel:a,confirm:r,children:l,hideClose:m=!1,hideCancel:d=!1,cancelText:h="取消",confirmText:x="确认",hideFooter:y=!1,size:u="md"}=t;return i(ge,{isOpen:!0,size:u,onClose:()=>{!m&&o&&o()},isCentered:!0,children:[e(Ae,{}),i(fe,{children:[n&&e(pe,{children:n}),!m&&e(we,{}),e(ve,{className:s,children:l}),!y&&i(st,{children:[!d&&e(I,{variant:"ghost",mr:3,onClick:a||o,children:h}),e(I,{colorScheme:"blue",onClick:r,children:x})]})]})]})},Is=({title:t,url:s,close:n})=>e(F,{size:"full",title:t,hideFooter:!0,close:n,children:e("iframe",{src:s,style:{width:"100%",height:"calc(100vh - 80px)"}})}),je=({length:t=4})=>{const s=Array.from({length:t},(n,o)=>o);return e(f,{children:s.map(n=>e("div",{className:"py-4",children:e(ue,{direction:{base:"column",md:"row"},overflow:"hidden",variant:"outline",className:"p-4",children:e(he,{className:"w-full flex md:items-start md:flex-row",children:i("div",{className:"md:w-full",children:[i("div",{className:"flex mb-3",children:[e(j,{className:"h-[28px] w-[28px] mr-2"}),e(j,{className:"h-[28px] w-full"})]}),e(j,{className:"h-[28px] w-4/5 mb-5"}),e(j,{className:"h-[16px] w-[150px] mb-8"}),e(j,{className:"h-[40px] w-[97px]"})]})})})},n))})},Ss=""+new URL("not-8a71ec34.png",import.meta.url).href,Le=t=>{const s=()=>{t.refresh()};return e("div",{className:"flex justify-center items-center h-screen absolute top-0 left-0 right-0 bottom-0",children:i("div",{className:"text-center",children:[e("img",{className:"w-[200px] mx-auto",src:Ss}),e("div",{className:"text-sm mt-4 flex",children:(o=>{if(o===1)return i(f,{children:["刚刚出了点小问题，点击",e("p",{className:"cursor-pointer pl-1 text-green-400",onClick:s,children:"刷新"})]});if(o===2)return i(f,{children:["咦，关键时刻掉链子？ 不行！我要",e("p",{className:"cursor-pointer pl-1 text-teal-300",onClick:s,children:"再试试"})]});if(o===3)return e(f,{children:"今日不凑巧，服务器离家出走了，改天再来吧~"})})(t.step)})]})})},Es=()=>{const[t,s]=c.useState([]),[n,o]=c.useState(!1),a=c.useRef(!1),r=c.useRef(!1),l=c.useRef(1),[m,d]=c.useState(1),[h,x]=c.useState(!1),[y,u]=c.useState({title:"",url:""});c.useEffect(()=>{A()},[]),c.useEffect(()=>{const p=()=>{const v=document.documentElement.scrollTop||document.body.scrollTop,k=document.documentElement.scrollHeight||document.body.scrollHeight,O=document.documentElement.clientHeight||window.innerHeight;v+O>=k-20&&A()};return window.addEventListener("scroll",p),()=>{window.removeEventListener("scroll",p)}},[t]);const A=async()=>{var v;if(r.current||a.current)return;const p={businessType:"lately",noMore:!1,username:"qq_37034928"};try{r.current=!0;const{data:k}=await ls({page:l.current,size:10,...p});if(!((v=k==null?void 0:k.list)!=null&&v.length)){a.current=!0;return}l.current+=1,s([...t,...k.list])}catch{o(!0)}finally{r.current=!1}},B=c.useCallback((p,v)=>{x(!0),u({title:p,url:v})},[]),g=()=>{o(!1),d(p=>p+1),l.current=1,A()};return i("div",{children:[e(Y,{}),h?e(Is,{...y,close:()=>x(!1)}):null,n?e(Le,{refresh:g,step:m}):i(G,{children:[t.map((p,v)=>e("div",{className:"py-4",children:e(X,{...p,handlerClick:B})},v)),l.current==1?e(je,{}):e(H,{loading:!a.current})]}),e(D,{})]})},Ys=()=>{const t=L(),s=[{id:1,name:"一"},{id:2,name:"二"},{id:3,name:"三"},{id:4,name:"四"},{id:5,name:"五"},{id:6,name:"六"},{id:0,name:"日"}],n=c.useMemo(()=>{var m;return(m=s.find(({id:d})=>d===se().day()))==null?void 0:m.name},[]),[o,a]=c.useState(""),r=c.useRef(null),l=()=>{a(se().format("YYYY-MM-DD HH:mm:ss"))};return c.useEffect(()=>(r.current=setInterval(()=>{l()},1e3),()=>{r.current&&clearInterval(r.current)}),[]),i(f,{children:[e(Y,{hideAvatar:!0,hideLink:!0}),e("div",{className:"flex justify-center items-center",style:{height:"calc(100vh - 200px)"},children:i("div",{className:"text-center",children:[i(K,{colorScheme:"yellow",children:["周",n," ",o||e(R,{size:"xs",className:"relative top-[2px]"})]}),e("div",{className:"pb-6 pt-4",children:e(K,{colorScheme:"red",children:"伙计，你迷路了"})}),e(M,{"aria-label":"go home",icon:e(nt,{}),onClick:()=>t(-1)})]})})]})},Gs=({data:t,actionIndex:s=0,change:n})=>{const o=l=>l===s,a=E("bg-[#fff]","bg-[#edf2f7]"),r=E("text-[#4a5568]","text-[#eee]");return e(at,{variant:"soft-rounded",defaultIndex:s,colorScheme:"gray",onChange:l=>n(l),children:e(ot,{children:t.map((l,m)=>e(ct,{className:o(m)?a:"",children:e("div",{className:`iconfont text-2xl ${l.icon} ${o(m)?l.active:r}`})},l.id))})})},Ds="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAAEEBAMAAADZuJJVAAAAIVBMVEX////m5ubr6+v5+fn7+/vz8/P19fXv7+/t7e39/f3o6Oi7Ol+uAAAES0lEQVR42u3bu2/TUBgF8I8kBNyJE2hSOmGEeE2EAgImIx4CpmaAwpaAgLVBqspIEM+NQBc2AhIS/JXUieNb27GdMKBT6fwm6EM6uv58few6JiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiTLyHge1jF4EfW08/G7VvO7fW1q48f/7gwcb29sePFqtj4szDa0aq+hJJnyzWR6zx7injHN32kbTiRuUuks5usR2Eg0g750ZnhIz3RqWDlEZgzs0NHymnjUgdaacsqXY5dW68NR7XMbX65+TJj9vbW4Fl3dk4j1iDaBsdAPjw9NKtb2WZdp69HGHitbEIZ6dpc/KuTA5C01gcAhAsus2u0kxPBWjZnNyloGskhsAxW4wPbBqJG8B3W0wn/BUSbeCELeZAeMBI/Fv8o0Zin8e/MU/8jfM/tgL3K/ss/rg1/3IHjGj23c5T1qjXLdIDjhiJYXn8NkJuxTvhASMxR3wfYysWGRB1tqGbhOLZcdPjh/8kcaA0/mGkajJT59mNf9wKLSESDZkH4IKRWHLxvdy9KXHuVgHQPDDZE/9qtyS+u8ExFktxrINozjU8B4GGsajE8TvA+jyn7qFwD2URxo9nYrlk43T3Zywq0/7Vw67NOS5bS0y36tP4dYRac5SGIVHhtMNRmB7GNgsqG2HhnMavYmIlvzAzFs5p/Ha6GSQ8Gq1+CBgLpx0an4jVUfHzy1pgsT5R4Yzi30fs3H56zDOJX/MzT/fzjYgK5yT+F+zx04oxFc5wV1z2fDhl4WpMhXMcv4KEphWpMhXOcfwBEvJGm7BwhmlWgOLlr64FtouwcFodM6wn0w/QeGxmhIVzRvxMce5PtlPGwpmJn21uFxE6yviANi9+K3u3YpEhU+G0KhKyzW2AkKtpbabCmRd/xS1+6nzoMRXOnPguojdAJCAsnLnxG8kzF/HIDJgKp9VQsvz1eJ4IC2d+/NXMCzNdvsKZHx/fXUuA2/o9qsLp4md9jn7Cj79AVzjNQ65jbqd31+I6VeEsio8gtfU3w/9QFc6C+K7b9Pfchx2mKpxmyOO2mC+I/DarUBXO4vjd1PC32ApnYfxm5kXPdarXSUKli+8N9p4NN6gKp9mobPGvw2kEXIWzKP56PDrOZoeqcBbEX3aj4yz3qQqnmV+8+NeRxPRGQFH85ezohLgKZ178aERqfaRwFc7c+C03OglchTM3/uuc0eEqnGEfy81YGyCDq3CadfLvdJ8gi6xwWhszrOaMDtfb76EKMia1xutjpuPGZOYaxw94Msguuub5sxe4jhD7Vcush4wg2pH4981oerL3uDuXX/mY4aeRaSPvT3M3X7xhn51ssWkmvnnllc+7baY+Mfpn95NnZ7qWcvNZfBBadIsf2llbu3Xv2+fST2y1qNrmYr5eumciIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIvK//QX3ofxfIUPIQgAAAABJRU5ErkJggg==",js=()=>{const[t,s]=c.useState(3),[n,o]=c.useState([]),[a,r]=c.useState(!1),l=[{id:1,name:"百度",icon:"icon-icon_baidulogo",active:"text-[#2932e1]",api:ds},{id:2,name:"抖音",icon:"icon-douyin1",active:"text-[#111111]",api:us},{id:3,name:"微博",icon:"icon-weibo",active:"text-[#e71f19]",api:ms},{id:4,name:"知乎",icon:"icon-zhihu",active:"text-[#0461cf]",api:hs},{id:5,name:"今日头条",icon:"icon-hotfill",active:"text-[#f04142]",api:gs},{id:6,name:"哔哩哔哩",icon:"icon-icon_bilibili",active:"text-[#00aeec]",api:As}],m=E("bg-slate-200/[.5] hover:bg-slate-200","bg-gray-700/[.5] hover:bg-gray-700");c.useEffect(()=>{V("instant"),d()},[t]);const d=async()=>{try{r(!0),o([]);const{data:h}=await l[t].api(),x=h.some(({image:u})=>u),y=h.map((u,A)=>({id:u.id,title:u.name,description:u.description,url:u.url,img:x?u.image||Ds:"",formatTime:u.updatetime,viewCount:u.hot,type:"hot",rank:A+1}));o(y)}finally{r(!1)}};return i(f,{children:[e(Y,{}),e(G,{children:e("div",{className:"pb-36",children:a&&!n.length?e(je,{}):i(f,{children:[n.map(h=>e("div",{className:"py-4",children:e(X,{...h,btnText:"查看详情"})},h.rank)),e(H,{loading:!1})]})})}),e("div",{className:"fixed w-full bottom-16 z-50 flex items-center justify-center",children:e("div",{className:`${m} p-1 rounded-full transition duration-700 ease-in-out`,children:e(Gs,{data:l,actionIndex:t,change:h=>s(h)})})}),e(D,{})]})},Te=({data:t,changeCheckId:s})=>{const n=z();return e("div",{className:"mr-4 max-sm:mr-2",children:e(be,{placement:"bottom-end",children:({isOpen:o})=>i(f,{children:[e(ye,{className:"mr-1",children:o?e(it,{}):e(rt,{})}),e(Ne,{className:"min-w-[120px]",children:t.map(a=>e(Be,{onClick:()=>{if(a.disabled)return n({duration:3e3,render:()=>i(lt,{bg:"#d5dadf",w:"100%",p:4,color:"#000",className:"rounded-md py-3",children:["当前",e(K,{className:"mx-1 rounded-xl py-1 px-2",colorScheme:a.color,children:a.icon+a.name}),"已禁用"]})});s(a.id)},command:a.disabled?"🚫":"",children:i(dt,{size:"md",colorScheme:a.color,borderRadius:"full",children:[a.icon,a.name]})},a.name))})]})})})},T=new SpeechSynthesisUtterance;class Ls{constructor(s){Q(this,"text","");Q(this,"status","");this.text=s,T.rate=2}speak(){this.status="resume",T.text=this.text,speechSynthesis.speak(T),T.onend=s=>{this.status=""}}pause(){this.status="pause",speechSynthesis.pause()}resume(){this.status="resume",speechSynthesis.resume()}cancel(){speechSynthesis.cancel()}}const Ts=()=>{const[t,s]=c.useState(!1),[n,o]=c.useState(""),[a,r]=c.useState(2),l=[{id:1,icon:"😂",color:"red",name:"笑话",disabled:!0,api:xs},{id:2,icon:"🍕",color:"teal",name:"一言",api:fs},{id:3,icon:"👄",color:"cyan",name:"舔狗日记",disabled:!0,api:ps},{id:4,icon:"🌴",color:"blue",name:"文案",disabled:!0,api:ws},{id:5,icon:"🤞",color:"green",name:"土味情话",disabled:!0,api:vs}],m=new Ls(n),d=z(),[h,x]=J(),y=async()=>{try{s(!0),m.cancel();const{data:g}=await l.find(({id:p})=>p===a).api();o(g.hitokoto)}finally{s(!1)}},u=g=>{r(g)};return c.useEffect(()=>{y()},[a]),i(f,{children:[e(Y,{children:e(Te,{data:l,changeCheckId:u})}),e(G,{children:e("div",{className:"flex justify-center items-center",style:{height:"calc(100vh - 100px)"},children:i("div",{className:"text-center  w-full",children:[i("div",{className:"md:w-4/5 m-auto mb-8 text-md tracking-wider min-h-[40px] opacity-80",children:[t?e(mt,{noOfLines:2,spacing:"3",skeletonHeight:"6",className:"skeleton-center"}):e(ut,{type:"left",mode:"smooth",interval:30,className:"leading-6 md:leading-10 text-md md:text-xl",children:n}),i("div",{className:"pt-4",children:[e(M,{size:"xs",variant:"outline",className:"mr-4",icon:e(xe,{}),onClick:()=>{x(n),d({description:"已复制",status:"success"})},"aria-label":"",isDisabled:t}),e(M,{size:"xs",variant:"outline",icon:e(ht,{}),onClick:()=>{const g=m.status;({resume:()=>m.pause(),pause:()=>m.resume(),"":()=>m.speak()})[g]()},"aria-label":"",isDisabled:t})]})]}),e(M,{isLoading:t,"aria-label":"换一个",icon:e(Ce,{}),onClick:y})]})})}),e(D,{})]})},U=["📺视频","🎴图片"],Us=[{type:1,text:`支持列表: 皮皮虾, 抖音, 微视, 快手, 6间房, 哔哩哔哩, 微博, 绿洲, 度小视, 开眼, 陌陌, 皮皮搞笑, 全民k歌, 逗拍, 虎牙, 新片场, 哔哩哔哩, Acfun, 美拍, 西瓜视频, 火山小视频, 网易云Mlog, 好看视频
      <br />温馨提示: 哔哩哔哩/6间房/微博仅支持下载无法去除水印`},{type:1,text:"作者：讨口子"},{type:1,text:"版本：v2.0.3"},{type:1,text:`请先确认${P("文件类型")}【${U}】`}],Rs=({send:t})=>{const[s,n]=c.useState(""),[o,a]=c.useState(!0),[r,l]=c.useState(0),[m,d]=c.useState(!1),h=c.useMemo(()=>({0:bs,1:ys}),[]);c.useEffect(()=>{a(s.trim()==="")},[s]);const x=()=>{navigator.clipboard.readText().then(g=>{n(g)})},y=async()=>{t({type:2,text:String(s)}),d(!0);try{const g=ns(s);if(!g){t({type:1,text:`❌没有找到 ${P(s)} 中有效的链接`});return}t({type:1,text:'<div class="_loading">🕑解析中</div>'});const{code:p,data:v,msg:k}=await h[r]({url:g});p===200?(r==0&&t({type:1,state:"video",text:v||{}},!0),r==1&&t({type:1,state:"img",text:{images:(v==null?void 0:v.images)||[],video:(v==null?void 0:v.video)||[]}},!0)):t({type:1,text:`😭${k||"解析失败"}`},!0)}catch{t({type:1,text:"🔴服务器链接失败"},!0)}finally{d(!1),n("")}},u=g=>g.slice(0,2),A=g=>{n(g.target.value)},B=g=>{g!==r&&(l(g),t({type:1,text:`选择 ${P(U[g])}`}))};return e("div",{className:"absolute bottom-2 left-2 right-2 p-2 bg rounded-xl",children:i("div",{className:"flex",children:[i(gt,{children:[i(be,{placement:"top-start",children:[e(ye,{as:I,rightIcon:e(Me,{}),className:"px-2",width:70,children:u(U[r])}),e(At,{children:e(Ne,{className:"min-w-[90px]",children:U.map((g,p)=>e(Be,{value:p,onClick:()=>B(p),children:g},p))})})]}),e(ft,{isDisabled:m,placeholder:"此处粘贴链接",color:"teal",focusBorderColor:"#319795",errorBorderColor:"#319795",isInvalid:!!s,value:s,onChange:A,className:"mx-1",_placeholder:{color:"teal"}}),s!==""&&e(pt,{className:"w-12",children:e(wt,{isDisabled:m,size:"sm",onClick:()=>n("")})})]}),o?e(I,{isLoading:m,colorScheme:"teal",onClick:x,children:"粘贴"}):e(I,{isLoading:m,colorScheme:"teal",variant:"outline",border:"2px",onClick:()=>y(),children:"解析"})]})})},ce=t=>{const{isTrends:s=!1}=t,n=document,o=()=>{const a=n.webkitIsFullScreen||n.mozFullScreen||!1,r=document.getElementsByClassName("_video")[0];a?document.exitFullscreen():r.requestFullscreen()};return i("div",{className:"_video relative",children:[e(vt.Player,{width:112,height:112,poster:t.cover,fluid:!s,autoPlay:s,loop:s,muted:s,controls:!s,children:e("source",{src:t.src})}),i("div",{className:"absolute top-1 right-1",children:[e(M,{size:"xs","aria-label":"下载",className:"mr-1.5",icon:e(ke,{}),onClick:()=>Ge(t.src)}),e(M,{size:"xs","aria-label":"全屏",icon:e(Ie,{}),onClick:o})]})]})},zs=t=>e(xt,{children:e(bt,{src:t.src,children:e("img",{className:t.className,src:t.src,alt:""})})}),Hs=t=>{const s=t.data.text,n=t.data.state,o=()=>({__html:s}),r=e("div",{className:"block pr-[10%] pl-3 text-left",children:e("div",{className:`relative break-all inline-block px-3 py-2 mt-3 text-justify bg message-left rounded ${(()=>n==="img"?"w-[24rem]":n==="video"&&s.url?"w-full":"")()}`,children:n==="video"?i(f,{children:[e(ce,{src:s.url,cover:s.cover}),s.title&&e("div",{children:s.title})]}):n==="img"?i(f,{children:[((s==null?void 0:s.images)||[]).map(m=>e(zs,{src:m,className:"w-28 h-28 object-cover inline-block m-1 bg-gray-100"},m)),((s==null?void 0:s.video)||[]).map(m=>e("div",{className:"w-28 h-28 object-cover inline-block m-1 bg-gray-100 align-middle",children:e(ce,{src:m,isTrends:!0})},m))]}):e("div",{dangerouslySetInnerHTML:o()})})}),l=e("div",{className:"block pl-[10%] pr-3 text-right",children:e("div",{className:`relative break-all inline-block px-3 py-2 mt-3 text-justify message-right rounded ${E("msg-bg-light","msg-bg-dark")}`,children:s})});return t.type==="left"?r:l},Fs=()=>{const[t,s]=c.useState(Us),[n,o]=c.useState(window.localStorage.getItem(W)!=="1"),[a,r]=c.useState(!1),[l,m]=c.useState({}),d=(u="container")=>{const A=document.getElementById(u),B=A==null?void 0:A.scrollHeight;A==null||A.scrollTo({top:B,behavior:"smooth"})},h=(u,A=!1)=>{s(A?B=>[...B.slice(0,B.length-1),u]:B=>[...B,u])};c.useEffect(()=>{d()},[t]);const x=async()=>{if(!a)try{r(!0);const{data:u}=await Ns();u!=null&&u.url&&m({backgroundImage:`url(${u.url})`})}finally{r(!1)}};c.useEffect(()=>{x()},[]);const y=()=>{o(u=>u=!u),window.localStorage.setItem(W,n===!0?"1":"2")};return i("div",{className:"bg-filter overflow-hidden",style:n?l:{},children:[e(Y,{className:n?"mh":""}),i("div",{className:`m-auto rw w-full sm:w-[500px] relative z-10 bg-cover rounded-0 sm:rounded-lg ${E("bg-[#f0edf1]","bg-[#000]/[.7]")}`,style:n?l:{},children:[e("div",{className:"rw-c overflow-auto pb-24",id:"container",children:t.map((u,A)=>e(Hs,{type:u.type===1?"left":"right",data:u},A))}),e(Rs,{send:h}),i("div",{className:"hidden sm:block fixed w-10 z-50 bottom-64 right-8",children:[e(De,{className:"relative top-1"}),e(M,{"aria-label":"",onClick:y,icon:n?e(yt,{}):e(Nt,{})}),n&&e(M,{"aria-label":"",className:"mt-2",isLoading:a,onClick:x,icon:e(Ce,{})})]})]}),e(D,{hideIcon:!0,className:"hidden sm:block"})]})},Os=()=>{_.registerPlugin(Bt);const t=c.useRef(null),s=o=>{const a=t.current;return a?a.querySelector(o):null},n=()=>{_.fromTo(s(".first-paragraph"),{opacity:1,scale:3,duration:1},{opacity:0,scale:2,ease:"none",scrollTrigger:{trigger:s(".first"),start:"top top",end:"bottom center",scrub:!0}}),_.fromTo(s(".first2-paragraph"),{opacity:1,scale:3,duration:1},{opacity:0,scale:2,ease:"none",scrollTrigger:{trigger:s(".first2"),start:"top top",end:"bottom center",scrub:!0}})};return c.useEffect(()=>{n()},[]),i("div",{className:"h-[400vh] overflow-x-hidden",ref:t,children:[e("div",{className:"first h-[100vh]",children:e("p",{className:"first-paragraph h-full text-[#023047] text-center font-bold text-4xl flex justify-center items-center",children:"1"})}),e("div",{className:"first2 h-[100vh]",children:e("p",{className:"first2-paragraph h-full text-[#023047] text-center font-bold text-4xl flex justify-center items-center",children:"2"})})]})},te=({src:t,smallSrc:s=q,className:n,click:o})=>{const[a,r]=c.useState(!1);return c.useEffect(()=>{const l=new Image;l.src=t,l.onload=()=>{r(!0)}},[t]),e(f,{children:s?e("img",{src:a?t:s,className:`${n} ${!a&&"blur-[2px]"}`,alt:""}):e(f,{children:a?e("img",{onClick:o,src:t,className:n,alt:""}):e(R,{})})})},Qs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAADvAQMAAACT9jngAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAB1JREFUWMPtwYEAAAAAw6D7U19gCNUAAAAAAADSARhGAAELLd84AAAAAElFTkSuQmCC",_s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADgAQMAAACaQHDCAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAABxJREFUWMPtwTEBAAAAwiD7p7bFLmAAAAAAAEDuF6AAAcsFQgsAAAAASUVORK5CYII=",Ks="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPwAAAGZAQMAAACXK855AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACRJREFUaN7twTEBAAAAwiD7p7bETmAAAAAAAAAAAAAAAAAAtQM0uQABL/ou5wAAAABJRU5ErkJggg==",Ws="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAACGCAYAAACMn1tjAAABHElEQVR42u3SMREAAAjEsFfDiAL860IFExlioNdUT+AjETA/mB/MD+YH84P5wfxgfjA/mB/MD+YH84P5wfxgfjA/mB/MD+YH84P5wfxgfjA/mB/MD+bH/CJgfjA/mB/MD+YH84P5wfxgfjA/mB/MD+YH84P5wfxgfjA/mB/MD+YH84P5wfxgfjA/mB/Mj/nB/GB+MD+YH8wP5gfzg/nB/GB+MD+YH8wP5gfzg/nB/GB+MD+YH8wP5gfzg/nB/GB+MD+IgPnB/GB+MD+YH8wP5gfzg/nB/GB+MD+YH8wP5gfzg/nB/GB+MD+YH8wP5gfzg/nB/GB+MD/mFwHzg/nB/GB+MD+YH8wP5gfzg/nB/GB+MD+YH8wP5gfzw6kFATc/6YWI6TcAAAAASUVORK5CYII=",Ps="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAAEiCAYAAACBYvyoAAACV0lEQVR42u3TMQ0AAAgEsVfDiAL86wIRjB1q4JJL9QT4IQIYCgwFhgIMBYYCQwGGAkOBocBQgKHAUGAowFBgKDAUGAowFBgKDAUYCgwFhgJDAYYCQ4GhAEOBocBQgKHAUGAoMBRgKDAUGAowFBgKDAWGAgwFhgJDAYYCQ4GhwFCAocBQYCjAUGAoMBQYSgQwFBgKDAUYCgwFhgIMBYYCQ4GhAEOBocBQgKHAUGAoMBRgKDAUGAowFBgKDAWGAgwFhgJDAYYCQ4GhABHAUGAoMBRgKDAUGAowFBgKDAWGAgwFhgJDAYYCQ4GhwFCAocBQYCjAUGAoMBQYCjAUGAoMBRgKDAWGAgwFhgJDgaEAQ4GhwFCAocBQYCgwFGAoMBQYCjAUGAoMBYYCDAWGAkMBhgJDgaHAUCKAocBQYCjAUGAoMBRgKDAUGAoMBRgKDAWGAgwFhgJDgaEAQ4GhwFCAocBQYCgwFGAoMBQYCjAUGAoMBYgAhgJDgaEAQ4GhwFCAocBQYCgwFGAoMBQYCjAUGAoMBYYCDAWGAkMBhgJDgaHAUIChwFBgKMBQYCgwFGAoMBQYCgwFGAoMBYYCDAWGAkOBoQBDgaHAUIChwFBgKDAUYCgwFBgKMBQYCgwFhhIBDAWGAkMBhgJDgaEAQ4GhwFBgKMBQYCgwFGAoMBQYCgwFGAoMBYYCDAWGAkOBoQBDgaHAUIChwFBgKEAEMBQYCgwFGAoMBYYCDAWGAkOBoQBDgaHAUIChwFBgKDAUYCgwFBgKMBQYCgwFhgIMBYYCQwGGAkOBoYCzn9Yeah6pkm4AAAAASUVORK5CYII=",$s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAAC0CAYAAADfER1LAAABaklEQVR42u3SMQ0AAAgEsVfDiAL860IGCelQA5dL9QQ+EAEzg5nBzGBmzAxmBjODmcHMmBnMDGYGM2NmMDOYGcwMZsbMYGYwM5gZM4OZwcxgZjAzZgYzg5nBzJgZzAxmBjODmTEzmBnMDGbGzGBmMDOYGcyMmcHMYGYwM2YGM4OZwcxgZswMZgYzg5kxM5gZzAxmBjNjZjAzmBnMjJnBzGBmMDOYGTODmcHMYGbMLAJmBjODmcHMmBnMDGYGM4MImBnMDGYGM2NmMDOYGcwMZsbMYGYwM5gZM4OZwcxgZjAzZgYzg5nBzJgZzAxmBjODmTEzmBnMDGbGzGBmMDOYGcyMmcHMYGYwM2YGM4OZwcxgZswMZgYzg5kxM5gZzAxmBjNjZjAzmBnMjJnBzGBmMDOYGTODmcHMYGbMDGYGM4OZwcyYGcwMZgYzY2YRMDOYGcwMZsbMYGYwM5gZRMDMYGYwM5gZM4OZ4cQCwpHP2yvaOewAAAAASUVORK5CYII=",Zs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAAGDAQMAAABgBwzaAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACFJREFUaN7twTEBAAAAwiD7pzbGHmAAAAAAAAAAAAAAtQMo0QABH+fQOQAAAABJRU5ErkJggg==",qs=()=>{const[t,s]=c.useState([]),[n,o]=c.useState(17),[a,r]=c.useState(""),[l,m]=c.useState(!1),d=c.useRef(!1),h=c.useRef(!1),x=c.useRef(1),y=30,[u,A]=c.useState(1),B=[{id:1,name:"壁纸",api:"/topics/wallpapers/photos"},{id:2,name:"自然界",api:"/topics/nature/photos"},{id:3,name:"纹理和图案",api:"/topics/textures-patterns/photos"},{id:4,name:"建筑与室内设计",api:"/topics/architecture-interior/photos"},{id:5,name:"影片",api:"/topics/film/photos"},{id:6,name:"街头摄影",api:"/topics/street-photography/photos"},{id:7,name:"实验的",api:"/topics/experimental/photos"},{id:8,name:"动物",api:"/topics/animals/photos"},{id:9,name:"时尚与美容",api:"/topics/fashion-beauty/photos"},{id:10,name:"商业与工作",api:"/topics/business-work/photos"},{id:11,name:"食物与饮料",api:"/topics/food-drink/photos"},{id:12,name:"旅行",api:"/topics/travel/photos"},{id:13,name:"人",api:"/topics/people/photos"},{id:14,name:"灵性",api:"/topics/spirituality/photos"},{id:15,name:"运动",api:"/topics/athletics/photos"},{id:16,name:"健康",api:"/topics/health/photos"},{id:17,name:"时事",api:"/topics/current-events/photos"},{id:18,name:"艺术与文化",api:"/topics/arts-culture/photos"}],g={default:8,1400:7,1300:6,1200:5,1e3:4,800:3,600:2},p=async()=>{var w;if(!(h.current||d.current))try{h.current=!0;let C=await Bs((w=B.find(({id:S})=>S==n))==null?void 0:w.api,{page:x.current,per_page:y});if(!(C!=null&&C.length)){d.current=!0;return}C=C.map(S=>({id:String(S.id).replace(/-/g,"blog"),cover:S.urls.raw,smallSrc:S.urls.thumb})),x.current++,s([...t,...C])}catch{m(!0)}finally{h.current=!1}},v=()=>{p()},k=w=>{x.current=1,m(!1),o(w),A(1),s([])};c.useEffect(()=>{v()},[n]),c.useEffect(()=>{const w=()=>{const C=document.documentElement.scrollTop||document.body.scrollTop,S=document.documentElement.scrollHeight||document.body.scrollHeight,Re=document.documentElement.clientHeight||window.innerHeight;C+Re>=S-20&&v()};return window.addEventListener("scroll",w),()=>{window.removeEventListener("scroll",w)}},[t]);const O=()=>{m(!1),A(w=>w+1),v()},Ue={backgroundColor:E("#e9edf0","#323a4a")};return i(f,{children:[e(Y,{children:e(Te,{data:B,changeCheckId:k})}),l?e(Le,{refresh:O,step:u}):i(f,{children:[e(Ct,{breakpointCols:g,className:"flex px-1.5 ",columnClassName:"px-1.5",children:x.current==1?Array.from({length:y},(w,C)=>C).map(w=>{const C=Math.floor(Math.random()*4)+1;return e("div",{className:"my-3",children:e("img",{src:{1:Qs,2:_s,3:Ks,4:Ws,5:Ps,6:$s,7:Zs}[C],className:"w-screen rounded overflow-hidden",style:Ue})},w)}):t.map(w=>i("div",{className:"my-3 relative _flow",children:[i("div",{className:"p-2 absolute right-0 top-0",children:[e(M,{size:"xs","aria-label":"下载",className:"mr-1.5",icon:e(ke,{}),onClick:()=>Ge(w.cover,w.id)}),e(M,{size:"xs","aria-label":"预览",icon:e(Ie,{}),onClick:()=>r(w.cover)})]}),e(te,{src:w.cover,smallSrc:w.smallSrc,className:"w-screen rounded overflow-hidden"}),w.title&&e("div",{className:"text-xs text-center py-1",children:w.title})]},w.cover))}),e(H,{loading:!d.current})]}),e(D,{}),a&&e(F,{title:"",size:window.innerWidth>375?"xl":"xs",className:"p-0 max-w-[90vw] max-h-[90vh] overflow-hidden",hideFooter:!0,close:()=>r(""),children:e("img",{src:a,className:"object-cover max-h-full max-w-full"})})]})},Vs=[{name:"书栈网",img:"https://static.sitestack.cn/static/images/logo.png",url:"https://www.bookstack.cn/"},{name:"Lodash-es",img:"https://lodash.com/assets/img/lodash.svg",url:"https://www.lodashjs.com/"},{name:"tailwindcss",img:"https://avatars.githubusercontent.com/u/67109815",url:"https://www.tailwindcss.cn/"},{name:"tinypng",img:"https://tinypng.com/images/panda-chewing.png",url:"https://tinypng.com/"},{name:"文心一言",img:"https://nlp-eb.cdn.bcebos.com/logo/favicon.ico",url:"https://yiyan.baidu.com/"},{name:"phind",img:"https://www.phind.com/favicon.ico",url:"https://www.phind.com/"},{name:"unDraw",img:"https://undraw.co/favicon.ico",url:"https://undraw.co/illustrations"}],ie=""+new URL("wx-9b7108ef.jpg",import.meta.url).href,Js=()=>{const[t,s]=c.useState(""),n=z(),[o,a]=J(),r=E("bg-slate-300","bg-white"),l=d=>{a(d),n({description:"已复制",status:"success"})},m=[{title:"初衷",context:"`好记性不如烂笔头` 我始终相信这一点，所以博客只为更好更方便的找到自己的笔记"},{title:"微信",context:e("img",{className:"bg-slate-100 rounded-lg w-32",src:ie,onClick:()=>s(ie)})},{title:"邮箱",context:e("div",{className:"cursor-pointer hover:opacity-80 transition duration-200 ease-in-out",onClick:()=>l("real_taokouzi@qq.com"),children:"real_taokouzi@qq.com"})},{title:"友情链接",context:e("div",{className:"",children:Vs.map(d=>i("a",{href:d.url,className:"mr-4 mb-4 sm:mr-10 sm:mb-8 text-center inline-block yq-href",target:"_blank",title:d.name,rel:"noreferrer",children:[e("img",{className:`w-12 h-12 sm:w-16 sm:h-16 ${r} rounded-lg m-auto overflow-hidden object-cover`,src:d.img,alt:""}),e("div",{className:"w-14 sm:w-18 num-height-1 pt-2 text-sm",children:d.name})]},d.name))})}];return i(f,{children:[e(Y,{}),e(G,{children:m.map((d,h)=>i("div",{className:"my-12 sm:my-20",children:[e("div",{className:"text-2xl pb-4",children:d.title}),e("div",{className:"text-sm",children:d.context})]},h))}),e(D,{hideIcon:!0}),t&&e(F,{title:"扫一扫，联系我",size:"xs",className:"p-0 max-w-[90vw] max-h-[90vh] overflow-hidden",hideFooter:!0,close:()=>s(""),children:e(te,{src:t,className:"object-cover max-h-full max-w-full"})})]})},Xs=()=>{const[t,s]=c.useState(""),[n,o]=c.useState(""),a=["随机","胖次猫","七了个三"],r=z(),l=d=>{r({description:d,status:"error"})},m=async()=>{if(t)try{const{imgurl:d=""}=await Cs({sort:t=="随机"?void 0:t});o(d),d||l("暂无数据")}catch{o(""),l("系统错误")}};return i(f,{children:[e("div",{className:"flex w-screen h-screen justify-center items-center",children:i("div",{className:"flex items-center",children:[e("div",{className:"w-36 mx-4",children:e(Mt,{placeholder:"请选择",value:t,onChange:d=>s(d.target.value),children:a.map(d=>e("option",{value:d,children:d},d))})}),e(I,{colorScheme:"teal",onClick:m,children:"查看"})]})}),n&&e(F,{title:t,size:"xs",className:"p-0 max-w-[90vw] max-h-[90vh] overflow-hidden flex justify-center items-center min-h-[100px]",hideFooter:!0,close:()=>o(""),children:e(te,{src:n,smallSrc:"",click:m,className:"object-cover max-h-full max-w-full cursor-pointer"})})]})},en=[{path:"/",element:e(Es,{})},{path:"/mock",element:e(Ms,{})},{path:"/hot",element:e(js,{})},{path:"/random",element:e(Ts,{})},{path:"/remove-watermark",element:e(Fs,{})},{path:"/gsap",element:e(Os,{})},{path:"/image",element:e(qs,{})},{path:"/me",element:e(Js,{})},{path:"/tb",element:e(Xs,{})},{path:"*",element:e(Ys,{})}],tn=()=>e("div",{className:"w-full h-screen flex justify-center items-center",children:e(R,{size:"sm",className:"text-[#f00]"})});function sn(){return e(c.Suspense,{fallback:e(tn,{}),children:kt(en)})}const nn=()=>{const[t,s]=c.useState(!1);return c.useEffect(()=>(document.addEventListener("scroll",()=>{const n=document.documentElement.scrollTop;s(!(n<120))}),()=>document.removeEventListener("scroll",()=>{})),[]),e(f,{children:t&&e("div",{className:"fixed z-50 bottom-40 right-8",children:e(M,{"aria-label":"To up",icon:e(Me,{}),onClick:()=>V()})})})},an=""+new URL("tao-7c285a31.png",import.meta.url).href,on=""+new URL("tao1-120f8092.png",import.meta.url).href;$.setup({timeout:"500-2000"});$.mock("/getList",{code:0,message:"操作成功",success:!0,"data|5":[{"id|+1":1,formatTime:"@datetime",title:"@ctitle(4,15)",description:"@cparagraph",viewCount:0,url:"",img:"@image('200x100')"}]});$.mock("/getUserInfo",{code:0,message:"操作成功",success:!0,data:{username:"讨口子",email:"real_taokouzi@qq.com",avatar:an,avatarWithe:on}});const cn=t=>{Z.dispatch({type:Ee,value:t})};(async()=>{const t=await rs();cn(t.data)})();Se.config.initialColorMode="dark";It.createRoot(document.getElementById("root")).render(e(St,{children:e(Et,{theme:Se,children:i(Yt,{store:Z,children:[e(sn,{}),e(nn,{})]})})}));