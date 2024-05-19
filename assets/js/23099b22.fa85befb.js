"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5088],{25352:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=i(17624),s=i(4552);const n={},a="Music Lights",l={id:"project/2024/catalin.barabas/index",title:"Music Lights",description:"A LED strip that responds to music and lights up the room accordingly.",source:"@site/docs/project/2024/catalin.barabas/index.md",sourceDirName:"project/2024/catalin.barabas",slug:"/project/2024/catalin.barabas/",permalink:"/docs/project/2024/catalin.barabas/",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-MA/upb-fils-ma.github.io/edit/main/docs/project/2024/catalin.barabas/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"House Thermometer",permalink:"/docs/project/2024/carina.grec/"},next:{title:"Drawbridge/Ramp",permalink:"/docs/project/2024/costin.ciuraru/"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Log",id:"log",level:2},{value:"Week 6 - 12 May",id:"week-6---12-may",level:3},{value:"Week 12 - 19 May",id:"week-12---19-may",level:3},{value:"Week 20 - 26 May",id:"week-20---26-may",level:3},{value:"Hardware",id:"hardware",level:2},{value:"Schematics",id:"schematics",level:3},{value:"Bill of Materials",id:"bill-of-materials",level:3},{value:"Software",id:"software",level:2},{value:"Links",id:"links",level:2}];function d(e){const t={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"music-lights",children:"Music Lights"}),"\n",(0,r.jsx)(t.p,{children:"A LED strip that responds to music and lights up the room accordingly."}),"\n",(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsx)(t.mdxAdmonitionTitle,{}),(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Author"}),": BARABA\u0218 C\u0103t\u0103lin-Gabriel ",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"GitHub Project Link"}),": ",(0,r.jsx)(t.a,{href:"https://github.com/UPB-FILS-MA/project-cata-g",children:"https://github.com/UPB-FILS-MA/project-cata-g"})]})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"The intensity of the LED strip will be adjusting based on ambiental sounds. The colors of the LED strip will be changed using the remote or the mobile application developed for this project using Android Studio."}),"\n",(0,r.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,r.jsx)(t.p,{children:"This project's root stands in my love for ambient lighting from my computer setup. Also, I love listening to music while working, so I found this challenge a good addition to my environment."}),"\n",(0,r.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"LED Music Strip",src:i(96908).c+"",width:"1500",height:"700"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The light show will be on as long as the Raspberry PI will be plugged in"}),"\n",(0,r.jsx)(t.li,{children:"The IR sensor will capture the signals from the remote"}),"\n",(0,r.jsx)(t.li,{children:"The Sound sensor will capture the music in the background"}),"\n",(0,r.jsx)(t.li,{children:"The Led Strip will flicker accordingly"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"log",children:"Log"}),"\n",(0,r.jsx)(t.h3,{id:"week-6---12-may",children:"Week 6 - 12 May"}),"\n",(0,r.jsx)(t.p,{children:"This week, I spent a lot of time refining and re-evaluating ideas to identify a suitable project. I also managed to gather the necessary components for the project, but overall, there wasn't much progress made."}),"\n",(0,r.jsx)(t.h3,{id:"week-12---19-may",children:"Week 12 - 19 May"}),"\n",(0,r.jsx)(t.p,{children:"This week, I set up all the hardware on the breadboard and in KiCad. The main issue I encountered was with the sound sensor obtained last week, as it was not compatible with a Pico W. Fortunately, I got a new, more compatible sensor. During the KiCad process, I also had to modify some sensors to match what I have in the actual project."}),"\n",(0,r.jsx)(t.h3,{id:"week-20---26-may",children:"Week 20 - 26 May"}),"\n",(0,r.jsx)(t.h2,{id:"hardware",children:"Hardware"}),"\n",(0,r.jsx)(t.p,{children:"In the project, the Raspberry Pi Pico W runs the logic behind the project. The Infra-Red will capture de remote control signal and will tell the micro-controller to change the intensity and the color of the LED strip. The Sound Sensor will capture the environment sound and turn on/off the LED strip to flicker on the music played."}),"\n",(0,r.jsxs)(t.p,{children:["Here it is the actual setup:\n",(0,r.jsx)(t.img,{alt:"Side View",src:i(13840).c+"",width:"2040",height:"1536"}),"\n",(0,r.jsx)(t.img,{alt:"Top View",src:i(21852).c+"",width:"2040",height:"1536"})]}),"\n",(0,r.jsx)(t.h3,{id:"schematics",children:"Schematics"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"KiCadSchematic",src:i(22152).c+"",width:"1081",height:"769"})}),"\n",(0,r.jsx)(t.h3,{id:"bill-of-materials",children:"Bill of Materials"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Device"}),(0,r.jsx)(t.th,{children:"Usage"}),(0,r.jsx)(t.th,{children:"Price"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html",children:"Rapspberry Pi Pico W"})}),(0,r.jsx)(t.td,{children:"The microcontroller"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.optimusdigital.ro/en/raspberry-pi-boards/12394-raspberry-pi-pico-w.html",children:"35 RON"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://static.optimusdigital.ro/60928-thickbox_default/header-de-pini-alb-254-mm-40p.jpg",children:"Pin Header for Raspberry PI"})}),(0,r.jsx)(t.td,{children:"The pins for the breadboard"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/componente-electronice-headere-de-pini/463-header-de-pini-alb-254-mm-40p.html",children:"0.99 RON"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://static.optimusdigital.ro/23166-thickbox_default/bara-de-led-uri-rgb-ws2812-cu-8-led-uri.jpg",children:"LED Strip"})}),(0,r.jsx)(t.td,{children:"The LED strip"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/optoelectronice-bare-cu-leduri/753-bara-de-led-uri-rgb-ws2812-cu-8-led-uri.html",children:"6.99 RON"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://static.optimusdigital.ro/64125-large_default/modul-senzor-sunet-fara-cablu.jpg",children:"Sound Sensor"})}),(0,r.jsx)(t.td,{children:"The sound sensor"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/senzori-altele/12325-modul-senzor-sunet-fara-cablu.html",children:"2.99 RON"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://static.optimusdigital.ro/23230-thickbox_default/modul-receptor-telecomanda-infrarou.jpg",children:"IR Sensor"})}),(0,r.jsx)(t.td,{children:"The infra-red sensor"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/altele/755-modul-receptor-telecomanda-infrarou.html",children:"8.99 RON"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://static.optimusdigital.ro/52355-thickbox_default/mini-telecomanda.jpg",children:"Remote Control"})}),(0,r.jsx)(t.td,{children:"The IR Remote Control"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/altele/11-mini-telecomanda.html",children:"3.60 RON"})})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"software",children:"Software"}),"\n",(0,r.jsx)(t.table,{children:(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Library"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Usage"})]})})}),"\n",(0,r.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.youtube.com/watch?v=7YLF-N0596I",children:"Raspberry Pi Audio Reactive LED Strip (2020)"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.youtube.com/watch?v=PaSVcxk2iVk",children:"Sound Reactive WS LED With Raspberry Pi Pico"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.youtube.com/watch?v=FA9rMkuVmvQ",children:"Audio Reactive Lights with Raspberry Pi"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},96908:(e,t,i)=>{i.d(t,{c:()=>r});const r=i.p+"assets/images/LEDMusicStrip-82f6162804b838151ee0d1fc12fe76e0.png"},22152:(e,t,i)=>{i.d(t,{c:()=>r});const r=i.p+"assets/images/kicadschem-d35b88f83927dbde37f53690cd9d3214.jpg"},13840:(e,t,i)=>{i.d(t,{c:()=>r});const r=i.p+"assets/images/sideview-6f4f8e1c7b6cfc249cc496e4624bcefc.jpg"},21852:(e,t,i)=>{i.d(t,{c:()=>r});const r=i.p+"assets/images/topview-afe6399d8de429ab7252c7ab2e45dbd6.jpg"},4552:(e,t,i)=>{i.d(t,{I:()=>l,M:()=>a});var r=i(11504);const s={},n=r.createContext(s);function a(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);