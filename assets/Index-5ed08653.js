import{u as w,r as x,s as k,a as b,j as t,b as e,L as a,D as n,P as y,I as S,c as j,d as u}from"./index-f53292e5.js";import{_ as c}from"./react-apexcharts.min-a69904c9.js";import{I as o}from"./IconHorizontalDots-34732cb9.js";import{I as C,a as I,b as $,c as P,d as D,e as i}from"./IconMultipleForwardRight-a073cb64.js";import{I as A}from"./IconTag-6bb265a6.js";import{I as M}from"./IconCreditCard-c8fdbe56.js";import{I as E}from"./IconNetflix-af357102.js";import{I as z}from"./IconPlus-4816416c.js";const H=()=>{const f=w();x.useEffect(()=>{f(k("Sales Admin"))});const r=b(l=>l.themeConfig.theme==="dark"||l.themeConfig.isDarkMode),s=b(l=>l.themeConfig.rtlClass)==="rtl",[d]=x.useState(!1),h={series:[{name:"Income",data:[16800,16800,15500,17800,15500,17e3,19e3,16e3,15e3,17e3,14e3,17e3]},{name:"Expenses",data:[16500,17500,16200,17300,16e3,19500,16e3,17e3,16e3,19e3,18e3,19e3]}],options:{chart:{height:325,type:"area",fontFamily:"Nunito, sans-serif",zoom:{enabled:!1},toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{show:!0,curve:"smooth",width:2,lineCap:"square"},dropShadow:{enabled:!0,opacity:.2,blur:10,left:-7,top:22},colors:r?["#2196F3","#E7515A"]:["#1B55E2","#E7515A"],markers:{discrete:[{seriesIndex:0,dataPointIndex:6,fillColor:"#1B55E2",strokeColor:"transparent",size:7},{seriesIndex:1,dataPointIndex:5,fillColor:"#E7515A",strokeColor:"transparent",size:7}]},labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{show:!0},labels:{offsetX:s?2:0,offsetY:5,style:{fontSize:"12px",cssClass:"apexcharts-xaxis-title"}}},yaxis:{tickAmount:7,labels:{formatter:l=>l/1e3+"K",offsetX:s?-30:-10,offsetY:0,style:{fontSize:"12px",cssClass:"apexcharts-yaxis-title"}},opposite:!!s},grid:{borderColor:r?"#191E3A":"#E0E6ED",strokeDashArray:5,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}},padding:{top:0,right:0,bottom:0,left:0}},legend:{position:"top",horizontalAlign:"right",fontSize:"16px",markers:{width:10,height:10,offsetX:-2},itemMargin:{horizontal:10,vertical:5}},tooltip:{marker:{show:!0},x:{show:!1}},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:r?.19:.28,opacityTo:.05,stops:r?[100,100]:[45,100]}}}},m={series:[985,737,270],options:{chart:{type:"donut",height:460,fontFamily:"Nunito, sans-serif"},dataLabels:{enabled:!1},stroke:{show:!0,width:25,colors:r?"#0e1726":"#fff"},colors:r?["#5c1ac3","#e2a03f","#e7515a","#e2a03f"]:["#e2a03f","#5c1ac3","#e7515a"],legend:{position:"bottom",horizontalAlign:"center",fontSize:"14px",markers:{width:10,height:10,offsetX:-2},height:50,offsetY:20},plotOptions:{pie:{donut:{size:"65%",background:"transparent",labels:{show:!0,name:{show:!0,fontSize:"29px",offsetY:-10},value:{show:!0,fontSize:"26px",color:r?"#bfc9d4":void 0,offsetY:16,formatter:l=>l},total:{show:!0,label:"Total",color:"#888ea8",fontSize:"29px",formatter:l=>l.globals.seriesTotals.reduce(function(N,v){return N+v},0)}}}}},labels:["Apparel","Sports","Others"],states:{hover:{filter:{type:"none",value:.15}},active:{filter:{type:"none",value:.15}}}}},p={series:[{name:"Sales",data:[44,55,41,67,22,43,21]},{name:"Last Week",data:[13,23,20,8,13,27,33]}],options:{chart:{height:160,type:"bar",fontFamily:"Nunito, sans-serif",toolbar:{show:!1},stacked:!0,stackType:"100%"},dataLabels:{enabled:!1},stroke:{show:!0,width:1},colors:["#e2a03f","#e0e6ed"],responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],xaxis:{labels:{show:!1},categories:["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]},yaxis:{show:!1},fill:{opacity:1},plotOptions:{bar:{horizontal:!1,columnWidth:"25%"}},legend:{show:!1},grid:{show:!1,xaxis:{lines:{show:!1}},padding:{top:10,right:-20,bottom:-20,left:-20}}}},g={series:[{name:"Sales",data:[28,40,36,52,38,60,38,52,36,40]}],options:{chart:{height:290,type:"area",fontFamily:"Nunito, sans-serif",sparkline:{enabled:!0}},stroke:{curve:"smooth",width:2},colors:r?["#00ab55"]:["#00ab55"],labels:["1","2","3","4","5","6","7","8","9","10"],yaxis:{min:0,show:!1},grid:{padding:{top:125,right:0,bottom:0,left:0}},fill:{opacity:1,type:"gradient",gradient:{type:"vertical",shadeIntensity:1,inverseColors:!1,opacityFrom:.3,opacityTo:.05,stops:[100,100]}},tooltip:{x:{show:!1}}}};return t("div",{children:[t("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(a,{to:"/",className:"text-primary hover:underline",children:"Dashboard"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Sales"})})]}),t("div",{className:"pt-5",children:[t("div",{className:"grid xl:grid-cols-3 gap-6 mb-6",children:[t("div",{className:"panel h-full xl:col-span-2",children:[t("div",{className:"flex items-center justify-between dark:text-white-light mb-5",children:[e("h5",{className:"font-semibold text-lg",children:"Revenue"}),e("div",{className:"dropdown",children:e(n,{offset:[0,1],placement:`${s?"bottom-start":"bottom-end"}`,button:e(o,{className:"text-black/70 dark:text-white/70 hover:!text-primary"}),children:t("ul",{children:[e("li",{children:e("button",{type:"button",children:"Weekly"})}),e("li",{children:e("button",{type:"button",children:"Monthly"})}),e("li",{children:e("button",{type:"button",children:"Yearly"})})]})})})]}),t("p",{className:"text-lg dark:text-white-light/90",children:["Total Profit ",e("span",{className:"text-primary ml-2",children:"$10,840"})]}),e("div",{className:"relative",children:e("div",{className:"bg-white dark:bg-black rounded-lg overflow-hidden",children:d?e("div",{className:"min-h-[325px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] ",children:e("span",{className:"animate-spin border-2 border-black dark:border-white !border-l-transparent  rounded-full w-5 h-5 inline-flex"})}):e(c,{series:h.series,options:h.options,type:"area",height:325})})})]}),t("div",{className:"panel h-full",children:[e("div",{className:"flex items-center mb-5",children:e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Sales By Category"})}),e("div",{children:e("div",{className:"bg-white dark:bg-black rounded-lg overflow-hidden",children:d?e("div",{className:"min-h-[325px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] ",children:e("span",{className:"animate-spin border-2 border-black dark:border-white !border-l-transparent  rounded-full w-5 h-5 inline-flex"})}):e(c,{series:m.series,options:m.options,type:"donut",height:460})})})]})]}),t("div",{className:"grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-6",children:[t("div",{className:"panel h-full sm:col-span-2 xl:col-span-1",children:[t("div",{className:"flex items-center mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:["Daily Sales",e("span",{className:"block text-white-dark text-sm font-normal",children:"Go to columns for details."})]}),e("div",{className:"ltr:ml-auto rtl:mr-auto relative",children:e("div",{className:"w-11 h-11 text-warning bg-[#ffeccb] dark:bg-warning dark:text-[#ffeccb] grid place-content-center rounded-full",children:e(C,{})})})]}),e("div",{children:e("div",{className:"bg-white dark:bg-black rounded-lg overflow-hidden",children:d?e("div",{className:"min-h-[325px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] ",children:e("span",{className:"animate-spin border-2 border-black dark:border-white !border-l-transparent  rounded-full w-5 h-5 inline-flex"})}):e(c,{series:p.series,options:p.options,type:"bar",height:160})})})]}),t("div",{className:"panel h-full",children:[t("div",{className:"flex items-center justify-between dark:text-white-light mb-5",children:[e("h5",{className:"font-semibold text-lg",children:"Summary"}),e("div",{className:"dropdown",children:e(n,{placement:`${s?"bottom-start":"bottom-end"}`,button:e(o,{className:"w-5 h-5 text-black/70 dark:text-white/70 hover:!text-primary"}),children:t("ul",{children:[e("li",{children:e("button",{type:"button",children:"View Report"})}),e("li",{children:e("button",{type:"button",children:"Edit Report"})}),e("li",{children:e("button",{type:"button",children:"Mark as Done"})})]})})})]}),t("div",{className:"space-y-9",children:[t("div",{className:"flex items-center",children:[e("div",{className:"w-9 h-9 ltr:mr-3 rtl:ml-3",children:e("div",{className:"bg-secondary-light dark:bg-secondary text-secondary dark:text-secondary-light  rounded-full w-9 h-9 grid place-content-center",children:e(I,{})})}),t("div",{className:"flex-1",children:[t("div",{className:"flex font-semibold text-white-dark mb-2",children:[e("h6",{children:"Income"}),e("p",{className:"ltr:ml-auto rtl:mr-auto",children:"$92,600"})]}),e("div",{className:"rounded-full h-2 bg-dark-light dark:bg-[#1b2e4b] shadow",children:e("div",{className:"bg-gradient-to-r from-[#7579ff] to-[#b224ef] w-11/12 h-full rounded-full"})})]})]}),t("div",{className:"flex items-center",children:[e("div",{className:"w-9 h-9 ltr:mr-3 rtl:ml-3",children:e("div",{className:"bg-success-light dark:bg-success text-success dark:text-success-light rounded-full w-9 h-9 grid place-content-center",children:e(A,{})})}),t("div",{className:"flex-1",children:[t("div",{className:"flex font-semibold text-white-dark mb-2",children:[e("h6",{children:"Profit"}),e("p",{className:"ltr:ml-auto rtl:mr-auto",children:"$37,515"})]}),e("div",{className:"w-full rounded-full h-2 bg-dark-light dark:bg-[#1b2e4b] shadow",children:e("div",{className:"bg-gradient-to-r from-[#3cba92] to-[#0ba360] w-full h-full rounded-full",style:{width:"65%"}})})]})]}),t("div",{className:"flex items-center",children:[e("div",{className:"w-9 h-9 ltr:mr-3 rtl:ml-3",children:e("div",{className:"bg-warning-light dark:bg-warning text-warning dark:text-warning-light rounded-full w-9 h-9 grid place-content-center",children:e(M,{})})}),t("div",{className:"flex-1",children:[t("div",{className:"flex font-semibold text-white-dark mb-2",children:[e("h6",{children:"Expenses"}),e("p",{className:"ltr:ml-auto rtl:mr-auto",children:"$55,085"})]}),e("div",{className:"w-full rounded-full h-2 bg-dark-light dark:bg-[#1b2e4b] shadow",children:e("div",{className:"bg-gradient-to-r from-[#f09819] to-[#ff5858] w-full h-full rounded-full",style:{width:"80%"}})})]})]})]})]}),t("div",{className:"panel h-full p-0",children:[t("div",{className:"flex items-center justify-between w-full p-5 absolute",children:[e("div",{className:"relative",children:e("div",{className:"text-success dark:text-success-light bg-success-light dark:bg-success w-11 h-11 rounded-lg flex items-center justify-center",children:e($,{})})}),t("h5",{className:"font-semibold text-2xl ltr:text-right rtl:text-left dark:text-white-light",children:["3,192",e("span",{className:"block text-sm font-normal",children:"Total Orders"})]})]}),e("div",{className:"bg-transparent rounded-lg overflow-hidden",children:d?e("div",{className:"min-h-[325px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] ",children:e("span",{className:"animate-spin border-2 border-black dark:border-white !border-l-transparent  rounded-full w-5 h-5 inline-flex"})}):e(c,{series:g.series,options:g.options,type:"area",height:290})})]})]}),t("div",{className:"grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-6",children:[t("div",{className:"panel h-full sm:col-span-2 xl:col-span-1 pb-0",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light mb-5",children:"Recent Activities"}),e(y,{className:"relative h-[290px] ltr:pr-3 rtl:pl-3 ltr:-mr-3 rtl:-ml-3 mb-4",children:t("div",{className:"text-sm cursor-pointer",children:[t("div",{className:"flex items-center py-1.5 relative group",children:[e("div",{className:"bg-primary w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"}),e("div",{className:"flex-1",children:"Updated Server Logs"}),e("div",{className:"ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500",children:"Just Now"}),e("span",{className:"badge badge-outline-primary absolute ltr:right-0 rtl:left-0 text-xs bg-primary-light dark:bg-black opacity-0 group-hover:opacity-100",children:"Pending"})]}),t("div",{className:"flex items-center py-1.5 relative group",children:[e("div",{className:"bg-success w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"}),e("div",{className:"flex-1",children:"Send Mail to HR and Admin"}),e("div",{className:"ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500",children:"2 min ago"}),e("span",{className:"badge badge-outline-success absolute ltr:right-0 rtl:left-0 text-xs bg-success-light dark:bg-black opacity-0 group-hover:opacity-100",children:"Completed"})]}),t("div",{className:"flex items-center py-1.5 relative group",children:[e("div",{className:"bg-danger w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"}),e("div",{className:"flex-1",children:"Backup Files EOD"}),e("div",{className:"ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500",children:"14:00"}),e("span",{className:"badge badge-outline-danger absolute ltr:right-0 rtl:left-0 text-xs bg-danger-light dark:bg-black opacity-0 group-hover:opacity-100",children:"Pending"})]}),t("div",{className:"flex items-center py-1.5 relative group",children:[e("div",{className:"bg-black w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"}),e("div",{className:"flex-1",children:"Collect documents from Sara"}),e("div",{className:"ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500",children:"16:00"}),e("span",{className:"badge badge-outline-dark absolute ltr:right-0 rtl:left-0 text-xs bg-dark-light dark:bg-black opacity-0 group-hover:opacity-100",children:"Completed"})]}),t("div",{className:"flex items-center py-1.5 relative group",children:[e("div",{className:"bg-warning w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"}),e("div",{className:"flex-1",children:"Conference call with Marketing Manager."}),e("div",{className:"ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500",children:"17:00"}),e("span",{className:"badge badge-outline-warning absolute ltr:right-0 rtl:left-0 text-xs bg-warning-light dark:bg-black opacity-0 group-hover:opacity-100",children:"In progress"})]}),t("div",{className:"flex items-center py-1.5 relative group",children:[e("div",{className:"bg-info w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"}),e("div",{className:"flex-1",children:"Rebooted Server"}),e("div",{className:"ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500",children:"17:00"}),e("span",{className:"badge badge-outline-info absolute ltr:right-0 rtl:left-0 text-xs bg-info-light dark:bg-black opacity-0 group-hover:opacity-100",children:"Completed"})]}),t("div",{className:"flex items-center py-1.5 relative group",children:[e("div",{className:"bg-secondary w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"}),e("div",{className:"flex-1",children:"Send contract details to Freelancer"}),e("div",{className:"ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500",children:"18:00"}),e("span",{className:"badge badge-outline-secondary absolute ltr:right-0 rtl:left-0 text-xs bg-secondary-light dark:bg-black opacity-0 group-hover:opacity-100",children:"Pending"})]}),t("div",{className:"flex items-center py-1.5 relative group",children:[e("div",{className:"bg-primary w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"}),e("div",{className:"flex-1",children:"Updated Server Logs"}),e("div",{className:"ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500",children:"Just Now"}),e("span",{className:"badge badge-outline-primary absolute ltr:right-0 rtl:left-0 text-xs bg-primary-light dark:bg-black opacity-0 group-hover:opacity-100",children:"Pending"})]}),t("div",{className:"flex items-center py-1.5 relative group",children:[e("div",{className:"bg-success w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"}),e("div",{className:"flex-1",children:"Send Mail to HR and Admin"}),e("div",{className:"ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500",children:"2 min ago"}),e("span",{className:"badge badge-outline-success absolute ltr:right-0 rtl:left-0 text-xs bg-success-light dark:bg-black opacity-0 group-hover:opacity-100",children:"Completed"})]}),t("div",{className:"flex items-center py-1.5 relative group",children:[e("div",{className:"bg-danger w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"}),e("div",{className:"flex-1",children:"Backup Files EOD"}),e("div",{className:"ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500",children:"14:00"}),e("span",{className:"badge badge-outline-danger absolute ltr:right-0 rtl:left-0 text-xs bg-danger-light dark:bg-black opacity-0 group-hover:opacity-100",children:"Pending"})]}),t("div",{className:"flex items-center py-1.5 relative group",children:[e("div",{className:"bg-black w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"}),e("div",{className:"flex-1",children:"Collect documents from Sara"}),e("div",{className:"ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500",children:"16:00"}),e("span",{className:"badge badge-outline-dark absolute ltr:right-0 rtl:left-0 text-xs bg-dark-light dark:bg-black opacity-0 group-hover:opacity-100",children:"Completed"})]}),t("div",{className:"flex items-center py-1.5 relative group",children:[e("div",{className:"bg-warning w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"}),e("div",{className:"flex-1",children:"Conference call with Marketing Manager."}),e("div",{className:"ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500",children:"17:00"}),e("span",{className:"badge badge-outline-warning absolute ltr:right-0 rtl:left-0 text-xs bg-warning-light dark:bg-black opacity-0 group-hover:opacity-100",children:"In progress"})]}),t("div",{className:"flex items-center py-1.5 relative group",children:[e("div",{className:"bg-info w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"}),e("div",{className:"flex-1",children:"Rebooted Server"}),e("div",{className:"ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500",children:"17:00"}),e("span",{className:"badge badge-outline-info absolute ltr:right-0 rtl:left-0 text-xs bg-info-light dark:bg-black opacity-0 group-hover:opacity-100",children:"Completed"})]}),t("div",{className:"flex items-center py-1.5 relative group",children:[e("div",{className:"bg-secondary w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"}),e("div",{className:"flex-1",children:"Send contract details to Freelancer"}),e("div",{className:"ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500",children:"18:00"}),e("span",{className:"badge badge-outline-secondary absolute ltr:right-0 rtl:left-0 text-xs bg-secondary-light dark:bg-black opacity-0 group-hover:opacity-100",children:"Pending"})]})]})}),e("div",{className:"border-t border-white-light dark:border-white/10",children:t(a,{to:"/",className:" font-semibold group hover:text-primary p-4 flex items-center justify-center group",children:["View All",e(S,{className:"rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition duration-300 ltr:ml-1 rtl:mr-1"})]})})]}),t("div",{className:"panel h-full",children:[t("div",{className:"flex items-center justify-between dark:text-white-light mb-5",children:[e("h5",{className:"font-semibold text-lg",children:"Transactions"}),e("div",{className:"dropdown",children:e(n,{placement:`${s?"bottom-start":"bottom-end"}`,button:e(o,{className:"text-black/70 dark:text-white/70 hover:!text-primary"}),children:t("ul",{children:[e("li",{children:e("button",{type:"button",children:"View Report"})}),e("li",{children:e("button",{type:"button",children:"Edit Report"})}),e("li",{children:e("button",{type:"button",children:"Mark as Done"})})]})})})]}),e("div",{children:t("div",{className:"space-y-6",children:[t("div",{className:"flex",children:[e("span",{className:"shrink-0 grid place-content-center text-base w-9 h-9 rounded-md bg-success-light dark:bg-success text-success dark:text-success-light",children:"SP"}),t("div",{className:"px-3 flex-1",children:[e("div",{children:"Shaun Park"}),e("div",{className:"text-xs text-white-dark dark:text-gray-500",children:"10 Jan 1:00PM"})]}),e("span",{className:"text-success text-base px-1 ltr:ml-auto rtl:mr-auto whitespace-pre",children:"+$36.11"})]}),t("div",{className:"flex",children:[e("span",{className:"shrink-0 grid place-content-center w-9 h-9 rounded-md bg-warning-light dark:bg-warning text-warning dark:text-warning-light",children:e(P,{})}),t("div",{className:"px-3 flex-1",children:[e("div",{children:"Cash withdrawal"}),e("div",{className:"text-xs text-white-dark dark:text-gray-500",children:"04 Jan 1:00PM"})]}),e("span",{className:"text-danger text-base px-1 ltr:ml-auto rtl:mr-auto whitespace-pre",children:"-$16.44"})]}),t("div",{className:"flex",children:[e("span",{className:"shrink-0 grid place-content-center w-9 h-9 rounded-md bg-danger-light dark:bg-danger text-danger dark:text-danger-light",children:e(j,{className:"w-6 h-6"})}),t("div",{className:"px-3 flex-1",children:[e("div",{children:"Amy Diaz"}),e("div",{className:"text-xs text-white-dark dark:text-gray-500",children:"10 Jan 1:00PM"})]}),e("span",{className:"text-success text-base px-1 ltr:ml-auto rtl:mr-auto whitespace-pre",children:"+$66.44"})]}),t("div",{className:"flex",children:[e("span",{className:"shrink-0 grid place-content-center w-9 h-9 rounded-md bg-secondary-light dark:bg-secondary text-secondary dark:text-secondary-light",children:e(E,{})}),t("div",{className:"px-3 flex-1",children:[e("div",{children:"Netflix"}),e("div",{className:"text-xs text-white-dark dark:text-gray-500",children:"04 Jan 1:00PM"})]}),e("span",{className:"text-danger text-base px-1 ltr:ml-auto rtl:mr-auto whitespace-pre",children:"-$32.00"})]}),t("div",{className:"flex",children:[e("span",{className:"shrink-0 grid place-content-center text-base w-9 h-9 rounded-md bg-info-light dark:bg-info text-info dark:text-info-light",children:"DA"}),t("div",{className:"px-3 flex-1",children:[e("div",{children:"Daisy Anderson"}),e("div",{className:"text-xs text-white-dark dark:text-gray-500",children:"10 Jan 1:00PM"})]}),e("span",{className:"text-success text-base px-1 ltr:ml-auto rtl:mr-auto whitespace-pre",children:"+$10.08"})]}),t("div",{className:"flex",children:[e("span",{className:"shrink-0 grid place-content-center w-9 h-9 rounded-md bg-primary-light dark:bg-primary text-primary dark:text-primary-light",children:e(D,{})}),t("div",{className:"px-3 flex-1",children:[e("div",{children:"Electricity Bill"}),e("div",{className:"text-xs text-white-dark dark:text-gray-500",children:"04 Jan 1:00PM"})]}),e("span",{className:"text-danger text-base px-1 ltr:ml-auto rtl:mr-auto whitespace-pre",children:"-$22.00"})]})]})})]}),t("div",{className:"panel h-full p-0 border-0 overflow-hidden",children:[t("div",{className:"p-6 bg-gradient-to-r from-[#4361ee] to-[#160f6b] min-h-[190px]",children:[t("div",{className:"flex justify-between items-center mb-6",children:[t("div",{className:"bg-black/50 rounded-full p-1 ltr:pr-3 rtl:pl-3 flex items-center text-white font-semibold",children:[e("img",{className:"w-8 h-8 rounded-full border-2 border-white/50 block object-cover ltr:mr-1 rtl:ml-1",src:"/assets/images/profile-34.jpeg",alt:"avatar"}),"Alan Green"]}),e("button",{type:"button",className:"ltr:ml-auto rtl:mr-auto flex items-center justify-between w-9 h-9 bg-black text-white rounded-md hover:opacity-80",children:e(z,{className:"w-6 h-6 m-auto"})})]}),t("div",{className:"text-white flex justify-between items-center",children:[e("p",{className:"text-xl",children:"Wallet Balance"}),t("h5",{className:"ltr:ml-auto rtl:mr-auto text-2xl",children:[e("span",{className:"text-white-light",children:"$"}),"2953"]})]})]}),t("div",{className:"-mt-12 px-8 grid grid-cols-2 gap-2",children:[t("div",{className:"bg-white rounded-md shadow px-4 py-2.5 dark:bg-[#060818]",children:[t("span",{className:"flex justify-between items-center mb-4 dark:text-white",children:["Received",e(u,{className:"w-4 h-4 text-success rotate-180"})]}),e("div",{className:"btn w-full  py-1 text-base shadow-none border-0 bg-[#ebedf2] dark:bg-black text-[#515365] dark:text-[#bfc9d4]",children:"$97.99"})]}),t("div",{className:"bg-white rounded-md shadow px-4 py-2.5 dark:bg-[#060818]",children:[t("span",{className:"flex justify-between items-center mb-4 dark:text-white",children:["Spent",e(u,{className:"w-4 h-4 text-danger"})]}),e("div",{className:"btn w-full  py-1 text-base shadow-none border-0 bg-[#ebedf2] dark:bg-black text-[#515365] dark:text-[#bfc9d4]",children:"$53.00"})]})]}),t("div",{className:"p-5",children:[e("div",{className:"mb-5",children:e("span",{className:"bg-[#1b2e4b] text-white text-xs rounded-full px-4 py-1.5 before:bg-white before:w-1.5 before:h-1.5 before:rounded-full ltr:before:mr-2 rtl:before:ml-2 before:inline-block",children:"Pending"})}),t("div",{className:"mb-5 space-y-1",children:[t("div",{className:"flex items-center justify-between",children:[e("p",{className:"text-[#515365] font-semibold",children:"Netflix"}),t("p",{className:"text-base",children:[e("span",{children:"$"})," ",e("span",{className:"font-semibold",children:"13.85"})]})]}),t("div",{className:"flex items-center justify-between",children:[e("p",{className:"text-[#515365] font-semibold",children:"BlueHost VPN"}),t("p",{className:"text-base",children:[e("span",{children:"$"})," ",e("span",{className:"font-semibold ",children:"15.66"})]})]})]}),t("div",{className:"text-center px-2 flex justify-around",children:[e("button",{type:"button",className:"btn btn-secondary ltr:mr-2 rtl:ml-2",children:"View Details"}),e("button",{type:"button",className:"btn btn-success",children:"Pay Now $29.51"})]})]})]})]}),t("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-6",children:[t("div",{className:"panel h-full w-full",children:[e("div",{className:"flex items-center justify-between mb-5",children:e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Recent Orders"})}),e("div",{className:"table-responsive",children:t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{className:"ltr:rounded-l-md rtl:rounded-r-md",children:"Customer"}),e("th",{children:"Product"}),e("th",{children:"Invoice"}),e("th",{children:"Price"}),e("th",{className:"ltr:rounded-r-md rtl:rounded-l-md",children:"Status"})]})}),t("tbody",{children:[t("tr",{className:"text-white-dark hover:text-black dark:hover:text-white-light/90 group",children:[e("td",{className:"min-w-[150px] text-black dark:text-white",children:t("div",{className:"flex items-center",children:[e("img",{className:"w-8 h-8 rounded-md ltr:mr-3 rtl:ml-3 object-cover",src:"/assets/images/profile-6.jpeg",alt:"avatar"}),e("span",{className:"whitespace-nowrap",children:"Luke Ivory"})]})}),e("td",{className:"text-primary",children:"Headphone"}),e("td",{children:e(a,{to:"/apps/invoice/preview",children:"#46894"})}),e("td",{children:"$56.07"}),e("td",{children:e("span",{className:"badge bg-success shadow-md dark:group-hover:bg-transparent",children:"Paid"})})]}),t("tr",{className:"text-white-dark hover:text-black dark:hover:text-white-light/90 group",children:[e("td",{className:"text-black dark:text-white",children:t("div",{className:"flex items-center",children:[e("img",{className:"w-8 h-8 rounded-md ltr:mr-3 rtl:ml-3 object-cover",src:"/assets/images/profile-7.jpeg",alt:"avatar"}),e("span",{className:"whitespace-nowrap",children:"Andy King"})]})}),e("td",{className:"text-info",children:"Nike Sport"}),e("td",{children:e(a,{to:"/apps/invoice/preview",children:"#76894"})}),e("td",{children:"$126.04"}),e("td",{children:e("span",{className:"badge bg-secondary shadow-md dark:group-hover:bg-transparent",children:"Shipped"})})]}),t("tr",{className:"text-white-dark hover:text-black dark:hover:text-white-light/90 group",children:[e("td",{className:"text-black dark:text-white",children:t("div",{className:"flex items-center",children:[e("img",{className:"w-8 h-8 rounded-md ltr:mr-3 rtl:ml-3 object-cover",src:"/assets/images/profile-8.jpeg",alt:"avatar"}),e("span",{className:"whitespace-nowrap",children:"Laurie Fox"})]})}),e("td",{className:"text-warning",children:"Sunglasses"}),e("td",{children:e(a,{to:"/apps/invoice/preview",children:"#66894"})}),e("td",{children:"$56.07"}),e("td",{children:e("span",{className:"badge bg-success shadow-md dark:group-hover:bg-transparent",children:"Paid"})})]}),t("tr",{className:"text-white-dark hover:text-black dark:hover:text-white-light/90 group",children:[e("td",{className:"text-black dark:text-white",children:t("div",{className:"flex items-center",children:[e("img",{className:"w-8 h-8 rounded-md ltr:mr-3 rtl:ml-3 object-cover",src:"/assets/images/profile-9.jpeg",alt:"avatar"}),e("span",{className:"whitespace-nowrap",children:"Ryan Collins"})]})}),e("td",{className:"text-danger",children:"Sport"}),e("td",{children:e(a,{to:"/apps/invoice/preview",children:"#75844"})}),e("td",{children:"$110.00"}),e("td",{children:e("span",{className:"badge bg-secondary shadow-md dark:group-hover:bg-transparent",children:"Shipped"})})]}),t("tr",{className:"text-white-dark hover:text-black dark:hover:text-white-light/90 group",children:[e("td",{className:"text-black dark:text-white",children:t("div",{className:"flex items-center",children:[e("img",{className:"w-8 h-8 rounded-md ltr:mr-3 rtl:ml-3 object-cover",src:"/assets/images/profile-10.jpeg",alt:"avatar"}),e("span",{className:"whitespace-nowrap",children:"Irene Collins"})]})}),e("td",{className:"text-secondary",children:"Speakers"}),e("td",{children:e(a,{to:"/apps/invoice/preview",children:"#46894"})}),e("td",{children:"$56.07"}),e("td",{children:e("span",{className:"badge bg-success shadow-md dark:group-hover:bg-transparent",children:"Paid"})})]})]})]})})]}),t("div",{className:"panel h-full w-full",children:[e("div",{className:"flex items-center justify-between mb-5",children:e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Top Selling Product"})}),e("div",{className:"table-responsive",children:t("table",{children:[e("thead",{children:t("tr",{className:"border-b-0",children:[e("th",{className:"ltr:rounded-l-md rtl:rounded-r-md",children:"Product"}),e("th",{children:"Price"}),e("th",{children:"Discount"}),e("th",{children:"Sold"}),e("th",{className:"ltr:rounded-r-md rtl:rounded-l-md",children:"Source"})]})}),t("tbody",{children:[t("tr",{className:"text-white-dark hover:text-black dark:hover:text-white-light/90 group",children:[e("td",{className:"min-w-[150px] text-black dark:text-white",children:t("div",{className:"flex",children:[e("img",{className:"w-8 h-8 rounded-md ltr:mr-3 rtl:ml-3 object-cover",src:"/assets/images/product-headphones.jpg",alt:"avatar"}),t("p",{className:"whitespace-nowrap",children:["Headphone",e("span",{className:"text-primary block text-xs",children:"Digital"})]})]})}),e("td",{children:"$168.09"}),e("td",{children:"$60.09"}),e("td",{children:"170"}),e("td",{children:t(a,{className:"text-danger flex items-center",to:"/",children:[e(i,{className:"rtl:rotate-180 ltr:mr-1 rtl:ml-1"}),"Direct"]})})]}),t("tr",{className:"text-white-dark hover:text-black dark:hover:text-white-light/90 group",children:[e("td",{className:"text-black dark:text-white",children:t("div",{className:"flex",children:[e("img",{className:"w-8 h-8 rounded-md ltr:mr-3 rtl:ml-3 object-cover",src:"/assets/images/product-shoes.jpg",alt:"avatar"}),t("p",{className:"whitespace-nowrap",children:["Shoes ",e("span",{className:"text-warning block text-xs",children:"Faishon"})]})]})}),e("td",{children:"$126.04"}),e("td",{children:"$47.09"}),e("td",{children:"130"}),e("td",{children:t(a,{className:"text-success flex items-center",to:"/",children:[e(i,{className:"rtl:rotate-180 ltr:mr-1 rtl:ml-1"}),"Google"]})})]}),t("tr",{className:"text-white-dark hover:text-black dark:hover:text-white-light/90 group",children:[e("td",{className:"text-black dark:text-white",children:t("div",{className:"flex",children:[e("img",{className:"w-8 h-8 rounded-md ltr:mr-3 rtl:ml-3 object-cover",src:"/assets/images/product-watch.jpg",alt:"avatar"}),t("p",{className:"whitespace-nowrap",children:["Watch ",e("span",{className:"text-danger block text-xs",children:"Accessories"})]})]})}),e("td",{children:"$56.07"}),e("td",{children:"$20.00"}),e("td",{children:"66"}),e("td",{children:t(a,{className:"text-warning flex items-center",to:"/",children:[e(i,{className:"rtl:rotate-180 ltr:mr-1 rtl:ml-1"}),"Ads"]})})]}),t("tr",{className:"text-white-dark hover:text-black dark:hover:text-white-light/90 group",children:[e("td",{className:"text-black dark:text-white",children:t("div",{className:"flex",children:[e("img",{className:"w-8 h-8 rounded-md ltr:mr-3 rtl:ml-3 object-cover",src:"/assets/images/product-laptop.jpg",alt:"avatar"}),t("p",{className:"whitespace-nowrap",children:["Laptop ",e("span",{className:"text-primary block text-xs",children:"Digital"})]})]})}),e("td",{children:"$110.00"}),e("td",{children:"$33.00"}),e("td",{children:"35"}),e("td",{children:t(a,{className:"text-secondary flex items-center",to:"/",children:[e(i,{className:"rtl:rotate-180 ltr:mr-1 rtl:ml-1"}),"Email"]})})]}),t("tr",{className:"text-white-dark hover:text-black dark:hover:text-white-light/90 group",children:[e("td",{className:"text-black dark:text-white",children:t("div",{className:"flex",children:[e("img",{className:"w-8 h-8 rounded-md ltr:mr-3 rtl:ml-3 object-cover",src:"/assets/images/product-camera.jpg",alt:"avatar"}),t("p",{className:"whitespace-nowrap",children:["Camera ",e("span",{className:"text-primary block text-xs",children:"Digital"})]})]})}),e("td",{children:"$56.07"}),e("td",{children:"$26.04"}),e("td",{children:"30"}),e("td",{children:t(a,{className:"text-primary flex items-center",to:"/",children:[e(i,{className:"rtl:rotate-180 ltr:mr-1 rtl:ml-1"}),"Referral"]})})]})]})]})})]})]})]})]})};export{H as default};
