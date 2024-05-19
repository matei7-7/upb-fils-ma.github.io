"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2660],{73660:(A,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>n,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=i(17624),t=i(4552);const s={},n="Drawbridge/Ramp",a={id:"project/2024/costin.ciuraru/index",title:"Drawbridge/Ramp",description:"A mechanism that can be used in a bigger scale as a drawbridge or in a smaller scale as a ramp.",source:"@site/docs/project/2024/costin.ciuraru/index.md",sourceDirName:"project/2024/costin.ciuraru",slug:"/project/2024/costin.ciuraru/",permalink:"/docs/project/2024/costin.ciuraru/",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-MA/upb-fils-ma.github.io/edit/main/docs/project/2024/costin.ciuraru/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Music Lights",permalink:"/docs/project/2024/catalin.barabas/"},next:{title:"Blackjack Game",permalink:"/docs/project/2024/cristian.iacobescu/"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Log",id:"log",level:2},{value:"Week 6 - 12 May",id:"week-6---12-may",level:3},{value:"Week 7 - 19 May",id:"week-7---19-may",level:3},{value:"Week 20 - 26 May",id:"week-20---26-may",level:3},{value:"Hardware",id:"hardware",level:2},{value:"Schematics",id:"schematics",level:3},{value:"Bill of Materials",id:"bill-of-materials",level:3},{value:"Software",id:"software",level:2},{value:"Links",id:"links",level:2}];function o(A){const e={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.M)(),...A.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"drawbridgeramp",children:"Drawbridge/Ramp"}),"\n",(0,r.jsx)(e.p,{children:"A mechanism that can be used in a bigger scale as a drawbridge or in a smaller scale as a ramp."}),"\n",(0,r.jsxs)(e.admonition,{type:"info",children:[(0,r.jsx)(e.mdxAdmonitionTitle,{}),(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Author"}),": Ciuraru Costin Cristian ",(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.strong,{children:"GitHub Project Link"}),": ",(0,r.jsx)(e.a,{href:"https://github.com/UPB-FILS-MA/project-ciurarucostin",children:"https://github.com/UPB-FILS-MA/project-ciurarucostin"})]})]}),"\n",(0,r.jsx)(e.p,{children:":::"}),"\n",(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(e.p,{children:"Using a motor, we will have multiple presets that will make the bridge/ramp rise to a specific angle, depending on the button pressed.\nThe lcd screen will show what preset will be used, for example 1 for a 30 degrees rise, 2 for a 60 degrees rise and so on."}),"\n",(0,r.jsx)(e.h2,{id:"motivation",children:"Motivation"}),"\n",(0,r.jsx)(e.p,{children:"I chose this project for seeing a lack of this type of mechanism in my country, drawbridges could be used in the future as we have a lot of rivers in our country. The project\ncould also be used as a ramp for people in wheelchairs to be able to enter buildings without hadicapped acces, for cars to be able to get over obstacles, and the posibilites are limitless."}),"\n",(0,r.jsx)(e.p,{children:"Being able to use my passion for electronics to help people and make life easier in general is amazing. This is a great oportunity to deepen my knowledge of\nembedded systems and multiple mechanical and electrical parts, which are crucial in my studies and future career in technolo"}),"\n",(0,r.jsx)(e.h2,{id:"architecture",children:"Architecture"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Architecture photo",src:i(63276).c+"",width:"800",height:"600"})}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.strong,{children:"Raspberry Pi Pico"})," serves as the central control unit, directing and managing all other components utilized within the project."]}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.strong,{children:"LCD"})," serves as an interface for showcasing preset used to raise the ramp, it is connected to the Pico through I2C"]}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.strong,{children:"stepper-motor"})," is connected to an improvised ramp that will be raised in function of the button pressed."]}),"\n",(0,r.jsx)(e.h2,{id:"log",children:"Log"}),"\n",(0,r.jsx)(e.h3,{id:"week-6---12-may",children:"Week 6 - 12 May"}),"\n",(0,r.jsx)(e.h3,{id:"week-7---19-may",children:"Week 7 - 19 May"}),"\n",(0,r.jsx)(e.h3,{id:"week-20---26-may",children:"Week 20 - 26 May"}),"\n",(0,r.jsx)(e.h2,{id:"hardware",children:"Hardware"}),"\n",(0,r.jsx)(e.p,{children:"In my project, the Raspberry Pi Pico microcontroller serves as the central processing unit, mandated for the task. Its low power consumption ensures efficiency throughout. The LCD Screen will show what preset will be used, in function of the button pressed, the stepper motor will rise the ramp to a specified angle."}),"\n",(0,r.jsx)(e.h3,{id:"schematics",children:"Schematics"}),"\n",(0,r.jsx)(e.p,{children:"Place your KiCAD schematics here."}),"\n",(0,r.jsx)(e.h3,{id:"bill-of-materials",children:"Bill of Materials"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Device"}),(0,r.jsx)(e.th,{children:"Usage"}),(0,r.jsx)(e.th,{children:"Price"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html",children:"Rapspberry Pi Pico W"})}),(0,r.jsx)(e.td,{children:"The microcontroller"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://www.optimusdigital.ro/en/raspberry-pi-boards/12394-raspberry-pi-pico-w.html",children:"35 RON"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://www.waveshare.com/datasheet/LCD_en_PDF/LCD1602.pdf",children:"LCD Display"})}),(0,r.jsx)(e.td,{children:"LCD Display"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://www.optimusdigital.ro/ro/optoelectronice-lcd-uri/62-lcd-1602-cu-interfata-i2c-si-backlight-galben-verde.html?search_query=lcd+1602&results=17",children:"30 RON"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://pages.pbclinear.com/rs/909-BFY-775/images/Data-Sheet-Stepper-Motor-Support.pdf",children:"Stepper Motor"})}),(0,r.jsx)(e.td,{children:"The motor"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://www.optimusdigital.ro/ro/motoare-motoare-pas-cu-pas/3912-motor-pas-cu-pas-42hb34f08ab.html?search_query=stepper+motor&results=48",children:"48,99 RON"})})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"software",children:"Software"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Library"}),(0,r.jsx)(e.th,{children:"Description"}),(0,r.jsx)(e.th,{children:"Usage"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://embassy.dev/book/dev/time_keeping.html",children:"embassy-time"})}),(0,r.jsx)(e.td,{children:"Time management library"}),(0,r.jsx)(e.td,{children:"Used for time-based operations such as delays"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://docs.embassy.dev/embassy-rp/git/rp2040/index.html",children:"embassy-rp"})}),(0,r.jsx)(e.td,{children:"Peripheral access library"}),(0,r.jsx)(e.td,{children:"Used for initializing and interacting with peripherals"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://docs.embassy.dev/embassy-nrf/git/nrf52840/pwm/index.html",children:"pwm"})}),(0,r.jsx)(e.td,{children:"Pulse-width modulation"}),(0,r.jsx)(e.td,{children:"Used for controlling the buzzer's sound"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.a,{href:"https://docs.embassy.dev/embassy-executor/git/std/index.html",children:"embassy-executor"})}),(0,r.jsx)(e.td,{children:"Asynchronous executor for Rust embedded systems"}),(0,r.jsx)(e.td,{children:"Used for task scheduling and asynchronous programming"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"links",children:"Links"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://www.technoarete.org/common_abstract/pdf/IJERECE/v8/i8/Ext_18573.pdf",children:"Automation of Drawbridge Model Using Raspberry Pi"})}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://www.youtube.com/watch?v=nydRO0k2aKY",children:"How to use a stepper motor"}),"\n..."]}),"\n"]})]})}function l(A={}){const{wrapper:e}={...(0,t.M)(),...A.components};return e?(0,r.jsx)(e,{...A,children:(0,r.jsx)(o,{...A})}):o(A)}},63276:(A,e,i)=>{i.d(e,{c:()=>r});const r="data:image/png;base64,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"},4552:(A,e,i)=>{i.d(e,{I:()=>a,M:()=>n});var r=i(11504);const t={},s=r.createContext(t);function n(A){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function a(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(t):A.components||t:n(A.components),r.createElement(s.Provider,{value:e},A.children)}}}]);