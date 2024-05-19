"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4820],{36604:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var r=i(17624),s=i(4552);const n={},a="PicoW Garden Monitor",o={id:"project/2024/hadasa.jercau/index",title:"PicoW Garden Monitor",description:"A Raspberry Pi Pico project for monitoring and optimizing plant growth conditions.",source:"@site/docs/project/2024/hadasa.jercau/index.md",sourceDirName:"project/2024/hadasa.jercau",slug:"/project/2024/hadasa.jercau/",permalink:"/docs/project/2024/hadasa.jercau/",draft:!1,unlisted:!1,editUrl:"https://github.com/UPB-FILS-MA/upb-fils-ma.github.io/edit/main/docs/project/2024/hadasa.jercau/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Smart lamp",permalink:"/docs/project/2024/george.radu2504/"},next:{title:"Game Console",permalink:"/docs/project/2024/ioana.postelnecu/"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Log",id:"log",level:2},{value:"Week 6 - 12 May",id:"week-6---12-may",level:3},{value:"Week 7 - 19 May",id:"week-7---19-may",level:3},{value:"Week 20 - 26 May",id:"week-20---26-may",level:3},{value:"Hardware",id:"hardware",level:2},{value:"Schematics",id:"schematics",level:3},{value:"Bill of Materials",id:"bill-of-materials",level:3},{value:"Software",id:"software",level:2},{value:"Links",id:"links",level:2}];function c(e){const t={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"picow-garden-monitor",children:"PicoW Garden Monitor"}),"\n",(0,r.jsx)(t.p,{children:"A Raspberry Pi Pico project for monitoring and optimizing plant growth conditions."}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Author"}),": JERC\u0102U Hadasa-\u0218tefana ",(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.strong,{children:"GitHub Project Link"}),": ",(0,r.jsx)(t.a,{href:"https://github.com/UPB-FILS-MA/project-hadassahj",children:"https://github.com/UPB-FILS-MA/project-hadassahj"})]})}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"PicoW Garden Monitor is a project designed to monitor and optimize the growth conditions of plants in gardens using the Raspberry Pi Pico microcontroller. It collects data on soil moisture, light exposure, and temperature to assess the health of plants and provide personalized care instructions for optimal growth."}),"\n",(0,r.jsx)(t.p,{children:"The project aims to include a web application too, hosted on a local server built with Rust, which would allow users to interact with the system, select plants, view real-time sensor data, and receive customized care instructions. By envisioning a locally hosted web interface as part of its development, PicoW Garden Monitor aims to offer a comprehensive solution for plant enthusiasts to cultivate healthy and thriving gardens."}),"\n",(0,r.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,r.jsx)(t.p,{children:"The motivation behind PicoW Garden Monitor stems from a personal need to address common challenges faced in plant care. As someone who often forgets to water plants and struggles to find the optimal spot with the right amount of sunlight, there is a strong desire to find a solution that simplifies and enhances the gardening experience."}),"\n",(0,r.jsx)(t.p,{children:"By developing the PicoW Garden Monitor, the goal is to create a reliable and intuitive tool that helps overcome these challenges. With real-time monitoring of soil moisture, light exposure, and temperature, the system provides timely reminders for watering and insights into the ideal environmental conditions for plant growth. This empowers users to nurture healthy and thriving gardens, even with busy schedules or limited gardening experience."}),"\n",(0,r.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Main Components:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Sensors: Soil moisture sensor, light sensor, temperature sensor.","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"These sensors are strategically placed in the garden to capture essential environmental data."}),"\n",(0,r.jsx)(t.li,{children:"The soil moisture sensor measures the moisture level in the soil, indicating when plants need watering."}),"\n",(0,r.jsx)(t.li,{children:"The light sensor detects the intensity of sunlight, helping users identify optimal spots for different types of plants."}),"\n",(0,r.jsx)(t.li,{children:"The temperature sensor monitors the ambient temperature, ensuring plants are not exposed to extreme conditions."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Raspberry Pi Pico:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The Raspberry Pi Pico serves as the central hub of the system, responsible for interfacing with the sensors and facilitating communication with the Rust server."}),"\n",(0,r.jsx)(t.li,{children:"It collects data from the sensors and sends this information to the Rust server for analysis."}),"\n",(0,r.jsx)(t.li,{children:"Additionally, the Raspberry Pi Pico executes control logic based on the analyzed data, such as activating watering systems or adjusting light exposure."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Rust Server:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The Rust server receives sensor data from the Raspberry Pi Pico and processes it to assess the health parameters of the plants."}),"\n",(0,r.jsx)(t.li,{children:"Using algorithms and predefined thresholds, the server analyzes the data to determine if any corrective actions are needed."}),"\n",(0,r.jsx)(t.li,{children:"It generates personalized care instructions based on the analysis results, considering factors such as soil moisture, light exposure, and temperature requirements."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Web Interface:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The web interface provides users with a user-friendly dashboard to interact with the system."}),"\n",(0,r.jsx)(t.li,{children:"Users can access the dashboard from their devices connected to the local network, such as smartphones, tablets, or computers."}),"\n",(0,r.jsx)(t.li,{children:"Through the web interface, users can select specific plants, view live sensor data, and receive actionable insights and care recommendations."}),"\n",(0,r.jsx)(t.li,{children:"The interface communicates with the Rust server to retrieve and display relevant information, ensuring a seamless user experience."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Connection:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The sensors are connected directly to the Raspberry Pi Pico microcontroller, which interfaces with them to collect data."}),"\n",(0,r.jsx)(t.li,{children:"The Raspberry Pi Pico communicates with the Rust server over the local network, sending sensor data and receiving instructions."}),"\n",(0,r.jsx)(t.li,{children:"The Rust server processes the incoming data, generates care instructions, and communicates with the web interface to provide users with real-time updates and insights."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"Project Diagram",src:i(80168).c+"",width:"1155",height:"865"}),"\n",(0,r.jsx)(t.img,{alt:"Kicad Diagram",src:i(77452).c+"",width:"1228",height:"849"}),"\n",(0,r.jsx)(t.img,{alt:"ProjectStatus",src:i(69196).c+"",width:"1200",height:"1600"})]}),"\n",(0,r.jsx)(t.h2,{id:"log",children:"Log"}),"\n",(0,r.jsx)(t.h3,{id:"week-6---12-may",children:"Week 6 - 12 May"}),"\n",(0,r.jsx)(t.p,{children:"I ordered the components and connected them on the breadboard."}),"\n",(0,r.jsx)(t.h3,{id:"week-7---19-may",children:"Week 7 - 19 May"}),"\n",(0,r.jsx)(t.p,{children:"I started writing the code and testing the desired functionalities."}),"\n",(0,r.jsx)(t.h3,{id:"week-20---26-may",children:"Week 20 - 26 May"}),"\n",(0,r.jsx)(t.h2,{id:"hardware",children:"Hardware"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Raspberry Pi Pico WH: Microcontroller board used as the central hub for data acquisition and communication."}),"\n",(0,r.jsx)(t.li,{children:"BMP280 GY Barometric Pressure Sensor Module: Used to measure atmospheric pressure and temperature."}),"\n",(0,r.jsx)(t.li,{children:"TSL2561 Light Intensity Sensor Module: Used to measure light intensity and provide data on ambient light conditions."}),"\n",(0,r.jsx)(t.li,{children:"Soil Moisture Sensor Module: Used to measure soil moisture levels, providing insights into soil hydration levels for plant care."}),"\n",(0,r.jsx)(t.li,{children:"Jumper Wires: Used to establish electrical connections between components on the breadboard or between various parts of the circuit. They facilitate the prototyping and assembly process by enabling flexible and temporary connections."}),"\n",(0,r.jsx)(t.li,{children:"Laptop: Used for connecting to the Raspberry Pi Pico and for managing and analyzing collected data. Utilized for software development and testing associated with the project."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"schematics",children:"Schematics"}),"\n",(0,r.jsx)(t.p,{children:"Place your KiCAD schematics here."}),"\n",(0,r.jsx)(t.h3,{id:"bill-of-materials",children:"Bill of Materials"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Device"}),(0,r.jsx)(t.th,{children:"Usage"}),(0,r.jsx)(t.th,{children:"Price"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/placi-raspberry-pi/12395-raspberry-pi-pico-wh.html?search_query=0104110000089595&results=1",children:"Raspberry Pi Pico WH"})}),(0,r.jsx)(t.td,{children:"Microcontroller for data acquisition and communication"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/placi-raspberry-pi/12395-raspberry-pi-pico-wh.html?search_query=0104110000089595&results=1",children:"38,99 lei"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/senzori-senzori-de-presiune/1666-modul-senzor-de-presiune-barometric-bmp280.html?search_query=0104110000016300&results=1",children:"BMP280 GY Barometric Pressure Sensor Module"})}),(0,r.jsx)(t.td,{children:"Measures atmospheric pressure and temperature"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/senzori-senzori-de-presiune/1666-modul-senzor-de-presiune-barometric-bmp280.html?search_query=0104110000016300&results=1",children:"8,49 lei"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/senzori-senzori-optici/137-senzor-de-intensitate-a-luminii.html?search_query=0104110000000590&results=1",children:"TSL2561 Light Intensity Sensor Module"})}),(0,r.jsx)(t.td,{children:"Measures light intensity"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/senzori-senzori-optici/137-senzor-de-intensitate-a-luminii.html?search_query=0104110000000590&results=1",children:"22,99 lei"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["[Soil_moisture_module] (",(0,r.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/senzori-senzori-de-umiditate/73-senzor-de-umiditate-a-solului.html?search_query=0104110000001023&results=1",children:"https://www.optimusdigital.ro/ro/senzori-senzori-de-umiditate/73-senzor-de-umiditate-a-solului.html?search_query=0104110000001023&results=1"}),")"]}),(0,r.jsx)(t.td,{children:"Measures soil moisture levels"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/senzori-senzori-de-umiditate/73-senzor-de-umiditate-a-solului.html?search_query=0104110000001023&results=1",children:"3,99 lei"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["[Jumpers] (",(0,r.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/fire-fire-nemufate/899-set-de-fire-pentru-breadboard-rigide.html?search_query=0104110000008046&results=1",children:"https://www.optimusdigital.ro/ro/fire-fire-nemufate/899-set-de-fire-pentru-breadboard-rigide.html?search_query=0104110000008046&results=1"}),")"]}),(0,r.jsx)(t.td,{children:"Measures soil moisture levels"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://www.optimusdigital.ro/ro/fire-fire-nemufate/899-set-de-fire-pentru-breadboard-rigide.html?search_query=0104110000008046&results=1",children:"12,49 lei"})})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"software",children:"Software"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Library"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Usage"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://crates.io/crates/rppal",children:"rppal"})}),(0,r.jsx)(t.td,{children:"GPIO library for Raspberry Pi Pico"}),(0,r.jsx)(t.td,{children:"I'll rely on this library to access GPIO pins, SPI, I2C, PWM, and other peripherals on the Raspberry Pi Pico microcontroller. It'll help me interface with sensors like the BMP280, TSL2561, and soil moisture sensor, as well as control other components connected to the Pico."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://crates.io/crates/bmp280",children:"bmp280"})}),(0,r.jsx)(t.td,{children:"Driver for BMP280 sensor"}),(0,r.jsx)(t.td,{children:"This library will facilitate interfacing with the BMP280 sensor, which measures atmospheric pressure and temperature. With its functions for initializing the sensor, reading temperature and pressure data, and configuring sensor settings, I'll collect environmental data for monitoring plant conditions in the garden."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://crates.io/crates/tsl2561",children:"tsl2561"})}),(0,r.jsx)(t.td,{children:"Driver for TSL2561 light sensor"}),(0,r.jsx)(t.td,{children:"I'll employ this library to access the TSL2561 light sensor, which measures light intensity. Its capabilities in initializing the sensor, configuring its operating mode, and reading raw light intensity values will enable me to monitor ambient light conditions in the garden and optimize plant placement accordingly."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://crates.io/crates/embassy_net",children:"embassy_net"})}),(0,r.jsx)(t.td,{children:"Networking for embedded systems"}),(0,r.jsx)(t.td,{children:"This crate will provide networking functionality for my embedded systems, including TCP and UDP sockets, IP addressing, and network stack management."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://crates.io/crates/heapless",children:"heapless"})}),(0,r.jsx)(t.td,{children:"No-std data structures"}),(0,r.jsx)(t.td,{children:"This crate offers data structures that don't require dynamic memory allocation, which will be perfect for use in embedded systems with limited resources."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.youtube.com/watch?v=9Fx9zQJe3H4&t=493s",children:"Emilostuff - Preventing Plant Death With Technology "})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.youtube.com/watch?v=_47GMmjb1Ik",children:"TechNovelTies - Never Kill Another Plant! Flower Care Sensor & App Review"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.rust-lang.org/learn",children:"Learn Rust"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},80168:(e,t,i)=>{i.d(t,{c:()=>r});const r=i.p+"assets/images/Diagram-1bc842e588145bc18c45b46d5f13f933.jpg"},69196:(e,t,i)=>{i.d(t,{c:()=>r});const r=i.p+"assets/images/ProjectStatus-91211d6054e988f6a1829d6f39ac7650.jpeg"},77452:(e,t,i)=>{i.d(t,{c:()=>r});const r=i.p+"assets/images/projectki-21fb6ac324fe9dd6c9e1af8a7b5636cb.png"},4552:(e,t,i)=>{i.d(t,{I:()=>o,M:()=>a});var r=i(11504);const s={},n=r.createContext(s);function a(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);