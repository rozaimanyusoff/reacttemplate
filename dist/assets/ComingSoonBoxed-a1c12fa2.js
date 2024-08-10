import{u as b,r as n,s as x,ae as w,j as a,b as e,L as i}from"./index-0cfac8c6.js";import{I as N}from"./IconInstagram-1545bd15.js";import{I as v,a as y}from"./IconGoogle-9c8a3067.js";import{I as j}from"./IconTwitter-bfa78d4b.js";const S=()=>{const d=b();n.useEffect(()=>{d(x("Coming Soon Boxed"))});const[t,c]=n.useState({days:null,hours:null,minutes:null,seconds:null}),[m,o]=n.useState(null),u=()=>{const r=new Date;r.setFullYear(r.getFullYear()+1);const g=r.getTime();let l={};o(setInterval(()=>{const p=new Date().getTime(),s=g-p;l.days=Math.floor(s/(1e3*60*60*24)),l.hours=Math.floor(s%(1e3*60*60*24)/(1e3*60*60)),l.minutes=Math.floor(s%(1e3*60*60)/(1e3*60)),l.seconds=Math.floor(s%(1e3*60)/1e3),c(f=>({...f,...l})),s<0&&clearInterval(m)},1e3))};n.useEffect(()=>(u(),()=>{clearInterval(m)}),[]);const h=w();return a("div",{children:[e("div",{className:"absolute inset-0",children:e("img",{src:"/assets/images/auth/bg-gradient.png",alt:"image",className:"h-full w-full object-cover"})}),a("div",{className:"relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16",children:[e("img",{src:"/assets/images/auth/coming-soon-object1.png",alt:"image",className:"absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2"}),e("img",{src:"/assets/images/auth/coming-soon-object2.png",alt:"image",className:"absolute left-24 top-0 h-40 md:left-[30%]"}),e("img",{src:"/assets/images/auth/coming-soon-object3.png",alt:"image",className:"absolute right-0 top-0 h-[300px]"}),e("img",{src:"/assets/images/auth/polygon-object.svg",alt:"image",className:"absolute bottom-0 end-[28%]"}),e("div",{className:"relative w-full max-w-[870px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-2 text-center dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]",children:e("div",{className:"rounded-md bg-white/60 p-4 backdrop-blur-lg dark:bg-black/50 sm:p-6",children:a("div",{className:"mx-auto mt-5 w-full max-w-[550px] md:mt-16",children:[a("div",{className:"mb-12",children:[e("h1",{className:"text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl",children:"Coming Soon"}),e("p",{className:"text-base font-bold leading-normal text-white-dark",children:"We will be here in a shortwhile....."})]}),a("div",{className:"mb-16 flex items-center justify-center gap-2 text-xl font-bold leading-none text-primary sm:text-2xl md:mb-24 md:gap-4 md:text-[50px]",children:[a("div",{className:"relative inline-flex h-12 w-14 items-center justify-center rounded-md bg-primary-light p-2 sm:h-16 sm:w-16 md:h-24 md:min-w-[120px]",children:[a("div",{className:"absolute inset-1 flex flex-col gap-1",children:[e("span",{className:"h-full w-full rounded-md bg-primary/[12%]"}),e("span",{className:"h-full w-full rounded-md bg-white"})]}),e("span",{className:"relative",children:t.days})]}),e("span",{children:":"}),a("div",{className:"relative inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary-light p-2 sm:h-16 sm:w-16 md:h-24 md:min-w-[96px]",children:[a("div",{className:"absolute inset-1 flex flex-col gap-1",children:[e("span",{className:"h-full w-full rounded-md bg-primary/[12%]"}),e("span",{className:"h-full w-full rounded-md bg-white"})]}),e("span",{className:"relative",children:t.hours})]}),e("span",{children:":"}),a("div",{className:"relative inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary-light p-2 sm:h-16 sm:w-16 md:h-24 md:min-w-[96px]",children:[a("div",{className:"absolute inset-1 flex flex-col gap-1",children:[e("span",{className:"h-full w-full rounded-md bg-primary/[12%]"}),e("span",{className:"h-full w-full rounded-md bg-white"})]}),e("span",{className:"relative",children:t.minutes})]}),e("span",{children:":"}),a("div",{className:"relative inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary-light p-2 sm:h-16 sm:w-16 md:h-24 md:min-w-[96px]",children:[a("div",{className:"absolute inset-1 flex flex-col gap-1",children:[e("span",{className:"h-full w-full rounded-md bg-primary/[12%]"}),e("span",{className:"h-full w-full rounded-md bg-white"})]}),e("span",{className:"relative",children:t.seconds})]})]}),a("div",{className:"mb-20 md:mb-32",children:[e("h2",{className:"text-lg font-bold uppercase dark:text-white sm:text-xl",children:"Subscribe to get notified!"}),a("div",{className:"relative mb-10 mt-8",children:[e("input",{type:"email",placeholder:"mail@gmail.com",className:"form-input mb-5 py-3.5 placeholder:text-base placeholder:text-white-dark sm:mb-0 sm:pe-32"}),e("button",{type:"button",className:"btn btn-gradient end-1.5 top-1/2 inline-flex border-0 px-4 py-1.5 text-base shadow-none sm:absolute sm:-translate-y-1/2",onClick:()=>h("/"),children:"Subscribe"})]}),a("ul",{className:"flex justify-center gap-3.5 text-white",children:[e("li",{children:e(i,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e(N,{})})}),e("li",{children:e(i,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e(v,{})})}),e("li",{children:e(i,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e(j,{fill:!0})})}),e("li",{children:e(i,{to:"#",className:"inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110",style:{background:"linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)"},children:e(y,{})})})]})]}),a("p",{className:"dark:text-white",children:["© ",new Date().getFullYear(),". VRISTO All Rights Reserved."]})]})})})]})]})};export{S as default};
