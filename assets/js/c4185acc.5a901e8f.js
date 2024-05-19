"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2696],{29324:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>n,metadata:()=>d,toc:()=>c});var s=i(17624),r=i(4552);const n={},o="IntelliGlow",d={id:"project/2024/teodor.marinescu/index",title:"IntelliGlow",description:"Smart light that can be controlled just by the clapping of your hands.",source:"@site/docs/project/2024/teodor.marinescu/index.md",sourceDirName:"project/2024/teodor.marinescu",slug:"/project/2024/teodor.marinescu/",permalink:"/docs/project/2024/teodor.marinescu/",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-MA/upb-fils-ma.github.io/edit/main/docs/project/2024/teodor.marinescu/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Project Name",permalink:"/docs/project/2024/stefan.stoica2706/"},next:{title:"Tic-Tac_Toe",permalink:"/docs/project/2024/teodor_matei.francu/"}},a={},c=[{value:"Description",id:"description",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Log",id:"log",level:2},{value:"Week 6 - 12 May",id:"week-6---12-may",level:3},{value:"Week 7 - 19 May",id:"week-7---19-may",level:3},{value:"Week 20 - 26 May",id:"week-20---26-may",level:3},{value:"Hardware",id:"hardware",level:2},{value:"Schematics",id:"schematics",level:3},{value:"Bill of Materials",id:"bill-of-materials",level:3},{value:"Software",id:"software",level:2},{value:"Links",id:"links",level:2}];function h(e){const t={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"intelliglow",children:"IntelliGlow"}),"\n",(0,s.jsx)(t.p,{children:"Smart light that can be controlled just by the clapping of your hands."}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.mdxAdmonitionTitle,{}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Author"}),": Marinescu Teodor",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.strong,{children:"GitHub Project Link"}),": ",(0,s.jsx)(t.a,{href:"https://github.com/UPB-FILS-MA/project-teofils1",children:"https://github.com/UPB-FILS-MA/project-teofils1"})]})]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"IntelliGlow is a device that wants to implement physical and sound commands into everyday usage of normal lighting equipment. As the most important features the user can clap one time to change the color of the lightbulb, two times to light it or shut it, and additionally, we have a potentiometer that can change the light intensity to whatever intensity you want."}),"\n",(0,s.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,s.jsx)(t.p,{children:"In this day and age, it is a common commodity to have a more feature-rich light source, such as a desk lamp or a simple light bulb, so I want to have my go at trying to build an intelligent glow lamp that can do more than just emit light. I'm excited to explore this idea and see what kind of innovative features I can incorporate into my design."}),"\n",(0,s.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsx)(t.p,{children:"The IntelliGlow is powered by wire and it uses a sound sensor that listens for the first clap and then waits some time to find the second clap so that it can decide if there were 1 or 2 claps. The potentiometer is an element that sets the intensity of the RGB LED."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Architecture photo",src:i(34464).c+"",width:"561",height:"531"})}),"\n",(0,s.jsx)(t.p,{children:"For the diagram above here is a brief breakdown:"}),"\n",(0,s.jsx)(t.p,{children:"The Raspberry Pi Pico W is the computing component of the IntelliGlow. It processes the signal from the sound sensor and the potentiometer and decides what to do next."}),"\n",(0,s.jsx)(t.p,{children:"The sound sensor checks if there are any high frequency noises(mostly claps) around him, it sends a signal to the microcontroller, the computer starts to listen for the next clap, if there was no clapping sound in the next 2 seconds the RBB LED changes color, but in the instance that there was another clapping noise the computer turns ON/OFF the RGB."}),"\n",(0,s.jsx)(t.p,{children:"The potentiometer sends the desired intensity to the Pico board."}),"\n",(0,s.jsx)(t.h2,{id:"log",children:"Log"}),"\n",(0,s.jsx)(t.h3,{id:"week-6---12-may",children:"Week 6 - 12 May"}),"\n",(0,s.jsx)(t.p,{children:"Planed the architecture of the project and bought all the required components."}),"\n",(0,s.jsx)(t.h3,{id:"week-7---19-may",children:"Week 7 - 19 May"}),"\n",(0,s.jsx)(t.p,{children:"The schematic for the project has been successfully created using KiCad. This schematic includes all necessary components and connections for the electronic circuit which was further used as a guide for when I assembled the project on a physical breadboard."}),"\n",(0,s.jsx)(t.h3,{id:"week-20---26-may",children:"Week 20 - 26 May"}),"\n",(0,s.jsx)(t.h2,{id:"hardware",children:"Hardware"}),"\n",(0,s.jsx)(t.p,{children:"A sound sensor detects sound waves and converts them into electrical signals. It's used in noise monitoring, voice recognition, security systems, and more. For this device we need to tune the sound sensor so that it only detects high frequency sounds."}),"\n",(0,s.jsx)(t.p,{children:"A potentiometer is an adjustable electronic component used for controlling electrical signals by varying resistance. It consists of a resistive element and a movable wiper, allowing for precise adjustment of voltage or current."}),"\n",(0,s.jsx)(t.h3,{id:"schematics",children:"Schematics"}),"\n",(0,s.jsxs)(t.p,{children:["Here is the KiCAD schematic for my project.\n",(0,s.jsx)(t.img,{alt:"KiCAD schematic",src:i(78180).c+"",width:"622",height:"643"})]}),"\n",(0,s.jsxs)(t.p,{children:["I used a sound sensor that it was not supported by KiCAD so I made my own representation of it.\n",(0,s.jsx)(t.img,{alt:"Sound Sensor KiCAD schematic",src:i(65264).c+"",width:"1084",height:"465"}),"\nThis is the hardware all put together.\n",(0,s.jsx)(t.img,{alt:"First Hardware photo",src:i(68376).c+"",width:"2048",height:"1536"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Second Hardware photo",src:i(29084).c+"",width:"2048",height:"1536"})}),"\n",(0,s.jsx)(t.h3,{id:"bill-of-materials",children:"Bill of Materials"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Device"}),(0,s.jsx)(t.th,{children:"Usage"}),(0,s.jsx)(t.th,{children:"Price"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html",children:"Rapspberry Pi Pico W"})}),(0,s.jsx)(t.td,{children:"The microcontroller"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.optimusdigital.ro/en/raspberry-pi-boards/12394-raspberry-pi-pico-w.html",children:"35 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.yamanelectronics.com/wp-content/uploads/2020/06/basics-of-breadboard.jpg",children:"Breadboard"})}),(0,s.jsx)(t.td,{children:"The physical base of the project"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/prototipare-breadboard-uri/8-breadboard-830-points.html",children:"10 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://components101.com/diodes/rgb-led-pinout-configuration-circuit-datasheet",children:"RGB LED"})}),(0,s.jsx)(t.td,{children:"The light bulb"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.emag.ro/led-rgb-ws2811-5mm-ai1387/pd/D0WH0GMBM/",children:"1,15 Lei"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://components101.com/modules/lm393-sound-detection-sensor-module",children:"Sound Sensor"})}),(0,s.jsx)(t.td,{children:"Sensor"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.emag.ro/modul-detectare-sunet-cu-microfon-ky-037-compatibil-arduino-ai084-s36/pd/DWY988BBM/?cmpid=93116&gad_source=4",children:"5,67 Lei"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://components101.com/resistors/potentiometer",children:"Potentiometer"})}),(0,s.jsx)(t.td,{children:"Controller"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://ardushop.ro/ro/electronica/193-potentiometru-10k.html?gad_source=4",children:"2,57 lei"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.farnell.com/datasheets/1498852.pdf",children:"Led 5mm"})}),(0,s.jsx)(t.td,{children:"Red Led light"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/optoelectronice-led-uri/700-led-rou-de-3-mm-cu-lentile-transparente.html",children:"0.26 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://media.digikey.com/pdf/Data%20Sheets/Digi-Key%20PDFs/Jumper_Wire_Kits.pdf",children:"Male to male jumper wires"})}),(0,s.jsx)(t.td,{children:"Wires"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/fire-fire-mufate/888-set-fire-tata-tata-40p-20-cm.html?search_query=fire+tata+tata&results=80",children:"6.98 RON"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://media.digikey.com/pdf/Data%20Sheets/Digi-Key%20PDFs/Jumper_Wire_Kits.pdf",children:"Male to male jumper wires"})}),(0,s.jsx)(t.td,{children:"Wires"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/fire-fire-mufate/880-fire-colorate-mama-mama-10p-10-cm.html?search_query=fire+mama+mama&results=63",children:"6.98 RON"})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"software",children:"Software"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Library"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Usage"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://embassy.dev/book/dev/time_keeping.html",children:"embassy-time"})}),(0,s.jsx)(t.td,{children:"Time management library"}),(0,s.jsx)(t.td,{children:"Used for time-based operations such as delays"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://docs.embassy.dev/embassy-rp/git/rp2040/index.html",children:"embassy-rp"})}),(0,s.jsx)(t.td,{children:"Peripheral access library"}),(0,s.jsx)(t.td,{children:"Used for initializing and interacting with peripherals"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://docs.embassy.dev/embassy-executor/git/std/index.html",children:"embassy-executor"})}),(0,s.jsx)(t.td,{children:"Asynchronous executor for Rust embedded systems"}),(0,s.jsx)(t.td,{children:"Used for task scheduling and asynchronous programming"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://www.alexdwilson.dev/learning-in-public/gpio-on-the-raspberry-pi-pico",children:"gpio"})}),(0,s.jsx)(t.td,{children:"GPIO manipulation"}),(0,s.jsx)(t.td,{children:"Used for interacting with GPIO pins"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://docs.embassy.dev/embassy-nrf/git/nrf52840/pwm/index.html",children:"pwm"})}),(0,s.jsx)(t.td,{children:"Pulse-width modulation"}),(0,s.jsx)(t.td,{children:"Used for controlling the RGB LED light intensity"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.youtube.com/watch?v=G8uTmRrY1M8",children:"Youtube"})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://www.youtube.com/watch?v=7qFM8cTif8U",children:"Youtube"}),"\n..."]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},34464:(e,t,i)=>{i.d(t,{c:()=>s});const s=i.p+"assets/images/Diagram-c0192e2cb45820782375a4b99f0279f3.png"},68376:(e,t,i)=>{i.d(t,{c:()=>s});const s=i.p+"assets/images/Hardware1-a9513b0e1b6f3aebd6c77fc44992c5ee.jpeg"},29084:(e,t,i)=>{i.d(t,{c:()=>s});const s=i.p+"assets/images/Hardware2-509d4d7c4e9b14520107d850d349cca5.jpeg"},78180:(e,t,i)=>{i.d(t,{c:()=>s});const s=i.p+"assets/images/Kicad_sch-9bef9503e6ad88362d2b5c8dd8649cc1.png"},65264:(e,t,i)=>{i.d(t,{c:()=>s});const s=i.p+"assets/images/Sound_sensor-81c496ad7a94858fc21b2fa640f8864b.png"},4552:(e,t,i)=>{i.d(t,{I:()=>d,M:()=>o});var s=i(11504);const r={},n=s.createContext(r);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);